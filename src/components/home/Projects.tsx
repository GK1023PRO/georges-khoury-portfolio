"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const FILTERS = [
  "All",
  "DevOps",
  "Backend",
  "Full-Stack",
  "Networking",
  "Machine Learning",
  "Other",
] as const;

type ProjectFilter = (typeof FILTERS)[number];

function matchesFilter(category: string, filter: ProjectFilter) {
  if (filter === "All") return true;
  if (filter === "DevOps") return category.includes("DEVOPS");
  if (filter === "Backend") {
    return category.includes("BACKEND") || category.includes("API");
  }
  if (filter === "Full-Stack") {
    return category.includes("FULL-STACK");
  }
  if (filter === "Networking") {
    return (
      category.includes("NETWORKING") || category.includes("SECURITY")
    );
  }
  if (filter === "Machine Learning") {
    return category.includes("MACHINE LEARNING");
  }
  if (filter === "Other") {
    return [
      "DATA / SIMULATION",
      "DATABASE",
      "DESKTOP APPLICATION",
      "WEB / UI DESIGN",
    ].includes(category);
  }

  return true;
}

function normalizeExternalUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const visibleProjects = useMemo(
    () =>
      projects.filter((project) =>
        matchesFilter(project.category, filter)
      ),
    [filter]
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <Reveal>
        <p className="section-eyebrow mb-4">
          Featured projects
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">
          Real projects I&apos;ve built.
        </h2>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          19 projects spanning DevOps pipelines, cloud infrastructure,
          cybersecurity, backend APIs, and full-stack applications.
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <Tabs
          value={filter}
          onValueChange={(value) =>
            setFilter(value as ProjectFilter)
          }
          className="mt-10"
        >
          <TabsList className="h-auto flex-wrap justify-start">
            {FILTERS.map((item) => (
              <TabsTrigger key={item} value={item}>
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Reveal>

      <StaggerContainer
        key={filter}
        className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        delay={0.08}
        stagger={0.06}
      >
        {visibleProjects.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <Card className="group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative flex h-28 items-center justify-center border-b border-border bg-secondary">
                <span className="absolute left-3 top-3 font-mono text-xs text-muted-foreground">
                  #{project.index}
                </span>

                <span className="font-mono text-xs tracking-widest text-primary">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {project.title}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}

                  {project.tags.length > 4 && (
                    <Badge
                      variant="outline"
                      className="text-muted-foreground"
                    >
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="mt-5 flex gap-4 border-t border-border pt-4">
                  {project.github && (
                    <a
                      href={normalizeExternalUrl(project.github)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github aria-hidden="true" size={14} />
                      Source
                    </a>
                  )}

                {project.live ? (
  <a
    href={normalizeExternalUrl(project.live)}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
    aria-label={`Open ${project.title} live demo`}
  >
    <ExternalLink aria-hidden="true" size={14} />
    Live
  </a>
) : project.detailsSlug ? (
  <Link
    href={`/projects/${project.detailsSlug}`}
    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
    aria-label={`View details for ${project.title}`}
  >
    <ExternalLink aria-hidden="true" size={14} />
    Details
  </Link>
) : null}
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {visibleProjects.length === 0 && (
        <Reveal>
          <p className="mt-10 text-center text-muted-foreground">
            No projects are available for this category.
          </p>
        </Reveal>
      )}
    </section>
  );
}