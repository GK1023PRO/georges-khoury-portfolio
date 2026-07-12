import type {
  Certification,
  CertificationCategory,
} from "@/types/certification";

export const certifications: Certification[] = [
  {
    id: "junior-cybersecurity-analyst",
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    description:
      "Career-path training covering cybersecurity operations, threat analysis, endpoint protection, incident response, and network defense.",
    featured: true,
  },
  {
    id: "network-defense",
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    description:
      "Training focused on network security controls, access protection, firewalls, monitoring, and defensive security practices.",
    featured: true,
  },
  {
    id: "endpoint-security",
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    description:
      "Security training covering endpoint protection, malware defense, host-based controls, and secure device management.",
  },
  {
    id: "cyber-threat-management",
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    description:
      "Training in threat intelligence, risk assessment, incident response, vulnerability management, and security operations.",
  },
  {
    id: "introduction-to-cybersecurity",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    description:
      "Foundational cybersecurity training covering common threats, privacy, access control, and security principles.",
  },
  {
    id: "ccna-introduction-to-networks",
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    category: "Networking",
    description:
      "Networking fundamentals including Ethernet, IPv4, IPv6, switching, routing concepts, subnetting, and network configuration.",
    featured: true,
  },
  {
    id: "aws-cloud-practitioner-essentials",
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    category: "AWS",
    description:
      "Foundational training in AWS cloud concepts, services, security, architecture, pricing, and support.",
    featured: true,
  },
  {
    id: "aws-cloud-quest-cloud-practitioner",
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    category: "AWS",
    description:
      "Hands-on cloud learning experience covering core AWS services and practical cloud scenarios.",
    featured: true,
  },
  {
    id: "aws-practice-question-set-clf-c02",
    name: "Official Practice Question Set: AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    category: "AWS",
    description:
      "Official practice preparation covering the AWS Certified Cloud Practitioner CLF-C02 exam domains.",
  },
  {
    id: "aws-educate-cloud-101",
    name: "AWS Educate Introduction to Cloud 101",
    issuer: "AWS Educate",
    category: "Cloud",
    description:
      "Introduction to cloud computing concepts, service models, deployment models, and AWS fundamentals.",
  },
  {
    id: "aws-educate-storage",
    name: "AWS Educate Getting Started with Storage",
    issuer: "AWS Educate",
    category: "AWS",
    description:
      "Foundational learning in AWS storage services, storage options, and cloud data-management concepts.",
  },
  {
    id: "aws-educate-networking",
    name: "AWS Educate Getting Started with Networking",
    issuer: "AWS Educate",
    category: "AWS",
    description:
      "Training in AWS networking concepts, virtual networks, connectivity, routing, and cloud network security.",
  },
  {
    id: "aws-educate-compute",
    name: "AWS Educate Getting Started with Compute",
    issuer: "AWS Educate",
    category: "AWS",
    description:
      "Introduction to AWS compute services, virtual machines, scalability, and cloud application hosting.",
  },
  {
    id: "aws-educate-databases",
    name: "AWS Educate Getting Started with Databases",
    issuer: "AWS Educate",
    category: "AWS",
    description:
      "Foundational training in managed databases, relational and non-relational services, and cloud database use cases.",
  },
  {
    id: "aws-educate-cloud-operations",
    name: "AWS Educate Getting Started with Cloud Operations",
    issuer: "AWS Educate",
    category: "AWS",
    description:
      "Cloud operations training covering monitoring, availability, management, automation, and operational best practices.",
  },
  {
    id: "aws-educate-security",
    name: "AWS Educate Getting Started with Security",
    issuer: "AWS Educate",
    category: "AWS",
    description:
      "Introduction to AWS security concepts, shared responsibility, identity, access control, and data protection.",
  },
  {
    id: "aws-educate-serverless",
    name: "AWS Educate Getting Started with Serverless",
    issuer: "AWS Educate",
    category: "AWS",
    description:
      "Foundational serverless training covering event-driven architecture, AWS Lambda, and managed cloud services.",
  },
];

export const certificationCategories = [
  "All",
  "AWS",
  "Cisco",
  "Cybersecurity",
  "Networking",
  "Cloud",
] as const;

export type CertificationFilterCategory =
  | "All"
  | CertificationCategory;