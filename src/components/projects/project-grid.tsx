"use client";

import { useMemo, useState } from "react";

import {
  projectCategories,
  projects,
  type ProjectFilterCategory,
} from "@/data/projects";

import ProjectCard from "./project-card";
import ProjectFilter from "./project-filter";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectFilterCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-center sm:justify-between">
        <ProjectFilter
          categories={projectCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <p
          className="text-sm text-muted-foreground"
          aria-live="polite"
        >
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1
            ? "project"
            : "projects"}
        </p>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
          <h2 className="text-xl font-semibold">
            No projects found
          </h2>

          <p className="mt-3 text-muted-foreground">
            No projects currently match this category.
          </p>
        </div>
      )}
    </section>
  );
}