"use client";

import { cn } from "@/lib/utils";

export const DotPattern = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 h-full w-full bg-dotted-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
      {...props}
    />
  );
};