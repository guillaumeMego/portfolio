export default function HeroServer() {
  return (
    <div className="text-center max-w-3xl mx-auto mt-24 px-4">
      <h1
        className="text-4xl md:text-5xl font-bold mb-4 text-primary"
        style={{ minHeight: "3.5rem" }} // ✅ stabilité CLS si contenu change
      >
        Création de site web sur mesure pour les pros exigeants
      </h1>
      <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal min-h-[4.5rem]">
        Je suis <strong className="font-semibold">Guillaume</strong>,
        développeur full stack & designer web à Angoulême. Spécialisé en{" "}
        <em>création de site internet à Angoulême</em> : site vitrine,
        WordPress, e-commerce et applications sur-mesure, optimisés SEO local.
      </p>
      <div className="mt-6 mb-24">
        <a
          href="/contact"
          className="bg-primary inline-block px-10 py-4 text-white rounded-full hover:bg-primary/80 transition shadow-lg shadow-primary/50"
        >
          Demander un devis
        </a>
      </div>
    </div>
  );
}
