"use client";

import dynamic from "next/dynamic";
import { DotPattern } from "@/components/ui/dot-pattern";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useState, useEffect } from "react";

const HeroServer = dynamic(() => import("@/components/HeroServer"), {
  ssr: true,
});
const HeroClient = dynamic(() => import("@/components/HeroClient"), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-background" />,
});

export default function Home() {
  const [showClientHero, setShowClientHero] = useState(false);

  useEffect(() => {
    setShowClientHero(true);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-foreground relative">
      {showClientHero ? <HeroClient /> : <HeroServer />}

      <div className="max-w-7xl mx-auto space-y-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
