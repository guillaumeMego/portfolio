/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.guillaumeganne.com',
    generateRobotsTxt: false, // ❌ Désactiver - nous gérons robots.txt manuellement
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    // 🎯 FORCER le trailing slash pour toutes les URLs du sitemap
    trailingSlash: true,
    exclude: [
        '/manifest.webmanifest',
        '/robots.txt',
        '/sitemap.xml',
        '/404',
        '/500',
        '/drafts/*'
    ],
    // Supprimé - nous gérons robots.txt manuellement
    // ❌ Supprimé additionalPaths car cela crée des doublons
    // Les pages sont déjà découvertes automatiquement par Next.js
    transform: async (config, path) => {
        // 🎯 Normaliser toutes les URLs : https + www + trailing slash obligatoire
        let normalizedPath = path;

        // Assurer le trailing slash (sauf pour la racine qui est déjà "/")
        if (normalizedPath !== '/' && !normalizedPath.endsWith('/')) {
            normalizedPath = `${normalizedPath}/`;
        }

        // Construire l'URL complète normalisée
        const fullUrl = `${config.siteUrl}${normalizedPath}`;

        return {
            loc: fullUrl,
            changefreq: 'monthly',
            priority: path === '/' ? 1.0 :
                path.startsWith('/projets/') ? 0.8 :
                    path.startsWith('/blog/') ? 0.9 : 0.7,
            lastmod: new Date().toISOString(),
        };
    },
}; 