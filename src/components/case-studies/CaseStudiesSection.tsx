"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  caseStudyCategories,
  caseStudies,
  getCaseStudyById,
  getCaseStudiesByCategory,
  type CaseStudyCategoryId,
} from "@/content/case-studies";
import { CaseStudyFeatured } from "@/components/case-studies/CaseStudyFeatured";
import { CaseStudyListItem } from "@/components/case-studies/CaseStudyListItem";
import { CaseStudyDetailModal } from "@/components/case-studies/CaseStudyDetailModal";
import { useMotionConfig, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FilterId = CaseStudyCategoryId | "all";

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "Wszystkie" },
  ...caseStudyCategories.map((c) => ({ id: c.id, label: c.label })),
];

export function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { fadeUp, headerTransition } = useMotionConfig();

  const filtered = getCaseStudiesByCategory(activeFilter);
  const activeCase =
    (activeId ? getCaseStudyById(activeId) : undefined) ?? filtered[0];
  const selectedCase = selectedId ? getCaseStudyById(selectedId) : null;

  useEffect(() => {
    const items = getCaseStudiesByCategory(activeFilter);
    if (items.length > 0) {
      setActiveId(items[0].id);
    } else {
      setActiveId(null);
    }
  }, [activeFilter]);

  const activeIndex = activeCase
    ? filtered.findIndex((c) => c.id === activeCase.id)
    : -1;

  function handleOpen(id: string) {
    setSelectedId(id);
    setModalOpen(true);
  }

  function handlePrev() {
    if (filtered.length < 2 || activeIndex < 0) return;
    const prevIndex =
      activeIndex === 0 ? filtered.length - 1 : activeIndex - 1;
    setActiveId(filtered[prevIndex].id);
  }

  function handleNext() {
    if (filtered.length < 2 || activeIndex < 0) return;
    const nextIndex =
      activeIndex === filtered.length - 1 ? 0 : activeIndex + 1;
    setActiveId(filtered[nextIndex].id);
  }

  return (
    <section
      id="realizacje"
      className="bg-navy py-20 sm:py-28"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={headerTransition}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-light">
            Realizacje i branże
          </p>
          <h2
            id="case-studies-heading"
            className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
          >
            Case studies — udane importy z Chin
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Wybrane projekty z różnych branż. Ze względu na poufność nie
            publikujemy danych klientów ani brandingów — pokazujemy zakres,
            proces i rezultaty.
          </p>
        </motion.div>

        <div className="mt-10 -mx-1 overflow-x-auto px-1 pb-1">
          <div
            className="flex w-max min-w-full gap-2 sm:flex-wrap"
            role="tablist"
            aria-label="Filtruj realizacje według branży"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeFilter === filter.id
                    ? "border-accent-light/40 bg-accent-light/15 text-white"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {activeFilter !== "all" && (
          <p className="mt-4 text-sm text-white/50">
            {caseStudyCategories.find((c) => c.id === activeFilter)?.examples}
          </p>
        )}

        {filtered.length > 0 && activeCase ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <CaseStudyFeatured
              caseStudy={activeCase}
              onOpenDetails={handleOpen}
              onPrev={handlePrev}
              onNext={handleNext}
              showNav={filtered.length > 1}
            />

            <div
              className="flex flex-col gap-2 lg:max-h-[520px] lg:overflow-y-auto lg:pr-1"
              role="listbox"
              aria-label="Lista realizacji"
            >
              {filtered.map((caseStudy) => (
                <CaseStudyListItem
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                  isActive={caseStudy.id === activeCase.id}
                  onSelect={setActiveId}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-8 text-center text-sm text-white/50">
            Brak realizacji w tej kategorii.
          </p>
        )}

        <p className="mt-12 text-center text-xs text-white/40">
          Treści zarządzane przez CMS — łatwa publikacja nowych case studies bez
          zmian w kodzie ({caseStudies.length} projektów w portfolio).
        </p>
      </div>

      <CaseStudyDetailModal
        caseStudy={selectedCase ?? null}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
