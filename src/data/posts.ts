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
