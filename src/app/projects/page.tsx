import type { Metadata } from "next";

import ProjectGrid from "@/components/projects/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore DevOps, cloud, infrastructure, cybersecurity, backend, networking, and full-stack engineering projects by Georges Khoury.",
};

export default function ProjectsPage() {
  return (
    <main className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            Selected engineering work
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Projects built around real systems
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore infrastructure, monitoring, automation,
            cloud, cybersecurity, backend, networking, and
            full-stack projects. Each case study explains the
            architecture, implementation, challenges, and
            engineering decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-2xl font-bold text-primary">
              6
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Featured projects
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-2xl font-bold text-primary">
              7
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Engineering categories
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-2xl font-bold text-primary">
              20+
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Technologies demonstrated
            </p>
          </div>
        </div>

        <ProjectGrid />
      </div>
    </main>
  );
}