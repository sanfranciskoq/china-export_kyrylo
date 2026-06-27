"use client";

import Image from "next/image";
import { useState } from "react";

type PageImagePanelProps = {
  src: string;
  alt: string;
  title?: string;
};

export function PageImagePanel({ src, alt, title }: PageImagePanelProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="relative min-h-[16rem] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[20rem]">
        {!imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
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
        {title && (
          <div className="absolute inset-x-0 bottom-0 z-10 p-6">
            <p className="text-sm font-medium text-white/80">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}
