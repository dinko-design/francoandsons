/**
 * Organize imported-root images: rename and place into before-after/ and gallery/ folders.
 * Run from repo root: node scripts/organize-imported-images.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src/assets/imported-root');
const DST_BASE = path.join(ROOT, 'src/assets');

// Map: source filename -> { folder (relative to DST_BASE), newName }
const MANIFEST = {
  // UUIDs: before/after composites (from image analysis)
  '2AA01379-88EB-4715-9A85-364359C1CD53.jpg': { folder: 'before-after/kitchen', newName: 'kitchen-before-after-dark-cabinets.jpg' },
  '5587739F-93E4-4336-A51A-CFD222ADE68E.jpg': { folder: 'before-after/kitchen', newName: 'kitchen-before-after-sink-area.jpg' },
  '62D96533-7884-45C7-B0DB-E8E83F931B48.jpg': { folder: 'before-after/kitchen', newName: 'kitchen-before-after-refrigerator-wall.jpg' },
  '5595F42C-2315-4B26-8557-29FB1219B421.jpg': { folder: 'before-after/bathroom', newName: 'bathroom-before-after-tub-to-walkin.jpg' },
  '59F9D470-3C87-40CF-879B-C993799A258A.jpg': { folder: 'before-after/bathroom', newName: 'bathroom-before-after-double-vanity.jpg' },
  '5F9E3FF8-E900-4350-84A5-C228F3AE9973.jpg': { folder: 'before-after/bathroom', newName: 'bathroom-before-after-powder-room.jpg' },
  '67507C13-02A4-4AB4-B1D2-A795C7823615.jpg': { folder: 'before-after/bathroom', newName: 'bathroom-before-after-demolition-to-finished.jpg' },
  '6C07A26E-7660-4182-9FA9-09D71B00B313.jpg': { folder: 'before-after/bathroom', newName: 'bathroom-before-after-tub-tile-upgrade.jpg' },
  '7BD5A68B-2834-4441-8A73-E0D6215EF39D.jpg': { folder: 'before-after/bathroom', newName: 'bathroom-before-after-subway-tile.jpg' },
  'BACEF6F0-19B1-4759-9B06-AEFA2D80913D.jpg': { folder: 'before-after/bathroom', newName: 'bathroom-before-after-ada-walkin.jpg' },
  'E9AB7F8A-CCEF-4ECB-B328-71B5B33FE6FD.jpg': { folder: 'before-after/bathroom', newName: 'bathroom-before-after-shower-expansion.jpg' },
  '8FA649F6-EA09-46E0-9D6A-E992276B0F31.jpg': { folder: 'gallery/bathroom', newName: 'bathroom-tub-shower-window.jpg' },
};

// Project-based mapping for IMG_* (from docs/IMAGE-CATALOG.md)
const KITCHEN_318_JAMES = ['IMG_3111.jpg', 'IMG_3112.jpg', 'IMG_3113.jpg', 'IMG_3114.jpg', 'IMG_3115.jpg', 'IMG_3116.jpg', 'IMG_3117.jpg', 'IMG_3119.jpg', 'IMG_3120.jpg', 'IMG_3216.jpg', 'IMG_3524.jpg', 'IMG_3527.jpg', 'IMG_3528.jpg', 'IMG_3529.jpg', 'IMG_3530.jpg', 'IMG_3531.jpg', 'IMG_3532.jpg', 'IMG_3533(1).jpg', 'IMG_3533.jpg', 'IMG_3534(1).jpg', 'IMG_3534.jpg', 'IMG_3535(1).jpg', 'IMG_3535.jpg', 'IMG_3537.jpg', 'IMG_3546.jpg'];
const KITCHEN_NEWCASTLE = ['IMG_2050.jpg', 'IMG_2051.jpg', 'IMG_2052.jpg', 'IMG_2372.jpg', 'IMG_2373.jpg', 'IMG_2380.jpg', 'IMG_2952.jpg', 'IMG_2954.jpg', 'IMG_2955.jpg', 'IMG_2992.jpg', 'IMG_3053.jpg', 'IMG_3064.jpg', 'IMG_3067.jpg'];
const KITCHEN_ROSEVILLE = ['IMG_3781.jpg', 'IMG_3783.jpg', 'IMG_3789.jpg', 'IMG_3790.jpg', 'IMG_3791.jpg'];
const KITCHEN_CRAZY_WOOD = ['IMG_6718.jpg', 'IMG_6719.jpg', 'IMG_6720.jpg', 'IMG_6721.jpg', 'IMG_6722.jpg', 'IMG_6723.jpg', 'IMG_7463.jpg', 'IMG_7479.jpg', 'IMG_7528.jpg', 'IMG_7529.jpg', 'IMG_7536.jpg', 'IMG_7539.jpg', 'IMG_7540.jpg', 'IMG_7542.jpg', 'IMG_7544.jpg'];
const BATHROOM_JOANNE_ADA = ['IMG_4461.jpg', 'IMG_4616.jpg', 'IMG_5306.jpg', 'IMG_5402.jpg', 'IMG_5850.jpg'];
const BATHROOM_REMODEL_3 = ['IMG_6305.jpg', 'IMG_6413.jpg', 'IMG_6415.jpg', 'IMG_6468.jpg', 'IMG_6474.jpg', 'IMG_6716.jpg'];
const BATHROOM_ROSEVILLE = ['IMG_7912.jpg', 'IMG_8038.jpg', 'IMG_8043.jpg', 'IMG_8048.jpg', 'IMG_8171.jpg', 'IMG_8173.jpg', 'IMG_8573.jpg', 'IMG_8715.jpg'];
const BATHROOM_ROSEVILLE_2 = ['IMG_8820.jpg', 'IMG_8823.jpg', 'IMG_9010.jpg', 'IMG_9044.jpg', 'IMG_9077.jpg', 'IMG_9080.jpg', 'IMG_9162.jpg', 'IMG_9163.jpg', 'IMG_9164.jpg', 'IMG_9165.jpg', 'IMG_9168.jpg', 'IMG_9203.jpg', 'IMG_9204.jpg', 'IMG_9205.jpg', 'IMG_9216.jpg', 'IMG_9218.jpg', 'IMG_9398.jpg', 'IMG_9403.jpg', 'IMG_9406.jpg', 'IMG_9409.jpg', 'IMG_9478.jpg', 'IMG_9480.jpg', 'IMG_9483.jpg', 'IMG_9484.jpg', 'IMG_9590.jpg', 'IMG_9906.jpg', 'IMG_9907.jpg', 'IMG_9908.jpg', 'IMG_9967.jpg', 'IMG_9968.jpg', 'IMG_9969.jpg', 'IMG_9971.jpg'];

function buildManifest() {
  const out = { ...MANIFEST };
  let n;
  n = 1; KITCHEN_318_JAMES.forEach(f => { if (!out[f]) out[f] = { folder: 'gallery/kitchen/318-james-drive', newName: `318-james-kitchen-${String(n).padStart(2,'0')}.jpg` }; n++; });
  n = 1; KITCHEN_NEWCASTLE.forEach(f => { if (!out[f]) out[f] = { folder: 'gallery/kitchen/newcastle', newName: `newcastle-kitchen-${String(n).padStart(2,'0')}.jpg` }; n++; });
  n = 1; KITCHEN_ROSEVILLE.forEach(f => { if (!out[f]) out[f] = { folder: 'gallery/kitchen/roseville', newName: `roseville-kitchen-${String(n).padStart(2,'0')}.jpg` }; n++; });
  n = 1; KITCHEN_CRAZY_WOOD.forEach(f => { if (!out[f]) out[f] = { folder: 'gallery/kitchen/crazy-wood', newName: `crazy-wood-kitchen-${String(n).padStart(2,'0')}.jpg` }; n++; });
  n = 1; BATHROOM_JOANNE_ADA.forEach(f => { if (!out[f]) out[f] = { folder: 'gallery/bathroom/joanne-ada', newName: `joanne-ada-bathroom-${String(n).padStart(2,'0')}.jpg` }; n++; });
  n = 1; BATHROOM_REMODEL_3.forEach(f => { if (!out[f]) out[f] = { folder: 'gallery/bathroom/bathroom-remodel-3', newName: `bathroom-remodel-3-${String(n).padStart(2,'0')}.jpg` }; n++; });
  n = 1; BATHROOM_ROSEVILLE.forEach(f => { if (!out[f]) out[f] = { folder: 'gallery/bathroom/roseville', newName: `roseville-bathroom-${String(n).padStart(2,'0')}.jpg` }; n++; });
  n = 1; BATHROOM_ROSEVILLE_2.forEach(f => { if (!out[f]) out[f] = { folder: 'gallery/bathroom/roseville-2', newName: `roseville-bathroom-2-${String(n).padStart(2,'0')}.jpg` }; n++; });

  const REMAINING_BATHROOM = ['IMG_0034.jpg', 'IMG_0040.jpg', 'IMG_0044.jpg', 'IMG_0045.jpg', 'IMG_0050.jpg', 'IMG_0055.jpg', 'IMG_0055_1.jpg', 'IMG_0145.jpg', 'IMG_0275.jpg', 'IMG_0276.jpg', 'IMG_3284.jpg', 'IMG_3740.jpg', 'IMG_3741.jpg', 'IMG_3742.jpg', 'IMG_3743.jpg', 'IMG_7166.jpg', 'IMG_7167.jpg', 'IMG_7168.jpg', 'IMG_8090.jpg', 'IMG_8091.jpg', 'IMG_8094.jpg'];
  n = 1;
  REMAINING_BATHROOM.forEach(f => {
    if (!out[f]) out[f] = { folder: 'gallery/bathroom', newName: `bathroom-misc-${String(n).padStart(2,'0')}.jpg` }; n++;
  });
  return out;
}

function main() {
  const manifest = buildManifest();
  const files = fs.readdirSync(SRC).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
  const createdDirs = new Set();
  const processed = new Set();

  files.forEach(file => {
    const entry = manifest[file];
    const folder = entry ? entry.folder : 'gallery/general';
    const newName = entry ? entry.newName : file.replace(/[^a-zA-Z0-9._-]/g, '-');
    const destDir = path.join(DST_BASE, folder);
    if (!createdDirs.has(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
      createdDirs.add(destDir);
    }
    const srcPath = path.join(SRC, file);
    const destPath = path.join(destDir, newName);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`${file} -> ${folder}/${newName}`);
      processed.add(file);
    }
  });

  files.forEach(file => {
    if (processed.has(file)) return;
    const destDir = path.join(DST_BASE, 'gallery/general');
    fs.mkdirSync(destDir, { recursive: true });
    const safeName = file.replace(/[^a-zA-Z0-9._-]/g, '-');
    fs.copyFileSync(path.join(SRC, file), path.join(destDir, safeName));
    console.log(`${file} -> gallery/general/${safeName}`);
  });
}

main();
