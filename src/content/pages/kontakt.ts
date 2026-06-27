import type { DedicatedPageContent } from "./types";

export const kontaktPage: DedicatedPageContent = {
  id: "kontakt",
  meta: {
    title: "Kontakt — China Export",
    description:
      "Wyślij zapytanie o import z Chin — opisz projekt, a odpowiemy w ciągu 24 godzin roboczych.",
  },
  hero: {
    eyebrow: "Kontakt",
    title: "Opowiedz nam o swoim projekcie",
    lead: "Im więcej szczegółów podasz na starcie, tym szybciej przygotujemy sensowną propozycję. Odpowiadamy w ciągu 24 godzin roboczych.",
  },
  sections: [
    {
      title: "Co warto napisać",
      body: "Nie musisz mieć gotowej specyfikacji — wystarczy opis produktu, planowany wolumen i harmonogram. Resztę doprecyzujemy na konsultacji.",
      bullets: [
        "Produkt — co importujesz, do czego służy",
        "Wolumen — MOQ, planowana ilość, częstotliwość zamówień",
        "Harmonogram — kiedy potrzebujesz dostawy",
        "Zakres — pełny import czy wybrane moduły (np. tylko QC)",
      ],
    },
    {
      title: "Dane kontaktowe",
      body: "Preferujesz rozmowę telefoniczną? Zadzwoń lub napisz — umówimy termin konsultacji.",
      bullets: [
        "E-mail: kontakt@china-export.pl",
        "Telefon: +48 000 000 000",
        "Biuro: Warszawa, Polska",
      ],
    },
  ],
  cta: {
    primary: { label: "Umów konsultację", href: "/konsultacja" },
    secondary: { label: "Zobacz usługi", href: "/uslugi" },
  },
};
