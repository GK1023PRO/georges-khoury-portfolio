export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "smart-infra-monitoring",
    index: "19",
    title: "Smart Infrastructure Monitoring Platform",
    category: "DEVOPS / MONITORING",
    description:
      "End-to-end observability stack that ships metrics from Bash and Python probes into Prometheus and Grafana, then routes alerts through n8n to Telegram and Discord, all wired into a GitHub Actions CI/CD pipeline.",
    tags: ["Bash", "Python", "Docker Compose", "Prometheus", "Grafana", "n8n", "Telegram API", "GitHub Actions"],
    github: "github.com/GK1023PRO/smart-infra-monitoring-platform",
  },
  {
    id: "k8s-gitops",
    index: "13",
    title: "Kubernetes GitOps Platform",
    category: "DEVOPS / KUBERNETES",
    description:
      "A self-hosted GitOps platform where ArgoCD continuously reconciles Kubernetes manifests from a private Gitea instance, with Helm charts and a Prometheus/Grafana stack for cluster observability.",
    tags: ["Kubernetes", "ArgoCD", "Helm", "Gitea", "Prometheus", "Grafana", "Docker", "GitHub Actions"],
  },
  {
    id: "iac-terraform",
    index: "11",
    title: "Infrastructure as Code",
    category: "DEVOPS / CLOUD",
    description:
      "Declarative Terraform modules that provision and tear down containerized environments reproducibly, replacing manual setup with version-controlled infrastructure.",
    tags: ["Terraform", "Docker", "Infrastructure Automation"],
  },
  {
    id: "ansible-config",
    index: "12",
    title: "Configuration Management",
    category: "DEVOPS / AUTOMATION",
    description:
      "Ansible playbooks that automate configuration and provisioning across Linux hosts running on Ubuntu WSL2, removing repetitive manual server setup.",
    tags: ["Ansible", "Linux", "Ubuntu WSL2", "Automation"],
  },
  {
    id: "flask-docker-api",
    index: "10",
    title: "Flask Docker REST API",
    category: "BACKEND / CI-CD",
    description:
      "A containerized REST API with an automated GitHub Actions pipeline that builds, tests, and deploys on every push to a PostgreSQL-backed Flask service.",
    tags: ["Docker", "Python", "Flask", "PostgreSQL", "GitHub Actions", "CI/CD"],
  },
  {
    id: "helpdesk-ticketing",
    index: "17",
    title: "Help Desk Ticketing System",
    category: "FULL-STACK / BACKEND",
    description:
      "A multi-user ticketing system with authentication, email notifications, and role-based access, deployed live with Docker Compose orchestrating the app and database.",
    tags: ["Flask", "PostgreSQL", "SQLAlchemy", "Flask-Login", "Flask-Mail", "Docker Compose", "Bootstrap"],
    live: "helpdesk-system-production-519c.up.railway.app",
  },
  {
    id: "product-inventory-api",
    index: "18",
    title: "Product Inventory REST API",
    category: "BACKEND / API",
    description:
      "A JWT-secured inventory API documented with Swagger UI and covered by a Pytest suite, running behind Docker Compose alongside PostgreSQL.",
    tags: ["FastAPI", "PostgreSQL", "JWT", "Docker Compose", "Pytest", "Swagger UI"],
  },
  {
    id: "employee-management",
    index: "16",
    title: "Employee Management System",
    category: "FULL-STACK / BACKEND",
    description:
      "A role-based employee records system with login-protected views, orchestrated as multiple services with Docker Compose.",
    tags: ["Flask", "PostgreSQL", "Docker Compose", "Flask-Login", "Bootstrap"],
  },
  {
    id: "inventory-management",
    index: "15",
    title: "Inventory Management System",
    category: "BACKEND",
    description:
      "A stock-tracking application with strict input validation rules, packaged in a lightweight SQLite-backed Docker container.",
    tags: ["Flask", "SQLite", "Docker", "Bootstrap", "Input Validation"],
  },
  {
    id: "cloud-notes",
    index: "14",
    title: "Cloud Notes App",
    category: "BACKEND / API",
    description:
      "A lightweight notes service exposing a REST API over SQLite, containerized for fast, reproducible deployment.",
    tags: ["Flask", "SQLite", "Docker", "REST API", "Bootstrap"],
  },
  {
    id: "vpn-remoteapp",
    index: "9",
    title: "Enterprise Secure Remote Access Solution",
    category: "NETWORKING / SECURITY",
    description:
      "A virtualized enterprise environment on Windows Server 2022 delivering secure remote access to internal applications through VPN and RemoteApp publishing.",
    tags: ["Windows Server 2022", "VMware", "VPN", "RemoteApp"],
  },
  {
    id: "plant-disease",
    index: "8",
    title: "Plant Disease Detection",
    category: "MACHINE LEARNING",
    description:
      "A deep learning image classifier trained to identify plant diseases from leaf photos, built to explore practical computer vision workflows.",
    tags: ["Python", "Machine Learning", "Deep Learning"],
  },
  {
    id: "football-movement",
    index: "7",
    title: "Football In-Flight Movement",
    category: "DATA / SIMULATION",
    description:
      "A MATLAB simulation modeling the trajectory and in-flight motion of a football under aerodynamic forces.",
    tags: ["MATLAB"],
  },
  {
    id: "event-management",
    index: "6",
    title: "Event Management System",
    category: "DATABASE",
    description:
      "A relational database design and data model for scheduling and tracking events, built around a normalized MySQL schema.",
    tags: ["MySQL", "Data Modeler"],
  },
  {
    id: "car-rental",
    index: "5",
    title: "Car Rental Application",
    category: "DESKTOP APPLICATION",
    description:
      "A C++ desktop application for managing vehicle rentals, reservations, and customer records persisted to CSV.",
    tags: ["C++", "CSV"],
  },
  {
    id: "fitaway",
    index: "4",
    title: "FitAway",
    category: "WEB / UI DESIGN",
    description:
      "A fitness-focused front-end concept combining interactive JavaScript with custom illustration assets designed in Adobe Illustrator and Photoshop.",
    tags: ["HTML", "CSS", "JavaScript", "Adobe Illustrator", "Adobe Photoshop", "JQuery"],
  },
  {
    id: "banking-system",
    index: "3",
    title: "Banking System Application",
    category: "DESKTOP APPLICATION",
    description:
      "A C++ console application simulating core banking operations: accounts, deposits, withdrawals, and transaction history stored in CSV.",
    tags: ["C++", "CSV"],
  },
  {
    id: "dog-shop",
    index: "2",
    title: "Dog Shop Website",
    category: "FULL-STACK",
    description:
      "A full-stack e-commerce site for a dog shop, with a React front end, an Express/Node API, and a MySQL database behind it.",
    tags: ["React.js", "CSS", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
  },
  {
    id: "recipe-api",
    index: "1",
    title: "Recipe Management API",
    category: "BACKEND / API",
    description:
      "A Spring Boot service for managing recipes and ingredients, backed by MongoDB for flexible, document-based storage.",
    tags: ["Java", "MongoDB", "Spring Boot"],
  },
];

export type SkillGroup = {
  name: string;
  percent: number;
  tags: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "DevOps & Cloud",
    percent: 90,
    tags: ["Docker", "Kubernetes", "Terraform", "Ansible", "ArgoCD", "Helm", "GitHub Actions", "CI/CD"],
  },
  {
    name: "AWS",
    percent: 82,
    tags: ["EC2", "S3", "RDS", "Lambda", "Serverless", "Cloud Practitioner"],
  },
  {
    name: "Networking",
    percent: 88,
    tags: ["CCNA", "TCP/UDP", "VPN", "Subnetting", "WLANs", "Switching"],
  },
  {
    name: "Cybersecurity",
    percent: 85,
    tags: ["Threat Detection", "Incident Response", "Risk Assessment", "Endpoint Security", "Cyber Kill Chain"],
  },
  {
    name: "Web Development",
    percent: 84,
    tags: ["React.js", "Node.js", "Express.js", "Flask", "FastAPI", "REST API"],
  },
  {
    name: "Databases",
    percent: 80,
    tags: ["MySQL", "PostgreSQL", "MongoDB", "SQLAlchemy"],
  },
  {
    name: "Monitoring & Automation",
    percent: 78,
    tags: ["Prometheus", "Grafana", "n8n", "Bash Scripting"],
  },
  {
    name: "Programming Languages",
    percent: 83,
    tags: ["C++", "Python", "Java", "JavaScript", "MATLAB"],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", year: "2023" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2023" },
  { title: "AWS Educate Introduction to Cloud 101", issuer: "AWS Educate", year: "2023" },
  { title: "AWS Educate: Getting Started with Networking", issuer: "AWS Educate", year: "2024" },
  { title: "AWS Educate: Getting Started with Compute", issuer: "AWS Educate", year: "2024" },
  { title: "AWS Educate: Getting Started with Storage", issuer: "AWS Educate", year: "2024" },
  { title: "AWS Educate: Getting Started with Databases", issuer: "AWS Educate", year: "2024" },
  { title: "AWS Educate: Getting Started with Security", issuer: "AWS Educate", year: "2024" },
  { title: "AWS Educate: Getting Started with Serverless", issuer: "AWS Educate", year: "2024" },
  { title: "AWS Educate: Getting Started with Cloud Operations", issuer: "AWS Educate", year: "2024" },
  { title: "Network Defense", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Endpoint Security", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Cyber Threat Management", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Junior Cybersecurity Analyst Career Path", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Educate", year: "2025" },
  { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS Educate", year: "2025" },
  {
    title: "Official Practice Set: AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "AWS Educate",
    year: "2025",
  },
];

export const stats = [
  { label: "Projects Shipped", value: "19+" },
  { label: "Certifications", value: "17+" },
  { label: "Internship", value: "1" },
  { label: "Years Learning", value: "3+" },
];