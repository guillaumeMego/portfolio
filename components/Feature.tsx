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
      <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#E67E22] to-[#F39C12] shadow-lg mb-4">
        {/* Icône en blanc */}
        <div className="text-white">{icon}</div>
        {/* Effet de brillance */}
        <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Titre */}
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>

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
            parfaitement à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Feature
            icon={<RocketLaunchIcon className="w-6 h-6" />}
            title="Performance optimale"
            description="Des sites web rapides et réactifs qui offrent une expérience utilisateur exceptionnelle"
          />
          <Feature
            icon={<PresentationChartLineIcon className="w-6 h-6" />}
            title="SEO avancé"
            description="Optimisation poussée pour une meilleure visibilité dans les moteurs de recherche"
          />
          <Feature
            icon={<SparklesIcon className="w-6 h-6" />}
            title="Design moderne"
            description="Des interfaces élégantes et intuitives qui mettent en valeur votre marque"
          />
        </div>
      </div>
    </section>
  );
}
