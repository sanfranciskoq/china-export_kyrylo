"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import {
  getFlowRoutes,
  heroMapCountries,
  type HeroFlowRoute,
  type HeroMapCountry,
} from "@/content/hero-map";
import { buildRoutePath, MAP_VIEW_BOX, projectLngLat } from "@/lib/geo";
import { useMotionConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

const FLOW_STROKE_WIDTH = 1.25;
const FLOW_HIT_WIDTH = 12;

type TooltipState = {
  x: number;
  y: number;
  title: string;
  lines: string[];
};

function useInteractiveDesktop() {
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (min-width: 640px)");
    const update = () => setInteractive(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return interactive;
}

function FlowTooltip({
  tooltip,
  onClose,
}: {
  tooltip: TooltipState;
  onClose: () => void;
}) {
  return (
    <div
      className="hero-flow-tooltip pointer-events-none absolute z-20 max-w-[220px] rounded-lg border border-white/10 bg-navy/95 px-3 py-2.5 text-xs text-gray-200 shadow-xl backdrop-blur-md"
      style={{ left: tooltip.x, top: tooltip.y }}
      role="tooltip"
      onMouseLeave={onClose}
    >
      <p className="font-semibold text-accent-light">{tooltip.title}</p>
      <ul className="mt-1.5 space-y-1 text-gray-300/90">
        {tooltip.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function RoutePaths({
  route,
  pathId,
  interactive,
  reducedMotion,
  onRouteHover,
  onRouteLeave,
}: {
  route: HeroFlowRoute;
  pathId: string;
  interactive: boolean;
  reducedMotion: boolean;
  onRouteHover: (
    event: React.MouseEvent<SVGPathElement>,
    route: HeroFlowRoute,
  ) => void;
  onRouteLeave: () => void;
}) {
  const d = buildRoutePath(route.waypoints);
  const isRail = route.mode === "rail";
  const duration = isRail ? 10 : 6;
  const strokeColor = isRail ? "#4ade80" : "#dbaa47";

  return (
    <g className="hero-flow-route">
      <path
        id={pathId}
        d={d}
        fill="none"
        stroke={strokeColor}
        strokeWidth={FLOW_STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 6"
        opacity={0.5}
        className={cn("hero-flow-band", isRail && "hero-flow-band-rail")}
      />
      {interactive ? (
        <path
          d={d}
          fill="none"
          stroke="transparent"
          strokeWidth={FLOW_HIT_WIDTH}
          className="pointer-events-auto cursor-pointer"
          onMouseEnter={(e) => onRouteHover(e, route)}
          onMouseLeave={onRouteLeave}
        />
      ) : null}
      {!reducedMotion ? (
        <circle r={2} fill={strokeColor} opacity={0.75}>
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            path={d}
            rotate="auto"
          />
        </circle>
      ) : null}
    </g>
  );
}

function CountryHub({
  country,
  interactive,
  isHovered,
  onHover,
  onLeave,
}: {
  country: HeroMapCountry;
  interactive: boolean;
  isHovered: boolean;
  onHover: (event: React.MouseEvent<SVGCircleElement>, country: HeroMapCountry) => void;
  onLeave: () => void;
}) {
  const [cx, cy] = useMemo(
    () => projectLngLat(country.lng, country.lat),
    [country.lng, country.lat],
  );

  return (
    <g className="hero-flow-hub">
      {interactive ? (
        <circle
          cx={cx}
          cy={cy}
          r={14}
          fill="transparent"
          className="pointer-events-auto cursor-pointer"
          onMouseEnter={(e) => onHover(e, country)}
          onMouseLeave={onLeave}
        />
      ) : null}
      <circle
        cx={cx}
        cy={cy}
        r={isHovered ? 5 : 3.5}
        fill={isHovered ? "#dbaa47" : "#c8922a"}
        opacity={isHovered ? 0.95 : 0.7}
        className="transition-all duration-200"
      />
      {isHovered ? (
        <circle
          cx={cx}
          cy={cy}
          r={10}
          fill="none"
          stroke="#c8922a"
          strokeWidth={1}
          opacity={0.5}
        />
      ) : null}
    </g>
  );
}

export function HeroFlowOverlay({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const interactive = useInteractiveDesktop();
  const { prefersReducedMotion } = useMotionConfig();
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const routes = getFlowRoutes();

  const clearTooltip = useCallback(() => {
    setTooltip(null);
    setHoveredCountry(null);
  }, []);

  const showRouteTooltip = useCallback(
    (event: React.MouseEvent<SVGPathElement>, route: HeroFlowRoute) => {
      if (!interactive) return;
      const container = event.currentTarget.closest(".hero-flow-overlay");
      const containerRect = container?.getBoundingClientRect();
      if (!containerRect) return;

      const modeLabel = route.mode === "rail" ? "Kolej" : "Lotniczy";
      setTooltip({
        x: event.clientX - containerRect.left + 12,
        y: event.clientY - containerRect.top - 8,
        title: route.label,
        lines: [route.volumeLabel, `${modeLabel} · ${route.transitDays}`],
      });
    },
    [interactive],
  );

  const showCountryTooltip = useCallback(
    (event: React.MouseEvent<SVGCircleElement>, country: HeroMapCountry) => {
      if (!interactive) return;
      const container = event.currentTarget.closest(".hero-flow-overlay");
      const containerRect = container?.getBoundingClientRect();
      if (!containerRect) return;

      setHoveredCountry(country.id);
      setTooltip({
        x: event.clientX - containerRect.left + 12,
        y: event.clientY - containerRect.top - 8,
        title: country.name,
        lines: [
          country.role,
          ...country.metrics.slice(0, 2).map((m) => `${m.label}: ${m.value}`),
        ],
      });
    },
    [interactive],
  );

  return (
    <div
      className={cn(
        "hero-flow-overlay pointer-events-none absolute inset-0 flex items-center justify-center",
        interactive && "sm:pointer-events-auto",
        className,
      )}
      aria-hidden
    >
      <div className="hero-flow-map-canvas relative aspect-[1911/778] w-full max-h-full">
        <svg
          viewBox={MAP_VIEW_BOX}
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
        >
        <g className="hero-flow-routes">
          {routes.map((route) => (
            <RoutePaths
              key={route.id}
              route={route}
              pathId={`${uid}-${route.id}`}
              interactive={interactive}
              reducedMotion={prefersReducedMotion}
              onRouteHover={showRouteTooltip}
              onRouteLeave={clearTooltip}
            />
          ))}
        </g>

        <g className="hero-flow-hubs">
          {heroMapCountries.map((country) => (
            <CountryHub
              key={country.id}
              country={country}
              interactive={interactive}
              isHovered={hoveredCountry === country.id}
              onHover={showCountryTooltip}
              onLeave={clearTooltip}
            />
          ))}
        </g>
        </svg>

        {interactive && tooltip ? (
          <FlowTooltip tooltip={tooltip} onClose={clearTooltip} />
        ) : null}
      </div>
    </div>
  );
}
