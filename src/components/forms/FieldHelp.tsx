"use client";

import { CircleHelp } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type HelpTooltipProps = {
  label: string;
  help: string;
  size?: "sm" | "md";
  className?: string;
};

export function HelpTooltip({
  label,
  help,
  size = "md",
  className,
}: HelpTooltipProps) {
  const iconClass = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";
  const buttonClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-full text-white/40 transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light/30",
            buttonClass,
            className,
          )}
          aria-label={`Wyjaśnienie: ${label}`}
        >
          <CircleHelp className={iconClass} aria-hidden="true" />
        </button>
      </TooltipTrigger>
      <TooltipContent>{help}</TooltipContent>
    </Tooltip>
  );
}

type FieldHelpProps = {
  htmlFor?: string;
  label: string;
  help: string;
  className?: string;
};

export function FieldHelp({ htmlFor, label, help, className }: FieldHelpProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {htmlFor ? (
        <label htmlFor={htmlFor} className="text-xs font-semibold text-white/70">
          {label}
        </label>
      ) : (
        <span className="text-xs font-semibold text-white/70">{label}</span>
      )}
      <HelpTooltip label={label} help={help} />
    </div>
  );
}

type ResultHelpProps = {
  label: string;
  help: string;
  className?: string;
};

export function ResultHelp({ label, help, className }: ResultHelpProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span>{label}</span>
      <HelpTooltip label={label} help={help} size="sm" />
    </div>
  );
}
