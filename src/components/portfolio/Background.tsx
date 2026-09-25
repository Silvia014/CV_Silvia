/**
 * Fixed ambient background: blurred color orbs + faint grid.
 * Sits behind all content (-z-10).
 */
export function Background() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute -top-40 -left-24 size-[560px] rounded-full bg-glow/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 size-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 size-[460px] rounded-full bg-glow/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
    </div>
  );
}
