"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ServiceLeadModal } from "@/components/services/ServiceLeadModal";
import { ServicesBackground } from "@/components/services/ServicesBackground";
import { ServicesPhaseTabs } from "@/components/services/ServicesPhaseTabs";
import { useMotionConfig, viewportOnce } from "@/lib/motion";

export function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const { fadeUp, headerTransition } = useMotionConfig();

  function handleRequestHelp(serviceId: string) {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  }

  return (
    <section
      id="uslugi"
      className="relative overflow-hidden py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <ServicesBackground />

      <div
        className="services-grid-bg pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative max-w-3xl rounded-2xl bg-black/25 px-5 py-5 ring-1 ring-white/5 backdrop-blur-[2px] sm:px-6 sm:py-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={headerTransition}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-light">
            Usługi modułowe
          </p>
          <h2
            id="services-heading"
            className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
          >
            Każdy etap — jako osobna usługa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Każdy etap w mapie współpracy działa też jako samodzielny moduł.
            Kupujesz dokładnie to, czego potrzebujesz — bez obowiązku wykupu
            pełnego pakietu end-to-end.
          </p>
        </motion.div>

        <ServicesPhaseTabs onRequestHelp={handleRequestHelp} />
      </div>

      <ServiceLeadModal
        serviceId={selectedServiceId}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
