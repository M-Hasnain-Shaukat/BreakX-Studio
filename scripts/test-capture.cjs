const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testCapture() {
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
  await page.setViewport({ width: 1280, height: 800 });

  try {
    console.log('Navigating to https://zewellery.vercel.app ...');
    await page.goto('https://zewellery.vercel.app', { waitUntil: 'networkidle2', timeout: 30000 });
    // Wait an additional 2 seconds for CSS/images
    await new Promise(r => setTimeout(r, 2000));
    const dest = path.join(outDir, 'zewellery.jpg');
    await page.screenshot({ path: dest, type: 'jpeg', quality: 85 });
    console.log('Screenshot saved to:', dest);
  } catch (err) {
    console.error('Capture error:', err.message);
  } finally {
    await browser.close();
  }
}

testCapture();
