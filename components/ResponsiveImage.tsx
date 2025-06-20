import Image from "next/image";
import { useState } from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  quality?: number;
}

export function ResponsiveImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  priority = false,
  width = 1200,
  height = 630,
  quality = 75,
}: ResponsiveImageProps) {
  const [isLoading, setLoading] = useState(true);

  // Générer le srcSet pour différentes tailles d'écran
  const generateSrcSet = () => {
    const breakpoints = [640, 750, 828, 1080, 1200, 1920];
    return breakpoints
      .map((w) => `${src}?w=${w}&q=${quality} ${w}w`)
      .join(", ");
  };

  // Générer le blurDataURL
  const blurSrc = src.replace(/\.(webp|png|jpe?g)$/, ".blur.webp");

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={`
          duration-700 ease-in-out
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }
        `}
        onLoadingComplete={() => setLoading(false)}
        placeholder="blur"
        blurDataURL={blurSrc}
      />
    </div>
  );
}
