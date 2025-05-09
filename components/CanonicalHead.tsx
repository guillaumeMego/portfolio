"use client";

import { usePathname } from "next/navigation";

export function CanonicalHead() {
  const pathname = usePathname();
  const canonical = `https://guillaumeganne.com${pathname}`;

  return <link rel="canonical" href={canonical} />;
}
