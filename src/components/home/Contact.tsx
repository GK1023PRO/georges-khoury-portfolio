import { Mail, Linkedin, Github, FileText, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <Card className="p-8 sm:p-12">
        <p className="section-eyebrow mb-4">Contact</p>
        <h2 className="font-display font-semibold text-4xl sm:text-5xl">Let&apos;s build something together.</h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-xl">
          I&apos;m open to internship and part-time opportunities in DevOps, cloud engineering, and
          cybersecurity.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <a
            href="mailto:georgeskh003@hotmail.com"
            className="flex items-center gap-4 p-5 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-colors"
          >
            <span className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center text-primary shrink-0">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-semibold text-sm">georgeskh003@hotmail.com</p>
            </div>
          </a>

          <a
            href="tel:+96176939864"
            className="flex items-center gap-4 p-5 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-colors"
          >
            <span className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center text-primary shrink-0">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="font-semibold text-sm">+961 76 939 864</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/georgeskhoury23"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-5 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-colors"
          >
            <span className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center text-primary shrink-0">
              <Linkedin size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="font-semibold text-sm">georgeskhoury23</p>
            </div>
          </a>

          <a
            href="https://github.com/GK1023PRO"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-5 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-colors"
          >
            <span className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center text-primary shrink-0">
              <Github size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="font-semibold text-sm">GK1023PRO</p>
            </div>
          </a>

          <a
            href="/resume/Georges-Khoury-Resume.pdf"
            download
            className="flex items-center gap-4 p-5 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-colors"
          >
            <span className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center text-primary shrink-0">
              <FileText size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Resume</p>
              <p className="font-semibold text-sm">Download CV</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-lg bg-secondary border border-border">
            <span className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center text-primary shrink-0">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="font-semibold text-sm">Zahle, Lebanon</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
