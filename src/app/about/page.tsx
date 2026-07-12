import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Georges Khoury, his engineering background, interests, and technical focus.",
};

export default function AboutPage() {
  return (
    <main className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
          About me
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Engineering secure and reliable systems
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              I am a Computer and Communications Engineering student at
              Antonine University, specializing in systems engineering and
              networks.
            </p>

            <p>
              My primary interests are DevOps, cloud infrastructure,
              cybersecurity, automation, backend engineering, and network
              systems.
            </p>

            <p>
              I build containerized applications, CI/CD pipelines,
              infrastructure-as-code workflows, monitoring platforms, secure
              APIs, and full-stack applications.
            </p>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-card p-6">
            <h2 className="text-lg font-semibold">Current focus</h2>

            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-muted-foreground">Location</dt>
                <dd className="mt-1 font-medium">Zahle, Lebanon</dd>
              </div>

              <div>
                <dt className="text-muted-foreground">Specialization</dt>
                <dd className="mt-1 font-medium">
                  Systems Engineering &amp; Networks
                </dd>
              </div>

              <div>
                <dt className="text-muted-foreground">Primary field</dt>
                <dd className="mt-1 font-medium">
                  DevOps, Cloud &amp; Infrastructure
                </dd>
              </div>

              <div>
                <dt className="text-muted-foreground">Availability</dt>
                <dd className="mt-1 font-medium text-primary">
                  Open to opportunities
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </main>
  );
}