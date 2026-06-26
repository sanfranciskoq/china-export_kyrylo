import { trustFactors } from "@/content/trust-factors";

export function TrustStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
      {trustFactors.map((factor) => {
        const Icon = factor.icon;
        return (
          <div
            key={factor.id}
            className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-white/10"
            title={factor.description}
          >
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <p className="text-xs font-semibold leading-snug text-white sm:text-sm">
              {factor.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
