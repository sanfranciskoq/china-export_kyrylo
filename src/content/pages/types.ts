export type PageContentSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type DedicatedPageContent = {
  id: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  sections: PageContentSection[];
  highlights?: { label: string; value: string }[];
  cta: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};
