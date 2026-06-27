import { oNasPage } from "@/content/pages/o-nas";

export type ONasValueIcon = "layers" | "shield-check" | "file-check";

export type ONasHighlight = {
  label: string;
  value: string;
  mono: string;
  numericValue: number;
  suffix: string;
  decimal?: boolean;
};

export type ONasValueCard = {
  icon: ONasValueIcon;
  label: string;
  title: string;
  body: string;
};

export const oNasLayout = {
  hero: {
    ...oNasPage.hero,
    image: "/image/cargo_conteiners.jpg",
    imageAlt: "Kontenery cargo — logistyka i import z Chin",
    primaryCta: { label: "Nasza historia", href: "#o-nas-story" },
    secondaryCta: {
      label: oNasPage.cta.primary.label,
      href: oNasPage.cta.primary.href,
    },
  },
  highlights: [
    {
      label: "Lat doświadczenia",
      value: "12+",
      mono: "OD 2012",
      numericValue: 12,
      suffix: "+",
    },
    {
      label: "Wysyłek miesięcznie",
      value: "120+",
      mono: "OPERACJE",
      numericValue: 120,
      suffix: "+",
    },
    {
      label: "Średnia ocena",
      value: "4,9",
      mono: "OCENY KLIENTÓW",
      numericValue: 4.9,
      suffix: "",
      decimal: true,
    },
    {
      label: "Zweryfikowanych opinii",
      value: "240+",
      mono: "RECENZJE",
      numericValue: 240,
      suffix: "+",
    },
  ] satisfies ONasHighlight[],
  story: {
    eyebrow: "Zespół",
    ...oNasPage.sections[0],
    image: "/image/quality_control.jpg",
    imageAlt: "Kontrola jakości towarów przed wysyłką z Chin",
    accentValue: "12+",
    accentLabel: "LAT",
  },
  values: {
    eyebrow: "Współpraca",
    title: oNasPage.sections[1].title,
    body: oNasPage.sections[1].body,
    cards: [
      {
        icon: "layers",
        label: "MODUŁOWOŚĆ",
        title: "Bez sztywnego pakietu",
        body: oNasPage.sections[1].bullets![0],
      },
      {
        icon: "shield-check",
        label: "BEZPIECZEŃSTWO",
        title: "Weryfikacja przed płatnością",
        body: oNasPage.sections[1].bullets![1],
      },
      {
        icon: "file-check",
        label: "DOKUMENTACJA",
        title: "Zgodność z wymogami UE",
        body: oNasPage.sections[1].bullets![2],
      },
    ] satisfies ONasValueCard[],
  },
  cta: {
    eyebrow: "Kontakt",
    title: "Gotowy na import z Chin?",
    body: "Niezależnie od skali — od audytu fabryki po pełną logistykę door-to-door. Porozmawiajmy o Twoim projekcie.",
    image: "/image/business_trips.jpg",
    ...oNasPage.cta,
  },
} as const;

export { oNasPage };
