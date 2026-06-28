"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { KonsultacjaStat } from "@/content/konsultacja-layout";
import { useVisible } from "@/components/proces/useVisible";

type KonsultacjaHeroProps = {
  badge: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  stats: KonsultacjaStat[];
};

export function KonsultacjaHero({
  badge,
  titleLead,
  titleAccent,
  lead,
  stats,
}: KonsultacjaHeroProps) {
  const { ref, visible } = useVisible(0.05);

  return (
    <header ref={ref} className="mb-14 text-center md:mb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={visible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-light/25 bg-accent-light/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-light"
      >
        <Calendar size={11} aria-hidden />
        {badge}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
      >
        {titleLead}
        <br />
        <span className="text-accent-light">{titleAccent}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65"
      >
        {lead}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold leading-none text-white sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs tracking-wide text-white/45">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={visible ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto mt-12 h-px max-w-[240px] origin-center bg-gradient-to-r from-transparent via-accent-light/40 to-transparent"
        aria-hidden
      />
    </header>
  );
}
