import type { DedicatedPageContent } from "./types";

export const audytyFabrykPage: DedicatedPageContent = {
  id: "uslugi-audyty-fabryk",
  meta: {
    title: "Audyty fabryk — China Export",
    description:
      "Weryfikacja dostawców i audyty fabryk w Chinach — wizyta na miejscu, ocena mocy produkcyjnych i raport z rekomendacją.",
  },
  hero: {
    eyebrow: "Przed produkcją",
    title: "Audyty fabryk i weryfikacja dostawców",
    lead: "Sprawdzamy producenta zanim zlecisz produkcję — prawnie, operacyjnie i jakościowo. Fizyczna wizyta w fabryce to standard, nie opcja.",
  },
  sections: [
    {
      title: "Rodzaje audytów",
      body: "Dobieramy zakres do ryzyka produktu i wartości zamówienia — od weryfikacji wideo po pełny audit on-site z inspekcją linii produkcyjnej.",
      bullets: [
        "Weryfikacja prawna — licencje, rejestr, księgi handlowe",
        "Audit wideo na żywo — hala, magazyn, próbki produkcji",
        "Wizyta on-site — pełna inspekcja fabryki z raportem foto/wideo",
        "Re-audit — kontrola przed zleceniem dużej serii",
      ],
    },
    {
      title: "Na co zwracamy uwagę",
      body: "Szukamy sygnałów ostrzegawczych: brak własnej produkcji, niezgodność adresu z dokumentami, brak certyfikatów, zbyt niska cena w stosunku do rynku.",
      bullets: [
        "Zgodność fabryki z deklarowanymi możliwościami",
        "System jakości i dokumentacja procesów",
        "Warunki BCP i backup produkcji",
      ],
    },
    {
      title: "Deliverables",
      body: "Raport PDF z oceną ryzyka (zielony / żółty / czerwony), zdjęciami, rekomendacją i listą pytań do negocjacji.",
    },
  ],
  cta: {
    primary: { label: "Zamów audyt fabryki", href: "/kontakt" },
    secondary: { label: "Umów konsultację", href: "/konsultacja" },
  },
};
