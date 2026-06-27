import Image from "next/image";

type ONasStorySectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  accentValue: string;
  accentLabel: string;
};

export function ONasStorySection({
  id = "o-nas-story",
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  accentValue,
  accentLabel,
}: ONasStorySectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-10 bg-accent-light" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-light">
              {eyebrow}
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-6 leading-relaxed text-white/65">{body}</p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-white/60"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-accent-light/20 bg-navy-light">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-surface-deep/40 to-transparent"
              aria-hidden
            />
          </div>

          <div className="absolute -bottom-6 -left-6 flex h-32 w-32 flex-col items-center justify-center bg-accent-light p-4 text-center">
            <span className="text-3xl font-bold leading-none text-white">
              {accentValue}
            </span>
            <span className="mt-1 text-[9px] font-bold tracking-widest text-white/80">
              {accentLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
