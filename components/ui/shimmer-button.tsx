"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      children,
      className,
      shimmerColor = "rgba(156, 163, 175, 0.1)",
      shimmerSize = "0.1em",
      borderRadius = "100px",
      shimmerDuration = "2s",
      background = "rgba(0, 0, 0, 0.1)",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-full bg-primary px-4 py-2 text-primary-foreground transition-all duration-300 hover:scale-105",
          className
        )}
        style={{
          borderRadius,
        }}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-visible"
          style={{
            background: `linear-gradient(${shimmerColor}, ${shimmerColor} 50%, transparent 50%, transparent)`,
            backgroundSize: `100% ${shimmerSize}`,
            animation: `shimmer ${shimmerDuration} linear infinite`,
          }}
        />
        <div className="relative">{children}</div>
      </button>
    );
  }
);