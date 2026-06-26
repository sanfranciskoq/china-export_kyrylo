"use client";

import { roadmapStages } from "@/content/roadmap.stages";
import { RoadmapBackground } from "@/components/roadmap/RoadmapBackground";
import { RoadmapStagePanel } from "@/components/roadmap/RoadmapStagePanel";
import { RoadmapTrack } from "@/components/roadmap/RoadmapTrack";
import { useRoadmapScrub } from "@/components/roadmap/useRoadmapScrub";

export function CooperationRoadmap() {
  const {
    progress,
    activeIndex,
    activeStage,
    isDragging,
    trackRef,
    goToStage,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleKeyDown,
  } = useRoadmapScrub();

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
      aria-labelledby="roadmap-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <RoadmapBackground stage={activeStage} />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-light">
              Mapa współpracy
            </p>
            <h2
              id="roadmap-heading"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              Twój import krok po kroku
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/70">
              Interaktywna ścieżka — od briefu po dostawę pod Twój adres.
            </p>

            <div className="mt-8 lg:mt-10">
              <RoadmapStagePanel
                stage={activeStage}
                stageIndex={activeIndex}
                totalStages={roadmapStages.length}
              />
            </div>

            <RoadmapTrack
              progress={progress}
              activeIndex={activeIndex}
              isDragging={isDragging}
              trackRef={trackRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onStageClick={goToStage}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
