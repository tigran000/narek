import type { ComponentType, SVGProps } from "react";

import type { Messages } from "@/content/messages";
import { site } from "@/content/site";

import {
  AppleIcon,
  ArrowRightIcon,
  CheckIcon,
  DumbbellIcon,
  LaptopIcon,
} from "../icons";

const serviceIcons: ComponentType<SVGProps<SVGSVGElement>>[] = [
  DumbbellIcon,
  LaptopIcon,
  AppleIcon,
];

export function Services({ messages }: { messages: Messages }) {
  const t = messages.services;
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
            {t.eyebrow}
          </p>
          <h2
            id="services-title"
            className="font-display mt-3 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {t.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.items.map((item, i) => {
            const Icon = serviceIcons[i] ?? DumbbellIcon;
            return (
              <article
                key={item.title}
                className="group relative flex flex-col rounded-3xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-strong">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-6 text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-6">
                  <p className="text-sm font-semibold text-foreground">
                    {item.price}
                  </p>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
                  >
                    {item.cta}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
