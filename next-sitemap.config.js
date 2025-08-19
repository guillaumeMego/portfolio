/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.guillaumeganne.com',
    generateRobotsTxt: true, // ✅ Activer la génération du robots.txt
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: [
        '/manifest.webmanifest',
        '/robots.txt',
        '/sitemap.xml',
        '/404',
        '/500',
        '/drafts/*'
    ],
    robotsTxtOptions: {
        // 🎯 Configuration du robots.txt pour autoriser CSS/JS/Images
        policies: [
            {
                userAgent: '*',
                allow: [
                    '/*.css$',
                    '/*.js$',
                    '/*.png$',
                    '/*.jpg$',
                    '/*.jpeg$',
                    '/*.gif$',
                    '/*.svg$',
                    '/*.webp$',
                    '/*.ico$',
                    '/_next/static/*',
                    '/_next/image*'
                ],
                disallow: [
                    '/api/*',
                    '/admin/*',
                    '/private/*'
                ]
            }
        ],
        additionalSitemaps: [
            'https://www.guillaumeganne.com/sitemap.xml'
        ]
    },
    additionalPaths: async (config) => {
        const result = [];

        // Ajouter les pages de projets (avec trailing slash pour cohérence)
        const projects = [
            { slug: 'creation-boutique-bougies-bio', date: '2024-06' },
            { slug: 'refonte-site-association-soupopotes', date: '2024-05' },
            { slug: 'audit-securite-seo-librexpression', date: '2024-04' },
            { slug: 'jeu-pendu-pokemon-react', date: '2024-03' },
            { slug: 'guillaume-creation-portfolio-photo', date: '2024-02' },
        ];

        projects.forEach((project) => {
            result.push({
                loc: `/projets/${project.slug}/`, // ✅ Trailing slash pour cohérence
                changefreq: 'monthly',
                priority: 0.6,
                lastmod: new Date(project.date + '-01').toISOString(),
            });
        });

        // Ajouter l'article de blog (avec trailing slash)
        result.push({
            loc: '/blog/creation-site-internet-1001-astuces/', // ✅ Trailing slash
            changefreq: 'monthly',
            priority: 0.9,
            lastmod: new Date('2024-01-15').toISOString(),
        });

        return result;
    },
    transform: async (config, path) => {
        // 🎯 S'assurer que toutes les URLs sortent en https + www + trailingSlash
        return {
            loc: path,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },
}; 