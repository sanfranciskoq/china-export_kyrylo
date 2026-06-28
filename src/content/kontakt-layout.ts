import { kontaktPage } from "@/content/pages/kontakt";

export type KontaktHighlight = {
  value: string;
  label: string;
};

export type KontaktChannel = {
  id: string;
  label: string;
  value: string;
  href?: string;
};

export type KontaktScopeOption = {
  value: string;
  label: string;
};

export const kontaktLayout = {
  meta: kontaktPage.meta,
  hero: kontaktPage.hero,
  guidance: {
    title: "Co warto napisać",
    body: "Nie musisz mieć gotowej specyfikacji — wystarczy opis produktu, planowany wolumen i harmonogram. Resztę doprecyzujemy na konsultacji.",
    bullets: kontaktPage.sections[0]?.bullets ?? [],
  },
  highlights: [
    { value: "24h", label: "Odpowiedź robocza" },
    { value: "PL + CN", label: "Zespół w Polsce i Chinach" },
    { value: "Moduły", label: "Elastyczny zakres usług" },
  ] satisfies KontaktHighlight[],
  channels: [
    {
      id: "email",
      label: "E-mail",
      value: "kontakt@china-export.pl",
      href: "mailto:kontakt@china-export.pl",
    },
    {
      id: "phone",
      label: "Telefon",
      value: "+48 000 000 000",
      href: "tel:+48000000000",
    },
    {
      id: "office",
      label: "Biuro",
      value: "Warszawa, Polska",
    },
  ] satisfies KontaktChannel[],
  consultationLink: {
    label: "Wolisz konsultację?",
    href: "/konsultacja",
    hint: "Umów bezpłatną 30-minutową rozmowę online",
  },
  form: {
    title: "Wyślij zapytanie",
    description:
      "Opisz projekt — odpowiemy z propozycją zakresu i kolejnych kroków.",
    scopeLabel: "Zakres zapytania",
    scopeOptions: [
      { value: "sourcing", label: "Wyszukiwanie dostawcy" },
      { value: "audit", label: "Audyt fabryki" },
      { value: "qc", label: "Kontrola jakości" },
      { value: "logistics", label: "Logistyka i transport" },
      { value: "full", label: "Pełny proces importu" },
    ] satisfies KontaktScopeOption[],
    submitLabel: "Wyślij zapytanie",
    success: {
      title: "Dziękujemy za zapytanie",
      description:
        "Otrzymaliśmy Twoją wiadomość. Skontaktujemy się w ciągu 24 godzin roboczych z propozycją dalszych kroków.",
    },
  },
} as const;
