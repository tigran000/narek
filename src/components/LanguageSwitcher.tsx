"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  locales,
  type Locale,
  type Messages,
} from "@/content/messages";

const labels: Record<Locale, string> = {
  en: "EN",
  hy: "ՀԱՅ",
};

export function LanguageSwitcher({
  current,
  messages,
}: {
  current: Locale;
  messages: Messages["languageSwitcher"];
}) {
  const pathname = usePathname() ?? `/${current}`;

  const buildHref = (target: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${target}`;
    if ((locales as readonly string[]).includes(segments[0])) {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }
    return `/${segments.join("/")}`;
  };

  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-surface/60 p-0.5 text-xs font-semibold backdrop-blur"
      role="group"
      aria-label={messages.label}
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={buildHref(locale)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={`flex h-8 min-w-12 items-center justify-center rounded-full px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              active
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            {labels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
