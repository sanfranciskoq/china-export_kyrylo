import type { FeaturedStepsContent } from "@/content/pages/types";

export type MyWChinachHighlight = {
  value: string;
  label: string;
};

export type MyWChinachPillar = {
  id: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export const myWChinachLayout = {
  meta: {
    title: "My w Chinach — China Export",
    description:
      "Lokalny zespół China Export w Chinach — sourcing, kontrola jakości na miejscu, wyjazdy biznesowe i koordynacja produkcji.",
  },
  hero: {
    eyebrow: "My w Chinach",
    title: "Twój zespół na miejscu — nie zdalny pośrednik",
    lead: "14 osób w trzech miastach Chin. Od weryfikacji dostawców po inspekcje QA i organizację wizyt w fabrykach — reprezentujemy Twoje interesy przy stole negocjacyjnym.",
    image: "/image/plane_shipment.jpg",
    imageAlt: "Logistyka i operacje na miejscu w Chinach",
  },
  highlights: [
    { value: "14", label: "Osób w zespole terenowym" },
    { value: "3", label: "Miasta operacyjne" },
    { value: "PL/EN/CN", label: "Języki zespołu" },
    { value: "Na miejscu", label: "Inspekcje i audyty QA" },
  ] satisfies MyWChinachHighlight[],
  pillars: [
    {
      id: "zespol",
      title: "Zespół w Chinach",
      body: "Lokalny zespół na miejscu — od weryfikacji dostawców po koordynację produkcji i wysyłki. Każdy projekt ma przypisanego opiekuna, który raportuje bezpośrednio do biura w Warszawie.",
      bullets: [
        "Sourcing i negocjacje — identyfikacja i weryfikacja fabryk",
        "Inżynierowie QC — inspekcje na linii produkcyjnej",
        "Logistyka — odbiór z fabryki, magazyn, konsolidacja",
        "Tłumacze techniczni — specyfikacje, umowy, raporty",
      ],
      image: "/image/china_office.jpg",
      imageAlt: "Biuro i zespół China Export w Chinach",
    },
    {
      id: "kontrola-jakosci",
      title: "Kontrola jakości i dokumentacja",
      body: "Inspekcje QA, raporty z kontroli, certyfikaty i pełna dokumentacja zgodna z wymogami importu do UE — wykonywane przez nasz zespół na miejscu, przed wysyłką.",
      bullets: [
        "Inspekcje pre-shipment i inline na linii produkcyjnej",
        "Raporty fotograficzne i wideo z kontroli",
        "Certyfikaty, deklaracje zgodności i dokumentacja celna",
        "Weryfikacja opakowań, etykiet i specyfikacji pod rynek UE",
      ],
      image: "/image/quality_control.jpg",
      imageAlt: "Kontrola jakości towarów przed wysyłką z Chin",
    },
    {
      id: "wyjazdy",
      title: "Wyjazdy biznesowe do Chin",
      body: "Organizujemy wizyty w fabrykach, tłumaczenia na miejscu i wsparcie podczas negocjacji z dostawcami — z konkretnym programem, nie na ślepo.",
      bullets: [
        "Shortlist fabryk i potwierdzone terminy wizyt przed wylotem",
        "Tłumaczenie techniczne podczas rozmów i inspekcji hali",
        "Transport lokalny między fabrykami i wspólne podsumowania",
        "Raport porównawczy po powrocie z rekomendacjami",
      ],
      image: "/image/business_trips.jpg",
      imageAlt: "Transport lotniczy — wyjazdy biznesowe do Chin",
    },
  ] satisfies MyWChinachPillar[],
  locations: {
    sectionTitle: "Gdzie działamy",
    sectionLead:
      "Biura terenowe w trzech regionach Chin. Wybór bazy zależy od branży i lokalizacji dostawców.",
    steps: [
      {
        id: "shenzhen",
        tabLabel: "Shenzhen",
        title: "Shenzhen — elektronika i hardware",
        body: "Centrum elektroniki i komponentów. Idealna baza dla projektów hardware, IoT, akcesoriów elektronicznych i produkcji OEM w regionie Pearl River Delta.",
        bullets: [
          "Elektronika, komponenty, urządzenia IoT",
          "Hardware i akcesoria mobilne",
          "Szybkie prototypowanie i małe serie",
        ],
        image: "/image/quality_control.jpg",
        imageAlt: "Region Shenzhen — elektronika i produkcja OEM",
      },
      {
        id: "yiwu",
        tabLabel: "Yiwu",
        title: "Yiwu — handel hurtowy i małe serie",
        body: "Największy hub handlu hurtowego w Chinach. Sprawdzamy dostawców towarów konsumenckich, gadżetów i produktów na małe serie lub próbki.",
        bullets: [
          "Towary konsumenckie i gadżety",
          "Małe serie i próbki przed produkcją",
          "Konsolidacja dostaw z wielu kategorii",
        ],
        image: "/image/china_office.jpg",
        imageAlt: "Region Yiwu — handel hurtowy i małe serie",
      },
      {
        id: "ningbo",
        tabLabel: "Ningbo",
        title: "Ningbo — port morski i duże wolumeny",
        body: "Kluczowy port morski i region produkcji OEM. Koordynujemy logistykę, kontrolę jakości i wysyłki kontenerowe dla większych wolumenów.",
        bullets: [
          "Port morski i wysyłki FCL/LCL",
          "Produkcja OEM i duże serie",
          "Koordynacja magazynowa i konsolidacja",
        ],
        image: "/image/cargo_conteiners.jpg",
        imageAlt: "Region Ningbo — logistyka morska i produkcja OEM",
      },
    ],
  } satisfies FeaturedStepsContent,
  cta: {
    primary: { label: "Umów konsultację", href: "/konsultacja" },
    secondary: { label: "Wyślij zapytanie", href: "/kontakt" },
  },
} as const;
