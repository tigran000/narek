export const locales = ["en", "hy"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export type Messages = {
  meta: {
    title: string;
    description: string;
    siteName: string;
  };
  nav: {
    about: string;
    services: string;
    gallery: string;
    contact: string;
    book: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    nameFirst: string;
    nameLast: string;
    tagline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    scrollHint: string;
    portraitAlt: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    bullets: string[];
    portraitAlt: string;
  };
  stats: Array<{ value: string; label: string }>;
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
      bullets: string[];
      price: string;
      cta: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    intro: string;
    captions: string[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: Array<{ quote: string; author: string; role: string }>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    location: string;
    locationLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    instagramLabel: string;
    emailLabel: string;
    emailPlaceholder: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  languageSwitcher: {
    label: string;
    en: string;
    hy: string;
  };
};

const en: Messages = {
  meta: {
    title:
      "Narek Hambardzumyan – Personal Trainer & Coach in Yerevan, Armenia",
    description:
      "Personal training, online coaching and nutrition plans with Narek Hambardzumyan in Yerevan, Armenia. Build strength, lose fat and feel unstoppable.",
    siteName: "Narek Hambardzumyan",
  },
  nav: {
    about: "About",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    book: "Book a session",
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Personal Trainer · Yerevan, Armenia",
    nameFirst: "Narek",
    nameLast: "Hambardzumyan",
    tagline: "Train hard. Recover smart. Build the body you actually want.",
    description:
      "Strength, conditioning and nutrition coaching for people who are done guessing. Tailored programs, real accountability, results you can measure.",
    primaryCta: "Book on WhatsApp",
    secondaryCta: "Call now",
    tertiaryCta: "Explore the programs",
    scrollHint: "Scroll",
    portraitAlt: "Portrait of personal trainer Narek Hambardzumyan",
  },
  about: {
    eyebrow: "About",
    heading: "Coaching grounded in science, fueled by Armenian grit.",
    paragraphs: [
      "I'm Narek — a Yerevan-based personal trainer helping people of every level get stronger, leaner and more confident. I've spent years studying movement, programming and nutrition so my clients don't have to.",
      "My approach is simple: assess where you are, build a plan that fits your life, and keep you consistent until the results stick. No fads, no shortcuts, no nonsense.",
    ],
    bullets: [
      "Certified personal trainer & strength coach",
      "1-on-1 sessions in Yerevan and online programs worldwide",
      "Specialised in fat loss, muscle building and athletic performance",
      "Nutrition guidance built around real Armenian food",
    ],
    portraitAlt: "Narek Hambardzumyan outdoors with mountains in background",
  },
  stats: [
    { value: "8+", label: "Years coaching" },
    { value: "300+", label: "Clients trained" },
    { value: "100%", label: "Personalised plans" },
  ],
  services: {
    eyebrow: "Services",
    heading: "Programs designed around your goal.",
    intro:
      "Pick the format that fits your life. Every program is fully personalised — your body, your schedule, your standards.",
    items: [
      {
        title: "1-on-1 Personal Training",
        description:
          "In-person sessions in Yerevan with hands-on coaching, perfect form and zero guesswork.",
        bullets: [
          "Movement & posture assessment",
          "Periodised strength program",
          "Weekly progress tracking",
        ],
        price: "From 8,000 ֏ / session",
        cta: "Start training",
      },
      {
        title: "Online Coaching",
        description:
          "Train anywhere with a custom program delivered to your phone, plus weekly check-ins with me.",
        bullets: [
          "Custom training app access",
          "Form review on every lift",
          "Weekly video check-ins",
        ],
        price: "From 25,000 ֏ / month",
        cta: "Coach me online",
      },
      {
        title: "Nutrition & Habit Coaching",
        description:
          "A realistic eating plan built around Armenian cuisine, your schedule and your goals — no fad diets.",
        bullets: [
          "Personalised macro targets",
          "Meal templates & shopping list",
          "Habit tracking and adjustments",
        ],
        price: "From 15,000 ֏ / month",
        cta: "Fix my nutrition",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    heading: "On the floor and off it.",
    intro:
      "A few moments from training, travel and life around Armenia.",
    captions: [
      "Training session",
      "On the road",
      "Studio shoot",
      "Mountain reset",
      "Off the clock",
    ],
  },
  testimonials: {
    eyebrow: "Client stories",
    heading: "Real people. Real change.",
    items: [
      {
        quote:
          "Narek is the first coach who actually listened. Three months in I'm 9 kg down, lifting heavier than ever and finally enjoying training.",
        author: "Anna G.",
        role: "Online client, Yerevan",
      },
      {
        quote:
          "I came in with a bad back and zero confidence. Narek rebuilt my movement piece by piece — now I deadlift twice my bodyweight, pain free.",
        author: "Davit M.",
        role: "1-on-1 client, Yerevan",
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    heading: "Ready to start? Let's talk.",
    intro:
      "Tell me about your goals and I'll come back with a plan that actually fits your life. Quickest reply on WhatsApp or Instagram.",
    location: "Yerevan, Armenia",
    locationLabel: "Based in",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    instagramLabel: "Instagram",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    primaryCta: "Message on WhatsApp",
    secondaryCta: "DM on Instagram",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built in Yerevan.",
  },
  languageSwitcher: {
    label: "Language",
    en: "EN",
    hy: "ՀԱՅ",
  },
};

const hy: Messages = {
  meta: {
    title:
      "Նարեկ Համբարձումյան – Անհատական մարզիչ Երևանում",
    description:
      "Անհատական մարզումներ, օնլայն ծրագրեր և սննդակարգի կազմում Նարեկ Համբարձումյանի հետ Երևանում։ Ուժ, ֆիզիկական պատրաստվածություն և իրական արդյունքներ։",
    siteName: "Նարեկ Համբարձումյան",
  },
  nav: {
    about: "Իմ մասին",
    services: "Ծառայություններ",
    gallery: "Պատկերասրահ",
    contact: "Կապ",
    book: "Ամրագրել",
    skipToContent: "Անցնել բովանդակությանը",
    openMenu: "Բացել մենյուն",
    closeMenu: "Փակել մենյուն",
  },
  hero: {
    eyebrow: "Անհատական մարզիչ · Երևան, Հայաստան",
    nameFirst: "Նարեկ",
    nameLast: "Համբարձումյան",
    tagline:
      "Մարզվիր խելացի։ Վերականգնվիր ճիշտ։ Կառուցիր այն մարմինը, որ իսկապես ուզում ես։",
    description:
      "Ուժի, ֆիզիկական պատրաստվածության և սննդակարգի մարզում նրանց համար, ովքեր պատրաստ են լուրջ քայլերի։ Անհատական ծրագրեր, իրական աջակցություն և չափելի արդյունքներ։",
    primaryCta: "Գրել WhatsApp-ով",
    secondaryCta: "Զանգահարել",
    tertiaryCta: "Տեսնել ծրագրերը",
    scrollHint: "Ոլորել",
    portraitAlt: "Անհատական մարզիչ Նարեկ Համբարձումյանի դիմանկար",
  },
  about: {
    eyebrow: "Իմ մասին",
    heading:
      "Մարզում՝ հիմնված գիտության վրա, ոգևորված հայկական ոգով։",
    paragraphs: [
      "Բարև, ես Նարեկն եմ՝ Երևանում բնակվող անհատական մարզիչ, որն օգնում է բոլոր մակարդակի մարդկանց դառնալ ավելի ուժեղ, սպորտային և վստահ։ Տարիներ շարունակ ուսումնասիրել եմ շարժումը, մարզումների ծրագրավորումն ու սննդակարգը՝ որպեսզի դու չստիպվես։",
      "Իմ մոտեցումը պարզ է՝ գնահատել քո ներկայիս վիճակը, կազմել ծրագիր, որը կհամապատասխանի քո կյանքին, և պահել քեզ հետևողական, մինչև արդյունքները ամրապնդվեն։ Ոչ մի հնարք, ոչ մի դյուրին ճանապարհ, միայն աշխատանք։",
    ],
    bullets: [
      "Հավաստագրված անհատական մարզիչ և ուժային մարզիչ",
      "Անհատական մարզումներ Երևանում և օնլայն ծրագրեր ամբողջ աշխարհում",
      "Մասնագիտացում՝ քաշի կորուստ, մկանազանգվածի աճ և մարզական ձև",
      "Սննդակարգ՝ կառուցված իրական հայկական խոհանոցի շուրջ",
    ],
    portraitAlt: "Նարեկ Համբարձումյանը լեռների ֆոնին",
  },
  stats: [
    { value: "8+", label: "Տարվա փորձ" },
    { value: "300+", label: "Մարզվող" },
    { value: "100%", label: "Անհատական ծրագիր" },
  ],
  services: {
    eyebrow: "Ծառայություններ",
    heading: "Ծրագրեր՝ ստեղծված քո նպատակի շուրջ։",
    intro:
      "Ընտրիր այն ֆորմատը, որը հարմար է քո կյանքին։ Յուրաքանչյուր ծրագիր ամբողջովին անհատական է՝ քո մարմինը, քո գրաֆիկը, քո չափանիշները։",
    items: [
      {
        title: "Անհատական մարզումներ",
        description:
          "Անձամբ Երևանում՝ ուղիղ վերահսկողություն, ճիշտ տեխնիկա և զրո կասկածներ։",
        bullets: [
          "Շարժման և կեցվածքի գնահատում",
          "Փուլային ուժային ծրագիր",
          "Շաբաթական առաջընթացի վերահսկում",
        ],
        price: "8,000 ֏-ից / պարապմունք",
        cta: "Սկսել մարզվել",
      },
      {
        title: "Օնլայն մարզում",
        description:
          "Մարզվիր ցանկացած վայրից՝ անհատական ծրագիրը հեռախոսում, և շաբաթական կապ ինձ հետ։",
        bullets: [
          "Անհատական մարզումների հավելված",
          "Տեխնիկայի ստուգում ամեն վարժության",
          "Շաբաթական վիդեո զրույց",
        ],
        price: "25,000 ֏-ից / ամիս",
        cta: "Մարզիր ինձ օնլայն",
      },
      {
        title: "Սննդակարգ և սովորույթներ",
        description:
          "Ռեալ սննդակարգ՝ կառուցված հայկական խոհանոցի, քո գրաֆիկի և նպատակների շուրջ։",
        bullets: [
          "Անհատական մակրո թիրախներ",
          "Ուտեստների կաղապարներ և գնումների ցուցակ",
          "Սովորույթների վերահսկում և ճշգրտում",
        ],
        price: "15,000 ֏-ից / ամիս",
        cta: "Շտկել սննդակարգս",
      },
    ],
  },
  gallery: {
    eyebrow: "Պատկերասրահ",
    heading: "Դահլիճում և դահլիճից դուրս։",
    intro: "Մի քանի պահ մարզումներից, ճանապարհորդություններից և Հայաստանից։",
    captions: [
      "Մարզման պահ",
      "Ճանապարհին",
      "Ստուդիական լուսանկարահանում",
      "Լեռնային վերագործարկում",
      "Ազատ ժամանակ",
    ],
  },
  testimonials: {
    eyebrow: "Մարզվողների կարծիքներ",
    heading: "Իրական մարդիկ։ Իրական փոփոխություն։",
    items: [
      {
        quote:
          "Նարեկը առաջին մարզիչն էր, որն իսկապես լսեց ինձ։ Երեք ամսում 9 կգ պակասել եմ, ավելի ծանր եմ բարձրացնում, քան երբևէ, և վերջապես հաճույք եմ ստանում մարզումներից։",
        author: "Աննա Գ.",
        role: "Օնլայն մարզվող, Երևան",
      },
      {
        quote:
          "Եկա մեջքի ցավերով և զրո վստահությամբ։ Նարեկը կտոր-կտոր վերակառուցեց իմ շարժումը — հիմա հանգիստ բարձրացնում եմ քաշիցս երկու անգամ մեծ, առանց ցավի։",
        author: "Դավիթ Մ.",
        role: "Անհատական մարզվող, Երևան",
      },
    ],
  },
  contact: {
    eyebrow: "Կապվել",
    heading: "Պատրա՞ստ ես սկսել։ Եկ խոսենք։",
    intro:
      "Պատմիր քո նպատակների մասին, և ես կվերադառնամ ծրագրով, որը կհարմարվի քո կյանքին։ Ամենաարագ պատասխանը՝ WhatsApp-ով կամ Instagram-ով։",
    location: "Երևան, Հայաստան",
    locationLabel: "Գտնվում եմ",
    phoneLabel: "Հեռախոս",
    whatsappLabel: "WhatsApp",
    instagramLabel: "Instagram",
    emailLabel: "Էլ. փոստ",
    emailPlaceholder: "your@email.com",
    primaryCta: "Գրել WhatsApp-ով",
    secondaryCta: "Գրել Instagram-ով",
  },
  footer: {
    rights: "Բոլոր իրավունքները պաշտպանված են։",
    builtWith: "Ստեղծված է Երևանում։",
  },
  languageSwitcher: {
    label: "Լեզու",
    en: "EN",
    hy: "ՀԱՅ",
  },
};

const dictionaries: Record<Locale, Messages> = { en, hy };

export const getMessages = (locale: Locale): Messages => dictionaries[locale];

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  hy: "hy",
};
