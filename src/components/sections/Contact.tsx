import type { Messages } from "@/content/messages";
import { site } from "@/content/site";

import {
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../icons";

export function Contact({ messages }: { messages: Messages }) {
  const t = messages.contact;

  const contactItems = [
    {
      label: t.phoneLabel,
      value: site.phoneDisplay,
      href: `tel:${site.phoneTel}`,
      icon: PhoneIcon,
      external: false,
    },
    {
      label: t.whatsappLabel,
      value: site.phoneDisplay,
      href: site.whatsapp,
      icon: WhatsAppIcon,
      external: true,
    },
    {
      label: t.instagramLabel,
      value: site.instagramHandle,
      href: site.instagramUrl,
      icon: InstagramIcon,
      external: true,
    },
    {
      label: t.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
      icon: MailIcon,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-foreground py-24 text-background sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="font-display mt-3 text-balance text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/75">
            {t.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.primaryCta}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-background/30 bg-background/5 px-6 text-sm font-semibold text-background transition-colors hover:bg-background/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            >
              <InstagramIcon className="h-4 w-4" />
              {t.secondaryCta}
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-5 py-4 backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
                {t.locationLabel}
              </span>
              <span className="text-base font-semibold">{t.location}</span>
            </div>
          </div>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer noopener" : undefined}
                    className="group flex h-full flex-col gap-2 rounded-2xl border border-background/15 bg-background/5 px-5 py-4 transition-colors hover:border-accent hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-background/60 group-hover:text-accent">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </span>
                    <span className="text-base font-semibold text-background break-words">
                      {item.value}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
