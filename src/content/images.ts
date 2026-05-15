import type { StaticImageData } from "next/image";

import portraitNight from "../../public/622697362_18089191306848276_3501663591605464151_n.jpg";
import portraitMountain from "../../public/641984614_18572279980053291_1729865612807767133_n.jpg";
import gallery1 from "../../public/489910521_18291715570223788_2110420198436094454_n.webp";
import gallery2 from "../../public/620333632_17970548430007130_6263592471449842000_n.webp";
import gallery3 from "../../public/624736541_18089026772043902_5038701583076208103_n.webp";

export const images = {
  hero: portraitNight,
  about: portraitMountain,
  gallery: [gallery1, gallery2, portraitMountain, gallery3, portraitNight],
} satisfies {
  hero: StaticImageData;
  about: StaticImageData;
  gallery: StaticImageData[];
};
