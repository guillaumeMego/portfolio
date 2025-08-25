#!/usr/bin/env node

/**
 * Script de validation des optimisations de performance
 * Vérifie que toutes les optimisations sont correctement implémentées
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 VALIDATION DES OPTIMISATIONS DE PERFORMANCE');
console.log('==============================================\n');

const checks = [];

// 1. Vérifier le CSS critique inline
const layoutPath = path.join(__dirname, '../app/layout.tsx');
const layoutContent = fs.readFileSync(layoutPath, 'utf8');

checks.push({
    name: 'CSS Critique Inline',
    test: layoutContent.includes('dangerouslySetInnerHTML') && layoutContent.includes(':root{--background'),
    details: 'CSS critique intégré dans layout.tsx'
});

// 2. Vérifier le préchargement des images LCP
checks.push({
    name: 'Préchargement Image LCP',
    test: layoutContent.includes('rel="preload"') && layoutContent.includes('mascotte-guillaume-ganne-webdesigner.webp'),
    details: 'Image mascotte préchargée avec rel="preload"'
});

// 3. Vérifier les fonts optimisées
checks.push({
    name: 'Fonts Optimisées (next/font)',
    test: layoutContent.includes('from "next/font/google"') && layoutContent.includes('display: "swap"'),
    details: 'Fonts Google chargées via next/font avec display: swap'
});

// 4. Vérifier le script lazy loading
checks.push({
    name: 'Scripts Lazy Loading',
    test: layoutContent.includes('strategy="lazyOnload"'),
    details: 'Scripts non-critiques chargés en lazy'
});

// 5. Vérifier la configuration next.config.js
const nextConfigPath = path.join(__dirname, '../next.config.js');
const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');

checks.push({
    name: 'Configuration Images Next.js',
    test: nextConfigContent.includes('formats: ["image/avif", "image/webp"]') && nextConfigContent.includes('minimumCacheTTL: 31536000'),
    details: 'Formats d\'images optimisés et cache configuré'
});

checks.push({
    name: 'Optimisations Webpack',
    test: nextConfigContent.includes('splitChunks') && nextConfigContent.includes('react'),
    details: 'Code splitting et optimisations webpack configurés'
});

checks.push({
    name: 'Headers de Cache',
    test: nextConfigContent.includes('max-age=31536000') && nextConfigContent.includes('immutable'),
    details: 'Headers de cache optimisés pour les assets statiques'
});

// 6. Vérifier le Hero optimisé
const heroPath = path.join(__dirname, '../components/Hero.tsx');
const heroContent = fs.readFileSync(heroPath, 'utf8');

checks.push({
    name: 'Image Hero Optimisée',
    test: heroContent.includes('priority') && heroContent.includes('sizes=') && heroContent.includes('placeholder="blur"'),
    details: 'Image hero avec priority, sizes et placeholder blur'
});

checks.push({
    name: 'Classes CSS Critiques',
    test: heroContent.includes('hero-container') && heroContent.includes('hero-title'),
    details: 'Classes CSS critiques utilisées dans le Hero'
});

// 7. Vérifier les scripts package.json
const packagePath = path.join(__dirname, '../package.json');
const packageContent = fs.readFileSync(packagePath, 'utf8');

checks.push({
    name: 'Scripts Lighthouse',
    test: packageContent.includes('"lighthouse"') && packageContent.includes('"lighthouse:prod"'),
    details: 'Scripts de test Lighthouse configurés'
});

checks.push({
    name: 'Dépendances Lighthouse',
    test: packageContent.includes('"lighthouse"') && packageContent.includes('"chrome-launcher"'),
    details: 'Dépendances Lighthouse installées'
});

// 8. Vérifier la documentation
const docsPath = path.join(__dirname, '../docs/performance.md');
const docsExists = fs.existsSync(docsPath);

checks.push({
    name: 'Documentation Performance',
    test: docsExists,
    details: 'Documentation des optimisations créée'
});

// Affichage des résultats
console.log('📊 RÉSULTATS DE LA VALIDATION:\n');

let passedChecks = 0;
let totalChecks = checks.length;

checks.forEach((check, index) => {
    const status = check.test ? '✅' : '❌';
    const number = String(index + 1).padStart(2, '0');

    console.log(`${status} ${number}. ${check.name}`);
    console.log(`    ${check.details}`);

    if (check.test) {
        passedChecks++;
    } else {
        console.log(`    ⚠️  Action requise: vérifier cette optimisation`);
    }

    console.log('');
});

// Résumé final
const successRate = Math.round((passedChecks / totalChecks) * 100);

console.log('📈 RÉSUMÉ FINAL:');
console.log('================');
console.log(`Optimisations validées: ${passedChecks}/${totalChecks} (${successRate}%)`);

if (successRate === 100) {
    console.log('🎉 PARFAIT! Toutes les optimisations sont en place.');
    console.log('🚀 Vous pouvez maintenant tester avec: pnpm lighthouse:prod');
    process.exit(0);
} else if (successRate >= 80) {
    console.log('⚡ TRÈS BIEN! La plupart des optimisations sont en place.');
    console.log('🔧 Corrigez les points manquants pour atteindre 100%.');
    process.exit(1);
} else {
    console.log('⚠️  Des optimisations importantes sont manquantes.');
    console.log('📚 Consultez docs/performance.md pour plus de détails.');
    process.exit(1);
}
