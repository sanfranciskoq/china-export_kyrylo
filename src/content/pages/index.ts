import type { DedicatedPageContent } from "./types";
import { procesPage } from "./proces";
import { oNasPage } from "./o-nas";
import { realizacjePage } from "./realizacje";
import { zespolWChinachPage } from "./zespol-w-chinach";
import { wyjazdyDoChinPage } from "./wyjazdy-do-chin";
import { uslugiPage } from "./uslugi";
import { wyszukiwanieDostawcowPage } from "./uslugi-wyszukiwanie-dostawcow";
import { audytyFabrykPage } from "./uslugi-audyty-fabryk";
import { kontrolaJakosciPage } from "./uslugi-kontrola-jakosci";
import { spedycjaILogistykaPage } from "./uslugi-spedycja-i-logistyka";
import { kalkulatorPage } from "./kalkulator";
import { konsultacjaPage } from "./konsultacja";
import { kontaktPage } from "./kontakt";

const pages: DedicatedPageContent[] = [
  procesPage,
  oNasPage,
  realizacjePage,
  zespolWChinachPage,
  wyjazdyDoChinPage,
  uslugiPage,
  wyszukiwanieDostawcowPage,
  audytyFabrykPage,
  kontrolaJakosciPage,
  spedycjaILogistykaPage,
  kalkulatorPage,
  konsultacjaPage,
  kontaktPage,
];

const pageById = new Map(pages.map((p) => [p.id, p]));

const serviceSlugToPageId: Record<string, string> = {
  "wyszukiwanie-dostawcow": "uslugi-wyszukiwanie-dostawcow",
  "audyty-fabryk": "uslugi-audyty-fabryk",
  "kontrola-jakosci": "uslugi-kontrola-jakosci",
  "spedycja-i-logistyka": "uslugi-spedycja-i-logistyka",
};

export function getPageContent(id: string): DedicatedPageContent | undefined {
  return pageById.get(id);
}

export function getRequiredPageContent(id: string): DedicatedPageContent {
  const page = getPageContent(id);
  if (!page) {
    throw new Error(`Missing page content: ${id}`);
  }
  return page;
}

export function getPageContentByServiceSlug(
  slug: string,
): DedicatedPageContent | undefined {
  const pageId = serviceSlugToPageId[slug];
  return pageId ? getPageContent(pageId) : undefined;
}

export function getRequiredPageContentByServiceSlug(
  slug: string,
): DedicatedPageContent {
  const page = getPageContentByServiceSlug(slug);
  if (!page) {
    throw new Error(`Missing page content for service slug: ${slug}`);
  }
  return page;
}

export { pages as allPageContent };
