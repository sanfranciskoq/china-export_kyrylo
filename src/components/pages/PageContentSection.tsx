import type { PageContentSection } from "@/content/pages/types";

type PageContentSectionProps = PageContentSection & {
  index?: number;
};

export function PageContentSectionBlock({
  title,
  body,
  bullets,
  index,
}: PageContentSectionProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-navy-light/50 p-6 sm:p-8">
        {index !== undefined && (
          <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-light/15 text-xs font-bold text-accent-light">
            {index + 1}
          </span>
        )}
        <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
        <p className="mt-3 text-base leading-relaxed text-white/65">{body}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-relaxed text-white/60"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
