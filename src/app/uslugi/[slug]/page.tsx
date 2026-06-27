import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DedicatedMarketingPage } from "@/components/pages/DedicatedMarketingPage";
import {
  getPageContentByServiceSlug,
  getRequiredPageContentByServiceSlug,
} from "@/content/pages";
import { getServiceBySlug, getServiceNavSlugs } from "@/content/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceNavSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getPageContentByServiceSlug(slug);

  if (!content) {
    return { title: "Usługa nie znaleziona — China Export" };
  }

  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const content = getRequiredPageContentByServiceSlug(slug);

  return (
    <DedicatedMarketingPage
      content={content}
      breadcrumbs={[
        { label: "Strona główna", href: "/" },
        { label: "Usługi", href: "/uslugi" },
        { label: service.title },
      ]}
      numberedSections
    />
  );
}
