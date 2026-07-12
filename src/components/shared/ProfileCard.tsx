import { GraduationCap, MapPin } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-border bg-card px-8 pt-8 pb-10 text-center shadow-2xl shadow-black/40">
      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-mono text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Available for Internships &amp; Part-Time
      </div>

      {/* Photo */}
      <div className="mx-auto mt-8 h-32 w-32 rounded-full border-2 border-primary/40 shadow-lg shadow-primary/20 overflow-hidden bg-secondary flex items-center justify-center">
        {/*
          Drop your photo at public/images/georges-khoury.jpg,
          then swap the div below for:
          <img src="/images/georges-khoury.jpg" alt="Georges Khoury" className="h-full w-full object-cover" />
        */}
        <span className="font-display text-3xl font-bold text-primary">GK</span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold">Georges Khoury</h3>
      <p className="mt-1 text-muted-foreground">Systems &amp; Networks Engineering Student</p>

      <div className="mt-6 flex w-fit flex-col items-start gap-3 mx-auto text-left">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap size={16} className="text-primary shrink-0" />
          Antonine University
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={16} className="text-primary shrink-0" />
          Zahle, Lebanon &bull; Little Ferry, NJ, USA
        </div>
      </div>
    </div>
  );
}