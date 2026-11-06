import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <section className="py-12 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hi, I&apos;m Gautam. I build AI products end to end.
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m an AI engineer and founder in New York. I built and shipped{" "}
            <a href={site.links.splitnshare} className="text-accent hover:underline">
              SplitNShare
            </a>{" "}
            on my own: an AI receipt-splitting iOS app with ~1,000 downloads and a 5.0★ rating, running
            on a Claude-backed extraction pipeline with its own eval harness.
          </p>
          <p>
            By day I&apos;m a data engineer at Trajektory, building the TV-viewership and social data
            pipelines that pro sports teams use to value their sponsorships. I studied Computer Science
            and Data Science at UChicago.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Link href="/projects" className="text-sm text-accent hover:underline">
            All projects →
          </Link>
        </div>
        <div className="mt-6 grid gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
