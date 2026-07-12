import type {
  Education,
  Experience,
} from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "step-to-media-full-stack-intern",
    role: "Full-Stack Development Intern",
    company: "Step To Media",
    location: "Mkalles, Lebanon",
    workMode: "Remote",
    startDate: "July 2026",
    endDate: "Present",
    status: "Current",

    summary:
      "Contributing to the development of a multi-platform Social Media Publisher SaaS that manages users, organizations, connected social accounts, media uploads, team collaboration, and publishing workflows.",

    responsibilities: [
      "Develop and maintain application features using Next.js App Router and TypeScript",
      "Implement authentication and account-context workflows with NextAuth",
      "Build organization-member and invitation-management features",
      "Develop API routes for accounts, posts, invitations, and team members",
      "Manage relational application data using Prisma and MySQL",
      "Integrate Facebook, Instagram, and TikTok publishing APIs",
      "Support media uploads and storage through Cloudflare R2",
      "Debug database, authentication, API, and publishing issues",
    ],

    achievements: [
      "Implemented and debugged the invitation acceptance workflow",
      "Resolved account-context problems affecting authenticated API routes",
      "Built account-member listing and deletion functionality",
      "Fixed database uniqueness issues in account-administrator relationships",
      "Improved social-account mapping and publishing logic",
      "Contributed to scheduled publishing and token-management workflows",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "MySQL",
      "NextAuth",
      "Cloudflare R2",
      "Facebook API",
      "Instagram API",
      "TikTok API",
      "Git",
    ],
  },
];

export const education: Education[] = [
  {
    id: "antonine-university-engineering",
    degree:
      "Bachelor of Engineering in Computer and Communications Engineering",
    institution: "Antonine University",
    location: "Lebanon",
    startDate: "2023",
    endDate: "Present",
    specialization: "Systems Engineering and Networks",

    description:
      "Engineering studies focused on systems, computer networks, cloud infrastructure, cybersecurity, software development, databases, and communication technologies.",
  },

  {
    id: "saint-elie-high-school",
    degree:
      "General Secondary Education Diploma — Life Sciences",
    institution:
      "Maronite Sisters School – Saint Elie",
    location: "Dhour Zahle, Lebanon",
    startDate: "2020",
    endDate: "2023",

    description:
      "Completed secondary education in the Life Sciences branch before beginning engineering studies.",
  },
];