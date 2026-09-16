import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: 'C:\\Users\\Doctor Computers\\.gemini\\antigravity-ide\\brain\\23b1497e-d419-4dd6-89d3-514625a5ac08\\texture-mobile-check.jpg',
    quality: 90
  });

  await browser.close();
  console.log('Mobile screenshot saved!');
}

run().catch(console.error);
