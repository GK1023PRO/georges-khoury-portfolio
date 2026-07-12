export type ProjectCategory =
  | "DevOps"
  | "Cloud"
  | "Cybersecurity"
  | "Backend"
  | "Full Stack"
  | "Networking";

export type ProjectStatus = "Completed" | "In Progress";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;

  categories: ProjectCategory[];
  technologies: string[];

  featured: boolean;
  year: number;
  status: ProjectStatus;

  githubUrl?: string;
  liveUrl?: string;

  role: string;
  duration: string;

  problem: string;
  solution: string;

  features: string[];
  challenges: string[];
  lessons: string[];

  architectureSteps: string[];

  additionalLinks?: ProjectLink[];
}