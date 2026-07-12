import type { Metadata } from "next";
import { siteConfig } from "./constants";

export const siteMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.name,
  keywords: [
    "Georges Khoury",
    "DevOps Engineer",
    "Cloud Engineer",
    "Infrastructure Engineer",
    "Cybersecurity",
    "Docker",
    "Kubernetes",
    "AWS",
    "Terraform",
    "Ansible",
    "Next.js",
  ],
};