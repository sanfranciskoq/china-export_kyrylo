import type { Metadata } from "next";
import { DedicatedMarketingPage } from "@/components/pages/DedicatedMarketingPage";
import { PageImagePanel } from "@/components/pages/PageImagePanel";
import { getRequiredAboutPanel } from "@/content/about-grid";
import { getRequiredPageContent } from "@/content/pages";

const content = getRequiredPageContent("wyjazdy-do-chin");
const panel = getRequiredAboutPanel("business-trips");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function WyjazdyDoChinPage() {
  return (
    <DedicatedMarketingPage
      content={content}
      breadcrumbs={[
        { label: "Strona główna", href: "/" },
        { label: "My w Chinach", href: "/zespol-w-chinach" },
        { label: "Wyjazdy do Chin" },
      ]}
      numberedSections
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
