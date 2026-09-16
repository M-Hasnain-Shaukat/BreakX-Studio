const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const PROJECTS = [
  { id: 'zewellery', url: 'https://zewellery.vercel.app' },
  { id: 'break-x', url: 'https://break-x.vercel.app' },
  { id: 'bun-n-blaze', url: 'https://bun-n-blaze.vercel.app' },
  { id: 'desi-bites', url: 'https://desi-bites-one.vercel.app' },
  { id: 'apsara', url: 'https://apsara-tau.vercel.app' },
  { id: 'eclat', url: 'https://eclat-smoky-eight.vercel.app' },
  { id: 'noore', url: 'https://noore-nu.vercel.app' },
  { id: 'vera', url: 'https://vera-one-tan.vercel.app' },
  { id: 'nova', url: 'https://nova-rosy-mu.vercel.app' },
  { id: 'step-up', url: 'https://step-up-mauve-one.vercel.app' },
  { id: 'tech-nest', url: 'https://tech-nest-teal.vercel.app' },
  { id: 'al-qasim', url: 'https://al-qasim-pi.vercel.app' },
  { id: 'ab-traders-3', url: 'https://ab-traders-3.vercel.app' },
  { id: 'ab-traders-2', url: 'https://ab-traders-2.vercel.app' },
  { id: 'ab-traders-1', url: 'https://ab-traders-1.vercel.app' },
];

async function captureAll() {
  const outDir = path.join(__dirname, '..', 'public', 'previews');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log('Launching browser at:', EDGE_PATH);
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 850 });

  for (const proj of PROJECTS) {
    const dest = path.join(outDir, `${proj.id}.jpg`);
    if (fs.existsSync(dest) && proj.id === 'zewellery') {
      console.log(`Skipping already captured ${proj.id}`);
      continue;
    }
    console.log(`[${proj.id}] Loading ${proj.url}...`);
    try {
      await page.goto(proj.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      // Short delay to allow fonts and hero elements to render
      await new Promise(r => setTimeout(r, 2200));
      await page.screenshot({ path: dest, type: 'jpeg', quality: 85 });
      console.log(`[${proj.id}] Saved ${dest}`);
    } catch (err) {
      console.error(`[${proj.id}] Failed: ${err.message}`);
    }
  }

  await browser.close();
  console.log('All project captures complete!');
}

captureAll();
