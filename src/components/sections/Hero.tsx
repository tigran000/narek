import Image from "next/image";

import { images } from "@/content/images";
import type { Messages } from "@/content/messages";
import { site } from "@/content/site";

import {
  ArrowRightIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../icons";

export function Hero({ messages }: { messages: Messages }) {
  const t = messages.hero;
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-black text-white lg:items-center"
    >
      <Image
        src={images.hero}
        alt={t.portraitAlt}
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[50%_15%] sm:object-[55%_18%] lg:object-[60%_15%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/85 via-40% to-black/10 lg:bg-gradient-to-tr lg:from-black lg:via-black/70 lg:to-black/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,208,66,0.18),transparent_55%)]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 pt-[60svh] sm:px-6 sm:pt-[55svh] lg:px-8 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {t.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="font-display mt-6 text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-[8rem]"
          >
            <span className="block">{t.nameFirst}</span>
            <span className="block text-accent">{t.nameLast}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {t.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/65">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.primaryCta}
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.secondaryCta}
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center gap-1 rounded-full px-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              {t.tertiaryCta}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t.scrollHint}
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/60 sm:flex"
      >
        {t.scrollHint}
        <span
          aria-hidden="true"
          className="block h-10 w-px bg-gradient-to-b from-white/60 to-transparent"
        />
      </a>
    </section>
  );
}
