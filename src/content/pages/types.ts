export type PageContentSection = {
  title: string;
  body: string;
  bullets?: string[];
  stat?: string;
};

export type ProcessStep = {
  id: string;
  cardLabel: string;
  title: string;
  body: string;
  bullets?: string[];
};

export type ProcessCarouselContent = {
  sectionTitle: string;
  sectionLead: string;
  steps: ProcessStep[];
};

export type DedicatedPageContent = {
  id: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  sections: PageContentSection[];
  highlights?: { label: string; value: string }[];
  processCarousel?: ProcessCarouselContent;
  cta: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};
