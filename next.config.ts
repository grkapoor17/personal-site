import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // .mdx files under src/app are pages too (posts live at src/app/writing/(posts)/<slug>/page.mdx)
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    // Turbopack needs plugins by name; remark-gfm adds Markdown tables
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
