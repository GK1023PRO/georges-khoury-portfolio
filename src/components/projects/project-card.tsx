import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Code2,
  Github,
  Network,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import type {
  Project,
  ProjectCategory,
} from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

function getCategoryIcon(category: ProjectCategory) {
  switch (category) {
    case "DevOps":
      return ServerCog;

    case "Cloud":
      return Cloud;

    case "Cybersecurity":
      return ShieldCheck;

    case "Networking":
      return Network;

    case "Backend":
    case "Full Stack":
      return Code2;

    default:
      return Code2;
  }
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const PrimaryIcon = getCategoryIcon(project.categories[0]);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
      <div className="relative flex min-h-48 items-center justify-center overflow-hidden border-b border-border bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.14),transparent_65%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30 bg-background/80 text-primary shadow-xl backdrop-blur">
          <PrimaryIcon
            className="h-10 w-10"
            aria-hidden="true"
          />
        </div>

        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
            Featured
          </span>
        )}

        <span className="absolute right-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>

        <h2 className="mt-5 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
          {project.title}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
          <CheckCircle2
            className="h-4 w-4 text-primary"
            aria-hidden="true"
          />

          <span>{project.status}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-md bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Case study

            <ArrowUpRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Github
                className="h-4 w-4"
                aria-hidden="true"
              />

              Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Live demo

              <ArrowUpRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}