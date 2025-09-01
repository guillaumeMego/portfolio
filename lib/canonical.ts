/**
 * Utilitaires pour la gestion des URLs canoniques
 * Résout les problèmes de contenu dupliqué avec Google
 */

/**
 * Génère une URL canonique propre avec www et trailing slash
 * @param pathname - Le chemin de la page (ex: "/blog/article")
 * @returns URL canonique complète (ex: "https://www.guillaumeganne.com/blog/article/")
 */
export function generateCanonicalUrl(pathname: string): string {
  // Nettoyer le pathname
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  // Assurer le trailing slash (sauf pour la racine qui est déjà "/")
  const pathWithTrailingSlash =
    cleanPath === "/"
      ? "/"
      : cleanPath.endsWith("/")
      ? cleanPath
      : `${cleanPath}/`;

  // Construire l'URL complète avec www et https
  return `https://www.guillaumeganne.com${pathWithTrailingSlash}`;
}

/**
 * Génère les métadonnées canoniques pour Next.js App Router
 * @param pathname - Le chemin de la page
 * @param customCanonical - URL canonique personnalisée (optionnel)
 * @returns Objet métadonnées avec alternates.canonical
 */
export function generateCanonicalMetadata(
  pathname: string,
  customCanonical?: string
) {
  const canonicalUrl = customCanonical || generateCanonicalUrl(pathname);

  return {
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
    },
    twitter: {
      url: canonicalUrl,
    },
  };
}

/**
 * Valide qu'une URL respecte le format canonique attendu
 * @param url - URL à valider
 * @returns true si l'URL est conforme
 */
export function isValidCanonicalUrl(url: string): boolean {
  // Doit commencer par https://www.guillaumeganne.com
  if (!url.startsWith("https://www.guillaumeganne.com")) {
    return false;
  }

  // Doit se terminer par "/" sauf si c'est la racine
  const path = url.replace("https://www.guillaumeganne.com", "");
  if (path !== "/" && !path.endsWith("/")) {
    return false;
  }

  return true;
}

/**
 * Normalise une URL pour qu'elle respecte le format canonique
 * @param url - URL à normaliser
 * @returns URL normalisée
 */
export function normalizeUrl(url: string): string {
  // Extraire le pathname de l'URL
  let pathname: string;

  try {
    const urlObj = new URL(url);
    pathname = urlObj.pathname;
  } catch {
    // Si ce n'est pas une URL complète, traiter comme un pathname
    pathname = url;
  }

  return generateCanonicalUrl(pathname);
}
