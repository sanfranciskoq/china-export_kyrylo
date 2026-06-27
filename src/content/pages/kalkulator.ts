import type { DedicatedPageContent } from "./types";

export const kalkulatorPage: DedicatedPageContent = {
  id: "kalkulator",
  meta: {
    title: "Kalkulator transportu — China Export",
    description:
      "Oszacuj koszt transportu z Chin — fracht morski i lotniczy na podstawie wagi, objętości i portu załadunku.",
  },
  hero: {
    eyebrow: "Narzędzia",
    title: "Kalkulator kosztu transportu z Chin",
    lead: "Wstępna wycena frachtu morskiego lub lotniczego — zanim wyślesz zapytanie. Moduł w przygotowaniu; poniżej opis, jakie dane będą potrzebne.",
  },
  sections: [
    {
      title: "Co kalkulator uwzględni",
      body: "Po uruchomieniu modułu otrzymasz szacunkowy koszt transportu na podstawie parametrów ładunku i trasy. To orientacyjna wycena — dokładna kwota wymaga potwierdzenia z armatora.",
      bullets: [
        "Waga brutto i objętość (m³) ładunku",
        "Port załadunku (np. Shenzhen, Ningbo, Shanghai)",
        "Port docelowy lub miasto dostawy w UE",
        "Tryb: FCL, LCL lub lotniczy",
      ],
    },
    {
      title: "Czego kalkulator nie obejmuje",
      body: "Wycena dotyczy frachtu i podstawowej obsługi portowej. Odrębnie wyceniamy: odprawę celną, ubezpieczenie, odbiór z fabryki, konsolidację i dostawę door-to-door.",
    },
  ],
  cta: {
    primary: { label: "Wyślij zapytanie o wycenę", href: "/kontakt" },
    secondary: { label: "Umów konsultację", href: "/konsultacja" },
  },
};
