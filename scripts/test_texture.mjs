import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: 'C:\\Users\\Doctor Computers\\.gemini\\antigravity-ide\\brain\\23b1497e-d419-4dd6-89d3-514625a5ac08\\texture-desktop-check.jpg',
    quality: 90
  });

  // Also take a zoomed-in clip of the background to clearly inspect texture detail
  await page.screenshot({
    path: 'C:\\Users\\Doctor Computers\\.gemini\\antigravity-ide\\brain\\23b1497e-d419-4dd6-89d3-514625a5ac08\\texture-zoom-check.jpg',
    clip: { x: 50, y: 150, width: 400, height: 400 },
    quality: 100
  });

  // Also full page screenshot
  await page.screenshot({
    path: 'C:\\Users\\Doctor Computers\\.gemini\\antigravity-ide\\brain\\23b1497e-d419-4dd6-89d3-514625a5ac08\\texture-fullpage-check.jpg',
    fullPage: true,
    quality: 85
  });

  await browser.close();
  console.log('Screenshots saved!');
}

run().catch(console.error);
