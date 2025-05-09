"use client";

import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  rx = 30,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
}) {
  const pathRef = React.useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <Component className={cn("relative w-fit", containerClassName)}>
      <div className={cn("absolute inset-0", className)}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute w-full h-full"
          style={{
            borderRadius: rx,
          }}
        >
          <path
            ref={pathRef}
            d="M 0 50 L 50 0 L 100 50 L 50 100 Z"
            fill="none"
            className="stroke-transparent"
          />
        </svg>
        <motion.div
          style={{ transform }}
          className={cn(
            "absolute left-0 top-0 h-4 w-4 rounded-full bg-primary",
            borderClassName
          )}
        />
      </div>
      {children}
    </Component>
  );
}