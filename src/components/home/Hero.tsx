import { Download } from "lucide-react";

import ProfileCard from "@/components/shared/ProfileCard";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pb-20 pt-36"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="section-eyebrow mb-5">
              DEVOPS &bull; CLOUD &bull; CYBERSECURITY &bull; FULL-STACK
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Hi, I&apos;m Georges
              <br />
              Khoury.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 font-display text-2xl text-signal">
              Building pipelines, not just projects.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
              Computer &amp; Communications Engineering student at Antonine
              University specializing in Systems &amp; Networks Engineering. I
              containerize applications, automate infrastructure, and build
              GitOps pipelines &mdash; then strengthen them using cybersecurity
              fundamentals.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="/resume/Georges-Khoury-Resume.pdf" download>
                  <Download aria-hidden="true" size={16} />
                  Download Resume
                </a>
              </Button>
            </div>
          </Reveal>

          <StaggerContainer
            className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4"
            delay={0.4}
            stagger={0.08}
          >
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div>
                  <div className="font-display text-3xl font-semibold text-signal">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-xs text-mute">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <Reveal direction="left" delay={0.18}>
          <ProfileCard />
        </Reveal>
      </div>
    </section>
  );
}