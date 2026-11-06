import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-3xl px-4 py-10 text-sm text-muted sm:px-6">
      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-6">
        <a href={`mailto:${site.email}`} className="hover:text-foreground">
          Email
        </a>
        <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
          GitHub
        </a>
        <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
          LinkedIn
        </a>
        <span className="ml-auto">{site.location}</span>
      </div>
    </footer>
  );
}
