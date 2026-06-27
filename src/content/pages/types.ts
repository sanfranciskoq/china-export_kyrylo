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

export type FeaturedImageStep = {
  id: string;
  tabLabel: string;
  title: string;
  body: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
};

export type FeaturedStepsContent = {
  sectionTitle: string;
  sectionLead?: string;
  steps: FeaturedImageStep[];
};

export type DedicatedPageContent = {
  id: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  sections: PageContentSection[];
  highlights?: { label: string; value: string }[];
  processCarousel?: ProcessCarouselContent;
  featuredSteps?: FeaturedStepsContent;
  cta: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};
