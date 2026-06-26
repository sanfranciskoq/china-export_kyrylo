import { Button } from "@/components/ui/Button";
import { HeroTooltip } from "@/components/hero/HeroTooltip";

export function HeroCTAs() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button variant="primary" href="/kontakt" className="sm:min-w-[180px]">
          Wyślij zapytanie
        </Button>
        <Button
          variant="secondary"
          href="/kalkulator"
          className="sm:min-w-[180px]"
        >
          Oblicz transport
        </Button>
        <Button variant="tertiary" href="/konsultacja">
          Umów konsultację
        </Button>
      </div>
      <HeroTooltip text="Powierz nam cały proces albo wybierz jeden etap." />
    </div>
  );
}
