# Personal site

My portfolio site: home, projects, and writing. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Local dev

```
npm install
npm run dev
```

## Content

Everything editable lives in `src/data/`:

- `site.ts`: name, title, contact links
- `projects.ts`: one entry per project (`featured: true` shows it on the home page)
- `posts.ts`: links to published writing

## Deploy

Hosted on Vercel; every push to `main` deploys.
