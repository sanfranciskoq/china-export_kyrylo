import { HeroSection } from "@/components/hero/HeroSection";
import { CooperationRoadmap } from "@/components/roadmap/CooperationRoadmap";
import { ServicesSection } from "@/components/services/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CooperationRoadmap />
      <ServicesSection />
    </>
  );
}
