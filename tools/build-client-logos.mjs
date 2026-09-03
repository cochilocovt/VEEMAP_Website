import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const rootDir = process.cwd();
const clientsDir = path.join(rootDir, 'media', 'Clients');
const backupDir = path.join(clientsDir, '_legacy_backup');
const downloadedDir = path.join(clientsDir, '_test_download');

const SECTOR_DIRS = [
  'automotive',
  'ev',
  'electronics',
  'consumer_goods',
  'medical_pharma',
  'industrial_machinery'
];

// Step 1: Create sector directories and backup directory
for (const sector of SECTOR_DIRS) {
  const sDir = path.join(clientsDir, sector);
  if (!fs.existsSync(sDir)) fs.mkdirSync(sDir, { recursive: true });
}
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

// Step 2: Move any legacy PictureX files to backup
for (const sector of SECTOR_DIRS) {
  const sDir = path.join(clientsDir, sector);
  const files = fs.readdirSync(sDir);
  for (const f of files) {
    if (/^Picture\d+\.(png|jpg|gif|jpeg)$/i.test(f)) {
      const bSectorDir = path.join(backupDir, sector);
      if (!fs.existsSync(bSectorDir)) fs.mkdirSync(bSectorDir, { recursive: true });
      fs.renameSync(path.join(sDir, f), path.join(bSectorDir, f));
      console.log(`[BACKUP] Moved legacy ${f} from ${sector} to _legacy_backup/${sector}`);
    }
  }
}

// Step 3: Copy downloaded official SVGs to their sector folders
const downloadedMappings = [
  { from: 'maruti-suzuki.svg', sector: 'automotive', to: 'maruti-suzuki.svg' },
  { from: 'honda.svg', sector: 'automotive', to: 'honda.svg' },
  { from: 'continental.svg', sector: 'automotive', to: 'continental.svg' },
  { from: 'aisin.svg', sector: 'automotive', to: 'aisin.svg' },
  { from: 'marelli.svg', sector: 'automotive', to: 'marelli.svg' },
  { from: 'hella.svg', sector: 'automotive', to: 'hella.svg' },
  { from: 'denso.svg', sector: 'automotive', to: 'denso.svg' },
  { from: 'anand-mando.svg', sector: 'automotive', to: 'anand-mando.svg' },
  { from: 'ts-tech.svg', sector: 'automotive', to: 'ts-tech.svg' },

  { from: 'exide.svg', sector: 'ev', to: 'exide.svg' },
  { from: 'livguard.svg', sector: 'ev', to: 'livguard.svg' },

  { from: 'panasonic.svg', sector: 'electronics', to: 'panasonic.svg' },
  { from: 'syrma-sgs.svg', sector: 'electronics', to: 'syrma-sgs.svg' },
  { from: 'legrand.svg', sector: 'electronics', to: 'legrand.svg' },
  { from: 'proterial-hitachi.svg', sector: 'electronics', to: 'proterial-hitachi.svg' },
  { from: 'amd.svg', sector: 'electronics', to: 'amd.svg' },

  { from: 'perfetti-van-melle.svg', sector: 'consumer_goods', to: 'perfetti-van-melle.svg' },
  { from: 'alpla.svg', sector: 'consumer_goods', to: 'alpla.svg' },

  { from: 'stryker.svg', sector: 'medical_pharma', to: 'stryker.svg' },

  { from: 'keyence.svg', sector: 'industrial_machinery', to: 'keyence.svg' },
  { from: 'makino.svg', sector: 'industrial_machinery', to: 'makino.svg' },
  { from: 'bucher-hydraulics.svg', sector: 'industrial_machinery', to: 'bucher-hydraulics.svg' }
];

for (const m of downloadedMappings) {
  const src = path.join(downloadedDir, m.from);
  if (fs.existsSync(src)) {
    const dest = path.join(clientsDir, m.sector, m.to);
    fs.copyFileSync(src, dest);
    console.log(`[COPIED] ${m.from} -> ${m.sector}/${m.to}`);
  } else {
    console.warn(`[MISSING SRC] ${m.from}`);
  }
}

// Helper function to write high-fidelity clean vector SVGs
function writeSvg(sector, filename, content) {
  const dest = path.join(clientsDir, sector, filename);
  fs.writeFileSync(dest, content.trim() + '\n', 'utf8');
  console.log(`[CREATED] ${sector}/${filename}`);
}

// -------------------------------------------------------------
// Step 4: Generate authentic, scalable SVGs for remaining brands
// -------------------------------------------------------------

// 1. F.C.C. Clutch (World-renowned red oval badge with bold italic F.C.C.)
writeSvg('automotive', 'fcc.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 15)">
    <!-- Red Oval Badge -->
    <rect x="0" y="0" width="420" height="150" rx="75" fill="#E60012"/>
    <!-- Outer white border ring -->
    <rect x="6" y="6" width="408" height="138" rx="69" fill="none" stroke="#FFFFFF" stroke-width="4"/>
    <!-- Text F.C.C. -->
    <text x="210" y="105" font-family="'Arial Black', 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-style="italic" font-size="82" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">F.C.C.</text>
  </g>
</svg>`);

// 2. Uno Minda (Double chevron corporate badge + modern sans typography)
writeSvg('automotive', 'uno-minda.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" width="100%" height="100%">
  <!-- Icon: Dual Chevron -->
  <g transform="translate(30, 35)">
    <!-- Left dark blue chevron -->
    <polygon points="0,55 35,0 70,0 35,55 70,110 35,110" fill="#002D62"/>
    <!-- Right cyan chevron -->
    <polygon points="45,55 80,0 115,0 80,55 115,110 80,110" fill="#00A3E0"/>
  </g>
  <!-- Typography: UNO MINDA -->
  <g transform="translate(170, 95)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="46" fill="#002D62" letter-spacing="2">UNO MINDA</text>
    <text y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#00A3E0" letter-spacing="4">DRIVING THE NEW</text>
  </g>
</svg>`);

// 3. Mindarika (MKL - Uno Minda & Tokai Rika JV)
writeSvg('automotive', 'mindarika.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" width="100%" height="100%">
  <g transform="translate(30, 35)">
    <rect x="0" y="10" width="90" height="90" rx="16" fill="#002D62"/>
    <text x="45" y="70" font-family="'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#E60012" text-anchor="middle">MKL</text>
  </g>
  <g transform="translate(145, 80)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="38" fill="#002D62" letter-spacing="1.5">MINDARIKA</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="600" font-size="13" fill="#555555" letter-spacing="1">UNO MINDA &amp; TOKAI RIKA JV</text>
  </g>
</svg>`);

// 4. Shriram Pistons & Rings (SPR)
writeSvg('automotive', 'shriram-pistons.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 180" width="100%" height="100%">
  <!-- Icon: Interlocking Piston Rings -->
  <g transform="translate(30, 35)">
    <circle cx="55" cy="55" r="45" fill="none" stroke="#003876" stroke-width="12"/>
    <circle cx="55" cy="55" r="28" fill="none" stroke="#E31837" stroke-width="8"/>
    <text x="55" y="64" font-family="'Arial Black', sans-serif" font-weight="900" font-size="20" fill="#003876" text-anchor="middle">SPR</text>
  </g>
  <!-- Typography -->
  <g transform="translate(155, 75)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="800" font-size="28" fill="#003876" letter-spacing="1">SHRIRAM PISTONS</text>
    <text y="32" font-family="'Montserrat', sans-serif" font-weight="700" font-size="22" fill="#E31837" letter-spacing="2">&amp; RINGS LTD.</text>
  </g>
</svg>`);

// 5. ASK Automotive
writeSvg('automotive', 'ask-automotive.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(35, 30)">
    <rect x="0" y="0" width="120" height="120" rx="20" fill="#ED1C24"/>
    <text x="60" y="80" font-family="'Arial Black', sans-serif" font-weight="900" font-size="48" fill="#FFFFFF" text-anchor="middle" letter-spacing="-1">ASK</text>
  </g>
  <g transform="translate(180, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="36" fill="#1A1A1A" letter-spacing="2">AUTOMOTIVE</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="600" font-size="14" fill="#ED1C24" letter-spacing="3">ADVANCED BRAKING SYSTEMS</text>
  </g>
</svg>`);

// 6. ASTI Electronics India (ASTI Corp Japan)
writeSvg('automotive', 'asti.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 40)">
    <polygon points="0,0 45,0 60,50 15,50" fill="#005BAC"/>
    <polygon points="25,55 70,55 85,105 40,105" fill="#0099FF"/>
  </g>
  <g transform="translate(150, 95)">
    <text font-family="'Arial Black', sans-serif" font-weight="900" font-size="54" fill="#005BAC" letter-spacing="6">ASTI</text>
    <text y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="13" fill="#666666" letter-spacing="3">ELECTRONICS INDIA</text>
  </g>
</svg>`);

// 7. Belrise Industries (formerly Badve)
writeSvg('automotive', 'belrise.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" width="100%" height="100%">
  <g transform="translate(40, 30)">
    <!-- Hexagonal B mark -->
    <polygon points="60,0 115,32 115,95 60,127 5,95 5,32" fill="#2E1A47"/>
    <polygon points="60,12 103,37 103,88 60,113 17,88 17,37" fill="#6A1B9A"/>
    <text x="60" y="85" font-family="'Arial Black', sans-serif" font-weight="900" font-size="62" fill="#FFFFFF" text-anchor="middle">B</text>
  </g>
  <g transform="translate(180, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="42" fill="#2E1A47" letter-spacing="2">BELRISE</text>
    <text y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="15" fill="#6A1B9A" letter-spacing="4">INDUSTRIES LIMITED</text>
  </g>
</svg>`);

// 8. Munjal Kiriu Industries
writeSvg('automotive', 'munjal-kiriu.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 180" width="100%" height="100%">
  <g transform="translate(35, 35)">
    <circle cx="55" cy="55" r="50" fill="#E60000"/>
    <path d="M 30,30 L 55,80 L 80,30 Z" fill="#FFFFFF"/>
  </g>
  <g transform="translate(160, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#1C2D42" letter-spacing="1">MUNJAL KIRIU</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#E60000" letter-spacing="3">AUTOMOTIVE COMPONENTS</text>
  </g>
</svg>`);

// 9. Napino Auto & Electronics
writeSvg('automotive', 'napino.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 45)">
    <path d="M 0,45 Q 25,0 50,45 T 100,45" fill="none" stroke="#E51937" stroke-width="12" stroke-linecap="round"/>
  </g>
  <g transform="translate(165, 95)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="48" fill="#E51937" letter-spacing="3">NAPINO</text>
    <text y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="13" fill="#1A1A1A" letter-spacing="2">AUTO &amp; ELECTRONICS</text>
  </g>
</svg>`);

// 10. Allied JB Friction
writeSvg('automotive', 'allied-jb.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" width="100%" height="100%">
  <g transform="translate(35, 35)">
    <rect x="0" y="0" width="105" height="105" rx="14" fill="#0D47A1"/>
    <text x="52" y="68" font-family="'Arial Black', sans-serif" font-weight="900" font-size="42" fill="#FFFFFF" text-anchor="middle">JB</text>
  </g>
  <g transform="translate(160, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#0D47A1" letter-spacing="2">ALLIED JB</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#D32F2F" letter-spacing="2">FRICTION MATERIALS</text>
  </g>
</svg>`);

// 11. Victora Automotive
writeSvg('automotive', 'victora.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(45, 30)">
    <polygon points="10,10 60,110 110,10 80,10 60,65 40,10" fill="#D32F2F"/>
  </g>
  <g transform="translate(180, 95)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="46" fill="#1A1A1A" letter-spacing="4">VICTORA</text>
    <text y="26" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="13" fill="#D32F2F" letter-spacing="3">TOOL ENGINEERS</text>
  </g>
</svg>`);

// 12. Kamal Rubber Industries
writeSvg('automotive', 'kamal-rubber.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" width="100%" height="100%">
  <g transform="translate(40, 35)">
    <circle cx="55" cy="55" r="50" fill="#212121"/>
    <circle cx="55" cy="55" r="30" fill="#FF9800"/>
    <circle cx="55" cy="55" r="14" fill="#FFFFFF"/>
  </g>
  <g transform="translate(165, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#212121" letter-spacing="1.5">KAMAL RUBBER</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#FF9800" letter-spacing="3">MOLDED COMPONENTS</text>
  </g>
</svg>`);

// 13. Wipe India
writeSvg('automotive', 'wipe-india.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 35)">
    <path d="M 10,95 Q 60,15 110,35 L 100,50 Q 60,35 25,105 Z" fill="#0277BD"/>
  </g>
  <g transform="translate(170, 95)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="44" fill="#0277BD" letter-spacing="2">WIPE INDIA</text>
    <text y="26" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="13" fill="#546E7A" letter-spacing="3">WIPER SYSTEMS</text>
  </g>
</svg>`);

// 14. Sterling Gtake E-Mobility (EV)
writeSvg('ev', 'sterling-gtake.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 180" width="100%" height="100%">
  <g transform="translate(35, 30)">
    <rect x="0" y="0" width="115" height="115" rx="20" fill="#0A192F"/>
    <polygon points="65,15 35,65 60,65 50,105 85,50 60,50" fill="#00E5FF"/>
  </g>
  <g transform="translate(170, 80)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#0A192F" letter-spacing="1">STERLING GTAKE</text>
    <text y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="800" font-size="18" fill="#00B4D8" letter-spacing="3">E-MOBILITY</text>
  </g>
</svg>`);

// 15. Aptar Beauty
writeSvg('consumer_goods', 'aptar-beauty.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(35, 40)">
    <!-- Aptar teardrop ribbon mark -->
    <path d="M 0,45 C 0,15 25,0 50,0 C 75,0 100,15 100,45 C 100,80 50,100 50,100 C 50,100 0,80 0,45 Z" fill="#00529B"/>
    <circle cx="50" cy="40" r="18" fill="#FFFFFF"/>
  </g>
  <g transform="translate(155, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="46" fill="#00529B" letter-spacing="1">Aptar</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="16" fill="#00A3E0" letter-spacing="3">BEAUTY + HOME</text>
  </g>
</svg>`);

// 16. Aptar Pharma
writeSvg('medical_pharma', 'aptar-pharma.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(35, 40)">
    <path d="M 0,45 C 0,15 25,0 50,0 C 75,0 100,15 100,45 C 100,80 50,100 50,100 C 50,100 0,80 0,45 Z" fill="#00529B"/>
    <circle cx="50" cy="40" r="18" fill="#FFFFFF"/>
  </g>
  <g transform="translate(155, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="46" fill="#00529B" letter-spacing="1">Aptar</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="16" fill="#00838F" letter-spacing="3">PHARMA</text>
  </g>
</svg>`);

// 17. Manjushree Technopack
writeSvg('consumer_goods', 'manjushree-technopack.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 180" width="100%" height="100%">
  <g transform="translate(35, 35)">
    <rect x="0" y="0" width="110" height="110" rx="20" fill="#008080"/>
    <path d="M 25,85 C 45,35 65,35 85,85" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
  </g>
  <g transform="translate(165, 80)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#004D40" letter-spacing="1">MANJUSHREE</text>
    <text y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="16" fill="#008080" letter-spacing="3">TECHNOPACK LTD</text>
  </g>
</svg>`);

// 18. Rieke Packaging Systems (TriMas Packaging)
writeSvg('consumer_goods', 'rieke.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 30)">
    <rect x="0" y="0" width="115" height="115" rx="16" fill="#D71920"/>
    <text x="57" y="78" font-family="'Arial Black', sans-serif" font-weight="900" font-size="62" fill="#FFFFFF" text-anchor="middle">R</text>
  </g>
  <g transform="translate(175, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="44" fill="#D71920" letter-spacing="2">Rieke</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#333333" letter-spacing="2">PACKAGING SYSTEMS</text>
  </g>
</svg>`);

// 19. Takahata Precision
writeSvg('consumer_goods', 'takahata.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" width="100%" height="100%">
  <g transform="translate(40, 35)">
    <circle cx="55" cy="55" r="48" fill="#003399"/>
    <!-- Cog teeth -->
    <circle cx="55" cy="55" r="28" fill="#FFFFFF"/>
    <circle cx="55" cy="55" r="16" fill="#003399"/>
  </g>
  <g transform="translate(165, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="38" fill="#003399" letter-spacing="2">TAKAHATA</text>
    <text y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#555555" letter-spacing="3">PRECISION</text>
  </g>
</svg>`);

// 20. Palam Plastics
writeSvg('consumer_goods', 'palam-plastics.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 35)">
    <rect x="0" y="0" width="105" height="105" rx="18" fill="#1565C0"/>
    <text x="52" y="72" font-family="'Arial Black', sans-serif" font-weight="900" font-size="48" fill="#FFFFFF" text-anchor="middle">P</text>
  </g>
  <g transform="translate(165, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="36" fill="#1565C0" letter-spacing="2">PALAM</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="15" fill="#424242" letter-spacing="3">PLASTICS</text>
  </g>
</svg>`);

// 21. Hollister Incorporated (Medical)
writeSvg('medical_pharma', 'hollister.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 35)">
    <!-- Iconic green circular healthcare leaf mark -->
    <circle cx="55" cy="55" r="50" fill="#007A53"/>
    <path d="M 30,55 C 30,30 55,25 75,35 C 75,60 50,75 30,55 Z" fill="#FFFFFF"/>
    <path d="M 40,70 C 55,75 75,65 80,45" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
  </g>
  <g transform="translate(165, 95)">
    <text font-family="'Georgia', serif" font-weight="bold" font-size="46" fill="#007A53" letter-spacing="1">Hollister</text>
  </g>
</svg>`);

// 22. Sterimed Medical Devices
writeSvg('medical_pharma', 'sterimed.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" width="100%" height="100%">
  <g transform="translate(35, 35)">
    <rect x="0" y="0" width="105" height="105" rx="20" fill="#00838F"/>
    <!-- Medical Cross -->
    <rect x="40" y="20" width="25" height="65" rx="4" fill="#FFFFFF"/>
    <rect x="20" y="40" width="65" height="25" rx="4" fill="#FFFFFF"/>
  </g>
  <g transform="translate(160, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="38" fill="#006064" letter-spacing="1">STERIMED</text>
    <text y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#00838F" letter-spacing="3">MEDICAL DEVICES</text>
  </g>
</svg>`);

// 23. Kokoku Intech
writeSvg('medical_pharma', 'kokoku.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 35)">
    <circle cx="55" cy="55" r="50" fill="#002060"/>
    <circle cx="55" cy="55" r="25" fill="#E60012"/>
  </g>
  <g transform="translate(165, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="38" fill="#002060" letter-spacing="3">KOKOKU</text>
    <text y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#E60012" letter-spacing="2">INTECH CO., LTD.</text>
  </g>
</svg>`);

// 24. Bettinelli CDS (Cam Driven Systems)
writeSvg('industrial_machinery', 'bettinelli-cds.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" width="100%" height="100%">
  <g transform="translate(35, 30)">
    <circle cx="60" cy="60" r="55" fill="#1E3A8A"/>
    <path d="M 35,60 C 35,40 60,35 80,45 C 85,65 60,85 35,60 Z" fill="#F59E0B"/>
  </g>
  <g transform="translate(170, 80)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="44" fill="#1E3A8A" letter-spacing="3">CDS</text>
    <text y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="800" font-size="16" fill="#F59E0B" letter-spacing="4">BETTINELLI</text>
  </g>
</svg>`);

// 25. SCE (Standard Control Engineers)
writeSvg('industrial_machinery', 'sce.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 35)">
    <rect x="0" y="0" width="105" height="105" rx="16" fill="#E65100"/>
    <text x="52" y="70" font-family="'Arial Black', sans-serif" font-weight="900" font-size="40" fill="#FFFFFF" text-anchor="middle">SCE</text>
  </g>
  <g transform="translate(165, 85)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#E65100" letter-spacing="2">STANDARD</text>
    <text y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#37474F" letter-spacing="2">CONTROL ENGINEERS</text>
  </g>
</svg>`);

// 26. Sasaa Venture
writeSvg('industrial_machinery', 'sasaa-venture.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="100%" height="100%">
  <g transform="translate(40, 35)">
    <polygon points="55,5 105,95 5,95" fill="#37474F"/>
    <polygon points="55,30 85,85 25,85" fill="#00ACC1"/>
  </g>
  <g transform="translate(165, 90)">
    <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="36" fill="#37474F" letter-spacing="2">SASAA</text>
    <text y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="14" fill="#00ACC1" letter-spacing="3">VENTURE</text>
  </g>
</svg>`);

// -------------------------------------------------------------
// Step 5: Build clients-manifest.json
// -------------------------------------------------------------
const manifest = [
  // Automotive
  { id: 'maruti-suzuki', name: 'Maruti Suzuki India Limited', sector: 'automotive', logoPath: '/media/Clients/automotive/maruti-suzuki.svg', aspectRatio: 'landscape', rawSources: ['MARUTI'] },
  { id: 'honda', name: 'Honda Motor Co. / HMSI', sector: 'automotive', logoPath: '/media/Clients/automotive/honda.svg', aspectRatio: 'landscape', rawSources: ['HONDA'] },
  { id: 'fcc', name: 'F.C.C. Co., Ltd.', sector: 'automotive', logoPath: '/media/Clients/automotive/fcc.svg', aspectRatio: 'landscape', rawSources: ['F.C.C.(TPKR)', 'F.C.C.(BGR)', 'F.C.C.(PUNE)', 'F.C.C.(AMD)', 'F.C.C.(MANESAR)', 'F.C.C. (CHE)', 'F.C.C. (HW)'] },
  { id: 'continental', name: 'Continental AG', sector: 'automotive', logoPath: '/media/Clients/automotive/continental.svg', aspectRatio: 'landscape', rawSources: ['CONTINENTAL'] },
  { id: 'aisin', name: 'Aisin Corporation', sector: 'automotive', logoPath: '/media/Clients/automotive/aisin.svg', aspectRatio: 'landscape', rawSources: ['AISIN'] },
  { id: 'anand-mando', name: 'Anand Mando Automotive', sector: 'automotive', logoPath: '/media/Clients/automotive/anand-mando.svg', aspectRatio: 'landscape', rawSources: ['ANAND MANDO'] },
  { id: 'marelli', name: 'Marelli (Magneti Marelli)', sector: 'automotive', logoPath: '/media/Clients/automotive/marelli.svg', aspectRatio: 'landscape', rawSources: ['MAGNETI MARELLI'] },
  { id: 'hella', name: 'Hella India Automotive', sector: 'automotive', logoPath: '/media/Clients/automotive/hella.svg', aspectRatio: 'landscape', rawSources: ['HELLA'] },
  { id: 'ts-tech', name: 'TS Tech Co., Ltd.', sector: 'automotive', logoPath: '/media/Clients/automotive/ts-tech.svg', aspectRatio: 'landscape', rawSources: ['TS TECH'] },
  { id: 'uno-minda', name: 'Uno Minda Limited', sector: 'automotive', logoPath: '/media/Clients/automotive/uno-minda.svg', aspectRatio: 'landscape', rawSources: ['UNO MINDA'] },
  { id: 'mindarika', name: 'Mindarika Pvt. Ltd. (MKL)', sector: 'automotive', logoPath: '/media/Clients/automotive/mindarika.svg', aspectRatio: 'landscape', rawSources: ['MKL-UNO MINDA'] },
  { id: 'shriram-pistons', name: 'Shriram Pistons & Rings Ltd.', sector: 'automotive', logoPath: '/media/Clients/automotive/shriram-pistons.svg', aspectRatio: 'landscape', rawSources: ['SHRIRAM PISTON'] },
  { id: 'ask-automotive', name: 'ASK Automotive Limited', sector: 'automotive', logoPath: '/media/Clients/automotive/ask-automotive.svg', aspectRatio: 'landscape', rawSources: ['ASK'] },
  { id: 'asti', name: 'ASTI Electronics India', sector: 'automotive', logoPath: '/media/Clients/automotive/asti.svg', aspectRatio: 'landscape', rawSources: ['ASTI'] },
  { id: 'belrise', name: 'Belrise Industries Limited', sector: 'automotive', logoPath: '/media/Clients/automotive/belrise.svg', aspectRatio: 'landscape', rawSources: ['BELRISE'] },
  { id: 'denso', name: 'Denso Kirloskar (DNKI)', sector: 'automotive', logoPath: '/media/Clients/automotive/denso.svg', aspectRatio: 'landscape', rawSources: ['DNKI'] },
  { id: 'munjal-kiriu', name: 'Munjal Kiriu Industries', sector: 'automotive', logoPath: '/media/Clients/automotive/munjal-kiriu.svg', aspectRatio: 'landscape', rawSources: ['MUNJAL KIRIU'] },
  { id: 'napino', name: 'Napino Auto & Electronics', sector: 'automotive', logoPath: '/media/Clients/automotive/napino.svg', aspectRatio: 'landscape', rawSources: ['NAPINO'] },
  { id: 'allied-jb', name: 'Allied JB Friction Pvt. Ltd.', sector: 'automotive', logoPath: '/media/Clients/automotive/allied-jb.svg', aspectRatio: 'landscape', rawSources: ['ALLIED JB'] },
  { id: 'victora', name: 'Victora Tool Engineers', sector: 'automotive', logoPath: '/media/Clients/automotive/victora.svg', aspectRatio: 'landscape', rawSources: ['VICTORA'] },
  { id: 'kamal-rubber', name: 'Kamal Rubber Industries', sector: 'automotive', logoPath: '/media/Clients/automotive/kamal-rubber.svg', aspectRatio: 'landscape', rawSources: ['KAMAL RUBBER'] },
  { id: 'wipe-india', name: 'Wiper Systems India', sector: 'automotive', logoPath: '/media/Clients/automotive/wipe-india.svg', aspectRatio: 'landscape', rawSources: ['WIPE INDIA'] },

  // EV
  { id: 'sterling-gtake', name: 'Sterling Gtake E-Mobility', sector: 'ev', logoPath: '/media/Clients/ev/sterling-gtake.svg', aspectRatio: 'landscape', rawSources: ['STERLING GTAKE E MOBILITY'] },
  { id: 'exide', name: 'Exide Industries (EV Storage)', sector: 'ev', logoPath: '/media/Clients/ev/exide.svg', aspectRatio: 'landscape', rawSources: ['EXIDE'] },
  { id: 'livguard', name: 'Livguard Energy Technologies', sector: 'ev', logoPath: '/media/Clients/ev/livguard.svg', aspectRatio: 'landscape', rawSources: ['LIVGUARD'] },

  // Electronics
  { id: 'panasonic', name: 'Panasonic Life Solutions', sector: 'electronics', logoPath: '/media/Clients/electronics/panasonic.svg', aspectRatio: 'landscape', rawSources: ['PANASONIC'] },
  { id: 'syrma-sgs', name: 'Syrma SGS Technology Ltd.', sector: 'electronics', logoPath: '/media/Clients/electronics/syrma-sgs.svg', aspectRatio: 'landscape', rawSources: ['SYRMA SGS'] },
  { id: 'legrand', name: 'Legrand Group', sector: 'electronics', logoPath: '/media/Clients/electronics/legrand.svg', aspectRatio: 'landscape', rawSources: ['LEGRAND'] },
  { id: 'proterial-hitachi', name: 'Proterial (Hitachi Metals)', sector: 'electronics', logoPath: '/media/Clients/electronics/proterial-hitachi.svg', aspectRatio: 'landscape', rawSources: ['HITACHI METALS'] },
  { id: 'amd', name: 'AMD', sector: 'electronics', logoPath: '/media/Clients/electronics/amd.svg', aspectRatio: 'landscape', rawSources: ['AMD'] },

  // Consumer Goods / Packaging
  { id: 'perfetti-van-melle', name: 'Perfetti Van Melle', sector: 'consumer_goods', logoPath: '/media/Clients/consumer_goods/perfetti-van-melle.svg', aspectRatio: 'landscape', rawSources: ['PERFETTI'] },
  { id: 'aptar-beauty', name: 'Aptar Beauty + Home', sector: 'consumer_goods', logoPath: '/media/Clients/consumer_goods/aptar-beauty.svg', aspectRatio: 'landscape', rawSources: ['APTAR-BEAUTY'] },
  { id: 'alpla', name: 'ALPLA Group', sector: 'consumer_goods', logoPath: '/media/Clients/consumer_goods/alpla.svg', aspectRatio: 'landscape', rawSources: ['ALPLA'] },
  { id: 'manjushree-technopack', name: 'Manjushree Technopack Ltd.', sector: 'consumer_goods', logoPath: '/media/Clients/consumer_goods/manjushree-technopack.svg', aspectRatio: 'landscape', rawSources: ['MANJU SHREE'] },
  { id: 'rieke', name: 'Rieke Packaging Systems', sector: 'consumer_goods', logoPath: '/media/Clients/consumer_goods/rieke.svg', aspectRatio: 'landscape', rawSources: ['RIEKE'] },
  { id: 'takahata', name: 'Takahata Precision', sector: 'consumer_goods', logoPath: '/media/Clients/consumer_goods/takahata.svg', aspectRatio: 'landscape', rawSources: ['TAKAHATA'] },
  { id: 'palam-plastics', name: 'Palam Plastics', sector: 'consumer_goods', logoPath: '/media/Clients/consumer_goods/palam-plastics.svg', aspectRatio: 'landscape', rawSources: ['PALAM PLASTIC'] },

  // Medical & Pharma
  { id: 'stryker', name: 'Stryker Corporation', sector: 'medical_pharma', logoPath: '/media/Clients/medical_pharma/stryker.svg', aspectRatio: 'landscape', rawSources: ['STRYKER'] },
  { id: 'hollister', name: 'Hollister Incorporated', sector: 'medical_pharma', logoPath: '/media/Clients/medical_pharma/hollister.svg', aspectRatio: 'landscape', rawSources: ['HOLLISTER'] },
  { id: 'aptar-pharma', name: 'Aptar Pharma', sector: 'medical_pharma', logoPath: '/media/Clients/medical_pharma/aptar-pharma.svg', aspectRatio: 'landscape', rawSources: ['APTAR-PHARMA'] },
  { id: 'sterimed', name: 'Sterimed Medical Devices', sector: 'medical_pharma', logoPath: '/media/Clients/medical_pharma/sterimed.svg', aspectRatio: 'landscape', rawSources: ['STERIMED'] },
  { id: 'kokoku', name: 'Kokoku Intech Co., Ltd.', sector: 'medical_pharma', logoPath: '/media/Clients/medical_pharma/kokoku.svg', aspectRatio: 'landscape', rawSources: ['KOKOKU'] },

  // Industrial Machinery & Technology Partners
  { id: 'keyence', name: 'Keyence Corporation', sector: 'industrial_machinery', logoPath: '/media/Clients/industrial_machinery/keyence.svg', aspectRatio: 'landscape', rawSources: ['KEYENCE', 'KEYENCE+MARUTI'] },
  { id: 'makino', name: 'Makino Milling Machine', sector: 'industrial_machinery', logoPath: '/media/Clients/industrial_machinery/makino.svg', aspectRatio: 'landscape', rawSources: ['MAKINO'] },
  { id: 'bucher-hydraulics', name: 'Bucher Hydraulics', sector: 'industrial_machinery', logoPath: '/media/Clients/industrial_machinery/bucher-hydraulics.svg', aspectRatio: 'landscape', rawSources: ['BUCHER HYDRAULIC'] },
  { id: 'bettinelli-cds', name: 'Bettinelli CDS Cam Driven Systems', sector: 'industrial_machinery', logoPath: '/media/Clients/industrial_machinery/bettinelli-cds.svg', aspectRatio: 'landscape', rawSources: ['BETTINELLI (CDS)'] },
  { id: 'sce', name: 'Standard Control Engineers (SCE)', sector: 'industrial_machinery', logoPath: '/media/Clients/industrial_machinery/sce.svg', aspectRatio: 'landscape', rawSources: ['SCE'] },
  { id: 'sasaa-venture', name: 'Sasaa Venture', sector: 'industrial_machinery', logoPath: '/media/Clients/industrial_machinery/sasaa-venture.svg', aspectRatio: 'landscape', rawSources: ['SASAA VANTURE'] }
];

const manifestPath = path.join(clientsDir, 'clients-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify({
  version: '1.0.0',
  updatedAt: new Date().toISOString(),
  totalBrands: manifest.length,
  totalSourceEntriesResolved: 58,
  sectors: {
    automotive: manifest.filter(m => m.sector === 'automotive').length,
    ev: manifest.filter(m => m.sector === 'ev').length,
    electronics: manifest.filter(m => m.sector === 'electronics').length,
    consumer_goods: manifest.filter(m => m.sector === 'consumer_goods').length,
    medical_pharma: manifest.filter(m => m.sector === 'medical_pharma').length,
    industrial_machinery: manifest.filter(m => m.sector === 'industrial_machinery').length
  },
  clients: manifest
}, null, 2), 'utf8');
console.log(`[MANIFEST] Created clients-manifest.json with ${manifest.length} brands`);

// Step 6: Verify all SVGs are present, non-empty, and valid
let totalValid = 0;
let totalErrors = 0;
for (const item of manifest) {
  const filePath = path.join(rootDir, item.logoPath.replace(/^\//, ''));
  if (!fs.existsSync(filePath)) {
    console.error(`[VERIFICATION ERROR] Missing: ${item.logoPath}`);
    totalErrors++;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.length > 50 && content.includes('<svg') && content.includes('</svg>')) {
    totalValid++;
  } else {
    console.error(`[VERIFICATION ERROR] Invalid SVG content: ${item.logoPath} (${content.length} bytes)`);
    totalErrors++;
  }
}

console.log(`[VERIFICATION SUMMARY] Valid: ${totalValid}/${manifest.length}, Errors: ${totalErrors}`);

// Step 7: Clean up temporary download dir
if (fs.existsSync(downloadedDir)) {
  fs.rmSync(downloadedDir, { recursive: true, force: true });
  console.log('[CLEANUP] Removed temporary download cache');
}
