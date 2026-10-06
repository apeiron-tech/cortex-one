"use client";

import React from "react";
import { cn } from "@opal/utils";

export interface FrostedDivProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @deprecated No-op. Surfaces are opaque after the Codex restyle.
   */
  backgroundColor?: string;

  /**
   * @deprecated No-op. Surfaces are opaque after the Codex restyle.
   */
  blur?: string;

  /**
   * @deprecated No-op. Surfaces are opaque after the Codex restyle.
   */
  backdropBlur?: string;

  /**
   * @deprecated No-op. Surfaces are opaque after the Codex restyle.
   */
  borderRadius?: string;

  /**
   * @deprecated No-op. Surfaces are opaque after the Codex restyle.
   */
  overlayClassName?: string;
}

/**
 * Compatibility wrapper. The glass overlay is gone; this is a layout `div`.
 */
export default function FrostedDiv({
  backgroundColor: _backgroundColor,
  blur: _blur,
  backdropBlur: _backdropBlur,
  borderRadius: _borderRadius,
  overlayClassName: _overlayClassName,
  className,
  style,
  children,
  ...props
}: FrostedDivProps) {
  return (
    <div className={cn("relative", className)} style={style} {...props}>
      {children}
    </div>
  );
}
