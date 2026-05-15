import type { Messages } from "@/content/messages";

export function Testimonials({ messages }: { messages: Messages }) {
  const t = messages.testimonials;
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
            {t.eyebrow}
          </p>
          <h2
            id="testimonials-title"
            className="font-display mt-3 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            {t.heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.items.map((item) => (
            <figure
              key={item.author}
              className="relative flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8 sm:p-10"
            >
              <span
                aria-hidden="true"
                className="font-display text-7xl leading-none text-accent-strong/40"
              >
                &ldquo;
              </span>
              <blockquote className="text-lg leading-relaxed text-foreground sm:text-xl">
                {item.quote}
              </blockquote>
              <figcaption className="mt-2 flex items-center gap-4 border-t border-border pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent/20 font-display text-lg font-bold text-accent-strong">
                  {item.author.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    {item.author}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
