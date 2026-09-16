const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifyApp() {
  const outDir = path.join(__dirname, '..', 'public', 'verification');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const consoleLogs = [];
  page.on('console', msg => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => consoleLogs.push(`[PAGE ERROR] ${err.message}`));

  console.log('Navigating to http://localhost:5173/ ...');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1500));

  // Desktop Screenshot
  await page.screenshot({ path: path.join(outDir, 'desktop-hero.jpg'), type: 'jpeg', quality: 85 });
  console.log('Saved desktop-hero.jpg');

  // Scroll to featured
  await page.evaluate(() => document.getElementById('featured')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'desktop-featured.jpg'), type: 'jpeg', quality: 85 });
  console.log('Saved desktop-featured.jpg');

  // Scroll to projects gallery
  await page.evaluate(() => document.getElementById('projects')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'desktop-gallery.jpg'), type: 'jpeg', quality: 85 });
  console.log('Saved desktop-gallery.jpg');

  // Mobile Viewport test
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'mobile-hero.jpg'), type: 'jpeg', quality: 85 });
  console.log('Saved mobile-hero.jpg');

  await browser.close();
  console.log('Verification finished! Total logs:', consoleLogs.length);
  if (consoleLogs.length > 0) {
    console.log('Logs:\n', consoleLogs.join('\n'));
  }
}

verifyApp().catch(err => {
  console.error('Verification error:', err);
  process.exit(1);
});
