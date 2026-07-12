import { skillGroups } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-eyebrow mb-4">Technical stack</p>
      <h2 className="font-display font-semibold text-4xl sm:text-5xl">Technologies I work with.</h2>

      <div className="mt-14 grid sm:grid-cols-2 gap-6">
        {skillGroups.map((g) => (
          <Card key={g.name}>
            <CardContent className="pt-6">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display font-semibold text-lg">{g.name}</h3>
                <span className="font-mono text-primary text-sm">{g.percent}%</span>
              </div>
              <Progress value={g.percent} className="mb-5" />
              <div className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
