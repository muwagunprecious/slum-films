const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'images', 'posters');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const movies = [
  { id: 'sing-2', url: 'https://www.themoviedb.org/movie/438695-sing-2', fallbackFile: 'sing-movie.jpg' },
  { id: 'despicable-me-3', url: 'https://www.themoviedb.org/movie/339846-despicable-me-3', fallbackFile: 'despicable-me-3.jpg' },
  { id: 'migration', url: 'https://www.themoviedb.org/movie/940551-migration', fallbackFile: 'migration.jpg' },
  { id: 'mario-movie', url: 'https://www.themoviedb.org/movie/502356-the-super-mario-bros-movie', fallbackFile: 'mario.jpg' },
  { id: 'minions-gru', url: 'https://www.themoviedb.org/movie/438148-minions-the-rise-of-gru', fallbackFile: 'minions.jpg' },
  { id: 'despicable-me-4', url: 'https://www.themoviedb.org/movie/519182-despicable-me-4', fallbackFile: 'despicable-me-4.jpg' },
  { id: 'iwaju-3d', url: 'https://www.themoviedb.org/tv/215354-iwaju', fallbackFile: 'iwaju.jpg' },
  { id: 'kizazi-moto', url: 'https://www.themoviedb.org/tv/222165-kizazi-moto-generation-fire', fallbackFile: 'kizazi-moto.jpg' }
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchHtml(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => req.destroy());
  });
}

function downloadImage(imgUrl, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const client = imgUrl.startsWith('https') ? https : http;
    client.get(imgUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadImage(res.headers.location, destPath));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const m of movies) {
    try {
      console.log(`Fetching poster for ${m.id}...`);
      const html = await fetchHtml(m.url);
      const match = html.match(/content="https:\/\/image\.tmdb\.org\/t\/p\/[^"]+"/i) ||
                    html.match(/src="https:\/\/image\.tmdb\.org\/t\/p\/w500\/[^"]+"/i) ||
                    html.match(/https:\/\/image\.tmdb\.org\/t\/p\/[a-zA-Z0-9_\/]+\.jpg/i);

      if (match) {
        let imgUrl = match[0].replace(/content="|src="|"/g, '');
        imgUrl = imgUrl.replace(/\/w[0-9]+\//, '/w780/');
        console.log(`Found image: ${imgUrl}`);
        const dest = path.join(targetDir, m.fallbackFile);
        await downloadImage(imgUrl, dest);
        console.log(`Saved: ${dest}`);
      } else {
        console.log(`No image match in HTML for ${m.id}`);
      }
    } catch (e) {
      console.error(`Error fetching ${m.id}:`, e.message);
    }
  }
}

run();
