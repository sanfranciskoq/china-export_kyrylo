import {
  caseStudies,
  caseStudyCategories,
} from "@/content/case-studies";

export type RealizacjeTeaserContent = {
  eyebrow: string;
  title: string;
  lead: string;
  highlights: { value: string; label: string }[];
  bullets: string[];
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
};

const destinationCountries = new Set(
  caseStudies.map((study) => study.destinationCountry),
);

export const realizacjeTeaser: RealizacjeTeaserContent = {
  eyebrow: "Realizacje i branże",
  title: "Importy z Chin — od maszyn po produkty na zamówienie",
  lead: "Obsługujemy projekty B2B w wielu branżach. Ze względu na NDA nie publikujemy nazw klientów — na stronie Realizacje znajdziesz case studies z zakresem, procesem i rezultatami.",
  highlights: [
    {
      value: String(caseStudies.length),
      label: "Projektów w portfolio",
    },
    {
      value: String(caseStudyCategories.length),
      label: "Branż wspieranych",
    },
    {
      value: `${destinationCountries.size}+`,
      label: "Krajów docelowych",
    },
  ],
  bullets: [
    "Laser i przemysł — maszyny CNC, spawalnictwo, automatyka",
    "Maszyny budowlane — minikoparki, osprzęt ciężki, kompresory",
    "Pojazdy elektryczne — rowery, motorowery, pojazdy użytkowe",
    "Gastronomia i naczynia — wyposażenie HORECA, stal nierdzewna",
    "Opakowania i surowce — folie, tworzywa, konsolidacja dostaw",
    "Projekty niestandardowe — komponenty, części zamienne, OEM",
  ],
  image: "/image/plane_shipment.jpg",
  imageAlt: "Kontenery cargo — logistyka i realizacje importu z Chin",
  cta: {
    label: "Zobacz case studies",
    href: "/realizacje",
  },
};
