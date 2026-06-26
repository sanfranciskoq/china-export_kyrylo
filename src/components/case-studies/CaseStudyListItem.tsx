"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyListItemProps = {
  caseStudy: CaseStudy;
  isActive: boolean;
  onSelect: (id: string) => void;
};

export function CaseStudyListItem({
  caseStudy,
  isActive,
  onSelect,
}: CaseStudyListItemProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <button
      type="button"
      role="option"
      aria-selected={isActive}
      onClick={() => onSelect(caseStudy.id)}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors",
        isActive
          ? "border-accent-light/40 bg-accent-light/10"
          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]",
      )}
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-navy">
        {!imageError ? (
          <Image
            src={caseStudy.coverImage}
            alt=""
            fill
            sizes="56px"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-sm font-medium leading-snug text-white">
          {caseStudy.title}
        </p>
        <p className="mt-1 flex items-center gap-1 text-xs text-white/50">
          <MapPin className="h-3 w-3 shrink-0 text-accent-light" aria-hidden />
          {caseStudy.destinationCountry}
        </p>
      </div>
    </button>
  );
}
