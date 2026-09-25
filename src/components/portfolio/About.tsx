import { stats } from "@/lib/portfolio-data";
import { useReveal } from "@/hooks/use-reveal";
import { useCountUp } from "@/hooks/use-count-up";
import { Reveal } from "./Reveal";

function StatCard({
  value,
  label,
  tone,
  active,
}: {
  value: string;
  label: string;
  tone?: string;
  active: boolean;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match?.[1] ? parseInt(match[1], 10) : 0;
  const suffix = match?.[2] ?? value;
  const count = useCountUp(target, active);

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 transition-colors hover:border-primary/40">
      <div
        className={`font-display text-4xl font-black ${
          tone === "glow" ? "text-glow" : "text-primary"
        }`}
      >
        {match ? count : value}
        {match && suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl border-t border-hairline px-6 py-20"
    >
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            01 / About
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
            From the front desk
            <br />
            to the forecast.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            25 years old and based in Seville, Spain. Driven by tireless effort
            and a problem-solving mindset, I turn data into strategy and
            relationships into results — across revenue management, client
            success, and digital growth.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From a 5-star front desk to revenue forecasting and AI engineering
            studies, I bridge hospitality operations and data — making every
            insight count.
          </p>
        </Reveal>

        <div ref={ref} className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <StatCard
                value={s.value}
                label={s.label}
                tone={s.tone}
                active={visible}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
