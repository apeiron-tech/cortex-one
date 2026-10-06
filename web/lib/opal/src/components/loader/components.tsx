"use client";

import "@opal/components/loader/styles.css";
import { cn } from "@opal/utils";
import { useOpalStrings } from "@opal/strings";

// ---------------------------------------------------------------------------
// Shared
// ---------------------------------------------------------------------------

// Marks render in `currentColor`, so color is applied as a text token.
// Default is the neutral `border-02`. Pass `color` to override, or
// `"inherit"` to set no class and let the ambient text color flow through.
type LoaderColor =
  | "inherit"
  | "border-02"
  | "text-02"
  | "text-03"
  | "text-04"
  | "text-05"
  | "status-error-05"
  | "status-success-05"
  | "status-warning-05";

const COLOR_CLASS: Record<LoaderColor, string> = {
  inherit: "",
  "border-02": "text-border-02",
  "text-02": "text-text-02",
  "text-03": "text-text-03",
  "text-04": "text-text-04",
  "text-05": "text-text-05",
  "status-error-05": "text-status-error-05",
  "status-success-05": "text-status-success-05",
  "status-warning-05": "text-status-warning-05",
};

// ---------------------------------------------------------------------------
// CortexLoader
// ---------------------------------------------------------------------------

interface CortexLoaderProps {
  /** Size of the animated mark, in pixels. @default 64 */
  size?: number;

  /** Mark color token. @default "border-02" */
  color?: LoaderColor;
}

// Geometry matches the @opal/icons `cortex-ring`/`cortex-logo` paths. Stroke
// is defined here, not reused from them, so weight can be tuned: ~3px at
// the default 64px, scaling with `size`.
const STROKE_WIDTH = 0.75;

const RING_PATH = "M12.596 11.857A6 6 0 1 1 12.596 4.143";

function svgLayerProps(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  };
}

/**
 * Cortex One loading mark: the C-ring rotates a full turn while the core dot
 * pulses (2s loop), holding the static mark under `prefers-reduced-motion`.
 * Uses `currentColor`, so `color` themes it. For a full-page loading state
 * with a label, use `PageLoader`.
 */
function CortexLoader({ size = 64, color = "border-02" }: CortexLoaderProps) {
  const strings = useOpalStrings();
  return (
    <div
      role="status"
      aria-label={strings.loading}
      className={cn("relative shrink-0", COLOR_CLASS[color])}
      style={{ width: size, height: size }}
    >
      <div className="opal-loader-rotator">
        <svg {...svgLayerProps(size)} className="opal-loader-layer">
          <path
            d={RING_PATH}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <svg
        {...svgLayerProps(size)}
        className="opal-loader-layer opal-loader-core"
      >
        <circle cx={8} cy={8} r={1.75} fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}

export { CortexLoader, type CortexLoaderProps, type LoaderColor };
