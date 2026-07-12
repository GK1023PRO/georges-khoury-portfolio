import { GraduationCap, Boxes, Cloud, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    desc: "Systems Engineering and Networks student at Antonine University, Lebanon.",
  },
  {
    icon: Boxes,
    title: "DevOps & Automation",
    desc: "Docker, Kubernetes, Terraform, Ansible and ArgoCD across 19 shipped projects.",
  },
  {
    icon: Cloud,
    title: "Cloud & AWS",
    desc: "AWS Cloud Practitioner track: EC2, S3, RDS, Lambda and serverless foundations.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "CCNA and Junior Cybersecurity Analyst certified, from threat detection to incident response.",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-eyebrow mb-4">About me</p>
      <h2 className="font-display font-semibold text-4xl sm:text-5xl max-w-2xl leading-tight">
        From provisioning a server to hardening it.
      </h2>
      <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
        I&apos;m Georges Khoury, a Computer &amp; Communications Engineering student who likes taking
        infrastructure all the way through the lifecycle &mdash; write it as code, containerize it, deploy
        it through a pipeline, and monitor it once it&apos;s live. My goal is to grow into a DevOps and cloud
        engineer who can design, automate, secure, and operate real production systems.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p) => (
          <Card key={p.title} className="hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="w-11 h-11 rounded-md bg-secondary border border-border flex items-center justify-center text-primary mb-5">
                <p.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
