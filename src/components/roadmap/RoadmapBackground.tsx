"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { RoadmapStage } from "@/content/roadmap.stages";

/** Minimum 40% opacity dark scrim over the full background image. */
const SCRIM_CLASS = "bg-black/50";

type RoadmapBackgroundProps = {
  stage: RoadmapStage;
};

export function RoadmapBackground({ stage }: RoadmapBackgroundProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="absolute inset-0"
        aria-hidden
      >
        <Image
          src={stage.image}
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
          priority={stage.id === "brief"}
        />

        {/* Full-bleed scrim — uniform ≥40% dark overlay for typography contrast */}
        <div className={`absolute inset-0 ${SCRIM_CLASS}`} />
      </motion.div>
    </AnimatePresence>
  );
}
