"use client";

import { Container, GripHorizontal } from "lucide-react";
import { roadmapStages } from "@/content/roadmap.stages";
import { cn } from "@/lib/utils";

type RoadmapTrackProps = {
  progress: number;
  activeIndex: number;
  isDragging: boolean;
  trackRef: React.RefObject<HTMLDivElement | null>;
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: () => void;
  onStageClick: (index: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
};

export function RoadmapTrack({
  progress,
  activeIndex,
  isDragging,
  trackRef,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onStageClick,
  onKeyDown,
}: RoadmapTrackProps) {
  const handlePosition = `${progress * 100}%`;

  return (
    <div className="relative z-10 mt-12">
      <p className="mb-6 flex items-center gap-2 text-xs text-white/40">
        <GripHorizontal className="h-4 w-4" />
        Przeciągnij kontener, użyj kółka myszy lub strzałek ← →
      </p>

      <div
        ref={trackRef}
        role="slider"
        aria-label="Etapy współpracy"
        aria-valuemin={0}
        aria-valuemax={roadmapStages.length - 1}
        aria-valuenow={activeIndex}
        aria-valuetext={roadmapStages[activeIndex].title}
        tabIndex={0}
        className="relative cursor-grab touch-none select-none py-8 active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        {/* Track rail */}
        <div className="relative h-2 rounded-full bg-white/10">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-accent transition-[width] duration-75"
            style={{ width: handlePosition }}
          />
        </div>

        {/* Stage nodes */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          {roadmapStages.map((stage, i) => {
            const position = `${(i / (roadmapStages.length - 1)) * 100}%`;
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;

            return (
              <button
                key={stage.id}
                type="button"
                aria-label={`Etap ${i + 1}: ${stage.title}`}
                aria-current={isActive ? "step" : undefined}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                style={{ left: position }}
                onClick={(e) => {
                  e.stopPropagation();
                  onStageClick(i);
                }}
                onPointerDown={(e) => e.stopPropagation()}
              >
                <div
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-200",
                    isActive
                      ? "scale-150 border-accent bg-accent shadow-lg shadow-accent/40"
                      : isPast
                        ? "border-accent/60 bg-accent/60"
                        : "border-white/30 bg-slate-800",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-6 hidden w-max max-w-[100px] -translate-x-1/2 text-center text-[10px] font-medium leading-tight sm:block lg:max-w-[120px] lg:text-xs",
                    isActive ? "text-white" : "text-white/40",
                  )}
                >
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Draggable container handle */}
        <div
          className={cn(
            "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75",
            isDragging && "scale-110",
          )}
          style={{ left: handlePosition }}
          aria-hidden
        >
          <div className="flex h-12 w-16 items-center justify-center rounded-md border-2 border-accent bg-accent/20 shadow-lg shadow-accent/20 backdrop-blur-sm">
            <Container className="h-6 w-6 text-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
