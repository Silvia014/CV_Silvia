import { useEffect, useState } from "react";
import { useThemeToggle } from "@/hooks/use-theme";
import { profile } from "@/lib/portfolio-data";

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleTheme = useThemeToggle();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-glow font-display text-sm font-black text-primary-foreground">
            S
          </div>
          <span className="font-display font-semibold tracking-tight">
            {profile.firstName}
            <span className="text-primary">.</span>dev
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative transition-colors hover:text-foreground ${
                active === l.href ? "text-foreground" : ""
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary transition-opacity ${
                  active === l.href ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-primary to-glow px-4 py-1.5 text-xs font-semibold text-primary-foreground sm:inline-block"
          >
            Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid size-9 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <span className="dark:hidden">☀</span>
            <span className="hidden dark:inline">☾</span>
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid size-9 place-items-center rounded-full border border-hairline text-muted-foreground md:hidden"
          >
            <span className="text-sm">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline/50 py-3 text-sm text-muted-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
