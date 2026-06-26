"use client";

import { useEffect, useRef } from "react";

export function ServicesBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      video.removeAttribute("autoplay");
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/services-background.mp4" type="video/mp4" />
      </video>

      {/* Uniform scrim — ≥40% dark overlay for typography contrast */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
