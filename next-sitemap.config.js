/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.guillaumeganne.com',
    generateRobotsTxt: false,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/manifest.webmanifest', '/robots.txt', '/sitemap.xml'],
    additionalPaths: async (config) => {
        const result = [];

        // Ajouter les pages de projets
        const projects = [
            { slug: 'creation-boutique-bougies-bio', date: '2024-06' },
            { slug: 'refonte-site-association-soupopotes', date: '2024-05' },
            { slug: 'audit-securite-seo-librexpression', date: '2024-04' },
            { slug: 'jeu-pendu-pokemon-react', date: '2024-03' },
            { slug: 'guillaume-creation-portfolio-photo', date: '2024-02' },
        ];

        projects.forEach((project) => {
            result.push({
                loc: `/projets/${project.slug}`,
                changefreq: 'monthly',
                priority: 0.6,
                lastmod: new Date(project.date + '-01').toISOString(),
            });
        });

        // Ajouter l'article de blog
        result.push({
            loc: '/blog/creation-site-internet-1001-astuces',
            changefreq: 'monthly',
            priority: 0.9,
            lastmod: new Date('2024-01-15').toISOString(),
        });

        return result;
    },
}; 