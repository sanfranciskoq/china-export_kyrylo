import { FeaturedStepsPanel } from "@/components/services/FeaturedStepsPanel";
import { MyWChinachHero } from "@/components/my-w-chinach/MyWChinachHero";
import { MyWChinachPillarSection } from "@/components/my-w-chinach/MyWChinachPillarSection";
import { MyWChinachStatsStrip } from "@/components/my-w-chinach/MyWChinachStatsStrip";
import { myWChinachLayout } from "@/content/my-w-chinach-layout";

export function MyWChinachPageContent() {
  const { hero, highlights, pillars, locations } = myWChinachLayout;

  return (
    <>
      <MyWChinachHero {...hero} />
      <MyWChinachStatsStrip highlights={[...highlights]} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {pillars.map((pillar, index) => (
          <MyWChinachPillarSection
            key={pillar.id}
            {...pillar}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
      <FeaturedStepsPanel {...locations} />
    </>
  );
}
