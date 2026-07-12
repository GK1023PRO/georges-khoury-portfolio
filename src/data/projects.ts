import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "smart-infrastructure-monitoring-platform",
    title: "Smart Infrastructure Monitoring Platform",
    shortDescription:
      "A containerized monitoring and alerting platform with real-time infrastructure metrics and automated multi-channel notifications.",
    fullDescription:
      "A DevOps monitoring platform that collects infrastructure metrics, visualizes system health through Grafana dashboards, and distributes automated alerts through Telegram, Discord, and n8n workflows.",

    categories: ["DevOps", "Cloud"],
    technologies: [
      "Python",
      "Bash",
      "Docker Compose",
      "Prometheus",
      "Grafana",
      "n8n",
      "Telegram API",
      "Discord Webhooks",
      "GitHub Actions",
    ],

    featured: true,
    year: 2026,
    status: "Completed",

    githubUrl:
      "https://github.com/GK1023PRO/smart-infra-monitoring-platform",

    role: "DevOps & Cloud Engineer",
    duration: "Personal engineering project",

    problem:
      "Infrastructure failures can remain unnoticed when system metrics are not collected, visualized, and connected to an automated alerting workflow.",

    solution:
      "I built a containerized monitoring platform that collects system metrics, visualizes infrastructure health, evaluates alert conditions, and sends notifications through multiple communication channels.",

    features: [
      "CPU, memory, disk, and system-load monitoring",
      "Prometheus metrics collection",
      "Grafana monitoring dashboards",
      "Automated workflows through n8n",
      "Telegram alert notifications",
      "Discord webhook notifications",
      "Containerized local deployment",
      "GitHub Actions validation workflow",
    ],

    challenges: [
      "Designing a consistent metrics structure across monitoring scripts",
      "Preventing duplicate or unnecessary notifications",
      "Connecting monitoring data to n8n workflows",
      "Running all monitoring services together through Docker Compose",
    ],

    lessons: [
      "Improved my understanding of infrastructure observability",
      "Learned how monitoring and automation platforms communicate",
      "Practiced alert-routing and webhook integration",
      "Strengthened Docker Compose and CI/CD skills",
    ],

    architectureSteps: [
      "Infrastructure host",
      "Bash and Python monitoring scripts",
      "Prometheus metrics collection",
      "Grafana visualization",
      "n8n alert evaluation",
      "Telegram and Discord notifications",
    ],
  },

  {
    slug: "kubernetes-gitops-platform",
    title: "Kubernetes GitOps Platform",
    shortDescription:
      "A Kubernetes deployment platform using GitOps automation, Helm packaging, observability, and continuous delivery.",
    fullDescription:
      "A GitOps-oriented infrastructure platform using Kubernetes, Helm, ArgoCD, GitHub Actions, Prometheus, and Grafana to automate application delivery and infrastructure configuration.",

    categories: ["DevOps", "Cloud"],
    technologies: [
      "Kubernetes",
      "ArgoCD",
      "Helm",
      "Docker",
      "Gitea",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
    ],

    featured: true,
    year: 2026,
    status: "Completed",

    githubUrl: "https://github.com/GK1023PRO/k8s-helm-project",

    role: "DevOps Engineer",
    duration: "Personal engineering project",

    problem:
      "Manual Kubernetes deployments can create configuration inconsistencies, slow releases, and make it difficult to verify which version is running.",

    solution:
      "I implemented a GitOps workflow where Git stores the desired deployment configuration and ArgoCD automatically synchronizes it with the Kubernetes cluster.",

    features: [
      "Kubernetes application deployment",
      "Helm chart packaging",
      "ArgoCD continuous delivery",
      "Git-based configuration management",
      "Containerized application workloads",
      "Prometheus monitoring",
      "Grafana visualization",
      "GitHub Actions automation",
    ],

    challenges: [
      "Structuring Helm templates and environment values",
      "Connecting Git repositories to ArgoCD",
      "Troubleshooting application synchronization",
      "Configuring observability inside the cluster",
    ],

    lessons: [
      "Learned how GitOps differs from traditional deployment workflows",
      "Improved Kubernetes debugging skills",
      "Practiced declarative infrastructure management",
      "Developed stronger knowledge of Helm and ArgoCD",
    ],

    architectureSteps: [
      "Developer pushes configuration",
      "Git repository stores desired state",
      "GitHub Actions validates the project",
      "ArgoCD detects repository changes",
      "Kubernetes applies the desired state",
      "Prometheus and Grafana monitor workloads",
    ],
  },

  {
    slug: "social-media-publisher-saas",
    title: "Social Media Publisher SaaS",
    shortDescription:
      "A multi-platform publishing system for managing accounts, media, team members, invitations, and scheduled social content.",
    fullDescription:
      "A full-stack SaaS application for publishing content across social platforms, managing connected accounts, handling organization members, storing media, and processing scheduled publishing workflows.",

    categories: ["Full Stack", "Backend"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "NextAuth",
      "Cloudflare R2",
      "Facebook API",
      "Instagram API",
      "TikTok API",
    ],

    featured: true,
    year: 2026,
    status: "In Progress",

    role: "Full-Stack Development Intern",
    duration: "July 2026 – Present",

    problem:
      "Managing and publishing content separately across multiple social networks creates repetitive work and makes team collaboration difficult.",

    solution:
      "I contributed to a centralized SaaS platform that manages social accounts, uploads media, supports organization members, and publishes content through external social-media APIs.",

    features: [
      "User authentication",
      "Organization and account management",
      "Team-member invitation workflow",
      "Connected social-account management",
      "Media upload through Cloudflare R2",
      "Facebook publishing integration",
      "Instagram publishing integration",
      "TikTok publishing integration",
      "Scheduled publishing workflow",
    ],

    challenges: [
      "Managing authentication and account context",
      "Implementing invitation states and token validation",
      "Handling social-platform access tokens",
      "Mapping database accounts to external platform accounts",
      "Troubleshooting API publishing failures",
    ],

    lessons: [
      "Improved Next.js App Router and TypeScript skills",
      "Learned how OAuth-style platform integrations work",
      "Practiced relational database modeling with Prisma",
      "Gained experience debugging production-style API workflows",
    ],

    architectureSteps: [
      "User interface",
      "Next.js server routes",
      "NextAuth authentication",
      "Prisma data-access layer",
      "MySQL database",
      "Cloudflare R2 media storage",
      "Social-platform publishing APIs",
    ],
  },

  {
    slug: "help-desk-ticketing-system",
    title: "Help Desk Ticketing System",
    shortDescription:
      "A secure support-ticket platform with authentication, ticket management, email notifications, and PostgreSQL persistence.",
    fullDescription:
      "A full-stack help desk application where users can authenticate, submit support tickets, track their progress, and receive email notifications.",

    categories: ["Backend", "Full Stack"],
    technologies: [
      "Flask",
      "PostgreSQL",
      "SQLAlchemy",
      "Flask-Login",
      "Flask-Mail",
      "Docker Compose",
      "Bootstrap",
    ],

    featured: true,
    year: 2026,
    status: "Completed",

    githubUrl: "https://github.com/GK1023PRO/helpdesk-system",
    liveUrl: "https://helpdesk-system-production-519c.up.railway.app",

    role: "Full-Stack Developer",
    duration: "Personal engineering project",

    problem:
      "Support requests can become difficult to track when they are handled through unstructured messages or separate communication channels.",

    solution:
      "I developed a centralized ticketing application with authentication, ticket lifecycle management, persistence, and automated email communication.",

    features: [
      "User registration and authentication",
      "Secure password handling",
      "Ticket creation and tracking",
      "Ticket-status management",
      "PostgreSQL persistence",
      "Email notifications",
      "Docker Compose environment",
      "Production deployment",
    ],

    challenges: [
      "Designing the ticket and user database relationships",
      "Managing authenticated sessions",
      "Configuring email delivery",
      "Preparing the application for deployment",
    ],

    lessons: [
      "Improved Flask architecture and routing skills",
      "Strengthened PostgreSQL and SQLAlchemy knowledge",
      "Practiced authentication and session management",
      "Learned how to deploy a database-backed application",
    ],

    architectureSteps: [
      "Browser interface",
      "Flask web application",
      "Authentication and authorization",
      "SQLAlchemy ORM",
      "PostgreSQL database",
      "Flask-Mail notification service",
    ],
  },

  {
    slug: "product-inventory-rest-api",
    title: "Product Inventory REST API",
    shortDescription:
      "A secure REST API for managing inventory data with JWT authentication, validation, automated testing, and API documentation.",
    fullDescription:
      "A production-style inventory backend created with FastAPI and PostgreSQL, featuring JWT authentication, validation, automated testing, Docker Compose, and Swagger documentation.",

    categories: ["Backend", "DevOps"],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "JWT",
      "Pytest",
      "Docker Compose",
      "Swagger UI",
    ],

    featured: true,
    year: 2026,
    status: "Completed",

    githubUrl: "https://github.com/GK1023PRO/fastapi-inventory",

    role: "Backend & DevOps Developer",
    duration: "Personal engineering project",

    problem:
      "Inventory applications require secure and validated APIs that can reliably create, update, retrieve, and delete product information.",

    solution:
      "I developed a FastAPI backend with JWT authentication, PostgreSQL storage, validation, automated tests, API documentation, and containerized deployment.",

    features: [
      "RESTful product endpoints",
      "JWT authentication",
      "Request validation",
      "PostgreSQL persistence",
      "Automated Pytest tests",
      "Swagger API documentation",
      "Docker Compose deployment",
    ],

    challenges: [
      "Implementing secure token validation",
      "Managing database sessions",
      "Designing consistent API responses",
      "Testing authenticated endpoints",
    ],

    lessons: [
      "Improved FastAPI dependency-injection knowledge",
      "Practiced JWT-based API security",
      "Strengthened automated backend testing skills",
      "Learned how to document and containerize REST APIs",
    ],

    architectureSteps: [
      "API client",
      "FastAPI endpoints",
      "JWT authentication layer",
      "Validation and business logic",
      "PostgreSQL database",
      "Swagger documentation and Pytest validation",
    ],
  },

  {
    slug: "enterprise-secure-remote-access",
    title: "Enterprise Secure Remote Access",
    shortDescription:
      "A secure Windows enterprise environment providing remote access through VPN, RemoteApp, and controlled user permissions.",
    fullDescription:
      "A Windows Server infrastructure project providing secure enterprise connectivity through VPN services, RemoteApp, virtualized infrastructure, and access-control policies.",

    categories: ["Cybersecurity", "Networking"],
    technologies: [
      "Windows Server 2022",
      "VPN",
      "RemoteApp",
      "VMware",
      "Access Control",
      "Network Security",
    ],

    featured: true,
    year: 2026,
    status: "Completed",

    role: "Systems & Network Engineer",
    duration: "University engineering project",

    problem:
      "Remote users require secure access to enterprise resources without exposing internal services directly to the public internet.",

    solution:
      "I designed a virtualized Windows Server environment that uses VPN connectivity, RemoteApp, controlled permissions, and secured access to organizational resources.",

    features: [
      "Virtualized Windows Server environment",
      "VPN remote connectivity",
      "RemoteApp publishing",
      "Controlled user access",
      "Network-policy configuration",
      "Secure remote resource access",
    ],

    challenges: [
      "Configuring Windows Server networking",
      "Implementing remote-access policies",
      "Managing user permissions",
      "Troubleshooting connectivity between virtual machines",
    ],

    lessons: [
      "Improved Windows Server administration skills",
      "Practiced enterprise access-control configuration",
      "Strengthened networking and VPN troubleshooting",
      "Learned how secure remote-access architectures are designed",
    ],

    architectureSteps: [
      "Remote user",
      "Encrypted VPN connection",
      "Windows Server remote-access service",
      "Authentication and access-control policies",
      "RemoteApp service",
      "Protected enterprise resources",
    ],
  },
];

export const projectCategories = [
  "All",
  "DevOps",
  "Cloud",
  "Cybersecurity",
  "Backend",
  "Full Stack",
  "Networking",
] as const;

export type ProjectFilterCategory =
  (typeof projectCategories)[number];

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}