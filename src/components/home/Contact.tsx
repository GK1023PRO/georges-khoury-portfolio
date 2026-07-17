import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";

const contactItems = [
  {
    label: "Email",
    value: "georgeskh003@hotmail.com",
    href: "mailto:georgeskh003@hotmail.com",
    icon: Mail,
    ariaLabel: "Email Georges Khoury",
    external: false,
download: false,
  },
  {
    label: "Phone",
    value: "+961 76 939 864",
    href: "tel:+96176939864",
    icon: Phone,
    ariaLabel: "Call Georges Khoury",
    external: false,
download: false,
  },
  {
    label: "LinkedIn",
    value: "georgeskhoury23",
    href: "https://www.linkedin.com/in/georgeskhoury23",
    icon: Linkedin,
    ariaLabel: "Open Georges Khoury's LinkedIn profile",
    external: true,
    download: false,
  },
  {
    label: "GitHub",
    value: "GK1023PRO",
    href: "https://github.com/GK1023PRO",
    icon: Github,
    ariaLabel: "Open Georges Khoury's GitHub profile",
    external: true,
download: false,
  },
  {
    label: "Resume",
    value: "Download CV",
    href: "/resume/Georges-Khoury-Resume.pdf",
    icon: FileText,
    ariaLabel: "Download Georges Khoury's resume",
    external: false,
download: true,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <Reveal>
        <Card className="overflow-hidden p-8 sm:p-12">
          <Reveal delay={0.08}>
            <p className="section-eyebrow mb-4">Contact</p>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              Let&apos;s build something together.
            </h2>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I&apos;m open to internship and part-time opportunities in
              DevOps, cloud engineering, networking, cybersecurity, and
              full-stack development.
            </p>
          </Reveal>

          <StaggerContainer
            className="mt-10 grid gap-4 sm:grid-cols-2"
            delay={0.3}
            stagger={0.07}
          >
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.label} className="h-full">
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    download={item.download || undefined}
                    aria-label={item.ariaLabel}
                    className="group flex h-full items-center gap-4 rounded-lg border border-border bg-secondary p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                      <Icon aria-hidden="true" size={18} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>

                      <p className="break-words text-sm font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}

            <StaggerItem className="h-full">
              <div className="flex h-full items-center gap-4 rounded-lg border border-border bg-secondary p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary">
                  <MapPin aria-hidden="true" size={18} />
                </span>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Location
                  </p>

                  <p className="text-sm font-semibold">
                    Zahle, Lebanon
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Card>
      </Reveal>
    </section>
  );
}