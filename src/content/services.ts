import {
  ClipboardCheck,
  FileText,
  Package,
  Search,
  ShieldCheck,
  Ship,
  Stamp,
  Tag,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type ServicePhaseId = "pre-production" | "logistics" | "delivery";

export type ServicePhase = {
  id: ServicePhaseId;
  label: string;
  description: string;
  icon: LucideIcon;
  gridClassName: string;
  panelClassName?: string;
};

export type ServiceModule = {
  id: string;
  title: string;
  scope: string;
  icon: LucideIcon;
  phase: ServicePhaseId;
  /** Optional link to a related roadmap stage */
  roadmapStageId?: string;
  /** URL slug for dedicated service page */
  slug?: string;
};

export const servicePhases: ServicePhase[] = [
  {
    id: "pre-production",
    label: "Przed produkcją",
    description: "Od wyszukiwania dostawcy po kontrolę jakości i OEM.",
    icon: Search,
    gridClassName: "grid gap-4 sm:grid-cols-2 lg:gap-6",
  },
  {
    id: "logistics",
    label: "Logistyka",
    description: "Od fabryki do portu — płatności, konsolidacja i fracht.",
    icon: Ship,
    gridClassName: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6",
  },
  {
    id: "delivery",
    label: "Dostawa w UE",
    description: "Odprawa celna i dostawa pod wskazany adres.",
    icon: Truck,
    gridClassName: "grid gap-4 sm:grid-cols-2 lg:gap-6",
    panelClassName: "mx-auto max-w-3xl",
  },
];

export const serviceModules: ServiceModule[] = [
  {
    id: "sourcing",
    title: "Sourcing i negocjacje",
    scope:
      "Identyfikacja fabryk, zbieranie i porównywanie ofert oraz negocjacja warunków handlowych.",
    icon: Search,
    phase: "pre-production",
    roadmapStageId: "sourcing",
    slug: "wyszukiwanie-dostawcow",
  },
  {
    id: "verification",
    title: "Weryfikacja dostawców i audyty",
    scope:
      "Sprawdzenie prawne, weryfikacje wideo na żywo, przegląd dokumentów, ocena mocy produkcyjnych oraz fizyczne wizyty w fabryce.",
    icon: ShieldCheck,
    phase: "pre-production",
    roadmapStageId: "audit",
    slug: "audyty-fabryk",
  },
  {
    id: "qc",
    title: "Kontrola jakości (QC)",
    scope:
      "Inspekcja towaru, weryfikacja ilości i komponentów, pomiary wymiarowe, ocena opakowania oraz testy funkcjonalne.",
    icon: ClipboardCheck,
    phase: "pre-production",
    roadmapStageId: "production",
    slug: "kontrola-jakosci",
  },
  {
    id: "oem",
    title: "OEM / Private Label",
    scope:
      "Opakowania na zamówienie, etykietowanie, umieszczenie logo, tłumaczenie lub tworzenie instrukcji oraz adaptacja produktu pod normy europejskie.",
    icon: Tag,
    phase: "pre-production",
  },
  {
    id: "payment-export",
    title: "Płatności i zarządzanie eksportem",
    scope:
      "Bezpieczne, zgodne struktury płatności oraz obsługa dokumentacji eksportowej po stronie chińskiej.",
    icon: FileText,
    phase: "logistics",
    roadmapStageId: "export",
  },
  {
    id: "consolidation",
    title: "Konsolidacja ładunków",
    scope:
      "Odbiór towarów z wielu fabryk, magazynowanie, łączenie przesyłek w jeden kontener i przeopakowanie.",
    icon: Package,
    phase: "logistics",
  },
  {
    id: "freight",
    title: "Spedycja i transport",
    scope:
      "Optymalizacja trasy, rezerwacja frachtu, transport multimodalny oraz śledzenie ładunku w czasie rzeczywistym.",
    icon: Ship,
    phase: "logistics",
    roadmapStageId: "freight",
    slug: "spedycja-i-logistyka",
  },
  {
    id: "customs",
    title: "Wsparcie odprawy celnej",
    scope:
      "Przygotowanie zgodnej dokumentacji taryfowej, klasyfikacja kodów HS oraz koordynacja z brokerami celnymi.",
    icon: Stamp,
    phase: "delivery",
  },
  {
    id: "delivery",
    title: "Dostawa door-to-door",
    scope:
      "Logistyka last mile — dostawa ładunku prosto pod wskazany adres w Polsce lub Europie.",
    icon: Truck,
    phase: "delivery",
    roadmapStageId: "delivery",
  },
];

export function getServiceById(id: string): ServiceModule | undefined {
  return serviceModules.find((s) => s.id === id);
}

export function getServicesByPhase(phaseId: ServicePhaseId): ServiceModule[] {
  return serviceModules.filter((s) => s.phase === phaseId);
}

export function getPhaseById(phaseId: ServicePhaseId): ServicePhase | undefined {
  return servicePhases.find((p) => p.id === phaseId);
}

export function getServiceBySlug(slug: string): ServiceModule | undefined {
  return serviceModules.find((s) => s.slug === slug);
}

export function getServiceNavSlugs(): string[] {
  return serviceModules
    .filter((s): s is ServiceModule & { slug: string } => Boolean(s.slug))
    .map((s) => s.slug);
}
