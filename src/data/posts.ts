/**
 * Writing. Posts on this site live at src/app/writing/(posts)/<slug>/page.mdx and use
 * href "/writing/<slug>"; posts published elsewhere can use a full URL.
 */

export type Post = {
  title: string;
  summary: string;
  /** ISO date, e.g. "2026-11-20". */
  date: string;
  href: string;
};

export const posts: Post[] = [
  {
    title: "I gave AI agents a semantic layer. Clean tables did most of the work.",
    summary:
      "450 eval runs across Claude, GPT and Gemini on a warehouse full of traps. Plain SQL on well-modelled tables scored 94%; a semantic layer and an Agent Skill took it to 97% and helped the cheapest model most. The eval also found two gaps in my own server.",
    date: "2026-11-27",
    href: "/writing/semantic-warehouse-mcp",
  },
  {
    title: "I cut my best keyword's bid to save money. Apple just stopped showing my ad.",
    summary:
      "An Apple Search Ads experiment on SplitNShare: lowering a bid below the going price handed the budget to my worst keyword. Putting it back took cost per install from $4.57 to about $3.30.",
    date: "2026-11-20",
    href: "/writing/apple-ads-bids",
  },
  {
    title: "My girlfriend is vegetarian. Splitting by item saved her less than I expected.",
    summary:
      "Every shared bill from a trip to Mexico City, split by item. About 3% overall, but 41% instead of 50% on the meals where I ordered meat, and why couples are the smallest case.",
    date: "2026-11-19",
    href: "/writing/vegetarian-split",
  },
  {
    title: "I benchmarked 10 ways to read a receipt. My production pipeline came 9th.",
    summary:
      "Textract, Claude, GPT and Gemini on 148 labeled receipts, scored on whether every person's share of the bill comes out right. Plus three things the totals check can't catch.",
    date: "2026-11-20",
    href: "/writing/receipt-bench",
  },
];
