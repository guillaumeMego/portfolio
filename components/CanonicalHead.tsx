"use client";

import { usePathname } from "next/navigation";

interface CanonicalHeadProps {
  path?: string;
}

export default function CanonicalHead({ path }: CanonicalHeadProps) {
  const pathname = usePathname();
  const canonicalPath = path || pathname;
  const canonicalUrl = `https://www.guillaumeganne.com${canonicalPath}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
