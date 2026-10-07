const fs = require('fs');
const path = require('path');

const artDir = path.join(__dirname, 'images', 'art');
if (!fs.existsSync(artDir)) fs.mkdirSync(artDir, { recursive: true });

// 1. Octopus Tentacle SVG (Warm yellow backdrop with realistic 3D CGI pink/purple tentacle with suction cups)
const octopusSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
  <defs>
    <linearGradient id="warmYellowBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffd500"/>
      <stop offset="60%" stop-color="#ffb703"/>
      <stop offset="100%" stop-color="#fb8500"/>
    </linearGradient>
    <linearGradient id="tentaclePink" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="40%" stop-color="#e11d48"/>
      <stop offset="80%" stop-color="#be123c"/>
      <stop offset="100%" stop-color="#881337"/>
    </linearGradient>
    <radialGradient id="cupInner" cx="40%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="50%" stop-color="#e11d48"/>
      <stop offset="100%" stop-color="#4c0519"/>
    </radialGradient>
    <filter id="softGlow">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="rgba(190,18,60,0.4)"/>
    </filter>
  </defs>

  <!-- Warm Yellow Background -->
  <rect width="600" height="800" rx="24" fill="url(#warmYellowBg)"/>

  <!-- 3D CGI Octopus Tentacle Curving Upwards -->
  <g filter="url(#softGlow)">
    <!-- Main Tentacle Body -->
    <path d="M 450,800 C 400,600 320,400 350,220 C 370,120 440,60 480,80 C 510,95 500,160 450,200 C 400,240 370,350 430,550 C 460,650 520,720 560,800 Z" fill="url(#tentaclePink)"/>

    <!-- Suction Cups Along the Left Edge -->
    <!-- Cup 1 (Top Tip) -->
    <ellipse cx="445" cy="115" rx="14" ry="18" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="3" transform="rotate(-30 445 115)"/>
    <!-- Cup 2 -->
    <ellipse cx="415" cy="155" rx="18" ry="22" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="4" transform="rotate(-25 415 155)"/>
    <!-- Cup 3 -->
    <ellipse cx="375" cy="205" rx="22" ry="28" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="4.5" transform="rotate(-15 375 205)"/>
    <!-- Cup 4 -->
    <ellipse cx="340" cy="275" rx="26" ry="34" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="5" transform="rotate(-5 340 275)"/>
    <!-- Cup 5 -->
    <ellipse cx="320" cy="355" rx="30" ry="38" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="5" transform="rotate(10 320 355)"/>
    <!-- Cup 6 -->
    <ellipse cx="325" cy="445" rx="34" ry="42" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="5.5" transform="rotate(20 325 445)"/>
    <!-- Cup 7 -->
    <ellipse cx="350" cy="545" rx="38" ry="46" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="6" transform="rotate(25 350 545)"/>
    <!-- Cup 8 -->
    <ellipse cx="395" cy="650" rx="42" ry="50" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="6.5" transform="rotate(30 395 650)"/>
    <!-- Cup 9 (Bottom) -->
    <ellipse cx="450" cy="755" rx="46" ry="54" fill="url(#cupInner)" stroke="#f43f5e" stroke-width="7" transform="rotate(35 450 755)"/>
  </g>
</svg>`;

// 2. Starry Night / Cosmos SVG (Deep navy night sky with twinkling stars and subtle nebula)
const cosmosSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
  <defs>
    <linearGradient id="deepCosmos" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="40%" stop-color="#09142e"/>
      <stop offset="80%" stop-color="#0f224a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <radialGradient id="nebulaGlow" cx="60%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="40%" stop-color="#818cf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Deep Navy Background -->
  <rect width="600" height="800" rx="24" fill="url(#deepCosmos)"/>
  <rect width="600" height="800" rx="24" fill="url(#nebulaGlow)"/>

  <!-- Starry Sky Pixels -->
  <g fill="#ffffff">
    ${Array.from({ length: 140 }).map(() => {
      const x = Math.floor(Math.random() * 560 + 20);
      const y = Math.floor(Math.random() * 760 + 20);
      const r = (Math.random() * 2 + 0.8).toFixed(1);
      const op = (Math.random() * 0.7 + 0.3).toFixed(2);
      return `<circle cx="${x}" cy="${y}" r="${r}" opacity="${op}"/>`;
    }).join('\n    ')}
  </g>

  <!-- Glowing Bright Distant Star -->
  <g transform="translate(420, 180)">
    <circle cx="0" cy="0" r="4" fill="#ffffff"/>
    <line x1="-18" y1="0" x2="18" y2="0" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
    <line x1="0" y1="-18" x2="0" y2="18" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
  </g>
</svg>`;

// 3. Hero 3D Animation Cinematic Banner SVG
const heroBannerSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 700" width="1600" height="700">
  <defs>
    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712"/>
      <stop offset="40%" stop-color="#0f172a"/>
      <stop offset="80%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <radialGradient id="stageSpotlight" cx="70%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#fde047" stop-opacity="0.35"/>
      <stop offset="40%" stop-color="#38bdf8" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#030712" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1600" height="700" rx="28" fill="url(#heroGrad)"/>
  <rect width="1600" height="700" rx="28" fill="url(#stageSpotlight)"/>

  <!-- Floating Cinematic Star Particles -->
  <g fill="#ffffff" opacity="0.5">
    ${Array.from({ length: 60 }).map(() => {
      const x = Math.floor(Math.random() * 1560 + 20);
      const y = Math.floor(Math.random() * 660 + 20);
      const r = (Math.random() * 2.5 + 1).toFixed(1);
      return `<circle cx="${x}" cy="${y}" r="${r}"/>`;
    }).join('\n    ')}
  </g>

  <!-- 3D Characters Ensemble Silhouette & Lighting -->
  <g transform="translate(1000, 220)">
    <!-- Golden Crescent Moon -->
    <path d="M 220,40 A 180,180 0 1,0 220,380 A 140,140 0 1,1 220,40 Z" fill="#ffea00" filter="drop-shadow(0 0 40px rgba(255,234,0,0.5))"/>
    
    <!-- Buster Moon Koala -->
    <circle cx="210" cy="190" r="32" fill="#cbd5e1"/>
    <circle cx="180" cy="175" r="20" fill="#94a3b8"/>
    <circle cx="240" cy="175" r="20" fill="#94a3b8"/>
    <polygon points="210,225 200,235 220,235" fill="#ef4444"/>
    <rect x="195" y="220" width="30" height="80" rx="8" fill="#ffffff"/>

    <!-- Minions Group Silhouettes -->
    <g transform="translate(-180, 180)">
      <rect x="0" y="30" width="80" height="130" rx="40" fill="#ffea00"/>
      <circle cx="40" cy="70" r="26" fill="#94a3b8"/>
      <circle cx="40" cy="70" r="18" fill="#ffffff"/>
      <circle cx="40" cy="70" r="8" fill="#000000"/>
      <rect x="15" y="110" width="50" height="50" rx="8" fill="#1d4ed8"/>
    </g>
  </g>

  <!-- Bold Hero Editorial Typography Overlay -->
  <g transform="translate(100, 280)">
    <text x="0" y="0" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="14" font-weight="700" letter-spacing="4" fill="#ffea00" text-transform="uppercase">SLUMFILMS 3D ANIMATION STUDIOS</text>
    <text x="0" y="60" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="64" font-weight="700" letter-spacing="-1" fill="#ffffff">WHERE STORIES</text>
    <text x="0" y="128" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="64" font-weight="700" letter-spacing="-1" fill="#ffea00">COME TO LIFE.</text>
    <text x="0" y="175" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="18" font-weight="400" fill="#9ca3af" letter-spacing="0">Pioneering global theatrical 3D animation and contemporary African animated cinema.</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(artDir, 'octopus-tentacle.svg'), octopusSvg, 'utf8');
fs.writeFileSync(path.join(artDir, 'starry-cosmos.svg'), cosmosSvg, 'utf8');
fs.writeFileSync(path.join(artDir, 'hero-banner.svg'), heroBannerSvg, 'utf8');

console.log('Successfully generated octopus-tentacle.svg, starry-cosmos.svg, and hero-banner.svg');
