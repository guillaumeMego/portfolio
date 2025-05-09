"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Monitor,
  Code as CodeIcon,
  Layers,
  CheckCircle,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  const objectives = project.description.objectives
    .split("\n")
    .map((o) => o.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-background relative my-24">
      <DotPattern className="absolute inset-0 opacity-50 z-0" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10 space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6"
        >
          ← Tous les projets
        </Link>

        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-primary">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {project.description.minidescription}
          </p>
          {project.url && (
            <ShimmerButton
              onClick={() => window.open(project.url, "_blank")}
              className="mt-4 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition"
            >
              Aller sur le site
            </ShimmerButton>
          )}
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Visuel */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Visuel
                </h2>
              </div>
              <div className="relative h-[300px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <CodeIcon className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Colonne droite */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contexte */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Contexte
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.description.storytelling}
              </p>
            </div>

            {/* Objectifs */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Objectifs
                </h2>
              </div>
              <div className="space-y-3">
                {objectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Résultats
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.description.outcomes}
              </p>
            </div>

            {/* Témoignage */}
            {project.clientTestimonial && (
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    Témoignage
                  </h2>
                </div>
                <blockquote className="italic text-muted-foreground">
                  “{project.clientTestimonial}”
                </blockquote>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
