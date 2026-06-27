type PageHighlightGridProps = {
  highlights: { label: string; value: string }[];
};

export function PageHighlightGrid({ highlights }: PageHighlightGridProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/10 bg-navy-light/50 px-4 py-5 text-center"
          >
            <p className="text-2xl font-bold text-accent-light sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs text-white/50 sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
