const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'images', 'posters');
const artDir = path.join(__dirname, 'images', 'art');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
if (!fs.existsSync(artDir)) fs.mkdirSync(artDir, { recursive: true });

const downloads = [
  {
    dest: path.join(artDir, 'hero-nigerian-3d.jpg'),
    url: 'https://i0.wp.com/meetingofmindsuk.uk/wp-content/uploads/2022/09/Iwaju-header.jpeg'
  },
  {
    dest: path.join(targetDir, 'iwaju-3d-stills.jpg'),
    url: 'https://www.awn.com/sites/default/files/styles/original/public/image/featured/iwaju-online-use_140.0_003.00_1096_2k-1280_0.jpg'
  },
  {
    dest: path.join(targetDir, 'lady-buckit-3d.jpg'),
    url: 'https://upload.wikimedia.org/wikipedia/en/6/67/Lady_Buckit_and_the_Motley_Mopsters.jpg'
  },
  {
    dest: path.join(targetDir, 'dawn-of-thunder-sango.jpg'),
    url: 'https://i0.wp.com/culturecustodian.com/wp-content/uploads/2017/10/sangorevealfirst.jpg'
  },
  {
    dest: path.join(targetDir, 'iwaju-official-poster.jpg'),
    url: 'http://www.impawards.com/tv/posters/iwaju.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) SlumFilms/3.0'
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
    try {
      console.log(`Downloading ${path.basename(item.dest)} from ${item.url}...`);
      await download(item.url, item.dest);
      console.log(`Saved: ${path.basename(item.dest)}`);
    } catch (e) {
      console.error(`Error downloading ${path.basename(item.dest)}:`, e.message);
    }
  }
}

run();
