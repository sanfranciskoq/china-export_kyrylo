"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type {
  FeaturedImageStep,
  FeaturedStepsContent,
} from "@/content/pages/types";
import { useMotionConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ProcessSectionHeader({
  sectionTitle,
  sectionLead,
}: {
  sectionTitle: string;
  sectionLead?: string;
}) {
  return (
    <div>
      <h2 className="text-left text-xl font-bold text-white sm:text-2xl">
        {sectionTitle}
      </h2>
      {sectionLead && (
        <p className="mt-2 text-left text-sm leading-relaxed text-white/55 sm:text-base">
          {sectionLead}
        </p>
      )}
    </div>
  );
}

function StepTabs({
  steps,
  activeStepId,
  onSelect,
  className,
}: {
  steps: FeaturedImageStep[];
  activeStepId: string;
  onSelect: (stepId: string) => void;
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="tablist"
      aria-label="Etapy procesu"
    >
      {steps.map((step, index) => {
        const isActive = activeStepId === step.id;
        return (
          <button
            key={step.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="featured-step-panel"
            onClick={() => onSelect(step.id)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm",
              isActive
                ? "border-accent-light/50 bg-accent-light/15 text-accent-light"
                : "border-white/10 bg-navy-light/40 text-white/60 hover:border-white/20 hover:text-white/80",
            )}
          >
            {index + 1}. {step.tabLabel}
          </button>
        );
      })}
    </div>
  );
}

function FeaturedStepImagePanel({
  step,
  stepIndex,
  totalSteps,
}: {
  step: FeaturedImageStep;
  stepIndex: number;
  totalSteps: number;
}) {
  const { prefersReducedMotion } = useMotionConfig();
  const [imageError, setImageError] = useState(false);

  return (
    <div
      id="featured-step-panel"
      role="tabpanel"
      aria-live="polite"
      className="relative min-h-[20rem] overflow-hidden rounded-3xl border border-white/10 sm:min-h-[22rem] lg:min-h-[28rem]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
          className="absolute inset-0"
        >
          {!imageError ? (
            <Image
              src={step.image}
              alt={step.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              onError={() => setImageError(true)}
              priority={stepIndex === 0}
            />
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-surface-deep"
              aria-hidden
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="about-grid-scrim absolute inset-0" aria-hidden />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
              Etap {stepIndex + 1} z {totalSteps}
            </p>
            <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
              {step.body}
            </p>
            {step.bullets && step.bullets.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {step.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-white/65"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function FeaturedStepsPanel({
  sectionTitle,
  sectionLead,
  steps,
}: FeaturedStepsContent) {
  const [activeStepId, setActiveStepId] = useState(steps[0]?.id ?? "");

  const activeStepIndex = steps.findIndex((step) => step.id === activeStepId);
  const activeStep = activeStepIndex >= 0 ? steps[activeStepIndex] : steps[0];

  const handleStepSelect = useCallback((stepId: string) => {
    setActiveStepId(stepId);
  }, []);

  if (!activeStep) {
    return null;
  }

  const resolvedIndex = activeStepIndex >= 0 ? activeStepIndex : 0;

  return (
    <section
      aria-label={sectionTitle}
      className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_minmax(360px,1fr)] lg:items-start lg:gap-6 xl:gap-8">
        <div className="min-w-0 text-left">
          <ProcessSectionHeader
            sectionTitle={sectionTitle}
            sectionLead={sectionLead}
          />
          <StepTabs
            steps={steps}
            activeStepId={activeStep.id}
            onSelect={handleStepSelect}
            className="mt-6"
          />
        </div>

        <div className="relative min-w-0 lg:sticky lg:top-24">
          <FeaturedStepImagePanel
            step={activeStep}
            stepIndex={resolvedIndex}
            totalSteps={steps.length}
          />
        </div>
      </div>
    </section>
  );
}
