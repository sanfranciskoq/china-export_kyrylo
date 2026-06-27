import type { Metadata } from "next";
import { CooperationRoadmap } from "@/components/roadmap/CooperationRoadmap";
import { DedicatedMarketingPage } from "@/components/pages/DedicatedMarketingPage";
import { getRequiredPageContent } from "@/content/pages";

const content = getRequiredPageContent("proces");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function ProcesPage() {
  return (
    <DedicatedMarketingPage
      content={content}
      breadcrumbs={[
        { label: "Strona główna", href: "/" },
        { label: "Proces" },
      ]}
      widget={<CooperationRoadmap embedded />}
    />
  );
}
