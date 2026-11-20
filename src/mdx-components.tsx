import type { MDXComponents } from "mdx/types";

/** Styles for elements in MDX posts (no typography plugin, so each element is styled here). */
const components: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl" {...props} />,
  h2: (props) => <h2 className="mt-12 text-xl font-semibold tracking-tight" {...props} />,
  h3: (props) => <h3 className="mt-8 font-semibold" {...props} />,
  p: (props) => <p className="mt-4 leading-7" {...props} />,
  a: (props) => <a className="text-accent underline underline-offset-2 hover:opacity-80" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 leading-7" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 border-accent pl-4 text-muted" {...props} />
  ),
  hr: () => <hr className="mt-12 border-line" />,
  code: (props) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.9em] ring-1 ring-line" {...props} />
  ),
  pre: (props) => (
    <pre
      className="mt-4 overflow-x-auto rounded-xl bg-surface p-4 font-mono text-sm ring-1 ring-line [&_code]:bg-transparent [&_code]:p-0 [&_code]:ring-0"
      {...props}
    />
  ),
  table: (props) => (
    <div className="mt-6 overflow-x-auto rounded-xl ring-1 ring-line">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="whitespace-nowrap border-b border-line bg-surface px-3 py-2 text-left font-semibold" {...props} />
  ),
  td: (props) => <td className="whitespace-nowrap border-b border-line px-3 py-2 tabular-nums" {...props} />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img className="mt-6 rounded-xl ring-1 ring-line" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
