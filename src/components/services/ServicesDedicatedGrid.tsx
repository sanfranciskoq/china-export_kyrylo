"use client";

import { useEffect, useState } from "react";
import { ServiceCompactTile } from "@/components/services/ServiceCompactTile";
import { ServiceLeadModal } from "@/components/services/ServiceLeadModal";
import { ServicesPhaseTabs } from "@/components/services/ServicesPhaseTabs";

export function ServicesDedicatedGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [expandedTileId, setExpandedTileId] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    function handleChange() {
      if (mq.matches) setExpandedTileId(null);
    }
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  function handleRequestHelp(serviceId: string) {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  }

  return (
    <section aria-label="Moduły usługowe">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent-light">
          Moduły usługowe
        </p>

        <ServicesPhaseTabs
          variant="dedicated"
          layout="mosaic"
          CardComponent={ServiceCompactTile}
          onRequestHelp={handleRequestHelp}
          expandedTileId={expandedTileId}
          onExpandTile={setExpandedTileId}
        />
      </div>

      <ServiceLeadModal
        serviceId={selectedServiceId}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
