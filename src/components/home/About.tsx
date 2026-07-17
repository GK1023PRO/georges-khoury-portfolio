import {
  Boxes,
  Cloud,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";

const pillars = [
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    desc: "Systems Engineering and Networks student at Antonine University, Lebanon.",
  },
  {
    icon: Boxes,
    title: "DevOps & Automation",
    desc: "Docker, Kubernetes, Terraform, Ansible, and ArgoCD across 19 shipped projects.",
  },
  {
    icon: Cloud,
    title: "Cloud & AWS",
    desc: "AWS Cloud Practitioner track covering EC2, S3, RDS, Lambda, and serverless foundations.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Cisco networking and cybersecurity training covering threat detection, network defense, and incident response.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="section-eyebrow mb-4">About me</p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          From provisioning a server to hardening it.
        </h2>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m Georges Khoury, a Computer &amp; Communications Engineering
          student who enjoys taking infrastructure through its full lifecycle
          &mdash; defining it as code, containerizing applications, deploying
          them through CI/CD pipelines, and monitoring them in production. My
          goal is to grow into a DevOps and Cloud Engineer who can design,
          automate, secure, and operate reliable systems.
        </p>
      </Reveal>

      <StaggerContainer
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        delay={0.24}
        stagger={0.08}
      >
        {pillars.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <StaggerItem key={pillar.title}>
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardContent className="pt-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                    <Icon aria-hidden="true" size={20} />
                  </div>

                  <h3 className="font-display text-lg font-semibold">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.desc}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}