import type { KonsultacjaAgendaStep } from "@/content/konsultacja-layout";

type KonsultacjaAgendaProps = {
  title: string;
  intro: string;
  steps: KonsultacjaAgendaStep[];
  facilitator: { title: string; body: string };
};

export function KonsultacjaAgenda({
  title,
  intro,
  steps,
  facilitator,
}: KonsultacjaAgendaProps) {
  return (
    <section aria-labelledby="konsultacja-agenda-heading" className="mb-12 md:mb-14">
      <h2
        id="konsultacja-agenda-heading"
        className="text-center text-xl font-bold text-white sm:text-2xl"
      >
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-white/60 sm:text-base">
        {intro}
      </p>

      <ol className="mt-8 space-y-3" aria-label={title}>
        {steps.map((step) => (
          <li
            key={step.num}
            className="flex gap-4 rounded-xl border border-white/10 bg-navy-light/50 p-4 sm:p-5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-light/15 text-xs font-bold text-accent-light">
              {step.num}
            </span>
            <div className="min-w-0 pt-0.5">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/55">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-xl border border-white/10 border-l-2 border-l-accent-light/50 bg-navy-light/30 p-5 sm:p-6">
        <h3 className="text-sm font-semibold text-white">{facilitator.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {facilitator.body}
        </p>
      </div>
    </section>
  );
}
