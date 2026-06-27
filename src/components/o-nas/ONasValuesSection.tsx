import type { ONasValueCard } from "@/content/o-nas-layout";

type ONasValuesSectionProps = {
  eyebrow: string;
  title: string;
  body: string;
  cards: ONasValueCard[];
};

export function ONasValuesSection({
  eyebrow,
  title,
  body,
  cards,
}: ONasValuesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mb-12 max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-10 bg-accent-light" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-light">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-4 leading-relaxed text-white/65">{body}</p>
      </div>

      <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, label, title: cardTitle, body: cardBody }) => (
          <div
            key={label}
            className="group flex flex-col gap-6 bg-surface p-8 transition-colors duration-300 hover:bg-navy-light lg:p-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center border border-white/10 transition-colors group-hover:border-accent-light/40">
                <Icon size={20} className="text-accent-light" aria-hidden />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
                {label}
              </span>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold leading-tight text-white">
                {cardTitle}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">{cardBody}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
