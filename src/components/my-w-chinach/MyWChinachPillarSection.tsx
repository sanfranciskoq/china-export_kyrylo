"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MyWChinachPillar } from "@/content/my-w-chinach-layout";
import { useMotionConfig, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MyWChinachPillarSectionProps = MyWChinachPillar & {
  reverse?: boolean;
};

export function MyWChinachPillarSection({
  id,
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse = false,
}: MyWChinachPillarSectionProps) {
  const [imageError, setImageError] = useState(false);
  const { fadeUp, headerTransition } = useMotionConfig();

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 py-10 sm:py-14"
    >
      <motion.div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={headerTransition}
      >
        <div className="relative min-h-[16rem] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[20rem] lg:min-h-[24rem]">
          {!imageError ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-surface-deep"
              aria-hidden
            />
          )}
          <div className="about-grid-scrim absolute inset-0" aria-hidden />
        </div>

        <div>
          <h2
            id={`${id}-heading`}
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            {body}
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-white/70 sm:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
