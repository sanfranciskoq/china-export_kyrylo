"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  getPhaseById,
  getServicesByPhase,
  servicePhases,
  type ServicePhaseId,
} from "@/content/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMotionConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ServicesPhaseTabsProps = {
  onRequestHelp: (serviceId: string) => void;
};

export function ServicesPhaseTabs({ onRequestHelp }: ServicesPhaseTabsProps) {
  const [activePhase, setActivePhase] = useState<ServicePhaseId>("pre-production");
  const { fadeUp, staggerContainer, itemTransition, prefersReducedMotion } =
    useMotionConfig();
  const currentPhase = getPhaseById(activePhase);

  return (
    <div className="mt-12">
      <Tabs
        value={activePhase}
        onValueChange={(value) => setActivePhase(value as ServicePhaseId)}
      >
        <div className="rounded-2xl bg-black/25 px-4 py-4 ring-1 ring-white/5 backdrop-blur-[2px] sm:px-5 sm:py-5">
          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <TabsList
              aria-label="Fazy importu"
              className="h-auto w-max min-w-full justify-start gap-1 rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm sm:min-w-0 sm:w-full"
            >
              {servicePhases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <TabsTrigger
                    key={phase.id}
                    value={phase.id}
                    className={cn(
                      "h-auto flex-none gap-2 rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-white/70 transition-colors",
                      "hover:text-white",
                      "data-active:border-accent-light/40 data-active:bg-accent-light/15 data-active:text-white data-active:shadow-none",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden />
                    {phase.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <motion.p
            key={activePhase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
            className="mt-4 text-sm text-white/80"
          >
            {currentPhase?.description}
          </motion.p>
        </div>

        {servicePhases.map((phase) => (
          <TabsContent
            key={phase.id}
            value={phase.id}
            className="mt-6 outline-none"
          >
            <motion.div
              initial={{
                opacity: 0,
                ...(prefersReducedMotion ? {} : { y: 12 }),
              }}
              animate={{
                opacity: 1,
                ...(prefersReducedMotion ? {} : { y: 0 }),
              }}
              transition={{
                duration: prefersReducedMotion ? 0.15 : 0.35,
              }}
            >
              <motion.div
                className={cn(phase.gridClassName, phase.panelClassName)}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {getServicesByPhase(phase.id).map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onRequestHelp={onRequestHelp}
                    variants={fadeUp}
                    transition={itemTransition}
                  />
                ))}
              </motion.div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
