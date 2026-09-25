import { useState } from "react";
import { socials } from "@/lib/portfolio-data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl border-t border-hairline px-6 py-20"
    >
      <div className="grid gap-12 rounded-3xl border border-hairline bg-surface p-8 md:p-12 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            05 / Contact
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
            Let's build something.
          </h2>
          <p className="mt-4 text-muted-foreground">
            I will be available for any question that may arise. Fill in the form
            and I'll get back to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-hairline px-4 py-2 text-sm transition-colors hover:border-primary/40"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Name
            </label>
            <input
              required
              placeholder="Your name"
              className="mt-1 w-full rounded-xl border border-hairline bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-hairline bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              rows={4}
              required
              placeholder="Tell me about your project or opportunity..."
              className="mt-1 w-full resize-none rounded-xl border border-hairline bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50"
            />
          </div>
          <button
            type="submit"
            disabled={status !== "idle"}
            className="w-full rounded-full bg-gradient-to-r from-primary to-glow py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-70"
          >
            {status === "idle"
              ? "Send message"
              : status === "sending"
                ? "Sending…"
                : "✓ Message sent"}
          </button>
        </form>
      </div>
    </section>
  );
}
