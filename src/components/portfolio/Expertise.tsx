import { expertise } from "@/lib/portfolio-data";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="mx-auto max-w-6xl border-t border-hairline px-6 py-20"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-primary">
        02 / Expertise
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
        Tools & expertise
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {expertise.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-hairline bg-surface p-6"
          >
            <div
              className={`text-xs uppercase tracking-[0.2em] ${
                group.tone === "glow" ? "text-glow" : "text-primary"
              }`}
            >
              {group.category}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {group.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((t) => (
                <span
                  key={t}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    group.tone === "glow"
                      ? "border-glow/20 bg-glow/10"
                      : "border-primary/20 bg-primary/10"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
