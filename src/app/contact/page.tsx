import type { Metadata } from "next";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
} from "lucide-react";

import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Georges Khoury regarding DevOps, cloud, infrastructure, cybersecurity, backend, and full-stack engineering opportunities.",
};

const contactLinks = [
  {
    label: "Email",
    value: "georgeskh003@hotmail.com",
    href: "mailto:georgeskh003@hotmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/georgeskhoury23",
    href: "https://www.linkedin.com/in/georgeskhoury23",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/GK1023PRO",
    href: "https://github.com/GK1023PRO",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <main className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            Contact and opportunities
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s discuss your next engineering project
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            I am open to internships, junior engineering roles,
            freelance work, technical collaborations, and projects
            involving DevOps, cloud infrastructure, cybersecurity,
            networking, backend, or full-stack development.
          </p>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.4fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageSquareText
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Contact information
              </h2>

              <p className="mt-3 leading-7 text-muted-foreground">
                Send a message using the form or contact me
                directly through one of the channels below.
              </p>

              <div className="mt-7 space-y-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {link.label}
                        </p>

                        <p className="mt-1 break-words text-sm font-semibold group-hover:text-primary">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <MapPin
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />

                <h2 className="font-semibold">
                  Location and availability
                </h2>
              </div>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">
                    Location
                  </dt>

                  <dd className="mt-1 font-medium">
                    Zahle, Lebanon
                  </dd>
                </div>

                <div>
                  <dt className="text-muted-foreground">
                    Work preference
                  </dt>

                  <dd className="mt-1 font-medium">
                    Remote, hybrid, or on-site opportunities
                  </dd>
                </div>

                <div>
                  <dt className="text-muted-foreground">
                    Response time
                  </dt>

                  <dd className="mt-1 font-medium">
                    Usually within 1–2 business days
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          <section aria-labelledby="contact-form-heading">
            <div className="mb-6">
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold"
              >
                Send a message
              </h2>

              <p className="mt-2 text-muted-foreground">
                Complete the form and I will receive your
                message by email.
              </p>
            </div>

            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}