export type CertificationCategory =
  | "AWS"
  | "Cisco"
  | "Cybersecurity"
  | "Networking"
  | "Cloud";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: CertificationCategory;
  issueDate?: string;
  credentialUrl?: string;
  description: string;
  featured?: boolean;
}