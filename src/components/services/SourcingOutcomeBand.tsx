import { Check, Clock, FileText } from "lucide-react";
import type { PageContentSection } from "@/content/pages/types";

type SourcingOutcomeBandProps = {
  sections: PageContentSection[];
  stepLabels?: string[];
};

function DeliverablesPanel({ section }: { section: PageContentSection }) {
  return (
    <div className="border-l-2 border-accent-light/50 p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-light/15 text-accent-light">
          <FileText className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white sm:text-xl">{section.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
            {section.body}
          </p>
        </div>
      </div>
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-6">
          {section.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-relaxed text-white/70"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-light"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TimelinePanel({
  section,
  stepLabels,
}: {
  section: PageContentSection;
  stepLabels?: string[];
}) {
  return (
    <div className="flex h-full flex-col justify-center p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/50">
          <Clock className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white sm:text-xl">{section.title}</h3>
          {section.stat && (
            <p className="mt-3 text-4xl font-bold tracking-tight text-accent-light sm:text-5xl">
              {section.stat}
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
            {section.body}
          </p>
        </div>
      </div>
      {stepLabels && stepLabels.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {stepLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/55"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function SourcingOutcomeBand({
  sections,
  stepLabels,
}: SourcingOutcomeBandProps) {
  if (sections.length === 0) {
    return null;
  }

  const [deliverables, timeline] = sections;

  return (
    <div
      className="overflow-hidden rounded-3xl border border-white/10 bg-navy-light/40"
      aria-label="Rezultat i harmonogram"
    >
      <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-white/10">
        {deliverables && <DeliverablesPanel section={deliverables} />}
        {timeline && (
          <div className="border-t border-white/10 lg:border-t-0">
            <TimelinePanel section={timeline} stepLabels={stepLabels} />
          </div>
        )}
      </div>
    </div>
  );
}
