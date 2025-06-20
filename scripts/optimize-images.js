const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY = 80;
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function processImage(inputPath) {
    const ext = path.extname(inputPath).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

    const outputPath = inputPath.replace(ext, '.webp');
    console.log(`Processing: ${path.relative(PUBLIC_DIR, inputPath)}`);

    try {
        await sharp(inputPath)
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        // Créer une version blur pour le placeholder
        const blurPath = outputPath.replace('.webp', '.blur.webp');
        await sharp(inputPath)
            .resize(20)
            .blur(10)
            .webp({ quality: 20 })
            .toFile(blurPath);

        console.log(`✓ Created: ${path.relative(PUBLIC_DIR, outputPath)}`);
        console.log(`✓ Created blur: ${path.relative(PUBLIC_DIR, blurPath)}`);
    } catch (error) {
        console.error(`✗ Error processing ${inputPath}:`, error);
    }
}

async function processDirectory(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else {
            await processImage(fullPath);
        }
    }
}

async function main() {
    try {
        await processDirectory(IMAGES_DIR);
        console.log('Image optimization complete!');
    } catch (error) {
        console.error('Error during image optimization:', error);
        process.exit(1);
    }
}

main(); 