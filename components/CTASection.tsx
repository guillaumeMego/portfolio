import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * ------------------------- CTA Section -------------------------
 * À placer APRÈS les témoignages.
 * Deux options pour le prospect : réservation Calendly ou page Contact.
 */
export function CTASection() {
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

        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
          Choisissez votre créneau ou écrivez‑moi ; je reviens vers vous sous 24
           h.
        </p>

        <div className="mt-10 flex flex-row items-center justify-center gap-4 w-full">
          <div className="w-24 h-24 rounded-full bg-background/80 items-center justify-center shadow-lg hidden sm:flex">
            <Image
              src="/images/mascotte/mail.webp"
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
            className="rounded-2xl bg-[#C25B0B] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#a94e00]"
          >
            Réserver sur Calendly
          </a>
          <a
            href="/contact"
            className="rounded-2xl border border-white px-8 py-4 font-semibold hover:bg-white hover:text-[#2C3E50]"
          >
            Envoyer un message
          </a>
          <div className="w-24 h-24 rounded-full bg-background/80 items-center justify-center shadow-lg hidden sm:flex">
            <Image
              src="/images/mascotte/calendly.webp"
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
