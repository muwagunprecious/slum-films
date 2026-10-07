const fs = require('fs');
const path = require('path');

const postersDir = path.join(__dirname, 'images', 'posters');
if (!fs.existsSync(postersDir)) {
  fs.mkdirSync(postersDir, { recursive: true });
}

const films = [
  {
    filename: 'sing-movie.svg',
    title: 'SING 2',
    studio: 'ILLUMINATION',
    badge: 'ANIMATION / MUSICAL',
    year: '2022',
    duration: '1h 50m',
    rating: 'PG',
    tagline: 'WHERE WILL YOUR DREAMS TAKE YOU?',
    bgGrad: ['#0d1430', '#182b5c', '#060914'],
    accent: '#facc15',
    svgArt: `
      <!-- Sing Moon & Stage Spotlight Scene -->
      <defs>
        <radialGradient id="stageGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#fff8d6" stop-opacity="0.9"/>
          <stop offset="30%" stop-color="#fbbf24" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#0d1430" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="crescentGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffe600"/>
          <stop offset="50%" stop-color="#d97706"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>
      </defs>

      <!-- Stage Spotlight Beam -->
      <polygon points="200,0 50,600 350,600" fill="url(#stageGlow)" opacity="0.35"/>
      <circle cx="200" cy="220" r="160" fill="url(#stageGlow)"/>

      <!-- Giant Golden Crescent Moon -->
      <path d="M 230,100 A 130,130 0 1,0 230,340 A 100,100 0 1,1 230,100 Z" fill="url(#crescentGold)" filter="drop-shadow(0 8px 24px rgba(251,191,36,0.6))"/>
      
      <!-- Stage Clouds Props -->
      <g fill="#1e293b" opacity="0.8">
        <circle cx="120" cy="260" r="32"/>
        <circle cx="150" cy="250" r="42"/>
        <circle cx="180" cy="265" r="30"/>
        <circle cx="270" cy="280" r="35"/>
        <circle cx="295" cy="275" r="28"/>
      </g>

      <!-- 3D Characters Group (Buster Moon, Johnny, Meena, Rosita) -->
      <!-- Johnny the Gorilla -->
      <path d="M 120,380 C 100,350 110,310 145,310 C 175,310 185,350 170,380 Z" fill="#1e293b"/>
      <circle cx="145" cy="295" r="24" fill="#0f172a"/>
      <!-- Jacket -->
      <path d="M 115,360 L 175,360 L 165,460 L 125,460 Z" fill="#10b981"/>
      <polygon points="145,390 140,410 150,410" fill="#facc15"/>

      <!-- Buster Moon (Koala in Red Bowtie on Moon) -->
      <circle cx="215" cy="205" r="22" fill="#cbd5e1"/>
      <circle cx="195" cy="195" r="14" fill="#94a3b8"/>
      <circle cx="235" cy="195" r="14" fill="#94a3b8"/>
      <!-- Suit -->
      <path d="M 200,225 L 230,225 L 235,275 L 195,275 Z" fill="#ffffff"/>
      <polygon points="215,230 210,235 220,235" fill="#ef4444"/>

      <!-- Meena the Elephant (Blue Hoodie) -->
      <path d="M 50,440 C 30,400 50,340 95,340 C 130,340 140,400 120,440 Z" fill="#64748b"/>
      <circle cx="85" cy="330" r="35" fill="#64748b"/>
      <!-- Trunk & Ears -->
      <path d="M 45,310 C 30,310 30,360 45,370 Z" fill="#94a3b8"/>
      <path d="M 85,340 Q 80,390 100,395" stroke="#475569" stroke-width="8" fill="none" stroke-linecap="round"/>
      <rect x="40" y="410" width="80" height="150" rx="15" fill="#0284c7"/>

      <!-- Rosita and Gunter (Pigs) -->
      <circle cx="270" cy="420" r="26" fill="#f472b6"/>
      <circle cx="320" cy="440" r="22" fill="#f472b6"/>
      <rect x="250" y="445" width="40" height="100" rx="10" fill="#ec4899"/>
      <rect x="305" y="460" width="30" height="90" rx="8" fill="#a855f7"/>
    `
  },
  {
    filename: 'despicable-me-3.svg',
    title: 'DESPICABLE ME 3',
    studio: 'ILLUMINATION',
    badge: 'ANIMATION / COMEDY',
    year: '2017',
    duration: '1h 30m',
    rating: 'PG',
    tagline: 'OH BROTHER.',
    bgGrad: ['#f8fafc', '#e2e8f0', '#cbd5e1'],
    accent: '#000000',
    svgArt: `
      <!-- Gru (Black/Grey Scarf) & Dru (White Suit) -->
      <defs>
        <linearGradient id="druBlonde" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#eab308"/>
        </linearGradient>
      </defs>

      <!-- Gru Profile (Left) -->
      <g transform="translate(60, 140)">
        <!-- Gru Head -->
        <circle cx="90" cy="110" r="45" fill="#fed7aa"/>
        <!-- Pointy Nose -->
        <polygon points="50,110 90,95 90,125" fill="#fdba74"/>
        <!-- Eye -->
        <circle cx="75" cy="100" r="6" fill="#ffffff"/>
        <circle cx="74" cy="100" r="3" fill="#0284c7"/>
        <!-- Gru Scarf (Black & Grey Stripes) -->
        <rect x="70" y="150" width="40" height="16" fill="#0f172a"/>
        <rect x="70" y="166" width="40" height="16" fill="#64748b"/>
        <rect x="70" y="182" width="40" height="16" fill="#0f172a"/>
        <rect x="70" y="198" width="40" height="16" fill="#64748b"/>
        <rect x="70" y="214" width="40" height="80" fill="#0f172a"/>
        <!-- Dark Coat -->
        <path d="M 60,160 L 140,160 L 150,380 L 50,380 Z" fill="#1e293b"/>
      </g>

      <!-- Dru Profile (Right - Laughing with Luxurious Hair) -->
      <g transform="translate(210, 120)">
        <!-- Dru Luxurious Blonde Hair -->
        <path d="M 30,90 Q 70,30 110,70 Q 140,110 100,140 Q 60,150 40,120 Z" fill="url(#druBlonde)" filter="drop-shadow(0 4px 12px rgba(234,179,8,0.4))"/>
        <!-- Head -->
        <circle cx="50" cy="130" r="45" fill="#fed7aa"/>
        <!-- Pointy Nose Laughing -->
        <polygon points="90,130 50,115 50,145" fill="#fdba74"/>
        <!-- Open Mouth Laugh -->
        <path d="M 55,145 Q 75,175 45,175 Z" fill="#881337"/>
        <path d="M 55,145 Q 68,155 45,155 Z" fill="#ffffff"/>
        <!-- White Scarf & Pure White Coat -->
        <rect x="30" y="175" width="45" height="150" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <path d="M 20,185 L 100,185 L 110,400 L 10,400 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      </g>

      <!-- Minions at the Bottom -->
      <g transform="translate(130, 420)">
        <rect x="30" y="30" width="70" height="110" rx="35" fill="#facc15"/>
        <!-- Goggle -->
        <circle cx="65" cy="65" r="22" fill="#94a3b8"/>
        <circle cx="65" cy="65" r="16" fill="#ffffff"/>
        <circle cx="65" cy="65" r="7" fill="#854d0e"/>
        <!-- Overall -->
        <path d="M 30,105 L 100,105 L 100,140 L 30,140 Z" fill="#1d4ed8"/>
        <rect x="45" y="90" width="40" height="20" fill="#1d4ed8"/>
      </g>
    `
  },
  {
    filename: 'migration-movie.svg',
    title: 'MIGRATION',
    studio: 'ILLUMINATION',
    badge: 'ANIMATION / ADVENTURE',
    year: '2023',
    duration: '1h 23m',
    rating: 'PG',
    tagline: 'FLY INTO THE UNKNOWN.',
    bgGrad: ['#38bdf8', '#fb923c', '#fef08a'],
    accent: '#0284c7',
    svgArt: `
      <!-- Sunset Sky & Flying Mallard Ducks -->
      <defs>
        <linearGradient id="duckHead" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </linearGradient>
      </defs>

      <!-- Giant Sun -->
      <circle cx="200" cy="300" r="130" fill="#fed7aa" opacity="0.6"/>
      <circle cx="200" cy="300" r="90" fill="#fef08a" opacity="0.8"/>

      <!-- Lead Mallard Dad (Mack) In Flight -->
      <g transform="translate(140, 160) rotate(-15)">
        <!-- Wings Spread -->
        <ellipse cx="60" cy="80" rx="90" ry="30" fill="#78350f" transform="rotate(-30 60 80)"/>
        <!-- Duck Body -->
        <ellipse cx="60" cy="80" rx="55" ry="28" fill="#92400e"/>
        <!-- Emerald Head -->
        <circle cx="110" cy="65" r="22" fill="url(#duckHead)"/>
        <circle cx="100" cy="72" r="24" fill="#ffffff" opacity="0.3"/>
        <!-- Yellow Bill -->
        <polygon points="128,60 155,68 128,75" fill="#facc15"/>
        <!-- Eye -->
        <circle cx="118" cy="62" r="4" fill="#000000"/>
        <circle cx="120" cy="61" r="1.5" fill="#ffffff"/>
      </g>

      <!-- Mom Duck (Pam) -->
      <g transform="translate(80, 260) rotate(-10)">
        <ellipse cx="50" cy="70" rx="70" ry="24" fill="#b45309"/>
        <circle cx="95" cy="55" r="18" fill="#d97706"/>
        <polygon points="110,50 132,58 110,64" fill="#f59e0b"/>
      </g>

      <!-- Ducklings (Dax & Gwen) -->
      <g transform="translate(230, 240) rotate(-12)">
        <ellipse cx="30" cy="40" rx="35" ry="16" fill="#fbbf24"/>
        <circle cx="55" cy="32" r="12" fill="#f59e0b"/>
        <polygon points="65,28 78,33 65,37" fill="#ea580c"/>
      </g>

      <!-- Clouds -->
      <ellipse cx="80" cy="480" rx="120" ry="40" fill="#ffffff" opacity="0.7"/>
      <ellipse cx="320" cy="440" rx="140" ry="50" fill="#ffffff" opacity="0.8"/>
    `
  },
  {
    filename: 'mario-movie.svg',
    title: 'THE SUPER MARIO BROS. MOVIE',
    studio: 'ILLUMINATION x NINTENDO',
    badge: 'ANIMATION / GAMING',
    year: '2023',
    duration: '1h 32m',
    rating: 'PG',
    tagline: 'NOT WATERPROOF.',
    bgGrad: ['#1e1b4b', '#4338ca', '#38bdf8'],
    accent: '#ef4444',
    svgArt: `
      <!-- Mushroom Kingdom 3D Floating Hills & Warp Pipes -->
      <defs>
        <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#16a34a"/>
          <stop offset="40%" stop-color="#4ade80"/>
          <stop offset="100%" stop-color="#15803d"/>
        </linearGradient>
      </defs>

      <!-- Giant Red Super Mushroom in Center -->
      <g transform="translate(110, 140)">
        <!-- Mushroom Cap -->
        <path d="M 10,120 C 10,20 170,20 170,120 Z" fill="#ef4444" filter="drop-shadow(0 12px 28px rgba(239,68,68,0.5))"/>
        <!-- White Spots -->
        <circle cx="90" cy="65" r="30" fill="#ffffff"/>
        <circle cx="25" cy="100" r="18" fill="#ffffff"/>
        <circle cx="155" cy="100" r="18" fill="#ffffff"/>
        <!-- Stem -->
        <rect x="45" y="115" width="90" height="60" rx="20" fill="#fef08a"/>
        <ellipse cx="70" cy="135" rx="5" ry="12" fill="#000000"/>
        <ellipse cx="110" cy="135" rx="5" ry="12" fill="#000000"/>
      </g>

      <!-- Green Warp Pipe -->
      <g transform="translate(120, 360)">
        <rect x="15" y="0" width="130" height="40" rx="6" fill="url(#pipeGrad)"/>
        <rect x="25" y="38" width="110" height="150" fill="url(#pipeGrad)"/>
      </g>

      <!-- Question Mark Block -->
      <g transform="translate(270, 100)">
        <rect x="0" y="0" width="60" height="60" rx="10" fill="#f59e0b" stroke="#b45309" stroke-width="4"/>
        <circle cx="8" cy="8" r="3" fill="#78350f"/>
        <circle cx="52" cy="8" r="3" fill="#78350f"/>
        <circle cx="8" cy="52" r="3" fill="#78350f"/>
        <circle cx="52" cy="52" r="3" fill="#78350f"/>
        <text x="30" y="42" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle" font-family="sans-serif">?</text>
      </g>
    `
  },
  {
    filename: 'minions-rise-of-gru.svg',
    title: 'MINIONS: THE RISE OF GRU',
    studio: 'ILLUMINATION',
    badge: 'ANIMATION / BLOCKBUSTER',
    year: '2022',
    duration: '1h 27m',
    rating: 'PG',
    tagline: 'BRACE YOURSELF.',
    bgGrad: ['#fef08a', '#facc15', '#eab308'],
    accent: '#000000',
    svgArt: `
      <!-- Giant 3D Minions Face & Disco 70s Flair -->
      <circle cx="200" cy="280" r="140" fill="#facc15"/>
      
      <!-- Big Single Goggle (Stuart/Otto) -->
      <rect x="40" y="235" width="320" height="26" fill="#1e293b"/>
      <circle cx="200" cy="248" r="65" fill="#94a3b8" stroke="#64748b" stroke-width="6"/>
      <circle cx="200" cy="248" r="50" fill="#ffffff"/>
      <circle cx="200" cy="248" r="22" fill="#854d0e"/>
      <circle cx="200" cy="248" r="10" fill="#000000"/>
      <circle cx="194" cy="242" r="5" fill="#ffffff"/>

      <!-- Big Smiling Mouth with Braces -->
      <path d="M 140,330 Q 200,385 260,330 Z" fill="#881337"/>
      <path d="M 140,330 Q 200,355 260,330 Z" fill="#ffffff"/>
      <!-- Braces Wire -->
      <line x1="145" y1="334" x2="255" y2="334" stroke="#94a3b8" stroke-width="3"/>

      <!-- 70s Style Denim Overalls with Gru Logo -->
      <path d="M 90,420 L 310,420 L 320,600 L 80,600 Z" fill="#1d4ed8"/>
      <rect x="135" y="380" width="130" height="50" fill="#1d4ed8"/>
      <circle cx="200" cy="460" r="26" fill="#0f172a"/>
      <text x="200" y="470" font-size="24" font-weight="900" fill="#facc15" text-anchor="middle">G</text>
    `
  },
  {
    filename: 'iwaju-3d.svg',
    title: 'IWÁJÚ (3D SERIES)',
    studio: 'KUGALI x DISNEY',
    badge: '3D SCI-FI / CGI',
    year: '2024',
    duration: '6 EPISODES',
    rating: 'TV-PG',
    tagline: 'THE FUTURE OF LAGOS IS NOW.',
    bgGrad: ['#042f2e', '#0f766e', '#134e4a'],
    accent: '#00f0ff',
    svgArt: `
      <!-- 3D Futuristic Lagos Skyline & Cybernetic Agama Lizard -->
      <defs>
        <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#22d3ee"/>
          <stop offset="100%" stop-color="#0891b2"/>
        </linearGradient>
      </defs>

      <!-- Solarpunk Floating Towers -->
      <polygon points="120,420 160,160 200,420" fill="#0f172a" opacity="0.8"/>
      <polygon points="200,440 240,120 280,440" fill="#1e293b"/>
      <line x1="240" y1="120" x2="240" y2="80" stroke="#22d3ee" stroke-width="3"/>
      <circle cx="240" cy="80" r="6" fill="#facc15" filter="drop-shadow(0 0 10px #facc15)"/>

      <!-- Otin the Cyber-Agama Lizard Head Rending in 3D -->
      <g transform="translate(130, 220)">
        <!-- Stylized 3D Cyber Lizard -->
        <path d="M 20,80 Q 70,10 120,80 L 100,120 Q 60,110 20,80 Z" fill="#0284c7" filter="drop-shadow(0 10px 24px rgba(34,211,238,0.5))"/>
        <!-- Robotic Plate Lines -->
        <path d="M 60,35 L 75,75" stroke="#facc15" stroke-width="3"/>
        <path d="M 90,45 L 95,85" stroke="#22d3ee" stroke-width="3"/>
        <!-- Glowing Optical Sensor Eye -->
        <circle cx="85" cy="55" r="10" fill="#facc15"/>
        <circle cx="85" cy="55" r="5" fill="#ffffff"/>
      </g>

      <!-- Monorail Bridge & Speed Beams -->
      <path d="M 0,440 Q 200,380 400,420" stroke="#22d3ee" stroke-width="6" fill="none"/>
      <line x1="150" y1="410" x2="250" y2="395" stroke="#facc15" stroke-width="8" stroke-linecap="round"/>
    `
  },
  {
    filename: 'kizazi-moto.svg',
    title: 'KIZAZI MOTO: GENERATION FIRE',
    studio: 'TRIGGERFISH x DISNEY+',
    badge: '3D AFRO-FUTURISM',
    year: '2023',
    duration: '10 EPISODES',
    rating: 'PG-13',
    tagline: 'IGNITE THE GENERATION.',
    bgGrad: ['#450a0a', '#991b1b', '#f97316'],
    accent: '#facc15',
    svgArt: `
      <!-- Solar Shield & Cybernetic Warrior Silhouette -->
      <defs>
        <radialGradient id="sunShield" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="60%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#7c2d12"/>
        </radialGradient>
      </defs>

      <!-- Giant Radiant Sun Shield -->
      <circle cx="200" cy="260" r="120" fill="url(#sunShield)" filter="drop-shadow(0 0 30px #ea580c)"/>

      <!-- Sacred Geometric Sunburst Rays -->
      <g stroke="#fef08a" stroke-width="3" opacity="0.6">
        <line x1="200" y1="120" x2="200" y2="80"/>
        <line x1="200" y1="400" x2="200" y2="440"/>
        <line x1="60" y1="260" x2="20" y2="260"/>
        <line x1="340" y1="260" x2="380" y2="260"/>
        <line x1="100" y1="160" x2="70" y2="130"/>
        <line x1="300" y1="160" x2="330" y2="130"/>
      </g>

      <!-- Hero Silhouette with Cybernetic Glowing Spear -->
      <g transform="translate(150, 180)">
        <circle cx="50" cy="40" r="20" fill="#000000"/>
        <path d="M 25,65 L 75,65 L 85,220 L 15,220 Z" fill="#000000"/>
        <!-- Glowing Electric Spear -->
        <line x1="100" y1="-40" x2="100" y2="240" stroke="#facc15" stroke-width="5" filter="drop-shadow(0 0 12px #facc15)"/>
        <polygon points="100,-70 90,-40 110,-40" fill="#ffffff"/>
      </g>
    `
  },
  {
    filename: 'dawn-of-thunder-3d.svg',
    title: 'DAWN OF THUNDER (SANGO 3D)',
    studio: 'KOMOTION STUDIOS',
    badge: '3D THEATRICAL EPIC',
    year: '2024',
    duration: '1h 45m',
    rating: 'PG-13',
    tagline: 'THE GOD OF THUNDER RISES.',
    bgGrad: ['#18181b', '#3f3f46', '#71717a'],
    accent: '#ef4444',
    svgArt: `
      <!-- Glowing 3D Double Thunder Axe & Storm Lightning -->
      <defs>
        <radialGradient id="thunderCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
      </defs>

      <!-- Storm Vortex -->
      <circle cx="200" cy="270" r="140" fill="url(#thunderCore)" opacity="0.4"/>

      <!-- Branching Lightning Bolts -->
      <g stroke="#ffffff" stroke-width="4" filter="drop-shadow(0 0 14px #ef4444)">
        <polyline points="200,40 180,140 220,200 190,300 240,440"/>
        <polyline points="100,100 130,180 110,240"/>
        <polyline points="300,100 270,180 290,240"/>
      </g>

      <!-- 3D Oshé Sango (Double-Headed Thunder Axe) -->
      <g transform="translate(140, 160)">
        <!-- Axe Handle -->
        <rect x="52" y="0" width="16" height="240" rx="8" fill="#78350f" stroke="#d97706" stroke-width="2"/>
        <!-- Double Curved Blades -->
        <path d="M 60,40 C -10,10 -10,90 60,60 Z" fill="#ef4444" stroke="#fbbf24" stroke-width="3" filter="drop-shadow(0 0 16px #ef4444)"/>
        <path d="M 60,40 C 130,10 130,90 60,60 Z" fill="#ef4444" stroke="#fbbf24" stroke-width="3" filter="drop-shadow(0 0 16px #ef4444)"/>
        <circle cx="60" cy="50" r="10" fill="#facc15"/>
      </g>
    `
  }
];

films.forEach(film => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
  <defs>
    <linearGradient id="bg_${film.filename.replace('.svg', '')}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${film.bgGrad[0]}"/>
      <stop offset="50%" stop-color="${film.bgGrad[1]}"/>
      <stop offset="100%" stop-color="${film.bgGrad[2]}"/>
    </linearGradient>
    <filter id="shadow_${film.filename.replace('.svg', '')}">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(0,0,0,0.6)"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="400" height="600" rx="16" fill="url(#bg_${film.filename.replace('.svg', '')})"/>

  <!-- Dynamic 3D Animation Artwork Content -->
  ${film.svgArt}

  <!-- Cinematic Top Banner -->
  <rect x="0" y="0" width="400" height="70" fill="url(#bg_${film.filename.replace('.svg', '')})" opacity="0.3"/>
  <text x="200" y="32" font-family="'Montserrat', 'Inter', sans-serif" font-size="11" font-weight="900" letter-spacing="4" fill="${film.accent}" text-anchor="middle" text-transform="uppercase">${film.studio}</text>
  <text x="200" y="48" font-family="'Montserrat', 'Inter', sans-serif" font-size="9" font-weight="700" letter-spacing="2" fill="#ffffff" opacity="0.8" text-anchor="middle">${film.badge}</text>

  <!-- Dark Bottom Vignette for Title Readability -->
  <rect x="0" y="460" width="400" height="140" rx="16" fill="linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, transparent 100%)"/>

  <!-- Movie Title & Credits -->
  <g transform="translate(24, 520)">
    <text x="0" y="0" font-family="'Montserrat', 'Inter', sans-serif" font-size="10" font-weight="800" letter-spacing="2" fill="${film.accent}">${film.tagline}</text>
    <text x="0" y="24" font-family="'Montserrat', 'Inter', sans-serif" font-size="20" font-weight="900" letter-spacing="0.5" fill="#ffffff">${film.title}</text>
    <text x="0" y="44" font-family="'Montserrat', 'Inter', sans-serif" font-size="11" font-weight="600" fill="#a1a1aa">${film.year} • ${film.duration} • ${film.rating}</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(postersDir, film.filename), svg, 'utf8');
  console.log(`Generated 3D Animation Poster: ${film.filename}`);
});

console.log('All 3D Animation movie posters generated successfully!');
