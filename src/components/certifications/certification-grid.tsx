"use client";

import { useMemo, useState } from "react";

import CertificationCard from "@/components/certifications/certification-card";
import {
  certificationCategories,
  certifications,
  type CertificationFilterCategory,
} from "@/data/certifications";

export default function CertificationGrid() {
  const [activeCategory, setActiveCategory] =
    useState<CertificationFilterCategory>("All");

  const filteredCertifications = useMemo(() => {
    if (activeCategory === "All") {
      return certifications;
    }

    return certifications.filter(
      (certification) =>
        certification.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section className="mt-14">
      <div className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter certifications by category"
        >
          {certificationCategories.map((category) => {
            const active = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={[
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p
          className="text-sm text-muted-foreground"
          aria-live="polite"
        >
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredCertifications.length}
          </span>{" "}
          {filteredCertifications.length === 1
            ? "certification"
            : "certifications"}
        </p>
      </div>

      {filteredCertifications.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
          <h2 className="text-xl font-semibold">
            No certifications found
          </h2>

          <p className="mt-3 text-muted-foreground">
            No certifications currently match this category.
          </p>
        </div>
      )}
    </section>
  );
}