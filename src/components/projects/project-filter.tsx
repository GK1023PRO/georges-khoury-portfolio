import type { ProjectFilterCategory } from "@/data/projects";

interface ProjectFilterProps {
  categories: readonly ProjectFilterCategory[];
  activeCategory: ProjectFilterCategory;
  onCategoryChange: (
    category: ProjectFilterCategory,
  ) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter projects by category"
    >
      {categories.map((category) => {
        const active = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
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
  );
}