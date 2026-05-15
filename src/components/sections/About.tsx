import Image from "next/image";

import { images } from "@/content/images";
import type { Messages } from "@/content/messages";

import { CheckIcon } from "../icons";

export function About({ messages }: { messages: Messages }) {
  const t = messages.about;
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-background py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface-2">
            <Image
              src={images.about}
              alt={t.portraitAlt}
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-4 hidden h-24 w-24 rounded-full bg-accent/30 blur-2xl lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 hidden h-16 w-16 rounded-full border-2 border-accent lg:block"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
            {t.eyebrow}
          </p>
          <h2
            id="about-title"
            className="font-display mt-3 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            {t.heading}
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
