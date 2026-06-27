import type { Metadata } from "next";
import { DedicatedMarketingPage } from "@/components/pages/DedicatedMarketingPage";
import { ContactForm } from "@/components/forms/ContactForm";
import { getRequiredPageContent } from "@/content/pages";

const content = getRequiredPageContent("kontakt");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function KontaktPage() {
  return (
    <DedicatedMarketingPage
      content={content}
      breadcrumbs={[
        { label: "Strona główna", href: "/" },
        { label: "Kontakt" },
      ]}
    >
      <ContactForm />
    </DedicatedMarketingPage>
  );
}
