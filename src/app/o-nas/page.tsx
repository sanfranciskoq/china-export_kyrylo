import type { Metadata } from "next";
import { DedicatedMarketingPage } from "@/components/pages/DedicatedMarketingPage";
import { PageTrustGrid } from "@/components/pages/PageTrustGrid";
import { getRequiredPageContent } from "@/content/pages";

const content = getRequiredPageContent("o-nas");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function ONasPage() {
  return (
    <DedicatedMarketingPage
      content={content}
      breadcrumbs={[
        { label: "Strona główna", href: "/" },
        { label: "O nas" },
      ]}
      afterSections={<PageTrustGrid />}
    />
  );
}
