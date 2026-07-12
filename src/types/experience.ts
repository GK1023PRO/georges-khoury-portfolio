export type WorkMode = "Remote" | "Hybrid" | "On-site";
export type ExperienceStatus = "Current" | "Completed";

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  workMode: WorkMode;
  startDate: string;
  endDate: string;
  status: ExperienceStatus;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  specialization?: string;
  description: string;
}