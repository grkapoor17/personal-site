import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 text-muted">Things I&apos;ve shipped, and what I&apos;m building next.</p>
      <div className="mt-8 grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
