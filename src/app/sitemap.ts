import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/experience`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/certifications`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map(
    (project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: project.featured ? 0.9 : 0.7,
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}