/**
 * SplitNShare US Apple Ads search campaign: where each period's spend went, by keyword,
 * with the campaign's cost per install on the right. The point of the chart is the second
 * row: cutting the "split receipt by item" bid to $1.50 didn't shrink the budget, it moved
 * it to "splitwise free". Teal/violet/orange validated (light #ffffff and dark #1c1917
 * surfaces) with the dataviz validator; "other" is a neutral, not a categorical slot.
 * Hover a segment for its dollars.
 */

type Period = {
  label: string;
  note: string;
  spend: { receipt: number; bill: number; splitwise: number; other: number }; // USD
  installs: number;
};

const periods: Period[] = [
  {
    label: "Jul 12 – Oct 3",
    note: "bid $2.25",
    spend: { receipt: 504.76, bill: 92.49, splitwise: 0, other: 20.3 },
    installs: 135,
  },
  {
    label: "Oct 12 – 19",
    note: "bid cut to $1.50",
    spend: { receipt: 1.5, bill: 9.9, splitwise: 69.01, other: 2.55 },
    installs: 14,
  },
  {
    label: "Oct 20 – 31",
    note: "back to $2.25",
    spend: { receipt: 100.33, bill: 0, splitwise: 2.69, other: 10.07 },
    installs: 21,
  },
  {
    label: "Nov 1 – 11",
    note: "unchanged",
    spend: { receipt: 101.34, bill: 0, splitwise: 0, other: 13.75 },
    installs: 35,
  },
];

const series = [
  { key: "receipt", name: "split receipt by item", color: "#0d9488" },
  { key: "bill", name: "bill splitter", color: "#6250d6" },
  { key: "splitwise", name: "splitwise free", color: "#ea580c" },
  { key: "other", name: "everything else", color: "#78716c" },
] as const;

const usd = (n: number) => `$${n.toFixed(2)}`;

export function AdSpendChart() {
  return (
    <figure className="mt-8 rounded-xl bg-surface p-4 ring-1 ring-line sm:p-6">
      <figcaption>
        <p className="font-semibold">Where the ad budget went</p>
        <p className="mt-1 text-sm text-muted">
          Share of the US campaign&apos;s spend by keyword, and what each install cost.
        </p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          {series.map((s) => (
            <span key={s.key} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm" style={{ background: s.color }} aria-hidden />
              {s.name}
            </span>
          ))}
        </div>
      </figcaption>
      <ul className="mt-5 space-y-4" role="list">
        {periods.map((p) => {
          const total = Object.values(p.spend).reduce((a, b) => a + b, 0);
          return (
            <li key={p.label}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span>
                  {p.label} <span className="text-muted">· {p.note}</span>
                </span>
                <span className="tabular-nums">
                  {usd(total / p.installs)} <span className="text-muted">per install</span>
                </span>
              </div>
              <div className="mt-1.5 flex h-4 gap-[2px]">
                {series.map((s) => {
                  const value = p.spend[s.key];
                  if (value <= 0) return null;
                  return (
                    <span
                      key={s.key}
                      className="h-full first:rounded-l-[4px] last:rounded-r-[4px]"
                      style={{ width: `${(value / total) * 100}%`, background: s.color, minWidth: 3 }}
                      title={`${p.label}: ${s.name} ${usd(value)} of ${usd(total)} (${Math.round((value / total) * 100)}%)`}
                    />
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-muted">
        Same campaign, same country, same App Store page throughout. Daily spend was $7 to $10 the whole time.
      </p>
    </figure>
  );
}
