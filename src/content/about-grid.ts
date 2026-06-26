export type AboutGridPanel = {
  id: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  image: string;
  imageAlt: string;
};

export const aboutGridHero: AboutGridPanel = {
  id: "team-china",
  title: "Zespół w Chinach",
  description:
    "Lokalny zespół na miejscu — od weryfikacji dostawców po koordynację produkcji i wysyłki.",
  cta: { label: "Poznaj nasz zespół", href: "/kontakt" },
  image: "/image/china_office.jpg",
  imageAlt: "Biuro i zespół China Export w Chinach",
};

export const aboutGridRow: AboutGridPanel[] = [
  {
    id: "quality-control",
    title: "Kontrola jakości i dokumentacja",
    description:
      "Inspekcje QA, raporty z kontroli, certyfikaty i pełna dokumentacja zgodna z wymogami importu do UE.",
    cta: { label: "Dowiedz się więcej", href: "/kontakt" },
    image: "/image/quality_control.jpg",
    imageAlt: "Kontrola jakości towarów przed wysyłką z Chin",
  },
  {
    id: "business-trips",
    title: "Wyjazdy biznesowe do Chin",
    description:
      "Organizujemy wizyty w fabrykach, tłumaczenia na miejscu i wsparcie podczas negocjacji z dostawcami.",
    cta: { label: "Umów konsultację", href: "/konsultacja" },
    image: "/image/business_trips.jpg",
    imageAlt: "Transport lotniczy — wyjazdy biznesowe do Chin",
  },
];
