export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <span>© 2026 Silvia Guerra · All rights reserved</span>
        <a
          href="#top"
          className="rounded-full border border-hairline px-4 py-1.5 transition-colors hover:border-primary/40"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
