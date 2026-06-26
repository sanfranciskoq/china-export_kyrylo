import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroCTAs } from "@/components/hero/HeroCTAs";
import { TrustStrip } from "@/components/hero/TrustStrip";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
            Import z Chin · Polska &amp; Europa
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Znajdujemy, weryfikujemy i dostarczamy Twoje towary z Chin do Polski.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Od wyszukiwania dostawców i audytów fabryk po odprawę celną i
            dostawę door-to-door.
          </p>
          <div className="mt-10">
            <HeroCTAs />
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            Dlaczego nam zaufać
          </p>
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}
