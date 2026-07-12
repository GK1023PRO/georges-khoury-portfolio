import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Github,
  Lightbulb,
  ShieldCheck,
  UserRound,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default function ProjectPage({
  params,
}: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 py-16 lg:px-8 lg:py-20">
      <article className="mx-auto max-w-7xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft
            className="h-4 w-4"
            aria-hidden="true"
          />

          Back to projects
        </Link>

        <header className="mt-10 max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {category}
              </span>
            ))}

            <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              {project.status}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
            {project.fullDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Github
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                View source
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <ExternalLink
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Live demo
              </a>
            )}
          </div>
        </header>

        <section
          aria-label="Project information"
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <ProjectFact
            icon={UserRound}
            label="Role"
            value={project.role}
          />

          <ProjectFact
            icon={Clock3}
            label="Duration"
            value={project.duration}
          />

          <ProjectFact
            icon={Calendar}
            label="Year"
            value={String(project.year)}
          />

          <ProjectFact
            icon={ShieldCheck}
            label="Status"
            value={project.status}
          />
        </section>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <CaseStudySection
            eyebrow="The challenge"
            title="Problem"
            content={project.problem}
          />

          <CaseStudySection
            eyebrow="The approach"
            title="Solution"
            content={project.solution}
          />
        </div>

        <section className="mt-16">
          <SectionHeading
            eyebrow="System design"
            title="Architecture workflow"
            description="A simplified view of how the main parts of the system communicate."
          />

          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {project.architectureSteps.map((step, index) => (
              <li
                key={step}
                className="relative rounded-xl border border-border bg-card p-6"
              >
                <span className="font-mono text-sm text-primary">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-3 font-semibold">
                  {step}
                </p>

                {index < project.architectureSteps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full border border-border bg-background p-1 text-muted-foreground xl:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Implementation"
            title="Technology stack"
            description="The main technologies and engineering tools used to build the project."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          <ProjectList
            icon={CheckCircle2}
            title="Key features"
            items={project.features}
          />

          <ProjectList
            icon={Wrench}
            title="Challenges"
            items={project.challenges}
          />

          <ProjectList
            icon={Lightbulb}
            title="Lessons learned"
            items={project.lessons}
          />
        </section>

        <section className="mt-20 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-12">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            Explore more
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            View other engineering projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore additional DevOps, cloud, cybersecurity,
            networking, backend, and full-stack work.
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            All projects

            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </section>
      </article>
    </main>
  );
}

interface ProjectFactProps {
  icon: React.ComponentType<{
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  label: string;
  value: string;
}

function ProjectFact({
  icon: Icon,
  label,
  value,
}: ProjectFactProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <Icon
        className="h-5 w-5 text-primary"
        aria-hidden="true"
      />

      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 font-semibold">
        {value}
      </p>
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

interface CaseStudySectionProps {
  eyebrow: string;
  title: string;
  content: string;
}

function CaseStudySection({
  eyebrow,
  title,
  content,
}: CaseStudySectionProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-7">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        {content}
      </p>
    </section>
  );
}

interface ProjectListProps {
  icon: React.ComponentType<{
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  title: string;
  items: string[];
}

function ProjectList({
  icon: Icon,
  title,
  items,
}: ProjectListProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-7">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon
            className="h-5 w-5 text-primary"
            aria-hidden="true"
          />
        </div>

        <h2 className="text-xl font-bold">
          {title}
        </h2>
      </div>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-muted-foreground"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}