/**
 * CMS-ready case study content.
 * Replace this file with Sanity/Contentlayer fetch when CMS is connected.
 */

export type CaseStudyCategoryId =
  | "laser-industrial"
  | "construction"
  | "ev-mobility"
  | "cookware"
  | "packaging"
  | "custom";

export type CaseStudyCategory = {
  id: CaseStudyCategoryId;
  label: string;
  description: string;
  examples: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  categoryId: CaseStudyCategoryId;
  summary: string;
  coverImage: string;
  challenge: string;
  scope: string[];
  destinationCountry: string;
  outcome: string;
  gallery: CaseStudyImage[];
  publishedAt: string;
};

export const caseStudyCategories: CaseStudyCategory[] = [
  {
    id: "laser-industrial",
    label: "Laser i przemysł",
    description: "Maszyny CNC, spawalnictwo laserowe i linie produkcyjne.",
    examples:
      "Cięcie laserowe CNC, spawanie i czyszczenie laserowe, obróbka metalu i drewna, zautomatyzowane linie pakowania żywności.",
  },
  {
    id: "construction",
    label: "Maszyny budowlane",
    description: "Sprzęt ciężki i maszyny specjalistyczne dla budownictwa.",
    examples:
      "Minikoparki, ładowarki, kompresory powietrza, pojazdy budowlane i osprzęt ciężki.",
  },
  {
    id: "ev-mobility",
    label: "Pojazdy elektryczne",
    description: "Mobilność miejska i pojazdy użytkowe na prąd.",
    examples:
      "Rowery elektryczne, motorowery, motocykle elektryczne i trójkołowe pojazdy użytkowe.",
  },
  {
    id: "cookware",
    label: "Gastronomia i naczynia",
    description: "Wyposażenie kuchni komercyjnej i artykuły metalowe.",
    examples:
      "Szpatułki i nabierki ze stali, garnki żeliwne, kazany, pokrywy szklane, frytownice przemysłowe.",
  },
  {
    id: "packaging",
    label: "Opakowania i surowce",
    description: "Materiały opakowaniowe i surowce dla produkcji.",
    examples:
      "Papier do pieczenia, tworzywa sztuczne, polietylen, folia stretch, tektura i opakowania komercyjne.",
  },
  {
    id: "custom",
    label: "Projekty niestandardowe",
    description: "Komponenty, części zamienne i zapytania poza katalogiem.",
    examples:
      "Komponenty przemysłowe, części zamienne, inwentarz B2B, surowce i produkcja na zamówienie.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    slug: "laser-cnc-germany",
    title: "Linie cięcia laserowego CNC — dostawa do Niemiec",
    categoryId: "laser-industrial",
    summary:
      "Kompleksowy import dwóch maszyn CNC z audytem producenta, kontrolą przed wysyłką i organizacją frachtu morskiego.",
    coverImage: "/case-studies/laser-cnc.jpg",
    challenge:
      "Klient z branży metalowej potrzebował zweryfikowanego dostawcy maszyn CNC o określonych parametrach mocy i precyzji. Wymagana była zgodność z normami UE oraz dostawa w ściśle określonym terminie przed uruchomieniem nowej hali.",
    scope: [
      "Sourcing i negocjacje z producentami",
      "Audyt fabryki i weryfikacja certyfikatów",
      "Kontrola jakości przed wysyłką",
      "Organizacja frachtu morskiego FCL",
      "Koordynacja odprawy w UE",
    ],
    destinationCountry: "Niemcy",
    outcome:
      "Dostawa w 62 dni od podpisania umowy. Oba urządzenia przeszły inspekcję QA bez usterek. Klient uruchomił produkcję zgodnie z harmonogramem inwestycji.",
    gallery: [
      {
        src: "/case-studies/laser-cnc.jpg",
        alt: "Maszyna CNC przygotowana do załadunku",
      },
      {
        src: "/case-studies/laser-cnc-2.jpg",
        alt: "Kontrola jakości komponentów przed wysyłką",
      },
      {
        src: "/case-studies/laser-cnc-3.jpg",
        alt: "Opakowanie eksportowe maszyny przemysłowej",
      },
    ],
    publishedAt: "2025-11-12",
  },
  {
    id: "cs-002",
    slug: "mini-excavator-poland",
    title: "Minikoparki i osprzęt — dostawa do Polski",
    categoryId: "construction",
    summary:
      "Import trzech minikoparek z weryfikacją producenta, konsolidacją ładunku i dostawą door-to-door.",
    coverImage: "/case-studies/excavator.jpg",
    challenge:
      "Firma budowlana szukała ekonomicznych minikoparek z potwierdzoną historią eksportu do Europy. Kluczowe były realne możliwości serwisowe producenta i termin dostawy przed sezonem budowlym.",
    scope: [
      "Wyszukiwanie i shortlista producentów",
      "Audyt fabryki na miejscu",
      "Konsolidacja ładunku z dwóch linii produkcyjnych",
      "Spedycja morska i ubezpieczenie frachtu",
      "Odprawa celna i last mile",
    ],
    destinationCountry: "Polska",
    outcome:
      "Trzy maszyny dostarczone w 54 dni. Konsolidacja obniżyła koszt transportu o ok. 18% względem osobnych przesyłek. Wszystkie jednostki spełniły parametry techniczne z umowy.",
    gallery: [
      {
        src: "/case-studies/excavator.jpg",
        alt: "Minikoparka przed załadunkiem kontenerowym",
      },
      {
        src: "/case-studies/excavator-2.jpg",
        alt: "Osprzęt budowlany zapakowany do eksportu",
      },
    ],
    publishedAt: "2025-10-03",
  },
  {
    id: "cs-003",
    slug: "e-bikes-netherlands",
    title: "Rowery elektryczne B2B — dostawa do Holandii",
    categoryId: "ev-mobility",
    summary:
      "Import partii e-bike’ów flotowych z kontrolą baterii, dokumentacją i dostawą do magazynu dystrybutora.",
    coverImage: "/case-studies/ebikes.jpg",
    challenge:
      "Dystrybutor mobilności miejskiej zamówił partię e-bike’ów pod wynajem flotowy. Wymagana była zgodność baterii z przepisami UE, spójne opakowanie i etykietowanie oraz dostawa do centralnego hubu logistycznego.",
    scope: [
      "Sourcing producenta OEM",
      "Kontrola jakości i testy funkcjonalne",
      "OEM / etykietowanie i instrukcje PL/EN",
      "Organizacja transportu morskiego LCL",
      "Odprawa celna w Holandii",
    ],
    destinationCountry: "Holandia",
    outcome:
      "200 jednostek dostarczonych w 48 dni. Wskaźnik usterek na inspekcji odbioru: poniżej 1%. Flota uruchomiona przed sezonem wynajmu.",
    gallery: [
      {
        src: "/case-studies/ebikes.jpg",
        alt: "Rowery elektryczne przygotowane do eksportu",
      },
      {
        src: "/case-studies/ebikes-2.jpg",
        alt: "Kontrola opakowania i komponentów e-bike",
      },
    ],
    publishedAt: "2025-09-18",
  },
  {
    id: "cs-004",
    slug: "commercial-kitchen-poland",
    title: "Wyposażenie gastronomii HORECA — Polska",
    categoryId: "cookware",
    summary:
      "Import garnków i urządzeń ze stali nierdzewnej dla sieci gastronomicznej z pełną kontrolą jakości.",
    coverImage: "/case-studies/kitchen.jpg",
    challenge:
      "Sieć restauracji potrzebowała ujednoliconej serii naczyń i urządzeń kuchennych spełniających normy kontaktu z żywnością. Priorytetem była powtarzalna jakość partii i krótki czas dostawy.",
    scope: [
      "Identyfikacja producenta i próbki",
      "Kontrola jakości partii produkcyjnej",
      "Koordynacja produkcji i pakowania",
      "Eksport i fracht morski",
      "Dostawa do magazynu klienta",
    ],
    destinationCountry: "Polska",
    outcome:
      "Dostawa kompletna w 41 dni. Trzy partie QA zatwierdzone bez reklamacji. Klient objął zapas na 6 miesięcy działalności sezonowej.",
    gallery: [
      {
        src: "/case-studies/kitchen.jpg",
        alt: "Naczynia ze stali nierdzewnej gotowe do wysyłki",
      },
      {
        src: "/case-studies/kitchen-2.jpg",
        alt: "Inspekcja jakości wyrobów gastronomicznych",
      },
    ],
    publishedAt: "2025-08-22",
  },
  {
    id: "cs-005",
    slug: "packaging-materials-czech",
    title: "Materiały opakowaniowe — dostawa do Czech",
    categoryId: "packaging",
    summary:
      "Regularna dostawa folii stretch i opakowań kartonowych z konsolidacją wielu dostawców.",
    coverImage: "/case-studies/packaging.jpg",
    challenge:
      "Producent FMCG importował materiały opakowaniowe od trzech różnych fabryk w Chinach. Klient potrzebował jednego punktu koordynacji, konsolidacji i przewidywalnego harmonogramu dostaw.",
    scope: [
      "Koordynacja trzech producentów",
      "Konsolidacja ładunków w magazynie",
      "Kontrola jakości i dokumentacja eksportowa",
      "Fracht morski FCL",
      "Wsparcie odprawy celnej",
    ],
    destinationCountry: "Czechy",
    outcome:
      "Cykl dostaw skrócony do 35–40 dni. Konsolidacja zredukowała koszty logistyki o ok. 22%. Stały rytm dostaw przez 3 kolejne kwartały.",
    gallery: [
      {
        src: "/case-studies/packaging.jpg",
        alt: "Materiały opakowaniowe w magazynie konsolidacyjnym",
      },
      {
        src: "/case-studies/packaging-2.jpg",
        alt: "Kontener załadowany folią i opakowaniami",
      },
    ],
    publishedAt: "2025-07-14",
  },
  {
    id: "cs-006",
    slug: "custom-components-sweden",
    title: "Komponenty przemysłowe na zamówienie — Szwecja",
    categoryId: "custom",
    summary:
      "Niestandardowe komponenty metalowe z weryfikacją tolerancji i dostawą just-in-time do linii montażowej.",
    coverImage: "/case-studies/custom-parts.jpg",
    challenge:
      "Producent maszyn przemysłowych potrzebował serii niestandardowych komponentów z tolerancjami ±0,05 mm. Wcześniejszy import od niezweryfikowanego dostawcy skutkował wysokim wskaźnikiem reklamacji.",
    scope: [
      "Sourcing i audyt nowego producenta",
      "Zatwierdzenie próbek i dokumentacji technicznej",
      "Kontrola wymiarowa partii produkcyjnej",
      "Zarządzanie eksportem i frachtem lotniczym",
      "Dostawa ekspresowa do fabryki klienta",
    ],
    destinationCountry: "Szwecja",
    outcome:
      "Pierwsza partia 5 000 szt. dostarczona w 28 dni (transport lotniczy). Reklamacje: 0,3%. Klient przeszedł na stałą miesięczną dostawę komponentów.",
    gallery: [
      {
        src: "/case-studies/custom-parts.jpg",
        alt: "Komponenty metalowe po inspekcji wymiarowej",
      },
      {
        src: "/case-studies/custom-parts-2.jpg",
        alt: "Opakowanie eksportowe części przemysłowych",
      },
    ],
    publishedAt: "2025-06-05",
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}

export function getCaseStudiesByCategory(
  categoryId: CaseStudyCategoryId | "all",
): CaseStudy[] {
  if (categoryId === "all") return caseStudies;
  return caseStudies.filter((c) => c.categoryId === categoryId);
}

export function getCategoryById(
  id: CaseStudyCategoryId,
): CaseStudyCategory | undefined {
  return caseStudyCategories.find((c) => c.id === id);
}
