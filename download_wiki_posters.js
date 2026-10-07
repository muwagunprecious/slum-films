const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'images', 'posters');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const downloads = [
  {
    name: 'despicable-me-3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/8/80/Despicable_Me_3_theatrical_release_poster.jpg'
  },
  {
    name: 'sing-2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/8/87/Sing_2_poster.jpg'
  },
  {
    name: 'sing-1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Sing_%282016_film%29_poster.jpg'
  },
  {
    name: 'the-super-mario-bros.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg'
  },
  {
    name: 'minions-rise-of-gru.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/4/45/Minions_The_Rise_of_Gru_poster.jpg'
  },
  {
    name: 'secret-life-of-pets.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/en/6/64/The_Secret_Life_of_Pets_poster.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) SlumFilmsPortal/2.0'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of downloads) {
    const dest = path.join(targetDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, dest);
      console.log(`Successfully saved ${item.name}`);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
}

run();
