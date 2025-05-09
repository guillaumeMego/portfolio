"use client";

import dynamic from "next/dynamic";
import { Code, Film } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { projects } from "@/data/projects";
import HeroServer from "@/components/HeroServer";
import { motion } from "framer-motion";

// Le composant client est chargé uniquement côté client, sans SSR
const HeroClient = dynamic(() => import("@/components/HeroClient"), {
  ssr: false,
});

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showClientHero, setShowClientHero] = useState(false);

  // On déclenche l'animation du Hero dès que le client est prêt
  useEffect(() => {
    setShowClientHero(true);
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <>
      <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <DotPattern className="absolute inset-0 opacity-50 z-0" />

        {
          !showClientHero ? (
            <HeroServer /> // tant que le client n’est pas prêt, on affiche la version statique
          ) : (
            <HeroClient />
          ) // dès que le client prend la main, on n’affiche plus que la version animée
        }

        {/* Projects Grid (idem) */}
        <div className="max-w-7xl mx-auto space-y-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
            {filteredProjects.map((project, index) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div
                  className="group rounded-lg overflow-hidden cursor-pointer shadow-xl"
                  style={{ minHeight: "460px" }} // ✅ Réserve de place = pas de CLS
                >
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105" // ✅ EFFET scale conservé
                    />
                  </div>

                  <div className="p-6 bg-background">
                    <div className="flex items-center gap-2 mb-2">
                      {project.category === "dev" ? (
                        <Code className="h-5 w-5 text-primary" />
                      ) : (
                        <Film className="h-5 w-5 text-primary" />
                      )}
                      <h2 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground font-normal">
                      {project.description.minidescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
