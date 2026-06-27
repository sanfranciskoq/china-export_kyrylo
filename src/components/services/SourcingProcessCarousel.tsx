"use client";

import { useCallback, useState } from "react";
import type {
  PageContentSection,
  ProcessCarouselContent,
  ProcessStep,
} from "@/content/pages/types";
import { SourcingOutcomeBand } from "@/components/services/SourcingOutcomeBand";
import { cn } from "@/lib/utils";

type SourcingProcessCarouselProps = ProcessCarouselContent & {
  asideSections?: PageContentSection[];
};

function StepCardContent({
  step,
  stepIndex,
  totalSteps,
}: {
  step: ProcessStep;
  stepIndex: number;
  totalSteps: number;
}) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
        Etap {stepIndex + 1} z {totalSteps}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{step.body}</p>
      {step.bullets && step.bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {step.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-white/55"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function StepDetailPanel({
  step,
  stepIndex,
  totalSteps,
}: {
  step: ProcessStep;
  stepIndex: number;
  totalSteps: number;
}) {
  return (
    <div className="rounded-2xl border border-accent-light/40 bg-navy-light p-6 shadow-xl shadow-black/30 sm:p-7">
      <StepCardContent
        step={step}
        stepIndex={stepIndex}
        totalSteps={totalSteps}
      />
    </div>
  );
}

function ProcessStepTabs({
  steps,
  activeStepId,
  onSelect,
  className,
}: {
  steps: ProcessStep[];
  activeStepId: string | null;
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
            aria-controls="process-step-detail"
            onClick={() => onSelect(step.id)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm",
              isActive
                ? "border-accent-light/50 bg-accent-light/15 text-accent-light"
                : "border-white/10 bg-navy-light/40 text-white/60 hover:border-white/20 hover:text-white/80",
            )}
          >
            {index + 1}. {step.cardLabel}
          </button>
        );
      })}
    </div>
  );
}

function ProcessSectionHeader({
  sectionTitle,
  sectionLead,
  className,
}: {
  sectionTitle: string;
  sectionLead?: string;
  className?: string;
}) {
  return (
    <div className={className}>
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

export function SourcingProcessCarousel({
  sectionTitle,
  sectionLead,
  steps,
  asideSections,
}: SourcingProcessCarouselProps) {
  const [activeStepId, setActiveStepId] = useState<string | null>(null);

  const activeStepIndex =
    activeStepId === null
      ? -1
      : steps.findIndex((step) => step.id === activeStepId);
  const activeStep = activeStepIndex >= 0 ? steps[activeStepIndex] : null;

  const handleStepSelect = useCallback((stepId: string) => {
    setActiveStepId((prev) => (prev === stepId ? null : stepId));
  }, []);

  const stepLabels = steps.map((step) => step.cardLabel);

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
          <ProcessStepTabs
            steps={steps}
            activeStepId={activeStepId}
            onSelect={handleStepSelect}
            className="mt-6"
          />
        </div>

        <div
          id="process-step-detail"
          role="tabpanel"
          aria-live="polite"
          className="relative min-w-0"
        >
          {activeStep && activeStepIndex >= 0 ? (
            <div className="lg:sticky lg:top-24">
              <StepDetailPanel
                step={activeStep}
                stepIndex={activeStepIndex}
                totalSteps={steps.length}
              />
            </div>
          ) : (
            <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-navy-light/20 px-6 text-center">
              <p className="max-w-xs text-sm leading-relaxed text-white/40">
                Wybierz etap z listy, aby zobaczyć szczegóły procesu.
              </p>
            </div>
          )}
        </div>
      </div>

      {asideSections && asideSections.length > 0 && (
        <div className="mt-10 lg:mt-12">
          <SourcingOutcomeBand
            sections={asideSections}
            stepLabels={stepLabels}
          />
        </div>
      )}
    </section>
  );
}
