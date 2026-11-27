/**
 * semantic-warehouse-mcp eval: accuracy on 47 questions, one row per model, one dot per setup.
 * A dot plot on a zoomed axis (85-100%): bars would have to start at zero and flatten an 89 vs 97 gap.
 * Colors are categorical slots 1-3 of the dataviz default palette, validated all-pairs on this site's
 * light (#ffffff) and dark (#1c1917) surfaces. The light green is under 3:1 on white, so every row also
 * prints its values. Dots that coincide (Gemini) are nudged apart vertically. Hover a dot for details.
 */

type Setup = "A" | "B" | "C";

const setups: { id: Setup; label: string }[] = [
  { id: "A", label: "SQL tools only" },
  { id: "B", label: "+ semantic layer" },
  { id: "C", label: "+ semantic layer + skill" },
];

const rows: { model: string; scores: Record<Setup, [number, number]> }[] = [
  { model: "Claude Haiku 5.5", scores: { A: [42, 47], B: [44, 47], C: [45, 47] } },
  { model: "GPT-6.1 Terra", scores: { A: [45, 47], B: [45, 47], C: [46, 47] } },
  { model: "Gemini 3.8 Flash", scores: { A: [46, 47], B: [46, 47], C: [46, 47] } },
  { model: "All three", scores: { A: [133, 141], B: [135, 141], C: [137, 141] } },
];

const MIN = 85;
const MAX = 100;
const ticks = [85, 90, 95, 100];
const pos = (pct: number) => `${((pct - MIN) / (MAX - MIN)) * 100}%`;
const pct = ([right, total]: [number, number]) => (100 * right) / total;
const offset: Record<Setup, number> = { A: -5, B: 0, C: 5 };

export function SetupChart() {
  return (
    <figure className="mt-8 rounded-xl bg-surface p-4 ring-1 ring-line [--setup-A:#2a78d6] [--setup-B:#eb6834] [--setup-C:#1baf7a] sm:p-6 dark:[--setup-A:#3987e5] dark:[--setup-B:#d95926] dark:[--setup-C:#199e70]">
      <figcaption>
        <p className="font-semibold">Questions answered correctly, out of 47</p>
        <p className="mt-1 text-sm text-muted">One run per question. The axis starts at 85%.</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          {setups.map((s) => (
            <span key={s.id} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: `var(--setup-${s.id})` }} aria-hidden />
              {s.id}: {s.label}
            </span>
          ))}
        </div>
      </figcaption>

      <div className="mt-6 space-y-5" role="list">
        {rows.map((row) => {
          const values = setups.map((s) => pct(row.scores[s.id]));
          const lo = Math.min(...values);
          const hi = Math.max(...values);
          return (
            <div key={row.model} role="listitem" className="grid grid-cols-1 gap-1 sm:grid-cols-[9.5rem_1fr_7.5rem] sm:items-center sm:gap-3">
              <span className={`text-sm ${row.model === "All three" ? "font-semibold" : ""}`}>{row.model}</span>
              <div className="relative h-6">
                {ticks.map((t) => (
                  <span key={t} className="absolute inset-y-0 w-px bg-line" style={{ left: pos(t) }} aria-hidden />
                ))}
                <span
                  className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-muted/40"
                  style={{ left: pos(lo), width: `calc(${pos(hi)} - ${pos(lo)})` }}
                  aria-hidden
                />
                {setups.map((s) => {
                  const [right, total] = row.scores[s.id];
                  const p = pct(row.scores[s.id]);
                  return (
                    <span
                      key={s.id}
                      className="absolute top-1/2 h-3 w-3 -translate-x-1/2 rounded-full ring-2 ring-[var(--color-surface)]"
                      style={{ left: pos(p), marginTop: offset[s.id] - 6, background: `var(--setup-${s.id})` }}
                      title={`${row.model}, setup ${s.id} (${s.label}): ${p.toFixed(1)}% (${right}/${total})`}
                    />
                  );
                })}
              </div>
              <span className="text-sm tabular-nums text-muted sm:text-right">
                {values.map((v) => v.toFixed(1)).join(" → ")}%
              </span>
            </div>
          );
        })}
        <div className="hidden sm:grid sm:grid-cols-[9.5rem_1fr_7.5rem] sm:gap-3" aria-hidden>
          <span />
          <div className="relative h-4 text-xs text-muted">
            {ticks.map((t) => (
              <span key={t} className="absolute -translate-x-1/2" style={{ left: pos(t) }}>
                {t}%
              </span>
            ))}
          </div>
          <span />
        </div>
      </div>
    </figure>
  );
}
