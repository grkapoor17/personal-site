/**
 * receipt-bench results: split-correct across 148 receipts, one bar per pipeline.
 * Teal = a vision LLM reading the image directly; orange = Textract-based pipelines
 * (including production). Colors validated for CVD separation and contrast on both
 * the light and dark surfaces. Hover a row for cost and latency.
 */

type Row = {
  name: string;
  splitCorrect: number; // percent of 148 receipts
  costPerReceipt: number; // USD
  medianSeconds: number;
  kind: "llm" | "textract";
  note?: string;
};

const rows: Row[] = [
  { name: "Gemini 3.8 Flash", splitCorrect: 96.6, costPerReceipt: 0.0069, medianSeconds: 10.3, kind: "llm" },
  { name: "Claude Opus 5.5", splitCorrect: 95.9, costPerReceipt: 0.0306, medianSeconds: 6.8, kind: "llm" },
  { name: "GPT-6.2 Sol", splitCorrect: 95.9, costPerReceipt: 0.0099, medianSeconds: 7.2, kind: "llm" },
  { name: "Gemini 4 Argon", splitCorrect: 95.3, costPerReceipt: 0.0089, medianSeconds: 9.2, kind: "llm" },
  { name: "Claude Sonnet 5.5", splitCorrect: 91.9, costPerReceipt: 0.0163, medianSeconds: 5.7, kind: "llm" },
  { name: "GPT-6 Luna", splitCorrect: 91.2, costPerReceipt: 0.0007, medianSeconds: 9.3, kind: "llm" },
  { name: "Gemini 3.5 Flash-Lite", splitCorrect: 91.2, costPerReceipt: 0.0017, medianSeconds: 3.0, kind: "llm" },
  { name: "Claude Haiku 5.5", splitCorrect: 89.9, costPerReceipt: 0.001, medianSeconds: 5.6, kind: "llm" },
  {
    name: "Textract + Claude repair",
    splitCorrect: 81.1,
    costPerReceipt: 0.0201,
    medianSeconds: 3.6,
    kind: "textract",
    note: "production",
  },
  { name: "Textract only", splitCorrect: 66.9, costPerReceipt: 0.01, medianSeconds: 3.0, kind: "textract" },
];

const color = { llm: "#0d9488", textract: "#ea580c" };

export function ResultsChart() {
  return (
    <figure className="mt-8 rounded-xl bg-surface p-4 ring-1 ring-line sm:p-6">
      <figcaption>
        <p className="font-semibold">Split-correct receipts, out of 148</p>
        <p className="mt-1 text-sm text-muted">Every item priced right and the total right, so every share is right.</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm" style={{ background: color.llm }} aria-hidden />
            Vision LLM reads the image
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm" style={{ background: color.textract }} aria-hidden />
            Textract-based
          </span>
        </div>
      </figcaption>
      <ul className="mt-5 space-y-2.5" role="list">
        {rows.map((row) => (
          <li
            key={row.name}
            className="grid grid-cols-[minmax(0,9.5rem)_1fr] items-center gap-3 sm:grid-cols-[12rem_1fr]"
            title={`${row.name}: ${row.splitCorrect}% split-correct · $${row.costPerReceipt.toFixed(4)} per receipt · ${row.medianSeconds}s median`}
          >
            <span className="truncate text-sm">
              {row.name}
              {row.note ? <span className="text-muted"> ({row.note})</span> : null}
            </span>
            <span className="flex items-center gap-2">
              <span className="relative h-4 flex-1">
                <span
                  className="absolute inset-y-0 left-0 rounded-r-[4px]"
                  style={{ width: `${row.splitCorrect}%`, background: color[row.kind] }}
                />
              </span>
              <span className="w-12 text-right text-sm tabular-nums">{row.splitCorrect.toFixed(1)}%</span>
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
