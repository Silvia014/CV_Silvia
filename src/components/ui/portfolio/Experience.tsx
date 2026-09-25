import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl border-t border-hairline px-6 py-20"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-primary">
        03 / Experience
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
        Experience
      </h2>

      <div className="mt-10 space-y-6">
        {experience.map((e) => (
          <div
            key={e.role + e.company}
            className="grid gap-6 rounded-3xl border border-hairline bg-surface p-6 md:grid-cols-[200px_1fr]"
          >
            <div>
              <div
                className={`font-mono text-sm ${
                  e.tone === "glow" ? "text-glow" : "text-primary"
                }`}
              >
                {e.period}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {e.location}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">{e.role}</h3>
              <div className="text-sm text-primary">{e.company}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
