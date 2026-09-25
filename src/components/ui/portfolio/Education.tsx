import { education, languages } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl border-t border-hairline px-6 py-20"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-primary">
        04 / Education & Certifications
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
        Education & certifications
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.title + e.org}
            className="rounded-2xl border border-hairline bg-surface p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-muted-foreground">
                {e.period}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] ${
                  e.tone === "glow"
                    ? "bg-glow/10 text-glow"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {e.detail}
              </span>
            </div>
            <h3 className="mt-3 font-display text-base font-bold leading-snug">
              {e.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-hairline bg-surface p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-primary">
          Languages
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {languages.map((l) => (
            <div key={l.name}>
              <div className="font-display font-bold">{l.name}</div>
              <div className="text-xs text-muted-foreground">{l.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
