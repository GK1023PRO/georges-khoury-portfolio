import type { Metadata } from "next";
import {
  Award,
  Cloud,
  Network,
  ShieldCheck,
} from "lucide-react";

import CertificationGrid from "@/components/certifications/certification-grid";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Explore the AWS, Cisco, cloud, networking, and cybersecurity certifications earned by Georges Khoury.",
};

export default function CertificationsPage() {
  const awsCount = certifications.filter(
    (certification) =>
      certification.category === "AWS" ||
      certification.category === "Cloud",
  ).length;

  const cybersecurityCount = certifications.filter(
    (certification) =>
      certification.category === "Cybersecurity",
  ).length;

  const networkingCount = certifications.filter(
    (certification) =>
      certification.category === "Networking" ||
      certification.category === "Cisco",
  ).length;

  return (
    <main className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            Credentials and continuous learning
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Certifications across cloud, networking, and cybersecurity
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            My certifications demonstrate continued learning across AWS cloud
            services, networking fundamentals, cybersecurity operations,
            endpoint protection, threat management, and infrastructure
            security.
          </p>
        </header>

        <section
          aria-label="Certification statistics"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <StatCard
            icon={Award}
            value={String(certifications.length)}
            label="Total certifications"
          />

          <StatCard
            icon={Cloud}
            value={String(awsCount)}
            label="AWS and cloud"
          />

          <StatCard
            icon={ShieldCheck}
            value={String(cybersecurityCount)}
            label="Cybersecurity"
          />

          <StatCard
            icon={Network}
            value={String(networkingCount)}
            label="Networking and Cisco"
          />
        </section>

        <CertificationGrid />
      </div>
    </main>
  );
}

interface StatCardProps {
  icon: React.ComponentType<{
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  value: string;
  label: string;
}

function StatCard({
  icon: Icon,
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-2xl font-bold text-primary">
            {value}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {label}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon
            className="h-5 w-5"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}