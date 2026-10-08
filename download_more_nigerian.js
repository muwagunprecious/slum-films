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
    dest: path.join(artDir, 'nigerian-animation-hero.jpg'),
    url: 'https://i0.wp.com/meetingofmindsuk.uk/wp-content/uploads/2022/09/Iwaju-header.jpeg'
  },
  {
    dest: path.join(targetDir, 'kizazi-moto-fire.jpg'),
    url: 'https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2023/04/Kizazi-Moto-Generation-Fire-Logo1-1024x576.jpg'
  },
  {
    dest: path.join(targetDir, 'supa-team-4-african.jpg'),
    url: 'https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVIpUY_ejq_7EBKrpxmQXvpM2L9NQYQ95KZ9R6ryZnkf9n78C_qZonte-3VeoUK6xtCCWMeHUw9z_OHTddZp5vz0-Gad5ipqaPwUskKbv0GlVRN4FNAiSza3q-ajYxmIgsp6VA.jpg?r=baf'
  },
  {
    dest: path.join(targetDir, 'tola-kole-otin.jpg'),
    url: 'https://www.awn.com/sites/default/files/styles/original/public/image/featured/iwaju-online-use_140.0_003.00_1096_2k-1280_0.jpg'
  },
  {
    dest: path.join(targetDir, 'sango-thunder-god.jpg'),
    url: 'https://i0.wp.com/culturecustodian.com/wp-content/uploads/2017/10/sangorevealfirst.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) SlumFilmsPortal/3.0'
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
      console.log(`Downloading ${path.basename(item.dest)}...`);
      await download(item.url, item.dest);
      console.log(`Successfully saved: ${path.basename(item.dest)}`);
    } catch (e) {
      console.error(`Error with ${path.basename(item.dest)}:`, e.message);
    }
  }
}

run();
