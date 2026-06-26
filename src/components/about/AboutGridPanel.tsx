"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { AboutGridPanel as AboutGridPanelData } from "@/content/about-grid";
import { cn } from "@/lib/utils";

type AboutGridPanelProps = {
  panel: AboutGridPanelData;
  className?: string;
  variant?: "hero" | "card";
};

export function AboutGridPanel({
  panel,
  className,
  variant = "card",
}: AboutGridPanelProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className={cn(
        "relative overflow-hidden bg-navy",
        variant === "hero"
          ? "min-h-[17.5rem] md:min-h-[20rem]"
          : "min-h-[15rem] md:min-h-[17.5rem]",
        className,
      )}
    >
      {!imageError ? (
        <Image
          src={panel.image}
          alt={panel.imageAlt}
          fill
          sizes={
            variant === "hero"
              ? "(max-width: 1280px) 100vw, 1280px"
              : "(max-width: 768px) 100vw, 50vw"
          }
          className="object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-surface-deep"
          aria-hidden
        />
      )}

      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-8">
        <h3 className="max-w-lg text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          {panel.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
          {panel.description}
        </p>
        <Link
          href={panel.cta.href}
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-accent-light/20 bg-accent-light px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-light/25 transition-colors hover:bg-[#dbaa47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          {panel.cta.label}
        </Link>
      </div>
    </article>
  );
}
