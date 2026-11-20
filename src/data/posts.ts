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
    title: "I benchmarked 10 ways to read a receipt. My production pipeline came 9th.",
    summary:
      "Textract, Claude, GPT and Gemini on 148 labeled receipts, scored on whether every person's share of the bill comes out right. Plus three things the totals check can't catch.",
    date: "2026-11-20",
    href: "/writing/receipt-bench",
  },
];
