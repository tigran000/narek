import type { Messages } from "@/content/messages";

export function Stats({ messages }: { messages: Messages }) {
  return (
    <section
      aria-label="Stats"
      className="border-y border-border bg-surface"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-border sm:grid-cols-3">
        {messages.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-start gap-1 bg-surface px-6 py-10 sm:items-center sm:py-14 sm:text-center"
          >
            <span className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
