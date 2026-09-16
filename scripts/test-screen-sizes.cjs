const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testScreens() {
  const outDir = path.join(__dirname, '..', 'public', 'verification');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Small screen (e.g. 360x680 or 375x667)
  await page.setViewport({ width: 360, height: 680 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'small-screen-before.jpg'), type: 'jpeg', quality: 90 });
  console.log('Saved small-screen-before.jpg');

  // 1b. Medium mobile screen (390x844)
  await page.setViewport({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'mid-screen.jpg'), type: 'jpeg', quality: 90 });
  console.log('Saved mid-screen.jpg');

  // 2. Bigger mobile screen (e.g. 430x932 - iPhone 14/15/16 Pro Max)
  await page.setViewport({ width: 430, height: 932 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'big-screen-after.jpg'), type: 'jpeg', quality: 90 });
  console.log('Saved big-screen-after.jpg');

  // 3. Tablet (e.g. 768x1024)
  await page.setViewport({ width: 768, height: 1024 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'tablet-hero.jpg'), type: 'jpeg', quality: 90 });
  console.log('Saved tablet-hero.jpg');

  // 3b. Surface Pro 10 (960x1440)
  await page.setViewport({ width: 960, height: 1440 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'surface-pro-hero.jpg'), type: 'jpeg', quality: 90 });
  console.log('Saved surface-pro-hero.jpg');

  // 3c. iPad Pro 13 (1032x1376)
  await page.setViewport({ width: 1032, height: 1376 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'ipad-pro-hero.jpg'), type: 'jpeg', quality: 90 });
  console.log('Saved ipad-pro-hero.jpg');

  // 4. Desktop (1280x800)
  await page.setViewport({ width: 1280, height: 800 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'desktop-hero-after.jpg'), type: 'jpeg', quality: 90 });
  console.log('Saved desktop-hero-after.jpg');

  await browser.close();
}

testScreens().catch(console.error);
