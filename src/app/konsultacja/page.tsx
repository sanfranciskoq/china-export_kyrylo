import type { Metadata } from "next";
import { DedicatedMarketingPage } from "@/components/pages/DedicatedMarketingPage";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { getRequiredPageContent } from "@/content/pages";

const content = getRequiredPageContent("konsultacja");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function KonsultacjaPage() {
  return (
    <DedicatedMarketingPage
      content={content}
      breadcrumbs={[
        { label: "Strona główna", href: "/" },
        { label: "Umów konsultację" },
      ]}
    >
      <ConsultationForm />
    </DedicatedMarketingPage>
  );
}
