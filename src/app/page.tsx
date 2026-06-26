import { HeroSection } from "@/components/hero/HeroSection";
import { CooperationRoadmap } from "@/components/roadmap/CooperationRoadmap";
import { StatsBanner } from "@/components/stats/StatsBanner";
import { ServicesSection } from "@/components/services/ServicesSection";
import { CaseStudiesSection } from "@/components/case-studies/CaseStudiesSection";
import { AboutGridSection } from "@/components/about/AboutGridSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CooperationRoadmap />
      <StatsBanner />
      <ServicesSection />
      <CaseStudiesSection />
      <AboutGridSection />
    </>
  );
}
