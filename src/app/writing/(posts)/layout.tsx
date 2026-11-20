import Link from "next/link";

/** Shared frame for every post page under /writing/<slug>. */
export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="py-12">
      <Link href="/writing" className="text-sm text-muted hover:text-accent">
        ← Writing
      </Link>
      <div className="mt-6">{children}</div>
    </article>
  );
}
