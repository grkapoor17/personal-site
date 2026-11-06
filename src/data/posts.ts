/**
 * Writing. Posts can live elsewhere (LinkedIn, Substack, a repo README);
 * `href` points to wherever the post is published.
 */

export type Post = {
  title: string;
  summary: string;
  /** ISO date, e.g. "2026-11-20". */
  date: string;
  href: string;
};

export const posts: Post[] = [];
