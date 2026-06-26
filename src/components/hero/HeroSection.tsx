"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroCTAs } from "@/components/hero/HeroCTAs";
import { HeroFlowOverlay } from "@/components/hero/HeroFlowOverlay";
import { TrustStrip } from "@/components/hero/TrustStrip";
import { useMotionConfig, viewportOnce } from "@/lib/motion";

export function HeroSection() {
  const { fadeUp, headerTransition } = useMotionConfig();

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      aria-label="Strona główna"
    >
      <HeroBackground />
      <HeroFlowOverlay className="z-[1]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <motion.header
          className="relative pt-16 text-center lg:pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={headerTransition}
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-accent-light/30 bg-accent-light/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-light">
            Import z Chin · Polska &amp; Europa
          </p>
          <h1 className="track-text mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-100 sm:text-5xl lg:text-[2.75rem] lg:leading-tight xl:text-6xl">
            Znajdujemy, weryfikujemy i dostarczamy Twoje towary z Chin do
            Polski.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300/80 sm:text-xl">
            Od wyszukiwania dostawców i audytów fabryk po odprawę celną i
            dostawę door-to-door.
          </p>
        </motion.header>

        <div
          className="relative min-h-[10rem] flex-1 py-4 lg:min-h-[14rem] lg:py-6"
          aria-hidden
        />

        <motion.footer
          className="pb-10 text-center lg:pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={headerTransition}
        >
          <HeroCTAs className="items-center" />
          <div className="mt-10 pt-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Dlaczego nam zaufać
            </p>
            <TrustStrip />
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
