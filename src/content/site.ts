export const site = {
  name: "Narek Hambardzumyan",
  city: "Yerevan",
  country: "Armenia",
  phoneDisplay: "+374 91 04 06 97",
  phoneTel: "+37491040697",
  whatsapp: "https://wa.me/37491040697",
  instagramHandle: "@n__hambardzumyan",
  instagramUrl: "https://www.instagram.com/n__hambardzumyan/",
  // TODO(narek): replace with your real public email when ready
  email: "hello@narekfit.com",
  url: "https://narekhambardzumyan.com",
} as const;

export type SiteConfig = typeof site;
