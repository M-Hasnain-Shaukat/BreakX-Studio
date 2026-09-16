const puppeteer = require('puppeteer-core');

async function main() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 950 });
  await page.goto('http://localhost:5173/');
  await new Promise(r => setTimeout(r, 1200));

  // Scroll to Noore in #projects
  await page.evaluate(() => {
    const gallery = document.getElementById('projects');
    const img = gallery ? gallery.querySelector('img[alt="Noore"]') : null;
    if (img) img.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'public/verification/noore-target.jpg' });

  // Scroll to MHS Store in #projects
  await page.evaluate(() => {
    const el = document.querySelector('img[src="/previews/mhs-store.jpg"]');
    if (el) {
      el.scrollIntoView({ block: 'center' });
    }
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: 'public/verification/mhs-store-exact.jpg' });

  // Scroll to Noore in #projects
  await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('#projects h3, #projects h4'));
    const target = cards.find(el => el.textContent.includes('Noore'));
    if (target) {
      target.closest('.group').scrollIntoView({ block: 'center' });
    }
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: 'public/verification/noore-final.jpg' });

  console.log('Done capturing targets!');
  await browser.close();
}

main();
