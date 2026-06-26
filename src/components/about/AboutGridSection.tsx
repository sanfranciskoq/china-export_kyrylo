import { SectionEdgeFade } from "@/components/backgrounds/SectionEdgeFade";
import { AboutGridPanel } from "@/components/about/AboutGridPanel";
import { aboutGridHero, aboutGridRow } from "@/content/about-grid";

export function AboutGridSection() {
  const [qualityControl, businessTrips] = aboutGridRow;

  return (
    <section
      id="o-nas"
      className="relative overflow-hidden py-20 sm:py-28"
      aria-label="Zespół i usługi na miejscu w Chinach"
    >
      <SectionEdgeFade top />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 border border-white/10 md:grid-cols-2">
          <AboutGridPanel
            panel={aboutGridHero}
            variant="hero"
            className="border-b border-white/10 md:col-span-2"
          />
          <AboutGridPanel
            panel={qualityControl}
            className="border-b border-white/10 md:border-b-0 md:border-r"
          />
          <AboutGridPanel panel={businessTrips} />
        </div>
      </div>
    </section>
  );
}
