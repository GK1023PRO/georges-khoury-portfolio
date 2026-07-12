import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-eyebrow mb-4">Certifications</p>
      <h2 className="font-display font-semibold text-4xl sm:text-5xl">Continuous learning.</h2>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        Professional certifications reinforcing my knowledge in networking, cybersecurity, and cloud
        infrastructure.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((c) => (
          <Card key={c.title} className="flex flex-col">
            <CardContent className="pt-6 flex flex-col flex-1">
              <div className="w-10 h-10 rounded-md bg-secondary border border-border flex items-center justify-center text-primary mb-6">
                <Award size={18} />
              </div>
              <h3 className="font-display font-semibold text-[15px] leading-snug">{c.title}</h3>
              <p className="text-xs text-muted-foreground mt-3">{c.issuer}</p>

              <div className="flex items-center justify-between mt-auto pt-6">
                <Badge
                  variant="secondary"
                  className="rounded-full font-mono text-primary text-xs px-3 py-1"
                >
                  {c.year}
                </Badge>
                <a
                  href={c.verifyUrl || "#"}
                  target={c.verifyUrl ? "_blank" : undefined}
                  rel={c.verifyUrl ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                >
                  Verify <ExternalLink size={13} />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}