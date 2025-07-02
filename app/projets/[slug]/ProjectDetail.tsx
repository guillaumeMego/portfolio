"use client";

import React from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Link as LinkIcon,
  CheckCircle2,
} from "lucide-react";
import { Features } from "@/components/Feature";

export default function ProjectDetail({ project }: { project: Project }) {
  const { title, h1, image, date, content, technologies, testimonial, links } =
    project;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4 pt-40">
      {/* En-tête impactant */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
          {h1}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Découvrez comment nous avons créé un site e-commerce performant qui
          convertit plus et génère des résultats concrets.
        </p>
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          <Link
            href="/contact"
            className="bg-primary inline-flex items-center px-12 py-4 text-white rounded-full font-semibold font-montserrat hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Je veux les mêmes résultats
          </Link>
          {links.website && (
            <Link
              href={links.website}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-12 py-4 border-2 border-primary text-primary rounded-full font-semibold font-montserrat hover:border-[#C25B0B] hover:text-[#C25B0B] transition-all duration-300 ease-in-out"
            >
              <LinkIcon className="w-5 h-5 mr-2" />
              Voir le site en ligne
            </Link>
          )}
        </div>
      </div>

      <article className="w-full max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Image principale avec overlay */}
        <div className="relative w-full aspect-video bg-gradient-to-r from-primary/10 to-primary/5">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-contain mix-blend-multiply"
            priority
            placeholder="blur"
            blurDataURL={image.blurDataURL}
          />
        </div>

        {/* Résultats mis en avant */}
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200/80 hover:shadow-xl hover:shadow-gray-200/80 transition-shadow duration-300">
              <div className="text-3xl font-bold text-primary mb-2">+25%</div>
              <div className="text-gray-600">de conversions en 4 semaines</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200/80 hover:shadow-xl hover:shadow-gray-200/80 transition-shadow duration-300">
              <div className="text-3xl font-bold text-primary">99/100</div>
              <div className="text-gray-600">score PageSpeed mobile</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200/80 hover:shadow-xl hover:shadow-gray-200/80 transition-shadow duration-300">
              <div className="text-3xl font-bold text-primary">#3</div>
              <div className="text-gray-600">position Google locale</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200/80 hover:shadow-xl hover:shadow-gray-200/80 transition-shadow duration-300">
              <div className="text-3xl font-bold text-primary">+15%</div>
              <div className="text-gray-600">panier moyen</div>
            </div>
          </div>

          {/* Témoignage client mis en avant */}
          {testimonial && (
            <blockquote className="bg-white rounded-xl p-8 shadow-lg shadow-gray-200/80 hover:shadow-xl hover:shadow-gray-200/80 transition-shadow duration-300 mb-16 relative">
              <div className="text-6xl text-primary/10 absolute top-4 left-4">
                &ldquo;
              </div>
              <p className="text-xl italic text-gray-700 mb-4 relative z-10">
                {testimonial.text}
              </p>
              <footer className="text-gray-600 font-medium text-lg">
                — {testimonial.author}
              </footer>
            </blockquote>
          )}

          {/* Le défi */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Le défi</h2>
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{content.context}</ReactMarkdown>
            </div>
          </section>

          {/* Notre solution */}
          <section className="mb-12">
            <Features />
          </section>

          {/* Technologies utilisées */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Technologies expertes
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-base"
                >
                  <Tag className="h-4 w-4 mr-2 text-primary" />
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <div className="text-center bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Vous voulez les mêmes résultats ?
            </h2>
            <p className="text-gray-600 mb-6">
              Discutons de votre projet et voyons comment nous pouvons vous
              aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-12 py-4 bg-primary text-white rounded-full font-semibold font-montserrat hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30"
              >
                Parlons de votre projet
              </Link>
              <a
                href="https://calendly.com/guillaume-ganne/30min?background_color=ecf0f1&text_color=0e141a&primary_color=2c3e50"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center px-12 py-4 border-2 border-primary text-primary rounded-full font-semibold font-montserrat hover:border-[#C25B0B] hover:text-[#C25B0B] transition-all duration-300 ease-in-out"
              >
                Réserver un appel gratuit
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
