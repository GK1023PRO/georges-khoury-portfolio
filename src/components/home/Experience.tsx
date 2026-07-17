import {
  Briefcase,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";

const technologies = [
  "Next.js",
  "TypeScript",
  "Prisma ORM",
  "MySQL",
  "NextAuth",
  "Docker",
  "Cloudflare R2",
  "RESTful APIs",
  "Git",
  "CI/CD",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <Reveal>
        <p className="section-eyebrow mb-4">
          Experience
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">
          Hands-on, not just coursework.
        </h2>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-6 top-0 hidden w-px bg-border sm:block"
          />

          <div className="relative sm:pl-16">
            <div
              aria-hidden="true"
              className="absolute left-[19px] top-8 hidden h-3 w-3 rounded-full border-2 border-background bg-primary ring-4 ring-primary/15 sm:block"
            />

            <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                    <Briefcase
                      aria-hidden="true"
                      size={20}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          Full-Stack Development Intern
                        </h3>

                        <p className="mt-1 font-mono text-sm text-primary">
                          StepToMedia
                        </p>
                      </div>

                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <CalendarDays
                            aria-hidden="true"
                            size={15}
                          />
                          July 2026 &ndash; Present
                        </p>

                        <p className="flex items-center gap-2">
                          <MapPin
                            aria-hidden="true"
                            size={15}
                          />
                          Remote &mdash; Mkalles, Mount Lebanon
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
                      Contributing to the development and maintenance of a
                      production-grade Social Media Publisher SaaS using
                      Next.js, TypeScript, Prisma ORM, MySQL, Docker,
                      Cloudflare R2, and third-party social media APIs.
                      Developing scalable full-stack features, RESTful APIs,
                      authentication and authorization workflows, relational
                      database models, media-storage workflows, and Facebook,
                      Instagram, and TikTok integrations while applying Git,
                      CI/CD, cloud computing, containerization, and secure
                      software engineering practices.
                    </p>

                    <StaggerContainer
                      className="mt-6 flex flex-wrap gap-2"
                      delay={0.12}
                      stagger={0.05}
                    >
                      {technologies.map((technology) => (
                        <StaggerItem key={technology}>
                          <Badge variant="secondary">
                            {technology}
                          </Badge>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Reveal>
    </section>
  );
}