const fs = require('fs');
const path = require('path');

const postersDir = path.join(__dirname, 'images', 'posters');
if (!fs.existsSync(postersDir)) {
  fs.mkdirSync(postersDir, { recursive: true });
}

const posters = [
  {
    filename: 'the-last-drum.svg',
    title: 'THE LAST DRUM',
    issue: 'NO. 1',
    price: '$3.99',
    badge: 'AFRICAN EPIC COMIC',
    genre: 'ACTION • MYTHOLOGY',
    burst: 'ORIGINAL COMIC!',
    bg1: '#3b0764',
    bg2: '#9333ea',
    accent: '#facc15',
    art: `
      <!-- Halftone Dots -->
      <pattern id="dot1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="8" cy="8" r="3" fill="#ffffff" opacity="0.1"/>
      </pattern>
      <rect x="0" y="0" width="400" height="600" fill="url(#dot1)"/>

      <!-- Sun Burst Rays -->
      <g opacity="0.35" fill="#facc15">
        <polygon points="200,280 180,0 220,0"/>
        <polygon points="200,280 340,0 380,20"/>
        <polygon points="200,280 400,140 400,180"/>
        <polygon points="200,280 400,320 380,360"/>
        <polygon points="200,280 60,0 20,20"/>
        <polygon points="200,280 0,140 0,180"/>
        <polygon points="200,280 0,320 20,360"/>
      </g>

      <!-- Comic Radiant Sun -->
      <circle cx="200" cy="280" r="100" fill="#f59e0b" stroke="#000000" stroke-width="4"/>
      <circle cx="200" cy="280" r="75" fill="#fef08a" stroke="#000000" stroke-width="3"/>

      <!-- Talking Drum with Comic Lines -->
      <g transform="translate(0, 20)">
        <path d="M 140 290 Q 200 340 140 390 L 260 390 Q 200 340 260 290 Z" fill="#b45309" stroke="#000000" stroke-width="5"/>
        <ellipse cx="200" cy="290" rx="60" ry="18" fill="#d97706" stroke="#000000" stroke-width="4"/>
        <ellipse cx="200" cy="390" rx="60" ry="18" fill="#78350f" stroke="#000000" stroke-width="4"/>
        <!-- Tension strings -->
        <line x1="155" y1="295" x2="165" y2="385" stroke="#fef08a" stroke-width="3"/>
        <line x1="180" y1="300" x2="185" y2="390" stroke="#fef08a" stroke-width="3"/>
        <line x1="200" y1="300" x2="200" y2="390" stroke="#fef08a" stroke-width="3"/>
        <line x1="220" y1="300" x2="215" y2="390" stroke="#fef08a" stroke-width="3"/>
        <line x1="245" y1="295" x2="235" y2="385" stroke="#fef08a" stroke-width="3"/>
      </g>

      <!-- Comic Action Sound Waves -->
      <path d="M 90 270 Q 70 300 90 330" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 60 250 Q 30 300 60 350" stroke="#facc15" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M 310 270 Q 330 300 310 330" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 340 250 Q 370 300 340 350" stroke="#facc15" stroke-width="6" fill="none" stroke-linecap="round"/>

      <!-- Drummer Hero Silhouette -->
      <path d="M 0 470 Q 140 440 200 450 Q 280 460 400 430 L 400 600 L 0 600 Z" fill="#000000"/>
      <circle cx="200" cy="405" r="22" fill="#000000"/>
      <path d="M 180 430 Q 200 420 220 430 L 225 470 L 175 470 Z" fill="#000000"/>
      <!-- Drum stick raised -->
      <path d="M 220 425 L 265 385" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
      <circle cx="265" cy="385" r="8" fill="#ef4444" stroke="#000000" stroke-width="2"/>
    `
  },
  {
    filename: 'lagos-2099.svg',
    title: 'LAGOS 2099',
    issue: 'VOL. 2',
    price: '$4.50',
    badge: 'AFROFUTURISM SCI-FI',
    genre: 'CYBERPUNK • SOLARPUNK',
    burst: 'ACTION PACKED!',
    bg1: '#022c22',
    bg2: '#0d9488',
    accent: '#38bdf8',
    art: `
      <!-- Cyber Grid -->
      <g opacity="0.25" stroke="#38bdf8" stroke-width="2">
        <line x1="0" y1="350" x2="400" y2="350"/>
        <line x1="0" y1="400" x2="400" y2="400"/>
        <line x1="0" y1="460" x2="400" y2="460"/>
        <line x1="200" y1="260" x2="0" y2="550"/>
        <line x1="200" y1="260" x2="100" y2="550"/>
        <line x1="200" y1="260" x2="300" y2="550"/>
        <line x1="200" y1="260" x2="400" y2="550"/>
      </g>

      <!-- Neon Solarpunk Sun -->
      <circle cx="200" cy="250" r="90" fill="#065f46" stroke="#34d399" stroke-width="4"/>
      <circle cx="200" cy="250" r="60" fill="#10b981" stroke="#a7f3d0" stroke-width="3"/>

      <!-- Futuristic Highrise Silhouettes -->
      <rect x="40" y="240" width="45" height="200" fill="#021a14" stroke="#10b981" stroke-width="2"/>
      <rect x="95" y="190" width="55" height="250" fill="#022019" stroke="#38bdf8" stroke-width="2"/>
      <rect x="250" y="210" width="50" height="230" fill="#022019" stroke="#34d399" stroke-width="2"/>
      <rect x="310" y="260" width="45" height="180" fill="#021a14" stroke="#38bdf8" stroke-width="2"/>

      <!-- Monorail Beam -->
      <path d="M 0 320 Q 200 280 400 340" stroke="#38bdf8" stroke-width="8" fill="none"/>
      <path d="M 0 320 Q 200 280 400 340" stroke="#ffffff" stroke-width="3" fill="none"/>

      <!-- Speedlines & Laser Trails -->
      <line x1="120" y1="295" x2="200" y2="285" stroke="#facc15" stroke-width="4"/>
      <line x1="210" y1="285" x2="320" y2="305" stroke="#facc15" stroke-width="4"/>
    `
  },
  {
    filename: 'abus-world.svg',
    title: "ABU'S WORLD",
    issue: 'NO. 4',
    price: '$2.99',
    badge: 'COMEDY & INVENTIONS',
    genre: 'KIDS • ADVENTURE',
    burst: 'FULL COLOR!',
    bg1: '#1e1b4b',
    bg2: '#4338ca',
    accent: '#facc15',
    art: `
      <!-- Bright Comic Pop Rays -->
      <circle cx="200" cy="270" r="110" fill="#fbbf24" stroke="#000000" stroke-width="5"/>
      <circle cx="200" cy="270" r="85" fill="#fef08a" stroke="#000000" stroke-width="4"/>

      <!-- Robot Gadget Hero -->
      <rect x="155" y="230" width="90" height="80" rx="16" fill="#3b82f6" stroke="#000000" stroke-width="5"/>
      <!-- Robot Eyes -->
      <circle cx="180" cy="265" r="12" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      <circle cx="180" cy="265" r="5" fill="#000000"/>
      <circle cx="220" cy="265" r="12" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      <circle cx="220" cy="265" r="5" fill="#000000"/>
      <!-- Robot Smile -->
      <path d="M 185 285 Q 200 300 215 285" stroke="#000000" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Antenna with Electric Zap -->
      <line x1="200" y1="230" x2="200" y2="195" stroke="#000000" stroke-width="5"/>
      <circle cx="200" cy="195" r="10" fill="#ef4444" stroke="#000000" stroke-width="3"/>
      <path d="M 215 185 L 230 175 L 222 195 L 240 185" stroke="#facc15" stroke-width="4" fill="none"/>

      <!-- Comic Gear Symbols -->
      <circle cx="110" cy="330" r="30" fill="#64748b" stroke="#000000" stroke-width="4"/>
      <circle cx="110" cy="330" r="10" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      <circle cx="290" cy="330" r="25" fill="#f97316" stroke="#000000" stroke-width="4"/>
      <circle cx="290" cy="330" r="8" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    `
  },
  {
    filename: 'sade-river-goddess.svg',
    title: 'SADE & GODDESS',
    issue: 'SPECIAL',
    price: '$4.99',
    badge: 'MYTHIC GRAPHIC NOVEL',
    genre: 'FANTASY • FOLKLORE',
    burst: 'MAGICAL TALE!',
    bg1: '#164e63',
    bg2: '#0891b2',
    accent: '#67e8f9',
    art: `
      <!-- Swirling River Spiral -->
      <path d="M 200 280 m -90 0 a 90 90 0 1 0 180 0 a 90 90 0 1 0 -180 0" fill="#0e7490" stroke="#000000" stroke-width="5"/>
      <path d="M 200 280 m -60 0 a 60 60 0 1 0 120 0 a 60 60 0 1 0 -120 0" fill="#06b6d4" stroke="#000000" stroke-width="4"/>
      <path d="M 200 280 m -30 0 a 30 30 0 1 0 60 0 a 30 30 0 1 0 -60 0" fill="#cffafe" stroke="#000000" stroke-width="3"/>

      <!-- Magical Water Crown -->
      <path d="M 140 230 L 165 190 L 185 220 L 200 170 L 215 220 L 235 190 L 260 230 Z" fill="#fbbf24" stroke="#000000" stroke-width="4"/>
      <circle cx="200" cy="170" r="6" fill="#38bdf8" stroke="#000000" stroke-width="2"/>

      <!-- Water Droplets & Sparkles -->
      <circle cx="120" cy="200" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
      <circle cx="280" cy="210" r="10" fill="#ffffff" stroke="#000000" stroke-width="2"/>
      <circle cx="100" cy="320" r="12" fill="#67e8f9" stroke="#000000" stroke-width="3"/>
      <circle cx="300" cy="310" r="14" fill="#67e8f9" stroke="#000000" stroke-width="3"/>
    `
  },
  {
    filename: 'eko-beats.svg',
    title: 'EKO BEATS',
    issue: 'ISSUE 3',
    price: '$3.50',
    badge: 'AFROBEATS MUSICAL',
    genre: 'MUSIC • YOUTH COMEDY',
    burst: 'HIGH ENERGY!',
    bg1: '#701a75',
    bg2: '#c026d3',
    accent: '#f43f5e',
    art: `
      <!-- Musical Sunburst -->
      <circle cx="200" cy="270" r="100" fill="#f43f5e" stroke="#000000" stroke-width="5"/>
      <circle cx="200" cy="270" r="70" fill="#fb7185" stroke="#000000" stroke-width="3"/>

      <!-- Boombox & Headphones -->
      <rect x="140" y="240" width="120" height="80" rx="10" fill="#1e293b" stroke="#000000" stroke-width="5"/>
      <circle cx="170" cy="280" r="20" fill="#facc15" stroke="#000000" stroke-width="4"/>
      <circle cx="230" cy="280" r="20" fill="#facc15" stroke="#000000" stroke-width="4"/>
      <circle cx="170" cy="280" r="8" fill="#000000"/>
      <circle cx="230" cy="280" r="8" fill="#000000"/>

      <!-- Floating Musical Notes -->
      <g fill="#facc15" stroke="#000000" stroke-width="3">
        <text x="80" y="230" font-family="'Arial Black', sans-serif" font-size="42">♫</text>
        <text x="280" y="220" font-family="'Arial Black', sans-serif" font-size="46">♪</text>
        <text x="100" y="340" font-family="'Arial Black', sans-serif" font-size="36">♬</text>
        <text x="290" y="350" font-family="'Arial Black', sans-serif" font-size="40">♫</text>
      </g>
    `
  },
  {
    filename: 'simis-magic-clay.svg',
    title: 'SIMI MAGIC CLAY',
    issue: 'NO. 1',
    price: '$3.50',
    badge: 'GRAPHIC NOVEL',
    genre: 'FANTASY • HEARTWARMING',
    burst: 'DISCOVER!',
    bg1: '#7c2d12',
    bg2: '#ea580c',
    accent: '#fdba74',
    art: `
      <!-- Clay Pot with Glowing Creature -->
      <circle cx="200" cy="270" r="95" fill="#fed7aa" stroke="#000000" stroke-width="5"/>
      <ellipse cx="200" cy="350" rx="70" ry="30" fill="#9a3412" stroke="#000000" stroke-width="5"/>
      <path d="M 130 350 Q 150 270 175 250 L 225 250 Q 250 270 270 350 Z" fill="#c2410c" stroke="#000000" stroke-width="5"/>
      <ellipse cx="200" cy="250" rx="25" ry="8" fill="#ffedd5" stroke="#000000" stroke-width="3"/>

      <!-- Cute Terracotta Clay Golem Rising -->
      <circle cx="200" cy="200" r="32" fill="#ea580c" stroke="#000000" stroke-width="4"/>
      <circle cx="190" cy="195" r="5" fill="#ffffff" stroke="#000000" stroke-width="2"/>
      <circle cx="210" cy="195" r="5" fill="#ffffff" stroke="#000000" stroke-width="2"/>
      <circle cx="190" cy="195" r="2" fill="#000000"/>
      <circle cx="210" cy="195" r="2" fill="#000000"/>
      <path d="M 194 212 Q 200 220 206 212" stroke="#000000" stroke-width="3" fill="none"/>
    `
  },
  {
    filename: 'rainmaker-kano.svg',
    title: 'RAINMAKER KANO',
    issue: 'VOL. 1',
    price: '$3.99',
    badge: 'NORTHERN ADVENTURE',
    genre: 'ACTION • FOLKLORE',
    burst: 'STORM RISING!',
    bg1: '#1e3a8a',
    bg2: '#3b82f6',
    accent: '#facc15',
    art: `
      <!-- Ancient City Wall with Lightning -->
      <rect x="50" y="320" width="300" height="150" fill="#78350f" stroke="#000000" stroke-width="5"/>
      <!-- Battlements -->
      <rect x="50" y="295" width="40" height="30" fill="#78350f" stroke="#000000" stroke-width="4"/>
      <rect x="120" y="295" width="40" height="30" fill="#78350f" stroke="#000000" stroke-width="4"/>
      <rect x="190" y="295" width="40" height="30" fill="#78350f" stroke="#000000" stroke-width="4"/>
      <rect x="260" y="295" width="40" height="30" fill="#78350f" stroke="#000000" stroke-width="4"/>
      <rect x="310" y="295" width="40" height="30" fill="#78350f" stroke="#000000" stroke-width="4"/>

      <!-- Comic Storm Cloud & Lightning -->
      <g fill="#1e293b" stroke="#000000" stroke-width="4">
        <circle cx="150" cy="190" r="45"/>
        <circle cx="210" cy="170" r="55"/>
        <circle cx="270" cy="190" r="45"/>
        <rect x="150" y="190" width="120" height="40" stroke="none"/>
      </g>
      <!-- Lightning Bolt -->
      <polygon points="210,210 180,260 205,260 175,320 235,250 205,250" fill="#facc15" stroke="#000000" stroke-width="4"/>
    `
  },
  {
    filename: 'bintu-talking-parrot.svg',
    title: 'BINTU & PARROT',
    issue: 'NO. 2',
    price: '$2.99',
    badge: 'JUNGLE ADVENTURE',
    genre: 'KIDS • FUN',
    burst: 'LAUGH OUT LOUD!',
    bg1: '#14532d',
    bg2: '#16a34a',
    accent: '#facc15',
    art: `
      <!-- Tropical Jungle Circle -->
      <circle cx="200" cy="270" r="100" fill="#86efac" stroke="#000000" stroke-width="5"/>
      <!-- Comic Grey Parrot -->
      <ellipse cx="200" cy="260" rx="35" ry="50" fill="#64748b" stroke="#000000" stroke-width="5"/>
      <circle cx="200" cy="200" r="25" fill="#94a3b8" stroke="#000000" stroke-width="4"/>
      <circle cx="210" cy="195" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
      <circle cx="210" cy="195" r="3" fill="#000000"/>
      <!-- Red Beak -->
      <polygon points="218,190 245,200 218,212" fill="#ef4444" stroke="#000000" stroke-width="3"/>
      <!-- Parrot Red Tail -->
      <polygon points="175,290 150,350 190,300" fill="#dc2626" stroke="#000000" stroke-width="3"/>
      <!-- Speech bubble from parrot -->
      <rect x="60" y="140" width="90" height="45" rx="8" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      <polygon points="135,185 155,190 145,175" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      <text x="75" y="168" font-family="'Arial Black', sans-serif" font-size="12" fill="#000000">SQUAWK!</text>
    `
  },
  {
    filename: 'chike-and-the-river.svg',
    title: 'CHIKE RIVER',
    issue: 'CLASSIC',
    price: '$3.50',
    badge: 'LITERARY ADAPTATION',
    genre: 'DRAMA • ADVENTURE',
    burst: 'CLASSIC TALE!',
    bg1: '#1e3a5f',
    bg2: '#0284c7',
    accent: '#f59e0b',
    art: `
      <!-- Niger River Bridge and Ferry -->
      <path d="M 0 320 Q 200 290 400 340 L 400 600 L 0 600 Z" fill="#0369a1"/>
      <!-- Steel Bridge Truss -->
      <line x1="20" y1="280" x2="380" y2="280" stroke="#000000" stroke-width="6"/>
      <line x1="60" y1="280" x2="100" y2="240" stroke="#000000" stroke-width="4"/>
      <line x1="140" y1="280" x2="100" y2="240" stroke="#000000" stroke-width="4"/>
      <line x1="140" y1="280" x2="180" y2="240" stroke="#000000" stroke-width="4"/>
      <line x1="220" y1="280" x2="180" y2="240" stroke="#000000" stroke-width="4"/>
      <line x1="220" y1="280" x2="260" y2="240" stroke="#000000" stroke-width="4"/>
      <line x1="300" y1="280" x2="260" y2="240" stroke="#000000" stroke-width="4"/>
      <line x1="300" y1="280" x2="340" y2="240" stroke="#000000" stroke-width="4"/>
      <line x1="380" y1="280" x2="340" y2="240" stroke="#000000" stroke-width="4"/>

      <!-- River Ferry Boat -->
      <rect x="150" y="340" width="100" height="35" rx="6" fill="#dc2626" stroke="#000000" stroke-width="4"/>
      <rect x="170" y="320" width="60" height="22" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      <line x1="190" y1="320" x2="190" y2="305" stroke="#000000" stroke-width="4"/>
    `
  },
  {
    filename: 'golden-calabash.svg',
    title: 'GOLDEN CALABASH',
    issue: 'NO. 1',
    price: '$3.99',
    badge: 'TIMELESS LEGEND',
    genre: 'MYTHOLOGY • WISDOM',
    burst: 'TREASURE!',
    bg1: '#451a03',
    bg2: '#b45309',
    accent: '#facc15',
    art: `
      <!-- Glowing Giant Baobab Tree -->
      <ellipse cx="200" cy="270" r="95" fill="#fde047" stroke="#000000" stroke-width="5"/>
      <!-- Giant Golden Calabash -->
      <circle cx="200" cy="300" r="55" fill="#eab308" stroke="#000000" stroke-width="5"/>
      <circle cx="200" cy="245" r="35" fill="#ca8a04" stroke="#000000" stroke-width="5"/>
      <ellipse cx="200" cy="210" rx="14" ry="6" fill="#713f12" stroke="#000000" stroke-width="3"/>

      <!-- Mystical Golden Sparkles -->
      <polygon points="120,200 126,215 141,221 126,227 120,242 114,227 99,221 114,215" fill="#ffffff" stroke="#000000" stroke-width="2"/>
      <polygon points="280,210 286,225 301,231 286,237 280,252 274,237 259,231 274,225" fill="#ffffff" stroke="#000000" stroke-width="2"/>
    `
  }
];

posters.forEach(p => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
  <defs>
    <!-- Background Comic Gradient -->
    <linearGradient id="bg-${p.filename}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${p.bg2}"/>
      <stop offset="60%" stop-color="${p.bg1}"/>
      <stop offset="100%" stop-color="#050505"/>
    </linearGradient>

    <!-- Comic Halftone Overlay -->
    <pattern id="comic-dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="6" cy="6" r="2" fill="#ffffff" opacity="0.08"/>
    </pattern>
  </defs>

  <!-- Base Canvas -->
  <rect x="0" y="0" width="400" height="600" fill="url(#bg-${p.filename})"/>
  <rect x="0" y="0" width="400" height="600" fill="url(#comic-dots)"/>

  <!-- Comic Outer Border -->
  <rect x="8" y="8" width="384" height="584" fill="none" stroke="#000000" stroke-width="6"/>
  <rect x="14" y="14" width="372" height="572" fill="none" stroke="#ffffff" stroke-width="2"/>

  <!-- COMIC HEADER BANNER -->
  <rect x="14" y="14" width="372" height="42" fill="#000000"/>
  
  <!-- Slum Comics Brand Box -->
  <rect x="14" y="14" width="130" height="42" fill="#E50914" stroke="#ffffff" stroke-width="2"/>
  <text x="24" y="42" font-family="'Arial Black', 'Impact', sans-serif" font-size="17" font-weight="900" fill="#ffffff" letter-spacing="1">SLUM COMICS</text>
  
  <!-- Issue & Price Box -->
  <text x="156" y="41" font-family="'Arial Black', sans-serif" font-size="12" font-weight="700" fill="#facc15">${p.issue} • ${p.price}</text>

  <!-- Comics Code Seal -->
  <rect x="332" y="18" width="46" height="34" rx="4" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="340" y="32" font-family="'Arial Black', sans-serif" font-size="8" font-weight="900" fill="#000000">SLUM</text>
  <text x="338" y="44" font-family="'Arial Black', sans-serif" font-size="8" font-weight="900" fill="#000000">CODE</text>

  <!-- MAIN ARTWORK -->
  ${p.art}

  <!-- ACTION BURST / STAMP -->
  <g transform="translate(300, 110)">
    <polygon points="0,-25 8,-8 26,-15 15,3 30,18 10,18 0,34 -10,18 -30,18 -15,3 -26,-15 -8,-8" fill="#facc15" stroke="#000000" stroke-width="3"/>
    <text x="0" y="5" font-family="'Arial Black', sans-serif" font-size="7" font-weight="900" fill="#000000" text-anchor="middle">${p.burst}</text>
  </g>

  <!-- CATEGORY BADGE -->
  <rect x="30" y="70" width="180" height="22" rx="3" fill="#000000" stroke="#facc15" stroke-width="2"/>
  <text x="40" y="85" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#facc15" letter-spacing="1">${p.badge}</text>

  <!-- COMIC TITLE TREATMENT (3D Block Style) -->
  <!-- Shadow -->
  <text x="204" y="534" font-family="'Arial Black', 'Impact', sans-serif" font-size="34" font-weight="900" fill="#000000" text-anchor="middle" letter-spacing="2">${p.title}</text>
  <!-- Main Title Fill -->
  <text x="200" y="530" font-family="'Arial Black', 'Impact', sans-serif" font-size="34" font-weight="900" fill="#ffffff" stroke="#000000" stroke-width="6" paint-order="stroke fill" text-anchor="middle" letter-spacing="2">${p.title}</text>

  <!-- GENRE SUBTITLE -->
  <text x="200" y="560" font-family="'Arial', sans-serif" font-size="12" font-weight="700" fill="${p.accent}" text-anchor="middle" letter-spacing="3">${p.genre}</text>
</svg>`;

  const dest = path.join(postersDir, p.filename);
  fs.writeFileSync(dest, svg, 'utf8');
});

console.log(`Successfully generated ${posters.length} Comic Book Posters!`);
