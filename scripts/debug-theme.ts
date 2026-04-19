import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto("http://localhost:3000/workshop#1", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const info = await page.evaluate(`({
    rootBg: getComputedStyle(document.documentElement).getPropertyValue('--workshop-bg'),
    rootFg: getComputedStyle(document.documentElement).getPropertyValue('--workshop-fg'),
    rootAccent: getComputedStyle(document.documentElement).getPropertyValue('--workshop-accent'),
    bodyBg: getComputedStyle(document.body).backgroundColor,
    bodyColor: getComputedStyle(document.body).color,
    fixedDivBg: (() => {
      const nodes = document.querySelectorAll('div');
      for (const el of nodes) {
        const cs = getComputedStyle(el);
        if (cs.position === 'fixed' && cs.top === '0px' && cs.left === '0px') {
          return cs.backgroundColor;
        }
      }
      return 'not-found';
    })(),
    sectionBg: (() => {
      const el = document.querySelector('section');
      return el ? getComputedStyle(el).backgroundColor : 'none';
    })(),
  })`);
  console.log(JSON.stringify(info, null, 2));

  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
