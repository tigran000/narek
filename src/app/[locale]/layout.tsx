import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Oswald } from "next/font/google";

import "../globals.css";
import {
  defaultLocale,
  getMessages,
  isLocale,
  locales,
  localeHtmlLang,
  type Locale,
} from "@/content/messages";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = getMessages(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.meta.title,
      template: `%s · ${t.meta.siteName}`,
    },
    description: t.meta.description,
    applicationName: t.meta.siteName,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    keywords:
      locale === "en"
        ? [
            "personal trainer",
            "fitness coach",
            "Yerevan",
            "Armenia",
            "online coaching",
            "strength training",
            "nutrition coach",
            "Narek Hambardzumyan",
          ]
        : [
            "անհատական մարզիչ",
            "ֆիթնես",
            "Երևան",
            "Հայաստան",
            "օնլայն մարզում",
            "սննդակարգ",
            "Նարեկ Համբարձումյան",
          ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        hy: "/hy",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      url: `${site.url}/${locale}`,
      siteName: t.meta.siteName,
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "hy" ? "hy_AM" : "en_US",
      alternateLocale: locale === "hy" ? "en_US" : "hy_AM",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  return (
    <html
      lang={localeHtmlLang[locale]}
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
