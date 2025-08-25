#!/usr/bin/env node

/**
 * Script de test Lighthouse pour valider les optimisations de performance
 * Utilisation: node scripts/lighthouse-test.js [url]
 */

const lighthouse = require('lighthouse').default;
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

const defaultUrl = 'http://localhost:3000';
const testUrl = process.argv[2] || defaultUrl;

const config = {
    extends: 'lighthouse:default',
    settings: {
        onlyCategories: ['performance'],
        formFactor: 'desktop',
        throttling: {
            rttMs: 40,
            throughputKbps: 10240,
            cpuSlowdownMultiplier: 1,
            requestLatencyMs: 0,
            downloadThroughputKbps: 0,
            uploadThroughputKbps: 0,
        },
        screenEmulation: {
            mobile: false,
            width: 1350,
            height: 940,
            deviceScaleFactor: 1,
            disabled: false,
        },
    },
};

async function runLighthouse() {
    console.log(`🔍 Lancement du test Lighthouse sur: ${testUrl}`);

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

    try {
        const runnerResult = await lighthouse(testUrl, {
            port: chrome.port,
            ...config.settings
        }, config);

        const reportHtml = runnerResult.report;
        const reportPath = path.join(__dirname, '../lighthouse-report.html');
        fs.writeFileSync(reportPath, reportHtml);

        // Extraire les métriques importantes
        const lhr = runnerResult.lhr;
        const metrics = lhr.audits;

        const results = {
            score: Math.round(lhr.categories.performance.score * 100),
            fcp: metrics['first-contentful-paint']?.displayValue,
            lcp: metrics['largest-contentful-paint']?.displayValue,
            cls: metrics['cumulative-layout-shift']?.displayValue,
            inp: metrics['max-potential-fid']?.displayValue,
            renderBlocking: metrics['render-blocking-resources']?.score === 1,
            criticalRequestChains: metrics['critical-request-chains']?.displayValue,
        };

        console.log('\n📊 RÉSULTATS LIGHTHOUSE:');
        console.log('========================');
        console.log(`Performance Score: ${results.score}/100`);
        console.log(`First Contentful Paint: ${results.fcp}`);
        console.log(`Largest Contentful Paint: ${results.lcp}`);
        console.log(`Cumulative Layout Shift: ${results.cls}`);
        console.log(`Max Potential FID: ${results.inp}`);
        console.log(`Render Blocking Resources: ${results.renderBlocking ? '✅ Aucun' : '❌ Détecté'}`);

        // Validation des objectifs
        console.log('\n🎯 VALIDATION DES OBJECTIFS:');
        console.log('============================');

        const validations = [
            { test: results.score >= 99, label: 'Performance ≥ 99', value: `${results.score}/100` },
            { test: parseFloat(results.lcp) < 1.5, label: 'LCP < 1.5s', value: results.lcp },
            { test: parseFloat(results.cls) < 0.01, label: 'CLS < 0.01', value: results.cls },
            { test: parseFloat(results.fcp) < 1.0, label: 'FCP < 1.0s', value: results.fcp },
            { test: results.renderBlocking, label: 'Pas de CSS bloquant', value: results.renderBlocking ? 'OK' : 'KO' },
        ];

        validations.forEach(({ test, label, value }) => {
            console.log(`${test ? '✅' : '❌'} ${label}: ${value}`);
        });

        console.log(`\n📄 Rapport détaillé sauvegardé: ${reportPath}`);

        // Code de sortie basé sur le score
        process.exit(results.score >= 99 ? 0 : 1);

    } catch (error) {
        console.error('❌ Erreur lors du test Lighthouse:', error);
        process.exit(1);
    } finally {
        await chrome.kill();
    }
}

if (require.main === module) {
    runLighthouse();
}

module.exports = { runLighthouse };
