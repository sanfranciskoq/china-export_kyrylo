import { konsultacjaPage } from "@/content/pages/konsultacja";

export type KonsultacjaStat = {
  value: string;
  label: string;
};

export type KonsultacjaAgendaStep = {
  num: string;
  title: string;
  description: string;
};

export type KonsultacjaTopicOption = {
  value: string;
  label: string;
};

export const konsultacjaLayout = {
  meta: konsultacjaPage.meta,
  hero: {
    badge: "Bezpłatna · 30 min",
    titleLead: "Umów konsultację",
    titleAccent: "bez zobowiązań",
    lead: konsultacjaPage.hero.lead,
    stats: [
      { value: "30 min", label: "Czas rozmowy" },
      { value: "Online", label: "Zoom / Meet / telefon" },
      { value: "0 zł", label: "Bez opłat wstępnych" },
    ] satisfies KonsultacjaStat[],
  },
  agenda: {
    title: "Jak wygląda rozmowa",
    intro: konsultacjaPage.sections[0]?.body ?? "",
    steps: [
      {
        num: "01",
        title: "Analiza produktu",
        description: "Analiza produktu i wymagań rynku UE",
      },
      {
        num: "02",
        title: "Ocena ryzyk",
        description:
          "Ocena ryzyk — dostawca, certyfikaty, logistyka",
      },
      {
        num: "03",
        title: "Rekomendacja planu",
        description:
          "Rekomendacja modułów i orientacyjny harmonogram",
      },
      {
        num: "04",
        title: "Pytania i koszty",
        description: "Odpowiedzi na pytania o proces i koszty",
      },
    ] satisfies KonsultacjaAgendaStep[],
    facilitator: {
      title: "Z kim rozmawiasz",
      body: konsultacjaPage.sections[1]?.body ?? "",
    },
  },
  form: {
    title: "Zarezerwuj termin",
    description:
      "Podaj dane kontaktowe i temat rozmowy — odezwiemy się, aby ustalić dogodny termin.",
    topicLabel: "Temat konsultacji",
    topicOptions: [
      { value: "sourcing", label: "Wyszukiwanie dostawcy" },
      { value: "audit", label: "Audyt fabryki" },
      { value: "qc", label: "Kontrola jakości" },
      { value: "logistics", label: "Logistyka i transport" },
      { value: "full", label: "Pełny proces importu" },
    ] satisfies KonsultacjaTopicOption[],
    notesLabel: "Krótki opis (opcjonalnie)",
    notesPlaceholder: "Czego dotyczy projekt?",
    submitLabel: "Umów konsultację",
    footnote: "Wolisz napisać zamiast rozmawiać?",
    footnoteLink: { label: "Wyślij zapytanie", href: "/kontakt" },
    success: {
      title: "Dziękujemy — termin w drodze",
      description:
        "Otrzymaliśmy zgłoszenie. Skontaktujemy się w ciągu 24 godzin roboczych, aby ustalić termin konsultacji.",
    },
  },
  footerCta: {
    label: "Zobacz proces importu",
    href: "/proces",
    hint: "Poznaj pełną ścieżkę współpracy — od briefu po dostawę door-to-door.",
  },
} as const;
