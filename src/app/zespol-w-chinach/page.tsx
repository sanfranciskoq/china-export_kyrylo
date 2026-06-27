import type { Metadata } from "next";
import { DedicatedMarketingPage } from "@/components/pages/DedicatedMarketingPage";
import { PageImagePanel } from "@/components/pages/PageImagePanel";
import { getRequiredAboutPanel } from "@/content/about-grid";
import { getRequiredPageContent } from "@/content/pages";

const content = getRequiredPageContent("zespol-w-chinach");
const panel = getRequiredAboutPanel("team-china");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function ZespolWChinachPage() {
  return (
    <DedicatedMarketingPage
      content={content}
      breadcrumbs={[
        { label: "Strona główna", href: "/" },
        { label: "My w Chinach", href: "/zespol-w-chinach" },
        { label: "Zespół w Chinach" },
      ]}
      afterSections={
        <PageImagePanel
          src={panel.image}
          alt={panel.imageAlt}
          title={panel.imageAlt}
        />
      }
    />
  );
}
