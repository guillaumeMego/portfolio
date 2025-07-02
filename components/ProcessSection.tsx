import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Lightbulb,
  Laptop2,
  ShieldCheck,
  Rocket,
  Phone,
} from "lucide-react";
import Image from "next/image";

/**
 * Section "Process / Méthodo" – version orientée client
 * Souligne : rendez-vous, écoute, proximité, confiance, expertise technique.
 */
export default function ProcessSection() {
  const steps = [
    {
      title: "1. Rendez-vous & écoute",
      icon: Handshake,
      description:
        "Un café à Angoulême ou en visio : j'apprends votre histoire, vos objectifs et vos clients afin de bâtir un projet qui vous ressemble vraiment.",
    },
    {
      title: "2. Co-création design",
      icon: Lightbulb,
      description:
        "Atelier Figma en live : maquettes interactives et aller-retour rapides jusqu'à ce que vous disiez 'c'est exactement ça !'.",
    },
    {
      title: "3. Développement sur-mesure",
      icon: Laptop2,
      description:
        "Je m'occupe de tout le code (WordPress / Next.js), du SEO local et de la sécurité pour que votre site charge en <2 s et reste protégé 24/7.",
    },
    {
      title: "4. Lancement & suivi",
      icon: Rocket,
      description:
        "Formation vidéo, hotline directe et point trimestriel : votre site vit, évolue et continue de convertir vos visiteurs en clients.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#ECF0F1] py-20 font-sans text-[#0E141A] scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-[#2C3E50] md:text-5xl"
        >
          Une méthode claire, basée sur la confiance
        </motion.h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg opacity-80">
          Vous savez toujours où nous en sommes, du premier rendez-vous au suivi
          après mise en ligne.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, icon: Icon, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-white p-6 shadow-lg flex flex-col items-center"
            >
              {i === 0 && (
                <Image
                  src="/images/mascotte/mascotte-cafe-guillaume-ganne.webp"
                  alt="Mascotte café"
                  width={96}
                  height={96}
                  className="w-24 h-24 absolute left-2 top-0 -translate-y-1/2 z-20 drop-shadow-xl"
                  priority={false}
                />
              )}
              {i === 1 && (
                <Image
                  src="/images/mascotte/mascotte-figma-guillaume-ganne.webp"
                  alt="Mascotte figma"
                  width={96}
                  height={96}
                  className="w-24 h-24 absolute left-2 top-0 -translate-y-1/2 z-20 drop-shadow-xl"
                  priority={false}
                />
              )}
              {i === 2 && (
                <Image
                  src="/images/mascotte/mascotte-portable-guillaume-ganne.webp"
                  alt="Mascotte portable"
                  width={96}
                  height={96}
                  className="w-24 h-24 absolute left-2 top-0 -translate-y-1/2 z-20 drop-shadow-xl"
                  priority={false}
                />
              )}
              {i === 3 && (
                <Image
                  src="/images/mascotte/mascotte-enseigner-guillaume-ganne.webp"
                  alt="Mascotte enseigner"
                  width={96}
                  height={96}
                  className="w-24 h-24 absolute left-2 top-0 -translate-y-1/2 z-20 drop-shadow-xl"
                  priority={false}
                />
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E67E22]/10 text-[#E67E22]">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://calendly.com/guillaume-ganne/30min?background_color=ecf0f1&text_color=0e141a&primary_color=2c3e50"
            className="bg-primary px-10 py-4 text-white rounded-full font-semibold font-montserrat hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30 flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            Réservez votre appel gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
