import type { Metadata } from "next";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Writing",
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export default function WritingPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      <p className="mt-3 text-muted">Notes on building LLM products: evals, extraction, and agents.</p>
      {sorted.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed border-line p-6 text-muted">
          First post coming soon.
        </p>
      ) : (
        <ul className="mt-8 divide-y divide-line">
          {sorted.map((post) => (
            <li key={post.href} className="py-5">
              <a href={post.href} className="group block">
                <p className="text-sm text-muted">{dateFormat.format(new Date(post.date))}</p>
                <h2 className="mt-1 font-semibold group-hover:text-accent">{post.title}</h2>
                <p className="mt-1 text-sm text-muted">{post.summary}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
