import type { Metadata } from "next";
import { CaseStudiesSection } from "@/components/case-studies/CaseStudiesSection";
import { DedicatedMarketingPage } from "@/components/pages/DedicatedMarketingPage";
import { getRequiredPageContent } from "@/content/pages";

const content = getRequiredPageContent("realizacje");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function RealizacjePage() {
  return (
    <DedicatedMarketingPage
      content={content}
      breadcrumbs={[
        { label: "Strona główna", href: "/" },
        { label: "Realizacje" },
      ]}
      widget={<CaseStudiesSection embedded />}
    />
  );
}
