import type { DedicatedPageContent } from "./types";

export const realizacjePage: DedicatedPageContent = {
  id: "realizacje",
  meta: {
    title: "Realizacje — China Export",
    description:
      "Case studies importów z Chin — maszyny przemysłowe, materiały budowlane, EV, opakowania i produkty na zamówienie.",
  },
  hero: {
    eyebrow: "Realizacje i branże",
    title: "Projekty, które przeszły przez nasz proces",
    lead: "Poniżej wybrane case studies z różnych branż. Ze względu na NDA nie publikujemy nazw klientów — pokazujemy zakres, wyzwania i mierzalne rezultaty.",
  },
  sections: [
    {
      title: "Branże, w których pracujemy najczęściej",
      body: "Obsługujemy importerów B2B i producentów końcowych. Od maszyn CNC i linii produkcyjnych, przez materiały budowlane i komponenty EV, po opakowania FMCG i produkty private label.",
      bullets: [
        "Laser i przemysł — maszyny, obróbka, automatyka",
        "Budownictwo — profile, okucia, materiały wykończeniowe",
        "EV i mobilność — baterie, okablowanie, komponenty",
        "Opakowania i FMCG — konsolidacja wielu dostawców",
      ],
    },
  ],
  cta: {
    primary: { label: "Opisz swój projekt", href: "/kontakt" },
    secondary: { label: "Zobacz proces importu", href: "/proces" },
  },
};
