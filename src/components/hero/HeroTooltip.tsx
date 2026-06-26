"use client";

import { Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type HeroTooltipProps = {
  text: string;
  className?: string;
};

export function HeroTooltip({ text, className }: HeroTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative inline-flex items-center gap-2", className)}>
      <button
        type="button"
        aria-label="Więcej informacji"
        aria-describedby="hero-tooltip"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="flex h-5 w-5 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Info className="h-4 w-4" />
      </button>
      <span className="text-sm text-white/60">{text.split(".")[0]}.</span>
      <div
        id="hero-tooltip"
        role="tooltip"
        className={cn(
          "absolute left-0 top-full z-20 mt-2 max-w-xs rounded-lg border border-white/10 bg-navy/95 px-4 py-3 text-sm text-white/80 shadow-xl backdrop-blur-md transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        {text}
      </div>
    </div>
  );
}
