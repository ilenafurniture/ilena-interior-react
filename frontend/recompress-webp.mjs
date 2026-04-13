// recompress-webp.mjs
import sharp from 'sharp';
import { readdir, writeFile, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEQUENCE_DIR = join(__dirname, 'public', 'sequence');
const QUALITY = 55;

async function recompress() {
  const files = await readdir(SEQUENCE_DIR);
  const webps = files.filter(f => extname(f).toLowerCase() === '.webp');

  console.log(`\n🔄 Re-compressing ${webps.length} WebP files (quality: ${QUALITY})...\n`);

  let totalOriginal = 0;
  let totalNew = 0;

  for (let idx = 0; idx < webps.length; idx++) {
    const file = webps[idx];
    const filePath = join(SEQUENCE_DIR, file);

    const { size: origSize } = await stat(filePath);

    // Convert to buffer directly (no temp file, no rename)
    const newBuffer = await sharp(filePath)
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();

    const newSize = newBuffer.length;

    if (newSize < origSize) {
      await writeFile(filePath, newBuffer);
      const saving = (((origSize - newSize) / origSize) * 100).toFixed(1);
      console.log(`  [${idx+1}/${webps.length}] ${file}: ${(origSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB  (-${saving}%)`);
      totalNew += newSize;
    } else {
      console.log(`  [${idx+1}/${webps.length}] ${file}: kept — already optimal`);
      totalNew += origSize;
    }
    totalOriginal += origSize;
  }

  const pct = (((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1);
  console.log(`\n✅ Done!`);
  console.log(`   Before : ${(totalOriginal/1024).toFixed(0)} KB`);
  console.log(`   After  : ${(totalNew/1024).toFixed(0)} KB`);
  console.log(`   Saving : ${pct > 0 ? pct + '%' : 'already optimal'}`);
}

recompress().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
