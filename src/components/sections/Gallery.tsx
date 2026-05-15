import Image from "next/image";

import { images } from "@/content/images";
import type { Messages } from "@/content/messages";

export function Gallery({ messages }: { messages: Messages }) {
  const t = messages.gallery;
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
            {t.eyebrow}
          </p>
          <h2
            id="gallery-title"
            className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="text-lg leading-relaxed text-muted">{t.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {images.gallery.map((img, i) => {
            const layouts = [
              "lg:col-span-5 lg:row-span-2 aspect-[4/5]",
              "lg:col-span-4 aspect-[4/3]",
              "lg:col-span-3 aspect-square",
              "lg:col-span-4 aspect-square",
              "lg:col-span-3 aspect-[4/3]",
            ];
            return (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-surface-2 ${layouts[i] ?? "aspect-square"}`}
              >
                <Image
                  src={img}
                  alt={t.captions[i] ?? ""}
                  placeholder="blur"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100"
                />
                <figcaption className="pointer-events-none absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {t.captions[i]}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
