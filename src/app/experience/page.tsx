import type { Metadata } from "next";

import ExperienceTimeline from "@/components/experience/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore the professional experience, internship responsibilities, technical contributions, and education of Georges Khoury.",
};

export default function ExperiencePage() {
  return (
    <main className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            Career and education
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building experience through real engineering work
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            My experience combines full-stack product development,
            infrastructure, cloud technologies, cybersecurity, networking,
            automation, and continuous technical learning.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-2xl font-bold text-primary">
              2026
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Professional internship experience
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-2xl font-bold text-primary">
              12+
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Technologies used professionally
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-2xl font-bold text-primary">
              Remote
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Current work environment
            </p>
          </div>
        </div>

        <ExperienceTimeline />
      </div>
    </main>
  );
}