"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
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
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated supply chain fallback — replace src with real video asset */}
      <div className="absolute inset-0 bg-navy">
        <div className="hero-gradient absolute inset-0 opacity-80" />
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          aria-hidden
        >
          <defs>
            <linearGradient id="route" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c8922a" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c8922a" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M-50,650 Q200,600 400,620 T800,580 T1200,600 T1500,550"
            fill="none"
            stroke="url(#route)"
            strokeWidth="2"
            strokeDasharray="8 12"
            className="hero-route"
          />
          <circle cx="200" cy="615" r="6" fill="#c8922a" className="hero-node" style={{ animationDelay: "0s" }} />
          <circle cx="500" cy="605" r="6" fill="#38bdf8" className="hero-node" style={{ animationDelay: "0.5s" }} />
          <circle cx="800" cy="585" r="6" fill="#c8922a" className="hero-node" style={{ animationDelay: "1s" }} />
          <circle cx="1100" cy="595" r="6" fill="#38bdf8" className="hero-node" style={{ animationDelay: "1.5s" }} />
        </svg>

        {/* Supply chain icons floating */}
        <div className="hero-float hero-float-1 absolute left-[8%] top-[35%] text-4xl opacity-30">🏭</div>
        <div className="hero-float hero-float-2 absolute left-[28%] top-[55%] text-3xl opacity-25">📦</div>
        <div className="hero-float hero-float-3 absolute left-[48%] top-[40%] text-4xl opacity-30">🚢</div>
        <div className="hero-float hero-float-4 absolute left-[68%] top-[50%] text-3xl opacity-25">🚛</div>
        <div className="hero-float hero-float-5 absolute left-[85%] top-[38%] text-4xl opacity-30">🇵🇱</div>
      </div>

      {/* Video layer — add /public/video/hero-supply-chain.mp4 when available */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        aria-hidden
      >
        <source src="/video/hero-supply-chain.webm" type="video/webm" />
        <source src="/video/hero-supply-chain.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/75 to-navy/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-navy/40" />
    </div>
  );
}
