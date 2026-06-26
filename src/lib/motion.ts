import { useReducedMotion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

export const staggerContainerReduced: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0 },
  },
};

export function useMotionConfig() {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion: !!prefersReducedMotion,
    fadeUp: prefersReducedMotion ? fadeUpReduced : fadeUp,
    staggerContainer: prefersReducedMotion
      ? staggerContainerReduced
      : staggerContainer,
    itemTransition: {
      duration: prefersReducedMotion ? 0.2 : 0.4,
      ease: easeOut,
    } satisfies Transition,
    headerTransition: {
      duration: prefersReducedMotion ? 0.2 : 0.5,
      ease: easeOut,
    } satisfies Transition,
    hoverTransition: {
      duration: prefersReducedMotion ? 0 : 0.25,
      ease: easeOut,
    } satisfies Transition,
  };
}
