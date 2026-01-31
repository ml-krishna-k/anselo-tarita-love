
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDirs = [
    path.join(__dirname, '../src/assets/images/couple'),
    path.join(__dirname, '../src/assets/images/gallery'),
];

async function convertHeicToJpg() {
    for (const dir of assetsDirs) {
        if (!fs.existsSync(dir)) {
            console.log(`Directory not found: ${dir}`);
            continue;
        }

        const files = fs.readdirSync(dir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.heic') {
                const inputPath = path.join(dir, file);
                const outputPath = path.join(dir, path.basename(file, path.extname(file)) + '.jpg');

                if (!fs.existsSync(outputPath)) {
                    console.log(`Converting ${file} to JPG...`);
                    try {
                        await sharp(inputPath)
                            .toFormat('jpeg', { quality: 90 })
                            .toFile(outputPath);
                        console.log(`Converted: ${outputPath}`);
                    } catch (err) {
                        console.error(`Error converting ${file}:`, err);
                    }
                } else {
                    console.log(`Skipping ${file}, JPG already exists.`);
                }
            }
        }
    }
}

convertHeicToJpg();
