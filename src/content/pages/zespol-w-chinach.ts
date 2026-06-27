import type { DedicatedPageContent } from "./types";

export const zespolWChinachPage: DedicatedPageContent = {
  id: "zespol-w-chinach",
  meta: {
    title: "Zespół w Chinach — China Export",
    description:
      "Lokalny zespół China Export w Chinach — sourcing, audyty fabryk, kontrola jakości i koordynacja produkcji na miejscu.",
  },
  hero: {
    eyebrow: "My w Chinach",
    title: "Twój zespół na miejscu — nie zdalny pośrednik",
    lead: "14 osób w trzech miastach Chin. Mówimy mandaryńsko, znamy lokalny rynek i reprezentujemy Twoje interesy przy stole negocjacyjnym.",
  },
  sections: [
    {
      title: "Kto jest w zespole",
      body: "Zespół terenowy to specjaliści ds. sourcingu, inżynierowie QC, koordynatorzy logistyczni i tłumacze techniczni. Każdy projekt ma przypisanego opiekuna, który raportuje bezpośrednio do biura w Warszawie.",
      bullets: [
        "Sourcing i negocjacje — identyfikacja i weryfikacja fabryk",
        "Inżynierowie QC — inspekcje na linii produkcyjnej",
        "Logistyka — odbiór z fabryki, magazyn, konsolidacja",
        "Tłumacze techniczni — specyfikacje, umowy, raporty",
      ],
    },
    {
      title: "Gdzie działamy",
      body: "Biura terenowe w Shenzhen (elektronika i hardware), Yiwu (towary konsumenckie i małe serie) oraz Ningbo (logistyka morska i region produkcji OEM). Wybór bazy zależy od branży i lokalizacji dostawców.",
      bullets: [
        "Shenzhen — elektronika, komponenty, hardware",
        "Yiwu — handel hurtowy, małe serie, próbki",
        "Ningbo — port morski, OEM, duże wolumeny",
      ],
    },
  ],
  cta: {
    primary: { label: "Poznaj nasz zespół", href: "/kontakt" },
    secondary: { label: "Wyjazdy biznesowe do Chin", href: "/wyjazdy-do-chin" },
  },
};
