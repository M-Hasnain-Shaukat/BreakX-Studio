import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // Full page screenshot
  await page.screenshot({
    path: 'C:\\Users\\Doctor Computers\\.gemini\\antigravity-ide\\brain\\7f54a104-635f-4c17-9b12-21c575b4b017\\full-page-texture.jpg',
    fullPage: true,
    quality: 85
  });

  await browser.close();
  console.log('Full page screenshot saved!');
}

run().catch(console.error);
