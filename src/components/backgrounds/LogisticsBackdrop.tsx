import { cn } from "@/lib/utils";

export type LogisticsBackdropVariant =
  | "site"
  | "roadmap"
  | "caseStudies"
  | "footer"
  | "formPage";

type LogisticsBackdropProps = {
  variant: LogisticsBackdropVariant;
  className?: string;
};

function SharedLayers({
  grid = "default",
  showRoutes = false,
  animatedGlows = false,
}: {
  grid?: "default" | "fine" | "none";
  showRoutes?: boolean;
  animatedGlows?: boolean;
}) {
  return (
    <>
      {grid === "default" ? (
        <div className="logistics-bg-grid absolute inset-0" />
      ) : null}
      {grid === "fine" ? (
        <div className="logistics-bg-grid-fine absolute inset-0" />
      ) : null}
      <div
        className={cn(
          "absolute inset-0",
          animatedGlows && "logistics-bg-glows-animated",
        )}
      >
        <div className="logistics-bg-glow-origin absolute inset-0" />
        <div className="logistics-bg-glow-destination absolute inset-0" />
      </div>
      {showRoutes ? (
        <div className="logistics-bg-routes absolute inset-0" />
      ) : null}
      <div className="logistics-bg-grain absolute inset-0 mix-blend-soft-light" />
    </>
  );
}

export function LogisticsBackdrop({ variant, className }: LogisticsBackdropProps) {
  const isFixed = variant === "site";

  return (
    <div
      className={cn(
        "pointer-events-none overflow-hidden",
        isFixed ? "logistics-bg-fixed" : "absolute inset-0",
        className,
      )}
      aria-hidden
    >
      {variant === "site" ? (
        <SharedLayers animatedGlows />
      ) : null}

      {variant === "roadmap" ? (
        <div className="logistics-bg-roadmap absolute inset-0" />
      ) : null}

      {variant === "caseStudies" ? (
        <div className="logistics-bg-case-studies absolute inset-0" />
      ) : null}

      {variant === "footer" ? (
        <div className="logistics-bg-footer absolute inset-0">
          <SharedLayers />
        </div>
      ) : null}

      {variant === "formPage" ? (
        <>
          <SharedLayers grid="fine" showRoutes />
          <div className="logistics-bg-form-page absolute inset-0" />
        </>
      ) : null}
    </div>
  );
}
