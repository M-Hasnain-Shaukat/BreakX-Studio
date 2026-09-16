const puppeteer = require('puppeteer-core');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function measureGaps() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const [w, h, name] of [[360, 680, 'Small (360x680)'], [390, 844, 'Medium (390x844)'], [430, 932, 'Large (430x932)']]) {
    await page.setViewport({ width: w, height: h });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 800));

    const measurements = await page.evaluate(() => {
      // Numbers grid: text-sky-600 parent grid
      const countUpEl = document.querySelector('.text-sky-600');
      const numbersGrid = countUpEl ? countUpEl.closest('.grid') : null;
      
      // Card: perspective-container
      const card = document.querySelector('.perspective-container');

      // Buttons: mobile action buttons row
      const mobileButtonsRow = document.querySelector('.w-full.flex.lg\\:hidden');

      const numRect = numbersGrid ? numbersGrid.getBoundingClientRect() : null;
      const cardRect = card ? card.getBoundingClientRect() : null;
      const btnRect = mobileButtonsRow ? mobileButtonsRow.getBoundingClientRect() : null;

      return {
        viewportHeight: window.innerHeight,
        numbersBottom: numRect ? numRect.bottom : null,
        cardTop: cardRect ? cardRect.top : null,
        cardBottom: cardRect ? cardRect.bottom : null,
        cardHeight: cardRect ? cardRect.height : null,
        cardWidth: cardRect ? cardRect.width : null,
        buttonsTop: btnRect ? btnRect.top : null,
        gapAbove: (cardRect && numRect) ? (cardRect.top - numRect.bottom) : null,
        gapBelow: (btnRect && cardRect) ? (btnRect.top - cardRect.bottom) : null,
      };
    });

    console.log(`=== ${name} ===`);
    console.log(`Card Width: ${measurements.cardWidth?.toFixed(1)}px, Height: ${measurements.cardHeight?.toFixed(1)}px`);
    console.log(`Gap Above (Numbers -> Card): ${measurements.gapAbove?.toFixed(1)}px`);
    console.log(`Gap Below (Card -> Buttons): ${measurements.gapBelow?.toFixed(1)}px`);
    console.log(`Difference (Gap Below - Gap Above): ${(measurements.gapBelow - measurements.gapAbove)?.toFixed(1)}px\n`);
  }

  await browser.close();
}

measureGaps().catch(console.error);
