import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-eyebrow mb-4">Experience</p>
      <h2 className="font-display font-semibold text-4xl sm:text-5xl">Hands-on, not just coursework.</h2>

      <Card className="mt-10">
        <CardContent className="pt-6 flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="w-12 h-12 shrink-0 rounded-md bg-secondary border border-border flex items-center justify-center text-primary">
            <Briefcase size={20} />
          </div>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-semibold text-xl">Intern</h3>
              <span className="text-primary font-mono text-sm">Step To Media</span>
            </div>
            <p className="text-xs text-muted-foreground font-mono mt-1">July 2026 &ndash; Present</p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
           Contributing to the development of a production-ready Social Media Publisher SaaS using Next.js, TypeScript, Prisma ORM, MySQL, and NextAuth. Developing scalable full-stack features, RESTful APIs, authentication and authorization, relational database models, Cloudflare R2 media storage, and Facebook, Instagram, and TikTok integrations while applying DevOps, CI/CD, cloud computing, containerization, Git, and secure software engineering best practices.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
