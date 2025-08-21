"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * ------------------------- CTA Section -------------------------
 * À placer APRÈS les témoignages.
 * Deux options pour le prospect : réservation Calendly ou page Contact.
 */
export default function CTASection() {
  return (
    <section id="cta" className="bg-[#2C3E50] py-20 text-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold md:text-4xl"
        >
          Prêt à lancer votre site web à Angoulême&nbsp;?
        </motion.h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
          Choisissez votre créneau ou écrivez‑moi ; je reviens vers vous sous 24
           h.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-base text-white/90">
          Vous recevez une réponse personnalisée sous 24 h. Premier rendez-vous
          gratuit, sans engagement.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-orange-200 font-medium">
          ⏰ Calendrier bientôt complet – Réservez avant la fin du mois pour
          garantir votre créneau
        </p>

        <div className="mt-10 flex flex-row items-center justify-center gap-4 w-full">
          <div className="w-24 h-24 rounded-full bg-background/80 items-center justify-center shadow-lg hidden sm:flex">
            <Image
              src="/images/mascotte/mascotte-mail-guillaume-ganne.webp"
              alt="Mascotte mail"
              width={96}
              height={96}
              className="w-20 h-20 object-contain"
            />
          </div>
          <a
            href="https://calendly.com/guillaume-ganne/30min?background_color=ecf0f1&text_color=0e141a&primary_color=2c3e50"
            target="_blank"
            rel="noopener"
            className="group relative rounded-2xl bg-gradient-to-r from-[#CC5500] to-[#D35400] px-10 py-5 font-bold text-white shadow-2xl hover:shadow-3xl hover:shadow-[#CC5500]/40 hover:scale-110 transition-all duration-300 transform overflow-hidden"
          >
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
              Réserver sur Calendly
            </span>
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
          <a
            href="/contact/"
            className="group rounded-2xl border-2 border-white px-10 py-5 font-bold text-white hover:bg-white hover:text-[#2C3E50] hover:scale-105 shadow-xl hover:shadow-2xl transition-all duration-300 transform"
          >
            <span className="group-hover:scale-105 transition-transform duration-200">
              Envoyer un message
            </span>
          </a>
          <div className="w-24 h-24 rounded-full bg-background/80 items-center justify-center shadow-lg hidden sm:flex">
            <Image
              src="/images/mascotte/mascotte-calendly-guillaume-ganne.webp"
              alt="Mascotte calendly"
              width={96}
              height={96}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-8 text-base text-white/90 leading-relaxed">
          <p>
            Besoin d&apos;un <strong>site web professionnel à Angoulême</strong>
             ? Je conçois des sites vitrines, e-commerce et applications
            sur-mesure pour les entrepreneurs, artisans et PME de la région.
            Optimisation SEO local, design moderne, accompagnement
            personnalisé : boostez votre visibilité et attirez de nouveaux
            clients grâce à une présence en ligne efficace et adaptée à votre
            activité à Angoulême et en Charente.
          </p>
        </div>
      </div>
    </section>
  );
}
