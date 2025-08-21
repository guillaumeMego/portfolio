import { ReactNode } from "react";
import {
  RocketLaunchIcon,
  PresentationChartLineIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      {/* Conteneur de l'icône avec fond dégradé et ombre */}
      <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#CC5500] to-[#E67E22] shadow-xl hover:shadow-2xl hover:shadow-[#CC5500]/30 hover:scale-110 transition-all duration-300 mb-6">
        {/* Icône en blanc */}
        <div className="text-white transform hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        {/* Effet de brillance */}
        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Titre */}
      <h3 className="text-xl font-bold text-[#CC5500] mb-3 hover:text-[#B8440F] transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Des solutions web sur mesure
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Je crée des sites web performants et élégants qui répondent
            parfaitement à vos besoins. En tant que{" "}
            <strong>développeur web freelance à Angoulême</strong>, je
            privilégie la qualité et la proximité pour chaque projet de{" "}
            <strong>création site vitrine Angoulême</strong> ou boutique
            e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Feature
            icon={<RocketLaunchIcon className="w-6 h-6" />}
            title="Performance optimale"
            description="90+ sur Google PageSpeed, hébergement optimisé et sécurité HTTPS stricte. Temps de chargement < 2s garanti, 3x plus rapide que la moyenne des sites web."
          />
          <Feature
            icon={<PresentationChartLineIcon className="w-6 h-6" />}
            title="SEO local Charente"
            description="Optimisation locale testée et validée sur Google Business. Référencement Angoulême et Charente avec résultats mesurables : top 5 garanti sur vos mots-clés métier. Spécialisé dans le référencement de site e-commerce Charente."
          />
          <Feature
            icon={<SparklesIcon className="w-6 h-6" />}
            title="Design sur-mesure"
            description="Interfaces modernes comparables aux meilleures agences, mais avec prix freelance. Maquettes Figma personnalisées et design qui convertit 2x mieux que la moyenne."
          />
        </div>
      </div>
    </section>
  );
}
