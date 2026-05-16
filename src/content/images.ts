import type { StaticImageData } from "next/image";

import portraitNight from "../../public/fig4.png";
import portraitMountain from "../../public/fig1.png";
import gallery1 from "../../public/fig2.png";
import gallery2 from "../../public/fig3.png";
import gallery3 from "../../public/fig5.png";

export const images = {
  hero: portraitNight,
  about: portraitMountain,
  gallery: [gallery1, gallery2, portraitMountain, gallery3, portraitNight],
} satisfies {
  hero: StaticImageData;
  about: StaticImageData;
  gallery: StaticImageData[];
};
