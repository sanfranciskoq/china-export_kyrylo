"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { getCategoryById } from "@/content/case-studies";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMotionConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CaseStudyFeaturedProps = {
  caseStudy: CaseStudy;
  onOpenDetails: (id: string) => void;
  onPrev?: () => void;
  onNext?: () => void;
  showNav?: boolean;
  className?: string;
};

export function CaseStudyFeatured({
  caseStudy,
  onOpenDetails,
  onPrev,
  onNext,
  showNav = false,
  className,
}: CaseStudyFeaturedProps) {
  const [imageError, setImageError] = useState(false);
  const category = getCategoryById(caseStudy.categoryId);
  const { prefersReducedMotion, headerTransition } = useMotionConfig();

  const navButtonClass =
    "size-9 border-white/20 bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 hover:text-white disabled:opacity-30";

  return (
    <div className={cn("relative", className)}>
      {showNav && (
        <div className="absolute right-3 top-3 z-10 flex gap-1.5">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Poprzednia realizacja"
            className={navButtonClass}
            onClick={onPrev}
          >
            <ChevronLeft aria-hidden />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Następna realizacja"
            className={navButtonClass}
            onClick={onNext}
          >
            <ChevronRight aria-hidden />
          </Button>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={caseStudy.id}
          initial={{ opacity: 0, ...(prefersReducedMotion ? {} : { y: 10 }) }}
          animate={{ opacity: 1, ...(prefersReducedMotion ? {} : { y: 0 }) }}
          exit={{ opacity: 0, ...(prefersReducedMotion ? {} : { y: -6 }) }}
          transition={headerTransition}
        >
          <Card className="overflow-hidden border-white/10 bg-white/5 text-white shadow-none ring-white/10 backdrop-blur-sm [--card-spacing:0]">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy sm:aspect-[16/9]">
              {!imageError ? (
                <Image
                  src={caseStudy.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-black/40" />
              )}
            </div>

            <div className="flex flex-col gap-4 p-5 sm:p-6">
              {category && (
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-light">
                  {category.label}
                </p>
              )}

              <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                {caseStudy.title}
              </h3>

              <p className="line-clamp-2 text-sm leading-relaxed text-white/60">
                {caseStudy.outcome}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <div className="flex items-center gap-1.5 text-sm text-white/55">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-accent-light"
                    aria-hidden
                  />
                  {caseStudy.destinationCountry}
                </div>
                <Button
                  type="button"
                  className="bg-accent-light text-navy hover:bg-accent-light/90"
                  onClick={() => onOpenDetails(caseStudy.id)}
                >
                  Zobacz szczegóły
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
