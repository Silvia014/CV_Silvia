import { useEffect, useState } from "react";
import { profile } from "@/lib/portfolio-data";

const TYPED_LINE = "// turning data into strategy";

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(TYPED_LINE.slice(0, i));
      if (i >= TYPED_LINE.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-20 pb-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary"></span>
            Seville, Spain · Open to opportunities
          </div>

          <h1 className="mt-6 font-display text-6xl font-black leading-[0.92] tracking-tighter md:text-7xl">
            {profile.firstName}
            <br />
            <span className="shimmer-text">{profile.role}</span>
            <br />
            <span className="text-foreground">{profile.subRole}</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-full bg-gradient-to-r from-primary to-glow px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_30px_-4px] hover:shadow-primary/60"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="rounded-full border border-hairline bg-surface px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative h-[440px]">
          <div className="anim-drift absolute inset-x-6 top-0 h-64 rotate-[6deg] rounded-3xl border border-hairline bg-gradient-to-br from-primary/20 to-glow/20 shadow-2xl backdrop-blur-xl"></div>
          <div className="anim-drift-rev absolute right-0 top-20 h-72 w-64 rotate-[-8deg] rounded-3xl border border-hairline bg-surface shadow-2xl backdrop-blur-xl"></div>
          <div className="anim-drift-fast absolute bottom-0 left-2 h-56 w-72 rotate-[3deg] rounded-3xl border border-hairline bg-gradient-to-tr from-glow/25 to-primary/15 shadow-2xl backdrop-blur-xl"></div>
          <div className="absolute inset-x-10 top-24 h-60 rounded-2xl border border-hairline bg-card/90 p-5 font-mono text-[11px] leading-relaxed shadow-2xl backdrop-blur-xl">
            <div className="text-primary">const analyst = {"{"}</div>
            <div className="pl-4 text-muted-foreground">
              name: <span className="text-foreground">"{profile.firstName}"</span>,
            </div>
            <div className="pl-4 text-muted-foreground">
              role: <span className="text-glow">"data → strategy"</span>,
            </div>
            <div className="pl-4 text-muted-foreground">
              langs: <span className="text-primary">5</span>,
            </div>
            <div className="pl-4 text-muted-foreground">
              systems: [<span className="text-glow">"Opera"</span>,{" "}
              <span className="text-glow">"Amadeus"</span>],
            </div>
            <div className="text-primary">{"}"}</div>
            <div className="mt-2 min-h-4 text-muted-foreground/70">
              {typed}
              <span className="caret text-primary">▍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
