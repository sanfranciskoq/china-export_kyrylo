import {
  Building2,
  Eye,
  MapPin,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type TrustFactor = {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
};

export const trustFactors: TrustFactor[] = [
  {
    id: "local-entity",
    icon: Building2,
    label: "Podmiot lokalny w Chinach",
    description:
      "Zarejestrowana firma działająca lokalnie — legalne faktury i umowy.",
  },
  {
    id: "on-ground",
    icon: MapPin,
    label: "Obecność na miejscu",
    description:
      "Fizyczny zespół w Chinach z możliwością bezpośrednich wizyt w fabrykach.",
  },
  {
    id: "pre-audit",
    icon: Eye,
    label: "Audyty przed produkcją",
    description:
      "Weryfikacja producenta przed jakąkolwiek płatnością lub startem produkcji.",
  },
  {
    id: "qa",
    icon: ShieldCheck,
    label: "Kontrola jakości",
    description:
      "Ścisłe inspekcje QA przed ostateczną płatnością i wysyłką towaru.",
  },
  {
    id: "e2e",
    icon: Truck,
    label: "Logistyka end-to-end",
    description:
      "Kompletny spedycja i obsługa frachtu prosto pod wskazany adres klienta.",
  },
];
