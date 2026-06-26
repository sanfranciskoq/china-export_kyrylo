"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RoadmapStage } from "@/content/roadmap.stages";

type RoadmapStagePanelProps = {
  stage: RoadmapStage;
  stageIndex: number;
  totalStages: number;
};

export function RoadmapStagePanel({
  stage,
  stageIndex,
  totalStages,
}: RoadmapStagePanelProps) {
  return (
    <div className="relative z-10 min-h-[220px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
            Etap {stageIndex + 1} / {totalStages}
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {stage.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {stage.description}
          </p>
          <Link
            href={stage.cta.href}
            className="mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            style={{
              backgroundColor: `${stage.theme.accent}22`,
              color: stage.theme.accent,
              border: `1px solid ${stage.theme.accent}44`,
            }}
          >
            {stage.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
