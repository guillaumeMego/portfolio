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
                <motion.div
                  className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative h-full">
                    <Image
                      src={project.image.src}
                      width={project.image.width}
                      height={project.image.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      priority={index === 0}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={project.title}
                    />
                    {/* … gradient overlay & caption */}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
