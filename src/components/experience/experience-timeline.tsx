import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Monitor,
  Trophy,
} from "lucide-react";

import {
  education,
  experiences,
} from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="mt-14 space-y-20">
      <section aria-labelledby="professional-experience-heading">
        <SectionHeading
          icon={BriefcaseBusiness}
          eyebrow="Professional journey"
          title="Work experience"
          description="Internship experience, technical responsibilities, engineering contributions, and technologies used."
          id="professional-experience-heading"
        />

        <div className="relative mt-10 space-y-8 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-border md:before:left-7">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="relative pl-14 md:pl-20"
            >
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary md:h-14 md:w-14">
                <BriefcaseBusiness
                  className="h-5 w-5 md:h-6 md:w-6"
                  aria-hidden="true"
                />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold tracking-tight">
                        {experience.role}
                      </h3>

                      <span
                        className={[
                          "rounded-full px-3 py-1 text-xs font-semibold",
                          experience.status === "Current"
                            ? "border border-primary/30 bg-primary/10 text-primary"
                            : "border border-border bg-secondary text-muted-foreground",
                        ].join(" ")}
                      >
                        {experience.status}
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-semibold text-primary">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-muted-foreground lg:items-end">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays
                        className="h-4 w-4"
                        aria-hidden="true"
                      />

                      {experience.startDate} — {experience.endDate}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin
                        className="h-4 w-4"
                        aria-hidden="true"
                      />

                      {experience.location}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <Monitor
                        className="h-4 w-4"
                        aria-hidden="true"
                      />

                      {experience.workMode}
                    </span>
                  </div>
                </div>

                <p className="mt-6 max-w-4xl leading-7 text-muted-foreground">
                  {experience.summary}
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <ExperienceList
                    title="Responsibilities"
                    icon={CheckCircle2}
                    items={experience.responsibilities}
                  />

                  <ExperienceList
                    title="Key contributions"
                    icon={Trophy}
                    items={experience.achievements}
                  />
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Technologies
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-heading">
        <SectionHeading
          icon={GraduationCap}
          eyebrow="Academic background"
          title="Education"
          description="My engineering education and academic foundation."
          id="education-heading"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-6 font-mono text-sm text-primary">
                {item.startDate} — {item.endDate}
              </p>

              <h3 className="mt-3 text-xl font-bold leading-8">
                {item.degree}
              </h3>

              <p className="mt-2 font-semibold text-muted-foreground">
                {item.institution}
              </p>

              {item.specialization && (
                <p className="mt-3 text-sm font-medium text-primary">
                  {item.specialization}
                </p>
              )}

              <p className="mt-5 leading-7 text-muted-foreground">
                {item.description}
              </p>

              <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                {item.location}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

interface SectionHeadingProps {
  icon: React.ComponentType<{
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  eyebrow: string;
  title: string;
  description: string;
  id: string;
}

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-primary">
        <Icon
          className="h-5 w-5"
          aria-hidden="true"
        />

        <p className="font-mono text-sm uppercase tracking-[0.25em]">
          {eyebrow}
        </p>
      </div>

      <h2
        id={id}
        className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

interface ExperienceListProps {
  title: string;
  icon: React.ComponentType<{
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  items: string[];
}

function ExperienceList({
  title,
  icon: Icon,
  items,
}: ExperienceListProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Icon
          className="h-5 w-5 text-primary"
          aria-hidden="true"
        />

        <h4 className="font-semibold">{title}</h4>
      </div>

      <ul className="mt-5 space-y-3">
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
    </div>
  );
}