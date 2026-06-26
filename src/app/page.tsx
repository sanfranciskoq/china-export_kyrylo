import { HeroSection } from "@/components/hero/HeroSection";
import { CooperationRoadmap } from "@/components/roadmap/CooperationRoadmap";
import { ServicesSection } from "@/components/services/ServicesSection";
import { CaseStudiesSection } from "@/components/case-studies/CaseStudiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CooperationRoadmap />
      <ServicesSection />
      <CaseStudiesSection />
    </>
  );
}
