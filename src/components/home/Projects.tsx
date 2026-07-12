"use client";

import { useMemo, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FILTERS = [
  "All",
  "DevOps",
  "Backend",
  "Full-Stack",
  "Networking",
  "Machine Learning",
  "Other",
];

function matchesFilter(category: string, filter: string) {
  if (filter === "All") return true;
  if (filter === "DevOps") return category.includes("DEVOPS");
  if (filter === "Backend") return category.includes("BACKEND") || category.includes("API");
  if (filter === "Full-Stack") return category.includes("FULL-STACK");
  if (filter === "Networking") return category.includes("NETWORKING") || category.includes("SECURITY");
  if (filter === "Machine Learning") return category.includes("MACHINE LEARNING");
  if (filter === "Other")
    return ["DATA / SIMULATION", "DATABASE", "DESKTOP APPLICATION", "WEB / UI DESIGN"].includes(category);
  return true;
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => projects.filter((p) => matchesFilter(p.category, filter)),
    [filter]
  );

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-eyebrow mb-4">Featured projects</p>
      <h2 className="font-display font-semibold text-4xl sm:text-5xl">Real projects I&apos;ve built.</h2>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        19 projects spanning DevOps pipelines, cloud infrastructure, cybersecurity, backend APIs, and
        full-stack apps.
      </p>

      <Tabs value={filter} onValueChange={setFilter} className="mt-10">
        <TabsList>
          {FILTERS.map((f) => (
            <TabsTrigger key={f} value={f}>
              {f}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p) => (
          <Card key={p.id} className="flex flex-col overflow-hidden">
            <div className="h-28 bg-secondary border-b border-border flex items-center justify-center relative">
              <span className="absolute top-3 left-3 font-mono text-xs text-muted-foreground">
                #{p.index}
              </span>
              <span className="font-mono text-xs tracking-widest text-primary">{p.category}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display font-semibold text-lg leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.slice(0, 4).map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
                {p.tags.length > 4 && (
                  <Badge variant="outline" className="text-muted-foreground">
                    +{p.tags.length - 4}
                  </Badge>
                )}
              </div>
              <div className="flex gap-4 mt-5 pt-4 border-t border-border">
                {p.github && (
                  <a href={`https://${p.github}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary">
                    <Github size={14} /> Source
                  </a>
                )}
                {p.live ? (
                  <a href={`https://${p.live}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary">
                    <ExternalLink size={14} /> Live
                  </a>
                ) : (
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary">
                    <ExternalLink size={14} /> Details
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}