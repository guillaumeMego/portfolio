"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <motion.div
      className="w-full -mt-8 md:mt-12 min-h-[80vh] flex flex-col justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2 mb-4 max-w-6xl mx-auto">
        <div className="flex-shrink-0 flex items-center md:self-start justify-center h-full">
          <Image
            src="/images/mascotte/mascotte-guillaume-ganne-webdesigner.webp"
            alt="Mascotte Guillaume Ganne"
            width={500}
            height={500}
            className="w-96 h-96 md:w-[28rem] md:h-[28rem] object-contain drop-shadow-xl"
            priority
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center w-full text-center md:text-left min-h-[220px] md:min-h-[340px]">
          <motion.h1
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 text-[2.5rem] md:text-5xl font-bold mb-4 max-w-2xl mx-auto md:mx-0"
            variants={{
              hidden: { opacity: 0, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 1 },
              },
            }}
          >
            Sites web sur mesure à Angoulême pour pros exigeants
          </motion.h1>
          <motion.p
            className="text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed font-normal mb-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
            style={{ minHeight: "4.5rem" }}
          >
            Je suis <strong className="font-semibold">Guillaume</strong>,{" "}
            <strong>développeur web freelance à Angoulême</strong> depuis 5 ans.
            <br />
            <span className="mt-2 block">
              Spécialisé en <em>création de site internet à Angoulême</em> :
              sites vitrines, e-commerce et applications sur-mesure, optimisés
              SEO local pour la Charente.{" "}
              <a
                href="/creation-site-web-angouleme"
                className="text-[#CC5500] underline hover:text-[#B8440F] transition-colors"
              >
                création site internet à Angoulême
              </a>
            </span>
            <span className="mt-2 block">
              <strong>Freelance = transparence des prix</strong> et
              accompagnement personnalisé. Pas d&apos;agence, juste un expert
              local qui comprend vos enjeux.
            </span>
          </motion.p>
          <motion.p
            className="text-sm text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8, delay: 0.4 },
              },
            }}
          >
            Tous mes sites atteignent 90+ sur Google PageSpeed, sont sécurisés
            et optimisés pour convertir vos visiteurs en clients.
          </motion.p>
          <motion.div
            className="mt-0 mb-24 flex flex-col sm:flex-row gap-4 items-center md:items-start"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.7, duration: 0.8 },
              },
            }}
          >
            <a
              href="/contact/"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
            >
              Demander un devis
            </a>
            <a
              href="https://calendly.com/guillaume-ganne/30min?background_color=ecf0f1&text_color=0e141a&primary_color=2c3e50"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
            >
              Réserver un appel gratuit
            </a>
          </motion.div>
        </div>
      </div>
      {/* Flèche scroll */}
      <motion.div
        className="w-full flex justify-center mt-2"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
        }}
      >
        <ChevronDown
          className="w-8 h-8 text-[#CC5500] hover:text-[#B8440F] transition-colors duration-200"
          style={{
            animation: "slowBounce 3s ease-in-out infinite",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
