"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.1em",
      borderRadius = "100px",
      shimmerDuration = "2s",
      background = "rgba(0, 0, 0, 0.1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          className
        )}
        style={{
          background,
          borderRadius,
        }}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ left: -100, top: 0 }}
            animate={{ left: ["0%", "100%"], top: ["0%", "100%"] }}
            transition={{
              duration: parseInt(shimmerDuration),
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: shimmerSize,
              height: "100%",
              background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
              zIndex: 1,
              transform: "skewX(-20deg)",
            }}
          />
        </div>
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);