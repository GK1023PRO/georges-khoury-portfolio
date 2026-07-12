import { stats } from "@/lib/data";
//import Terminal from "./Terminal";
import { Button } from "@/components/ui/button";
import ProfileCard from "@/components/shared/ProfileCard";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="pt-36 pb-20 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="fade-up">
          <p className="section-eyebrow mb-5">
            DEVOPS &bull; CLOUD &bull; CYBERSECURITY &bull; FULL-STACK
          </p>
          <h1 className="font-display font-semibold text-5xl sm:text-6xl leading-[1.05] tracking-tight">
            Hi, I&apos;m Georges
            <br />
            Khoury.
          </h1>
          <p className="mt-6 font-display text-2xl text-signal">Building pipelines, not just projects.</p>
          <p className="mt-6 text-mute text-lg leading-relaxed max-w-xl">
            Computer &amp; Communications Engineering student at Antonine University specializing in Systems & Networks Engineering. I containerize
            applications, automate infrastructure, and wire up GitOps pipelines &mdash; then harden all of it
            with the cybersecurity fundamentals to back it up.
          </p>

         <div className="mt-8 flex flex-wrap gap-4">
  <Button asChild size="lg">
    <a href="#projects">View Projects</a>
  </Button>
  <Button asChild variant="outline" size="lg">
    <a href="/resume/Georges-Khoury-Resume.pdf" download>
      <Download size={16} />
      Download Resume
    </a>
  </Button>
</div>

          <div className="mt-12 grid grid-cols-4 gap-4 max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-signal">{s.value}</div>
                <div className="text-xs text-mute mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: "120ms" }}>
          
         <ProfileCard />
        </div>
      </div>
    </section>
  );
}
