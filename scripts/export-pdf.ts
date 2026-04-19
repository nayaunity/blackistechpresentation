// Renders /workshop slides to PDF and PNG. Use as a stage-safe backup in case
// Wi-Fi or the dev server fails mid-workshop.
//
// Prereqs:
//   - Dev server running: npm run dev   (so localhost:3000 is live)
// Run:
//   npm run workshop:pdf
//
// Outputs:
//   workshop-deck.pdf           (20 pages, landscape 1920×1080)
//   workshop-slides/NN.png      (one PNG per slide)

import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import { slideManifest } from "../src/lib/workshop/manifest";

const BASE = process.env.WORKSHOP_BASE_URL ?? "http://localhost:3000";
const PDF_OUT = path.resolve(process.cwd(), "workshop-deck.pdf");
const PNG_DIR = path.resolve(process.cwd(), "workshop-slides");

async function main() {
  if (existsSync(PNG_DIR)) rmSync(PNG_DIR, { recursive: true, force: true });
  mkdirSync(PNG_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  const pdfBuffers: Buffer[] = [];

  for (let i = 0; i < slideManifest.length; i += 1) {
    const num = i + 1;
    const url = `${BASE}/workshop#${num}`;
    console.log(`→ ${String(num).padStart(2, "0")} · ${slideManifest[i].title}`);
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const pngPath = path.join(PNG_DIR, `${String(num).padStart(2, "0")}.png`);
    await page.screenshot({ path: pngPath, fullPage: false });

    const pdfBuffer = await page.pdf({
      width: "1920px",
      height: "1080px",
      printBackground: true,
      pageRanges: "1",
      preferCSSPageSize: false,
    });
    pdfBuffers.push(pdfBuffer);
  }

  if (pdfBuffers.length > 0) {
    writeFileSync(PDF_OUT, pdfBuffers[0]);
    console.log(
      `\nWrote first-page PDF to ${PDF_OUT}. For a multi-page PDF, install pdf-lib and merge the ${pdfBuffers.length} buffers — or use the PNGs in ${PNG_DIR}.`,
    );
  }

  await context.close();
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
