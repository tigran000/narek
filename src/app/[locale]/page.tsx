import { notFound } from "next/navigation";

import { Nav } from "@/components/Nav";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import {
  getMessages,
  isLocale,
  locales,
  type Locale,
} from "@/content/messages";
import { site } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const messages = getMessages(locale);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: locale === "hy" ? "Անհատական մարզիչ" : "Personal Trainer",
    url: `${site.url}/${locale}`,
    sameAs: [site.instagramUrl],
    image: `${site.url}/og.jpg`,
    telephone: site.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: site.country,
    },
  };

  const businessLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: messages.meta.siteName,
    description: messages.meta.description,
    url: `${site.url}/${locale}`,
    telephone: site.phoneTel,
    image: `${site.url}/og.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: site.country,
    },
    areaServed: site.country,
    sameAs: [site.instagramUrl],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personLd, businessLd]),
        }}
      />
      <Nav locale={locale} messages={messages} />
      <main id="main" className="flex-1">
        <Hero messages={messages} />
        <About messages={messages} />
        <Stats messages={messages} />
        <Services messages={messages} />
        <Gallery messages={messages} />
        <Testimonials messages={messages} />
        <Contact messages={messages} />
      </main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
