import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  building: "In progress",
  planned: "Planned",
};

const linkLabels: Record<keyof Project["links"], string> = {
  site: "Site",
  appStore: "App Store",
  repo: "Code",
  writeup: "Write-up",
};

export function ProjectCard({ project }: { project: Project }) {
  const links = (Object.keys(linkLabels) as (keyof Project["links"])[]).filter(
    (key) => project.links[key],
  );

  return (
    <article className="rounded-xl border border-line bg-surface p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            project.status === "live" ? "bg-accent-soft text-accent" : "bg-line text-muted"
          }`}
        >
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="mt-1 text-muted">{project.tagline}</p>
      {project.metric && <p className="mt-4 font-medium">{project.metric}</p>}
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-md bg-line px-2 py-0.5 font-mono text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>
      {links.length > 0 && (
        <div className="mt-5 flex gap-4 text-sm font-medium">
          {links.map((key) => (
            <a
              key={key}
              href={project.links[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {linkLabels[key]} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
