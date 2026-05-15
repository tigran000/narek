import Link from "next/link";

import type { Locale, Messages } from "@/content/messages";
import { site } from "@/content/site";

import {
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../icons";

export function Footer({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
            aria-label={messages.meta.siteName}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-bold tracking-tight text-background">
              NH
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
              {messages.meta.siteName}
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted lg:text-right">
          <p>
            &copy; {year} {site.name}. {messages.footer.rights}
          </p>
          <p className="text-xs uppercase tracking-[0.18em]">
            {messages.footer.builtWith}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={messages.contact.instagramLabel}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={messages.contact.whatsappLabel}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            aria-label={messages.contact.phoneLabel}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
