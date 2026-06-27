import { PageTrustGrid } from "@/components/pages/PageTrustGrid";
import { ONasCtaBand } from "@/components/o-nas/ONasCtaBand";
import { ONasHero } from "@/components/o-nas/ONasHero";
import { ONasStatsStrip } from "@/components/o-nas/ONasStatsStrip";
import { ONasStorySection } from "@/components/o-nas/ONasStorySection";
import { ONasValuesSection } from "@/components/o-nas/ONasValuesSection";
import { oNasLayout } from "@/content/o-nas-layout";

export function ONasPageContent() {
  const { hero, highlights, story, values, cta } = oNasLayout;

  return (
    <>
      <ONasHero {...hero} />
      <ONasStatsStrip highlights={highlights} />
      <ONasStorySection {...story} />
      <ONasValuesSection {...values} />
      <div className="pb-8">
        <PageTrustGrid />
      </div>
      <ONasCtaBand {...cta} />
    </>
  );
}
