"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { roadmapStages } from "@/content/roadmap.stages";

const STAGE_COUNT = roadmapStages.length;

export function useRoadmapScrub() {
  const [progress, setProgressState] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeIndex = Math.min(
    STAGE_COUNT - 1,
    Math.round(progress * (STAGE_COUNT - 1)),
  );

  const setProgress = useCallback((value: number) => {
    setProgressState(Math.max(0, Math.min(1, value)));
  }, []);

  const goToStage = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(STAGE_COUNT - 1, index));
    setProgressState(clamped / (STAGE_COUNT - 1));
  }, []);

  const progressFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const x = clientX - rect.left;
    setProgress(x / rect.width);
  }, [setProgress]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      progressFromClientX(e.clientX);
    },
    [progressFromClientX],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      progressFromClientX(e.clientX);
    },
    [isDragging, progressFromClientX],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    setProgressState((p) => {
      const idx = Math.round(p * (STAGE_COUNT - 1));
      return idx / (STAGE_COUNT - 1);
    });
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goToStage(activeIndex + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goToStage(activeIndex - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goToStage(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToStage(STAGE_COUNT - 1);
      }
    },
    [activeIndex, goToStage],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        e.preventDefault();
        setProgressState((p) => {
          const delta = e.deltaY > 0 ? 0.04 : -0.04;
          const next = Math.max(0, Math.min(1, p + delta));
          const idx = Math.round(next * (STAGE_COUNT - 1));
          return idx / (STAGE_COUNT - 1);
        });
      }
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, [setProgress]);

  return {
    progress,
    activeIndex,
    activeStage: roadmapStages[activeIndex],
    isDragging,
    trackRef,
    setProgress,
    goToStage,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleKeyDown,
  };
}
