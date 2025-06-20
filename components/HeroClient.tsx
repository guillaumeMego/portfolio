// app/components/HeroClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroClient() {
  return (
    <motion.div
      className="w-full mt-24 min-h-[70vh] flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-0 md:gap-10 mb-4 w-full md:w-[60vw] mx-auto">
        <div className="flex-shrink-0 flex items-center md:self-start justify-center h-full">
          <Image
            src="/images/mascotte/mascotte.webp"
            alt="Mascotte Guillaume Ganne"
            width={240}
            height={240}
            className="w-60 h-60 md:w-auto md:h-full max-h-[440px] object-contain drop-shadow-xl"
            priority
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center w-full text-center md:text-left min-h-[220px] md:min-h-[340px]">
          <motion.h1
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 text-[2.5rem] md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
          >
            Création de site web sur mesure pour les pros exigeants
          </motion.h1>
          <motion.p
            className="text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed font-normal mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ minHeight: "4.5rem" }}
          >
            Je suis <strong className="font-semibold">Guillaume</strong>,
            développeur full stack & designer web à Angoulême.
            <br />
            <span className="mt-2 block">
              Spécialisé en <em>création de site internet à Angoulême</em> :
              site vitrine, WordPress, e-commerce et applications sur-mesure,
              optimisés SEO local.
            </span>
          </motion.p>
          <motion.div
            className="mt-0 mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="/contact"
              className="bg-primary inline-block px-10 py-4 text-white rounded-full font-semibold font-montserrat hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30"
            >
              Demander un devis
            </a>
          </motion.div>
        </div>
      </div>
      {/* Flèche scroll */}
      <div className="w-full flex justify-center mt-2">
        <ChevronDown className="w-8 h-8 text-[#AD5100] animate-bounce" />
      </div>
    </motion.div>
  );
}
