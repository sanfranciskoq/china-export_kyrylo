import type { DedicatedPageContent } from "./types";

export const wyszukiwanieDostawcowPage: DedicatedPageContent = {
  id: "uslugi-wyszukiwanie-dostawcow",
  meta: {
    title: "Wyszukiwanie dostawców — China Export",
    description:
      "Sourcing i negocjacje z fabrykami w Chinach — identyfikacja producentów, porównanie ofert i negocjacja warunków handlowych.",
  },
  hero: {
    eyebrow: "Przed produkcją",
    title: "Wyszukiwanie dostawców i negocjacje",
    lead: "Znajdujemy fabryki dopasowane do Twojej specyfikacji, weryfikujemy wstępnie i negocjujemy warunki — zanim podejmiesz decyzję o współpracy.",
  },
  sections: [
    {
      title: "Jak przebiega sourcing",
      body: "Na podstawie briefu (produkt, MOQ, budżet, certyfikaty) przeszukujemy bazy producentów i kontaktujemy shortlistę. Porównujemy oferty w ujednoliconym formacie — cena, MOQ, lead time, warunki płatności.",
      bullets: [
        "Brief i specyfikacja techniczna",
        "Identyfikacja 5–15 potencjalnych fabryk",
        "Wstępna weryfikacja licencji i certyfikatów",
        "Porównanie ofert w raporcie decyzyjnym",
      ],
    },
    {
      title: "Co otrzymujesz",
      body: "Na koniec fazy sourcingu masz 2–3 rekomendowanych dostawców z uzasadnieniem, wyceną próbek i propozycją warunków handlowych do negocjacji.",
      bullets: [
        "Raport porównawczy dostawców",
        "Wycena próbek i MOQ",
        "Rekomendacja z uzasadnieniem ryzyk",
      ],
    },
    {
      title: "Typowy harmonogram",
      body: "Standardowy sourcing trwa 7–14 dni roboczych w zależności od złożoności produktu i liczby wymaganych certyfikatów.",
    },
  ],
  cta: {
    primary: { label: "Wyślij zapytanie", href: "/kontakt" },
    secondary: { label: "Umów konsultację", href: "/konsultacja" },
  },
};
