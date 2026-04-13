// convert-to-webp.mjs
// Converts all JPG frames in public/sequence/ to WebP format
// Run with: node convert-to-webp.mjs

import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEQUENCE_DIR = join(__dirname, 'public', 'sequence');
const QUALITY = 82; // WebP quality (82 = visually lossless, much smaller than JPG)

async function convertAll() {
  const files = await readdir(SEQUENCE_DIR);
  const jpgs = files.filter(f => extname(f).toLowerCase() === '.jpg');

  console.log(`\n🔄 Converting ${jpgs.length} JPG files to WebP (quality: ${QUALITY})...\n`);

  let totalOriginal = 0;
  let totalConverted = 0;
  let done = 0;

  for (const file of jpgs) {
    const inputPath  = join(SEQUENCE_DIR, file);
    const outputName = basename(file, '.jpg') + '.webp';
    const outputPath = join(SEQUENCE_DIR, outputName);

    const { size: origSize } = await import('fs').then(fs => fs.promises.stat(inputPath));

    await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(outputPath);

    const { size: newSize } = await import('fs').then(fs => fs.promises.stat(outputPath));

    totalOriginal  += origSize;
    totalConverted += newSize;
    done++;

    const saving = (((origSize - newSize) / origSize) * 100).toFixed(1);
    process.stdout.write(`  [${done}/${jpgs.length}] ${file} → ${outputName}  (${saving}% smaller)\n`);
  }

  // Delete original JPG files
  console.log('\n🗑️  Removing original JPG files...');
  for (const file of jpgs) {
    await unlink(join(SEQUENCE_DIR, file));
  }

  const totalSaving = (((totalOriginal - totalConverted) / totalOriginal) * 100).toFixed(1);
  console.log(`\n✅ Done!`);
  console.log(`   Original total : ${(totalOriginal  / 1024).toFixed(0)} KB`);
  console.log(`   Converted total: ${(totalConverted / 1024).toFixed(0)} KB`);
  console.log(`   Total saving   : ${totalSaving}% 🎉`);
}

convertAll().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
