const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'images', 'posters');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const titles = [
  'File:Lady_Buckit_and_the_Motley_Mopsters.jpg',
  'File:Iwaju_poster.jpg',
  'File:Iwájú_poster.jpg',
  'File:Kizazi_Moto_Generation_Fire_poster.jpg',
  'File:Supa_Team_4_poster.jpg',
  'File:Iyanu_Child_of_Wonder_poster.jpg'
];

const url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(titles.join('|')) + '&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json';

https.get(url, { headers: { 'User-Agent': 'SlumFilmsPortal/3.0 (info@slumfilms.ng)' } }, (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log(JSON.stringify(json.query.pages, null, 2));
    } catch(e) {
      console.error(e);
    }
  });
});
