import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <Reveal>
        <p className="section-eyebrow mb-4">Certifications</p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="font-display font-semibold text-4xl sm:text-5xl">
          Continuous learning.
        </h2>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
          Professional certifications reinforcing my knowledge in networking,
          cybersecurity, and cloud infrastructure.
        </p>
      </Reveal>

      <StaggerContainer className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((c) => (
          <StaggerItem key={c.title}>
            <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <CardContent className="flex flex-1 flex-col pt-6">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                  <Award size={18} />
                </div>

                <h3 className="font-display text-[15px] font-semibold leading-snug">
                  {c.title}
                </h3>

                <p className="mt-3 text-xs text-muted-foreground">
                  {c.issuer}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-1 font-mono text-xs text-primary"
                  >
                    {c.year}
                  </Badge>

                  <a
                    href={c.verifyUrl || "#"}
                    target={c.verifyUrl ? "_blank" : undefined}
                    rel={c.verifyUrl ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-xs font-mono text-primary transition-colors hover:underline"
                    aria-label={`Verify ${c.title}`}
                  >
                    Verify
                    <ExternalLink size={13} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}