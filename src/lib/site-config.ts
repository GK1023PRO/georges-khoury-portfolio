const fallbackSiteUrl = "http://localhost:3000";

export const siteConfig = {
  name: "Georges Khoury",
  title: "DevOps, Cloud & Infrastructure Engineer",
  description:
    "Portfolio of Georges Khoury showcasing DevOps, cloud infrastructure, cybersecurity, networking, backend, and full-stack engineering projects.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    fallbackSiteUrl,

  author: {
    name: "Georges Khoury",
    email: "georgeskh003@hotmail.com",
    github: "https://github.com/GK1023PRO",
    linkedin: "https://www.linkedin.com/in/georgeskhoury23",
  },

  keywords: [
    "Georges Khoury",
    "DevOps Engineer",
    "Cloud Engineer",
    "Infrastructure Engineer",
    "Cybersecurity Engineer",
    "Network Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Next.js",
    "TypeScript",
  ],
} as const;