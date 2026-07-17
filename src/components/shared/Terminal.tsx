"use client";

import { useEffect, useState } from "react";

const LINES: { cmd: string; out: string }[] = [
  { cmd: "terraform apply -auto-approve", out: "Apply complete! 12 resources provisioned." },
  { cmd: "docker build -t georges/infra:latest .", out: "Successfully built and tagged image." },
  { cmd: "kubectl rollout status deploy/api", out: "deployment \"api\" successfully rolled out." },
  { cmd: "argocd app sync gitops-platform", out: "Synced to revision main — status: Healthy." },
  { cmd: "ansible-playbook site.yml", out: "ok=14 changed=6 failed=0" },
];

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "output" | "pause">("typing");

  useEffect(() => {
    const current = LINES[lineIndex].cmd;

    if (phase === "typing") {
      if (typed.length < current.length) {
        const t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 32);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("output"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "output") {
      const t = setTimeout(() => setPhase("pause"), 1100);
      return () => clearTimeout(t);
    }

    if (phase === "pause") {
      const t = setTimeout(() => {
        setTyped("");
        setLineIndex((i) => (i + 1) % LINES.length);
        setPhase("typing");
      }, 900);
      return () => clearTimeout(t);
    }
  }, [typed, phase, lineIndex]);

  return (
    <div className="card-surface rounded-lg overflow-hidden shadow-2xl shadow-black/40 w-full">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
       <span className="ml-3 font-mono text-xs text-muted-foreground">georges@pipeline: ~/infra</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[190px]">
        {LINES.slice(0, lineIndex).map((l, i) => (
          <div key={i} className="mb-2 opacity-60">
            <span className="text-primary">$</span> {l.cmd}
            <div className="text-muted-foreground">{l.out}</div>
          </div>
        ))}
        <div>
          <span className="text-primary">$</span> {typed}
          {phase === "typing" && <span className="blink">▍</span>}
        </div>
        {(phase === "output" || phase === "pause") && (
          <div className="text-amber mt-1">{LINES[lineIndex].out}</div>
        )}
      </div>
    </div>
  );
}
