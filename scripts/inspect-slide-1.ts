// Inspects slide 1 layout: screenshot + bounding boxes for key elements.
// Usage: npx tsx scripts/inspect-slide-1.ts

import { chromium } from "playwright";
import path from "node:path";

const BASE = process.env.WORKSHOP_BASE_URL ?? "http://localhost:3000";
const OUT = path.resolve(process.cwd(), "workshop-slides", "debug-01.png");

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(`${BASE}/workshop#1`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  await page.screenshot({ path: OUT, fullPage: false });

  const probe = await page.evaluate(`(() => {
    function pick(selector) {
      var el = document.querySelector(selector);
      if (!el) return null;
      var r = el.getBoundingClientRect();
      var cs = window.getComputedStyle(el);
      return {
        selector: selector,
        x: r.x, y: r.y, w: r.width, h: r.height,
        right: r.right, bottom: r.bottom,
        padding: cs.padding,
        justifyContent: cs.justifyContent,
        alignItems: cs.alignItems
      };
    }
    return {
      viewport: { w: window.innerWidth, h: window.innerHeight },
      section: pick("section"),
      h1: pick("h1"),
      topBar: pick("section > div:first-child"),
      innerStack: pick("section > div:nth-child(2)")
    };
  })()`);

  console.log(JSON.stringify(probe, null, 2));

  await context.close();
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
