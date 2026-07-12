import {
  Award,
  Cloud,
  ExternalLink,
  Network,
  ShieldCheck,
} from "lucide-react";

import type {
  Certification,
  CertificationCategory,
} from "@/types/certification";

interface CertificationCardProps {
  certification: Certification;
}

function getCategoryIcon(category: CertificationCategory) {
  switch (category) {
    case "AWS":
    case "Cloud":
      return Cloud;

    case "Cybersecurity":
      return ShieldCheck;

    case "Networking":
    case "Cisco":
      return Network;

    default:
      return Award;
  }
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const Icon = getCategoryIcon(certification.category);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Icon
            className="h-6 w-6"
            aria-hidden="true"
          />
        </div>

        {certification.featured && (
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
            Featured
          </span>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          {certification.category}
        </span>

        {certification.issueDate && (
          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
            {certification.issueDate}
          </span>
        )}
      </div>

      <h2 className="mt-5 text-xl font-bold leading-8 tracking-tight transition-colors group-hover:text-primary">
        {certification.name}
      </h2>

      <p className="mt-2 text-sm font-semibold text-primary">
        {certification.issuer}
      </p>

      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
        {certification.description}
      </p>

      {certification.credentialUrl && (
        <div className="mt-6 border-t border-border pt-5">
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View credential

            <ExternalLink
              className="h-4 w-4"
              aria-hidden="true"
            />
          </a>
        </div>
      )}
    </article>
  );
}