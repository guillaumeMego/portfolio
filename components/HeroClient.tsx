// app/components/HeroClient.tsx
"use client";

import { motion } from "framer-motion";

export default function HeroClient() {
  return (
    <motion.div
      className="text-center max-w-3xl mx-auto mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        Création de site web sur mesure pour les pros exigeants
      </motion.h1>
      <motion.p
        className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ minHeight: "4.5rem" }} // ✅ stabilité du bloc texte
      >
        Je suis <strong className="font-semibold">Guillaume</strong>,
        développeur full stack & designer web à Angoulême. Spécialisé en{" "}
        <em>création de site internet à Angoulême</em> : site vitrine,
        WordPress, e-commerce et applications sur-mesure, optimisés SEO local.
      </motion.p>
      <motion.div
        className="mt-6 mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <a
          href="/contact"
          className="bg-primary inline-block px-10 py-4 text-white rounded-full hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30"
        >
          Demander un devis
        </a>
      </motion.div>
    </motion.div>
  );
}
