"use client";

import { usePathname } from "next/navigation";

export function CanonicalHead() {
  const pathname = usePathname();
  const canonical =
    pathname === "/"
      ? "https://www.guillaumeganne.com"
      : `https://www.guillaumeganne.com${pathname}`;

  return <link rel="canonical" href={canonical} />;
}
