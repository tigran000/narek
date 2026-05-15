"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { site } from "@/content/site";
import type { Locale, Messages } from "@/content/messages";

import {
  CloseIcon,
  InstagramIcon,
  MenuIcon,
} from "./icons";
import { LanguageSwitcher } from "./LanguageSwitcher";

type NavLink = { href: string; label: string };

export function Nav({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const links: NavLink[] = [
    { href: "#about", label: messages.nav.about },
    { href: "#services", label: messages.nav.services },
    { href: "#gallery", label: messages.nav.gallery },
    { href: "#contact", label: messages.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-foreground"
      >
        {messages.nav.skipToContent}
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
          aria-label={messages.meta.siteName}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-bold tracking-tight text-background transition-transform group-hover:scale-105">
            NH
          </span>
          <span className="hidden sm:inline-block font-display text-sm font-semibold uppercase tracking-[0.2em]">
            {messages.meta.siteName}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${messages.contact.instagramLabel} – ${site.instagramHandle}`}
            className="hidden rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:inline-flex"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <LanguageSwitcher
            current={locale}
            messages={messages.languageSwitcher}
          />
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
          >
            {messages.nav.book}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label={open ? messages.nav.closeMenu : messages.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav
          aria-label="Mobile primary"
          className="flex flex-col gap-1 border-t border-border bg-background px-4 pb-6 pt-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-accent text-base font-semibold text-accent-foreground"
          >
            {messages.nav.book}
          </a>
        </nav>
      </div>
    </header>
  );
}
