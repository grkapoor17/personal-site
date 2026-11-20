/**
 * Mexico City trip: for each of the 14 shared meals, cafés and bars, how far my girlfriend's
 * itemized share landed from half the bill, in pesos. Right (teal) = itemizing saved her money;
 * left (orange) = she paid more than half. Same validated teal/orange pair as ResultsChart.
 * Hover a row for the bill total and the two shares.
 */

type Row = {
  name: string;
  kind: string;
  total: number; // MXN, tip included
  hers: number; // MXN, her itemized share
};

const rows: Row[] = [
  { name: "Masala y Maíz", kind: "dinner", total: 2832, hers: 1197 },
  { name: "La Once Mil", kind: "dinner", total: 1315, hers: 455 },
  { name: "Expendio de Maíz", kind: "lunch", total: 1296, hers: 558 },
  { name: "Odette", kind: "café", total: 449.58, hers: 172.28 },
  { name: "Panadería Rosetta", kind: "bakery", total: 768, hers: 366 },
  { name: "Fo Ma", kind: "cocktail bar", total: 1656, hers: 816 },
  { name: "Okami Coffee", kind: "café", total: 100, hers: 49 },
  { name: "Hand Shake", kind: "cocktail bar", total: 1980, hers: 990 },
  { name: "Myka", kind: "ice cream", total: 147.5, hers: 73.75 },
  { name: "Barra 2 Limantour", kind: "dinner", total: 1338, hers: 672 },
  { name: "Pizza Félix", kind: "dinner", total: 788.09, hers: 402.11 },
  { name: "Subway", kind: "lunch", total: 678, hers: 356 },
  { name: "Okami Coffee, again", kind: "café", total: 211.2, hers: 150 },
  { name: "Hanky Panky", kind: "cocktail bar", total: 1704, hers: 918 },
];

const color = { saved: "#0d9488", more: "#ea580c" };
const SCALE = 240; // pesos at the edge of each half

const peso = (n: number) => `MX$${Math.round(Math.abs(n)).toLocaleString("en-US")}`;

export function SplitChart() {
  return (
    <figure className="mt-8 rounded-xl bg-surface p-4 ring-1 ring-line sm:p-6">
      <figcaption>
        <p className="font-semibold">What itemizing changed for her, meal by meal</p>
        <p className="mt-1 text-sm text-muted">Her itemized share compared with half the bill, in pesos, tip included.</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm" style={{ background: color.saved }} aria-hidden />
            She paid less than half
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm" style={{ background: color.more }} aria-hidden />
            She paid more than half
          </span>
        </div>
      </figcaption>
      <ul className="mt-5 space-y-2.5" role="list">
        {rows.map((row) => {
          const saved = row.total / 2 - row.hers;
          const width = `${(Math.min(Math.abs(saved), SCALE) / SCALE) * 50}%`;
          const label = Math.abs(saved) < 0.5 ? "even" : `${saved > 0 ? "−" : "+"}${peso(saved)}`;
          return (
            <li
              key={row.name}
              className="grid grid-cols-[minmax(0,8.5rem)_1fr_3.75rem] items-center gap-3 sm:grid-cols-[11rem_1fr_4.5rem]"
              title={`${row.name} (${row.kind}): bill ${peso(row.total)} · half ${peso(row.total / 2)} · her share ${peso(row.hers)}`}
            >
              <span className="truncate text-sm">{row.name}</span>
              <span className="relative h-4">
                <span className="absolute inset-y-[-3px] left-1/2 w-px bg-line" aria-hidden />
                {Math.abs(saved) >= 0.5 ? (
                  <span
                    className={
                      saved > 0
                        ? "absolute inset-y-0 left-1/2 rounded-r-[4px]"
                        : "absolute inset-y-0 right-1/2 rounded-l-[4px]"
                    }
                    style={{ width, background: saved > 0 ? color.saved : color.more }}
                  />
                ) : null}
              </span>
              <span className="text-right text-sm tabular-nums">{label}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-muted">
        Net across all 14: she paid MX$457 less than half. The top three account for MX$512 of it.
      </p>
    </figure>
  );
}
