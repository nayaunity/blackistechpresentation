// Builds workshop-deck.pptx from the 20 PNGs in workshop-slides/.
// Each slide is a full-bleed 1920×1080 image — opens natively in PowerPoint
// and imports cleanly into Keynote.
//
// Prereqs: run `npm run workshop:pdf` first so the PNGs exist.
// Run:     npm run workshop:pptx

import { existsSync } from "node:fs";
import path from "node:path";
import PptxGenJS from "pptxgenjs";
import { slideManifest } from "../src/lib/workshop/manifest";

const PNG_DIR = path.resolve(process.cwd(), "workshop-slides");
const OUT = path.resolve(process.cwd(), "workshop-deck.pptx");

async function main() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = "Workshop 5 · The New Developer Workflow";
  pptx.author = "Naya Bere";
  pptx.company = "Black Is Tech Houston 2026";

  for (let i = 0; i < slideManifest.length; i += 1) {
    const num = i + 1;
    const pngPath = path.join(PNG_DIR, `${String(num).padStart(2, "0")}.png`);
    if (!existsSync(pngPath)) {
      console.warn(`! Missing ${pngPath} — run workshop:pdf first. Skipping.`);
      continue;
    }
    const slide = pptx.addSlide();
    slide.background = { path: pngPath };
    console.log(`→ ${String(num).padStart(2, "0")} · ${slideManifest[i].title}`);
  }

  await pptx.writeFile({ fileName: OUT });
  console.log(`\nWrote ${OUT}`);
  console.log("Open in PowerPoint or double-click to import into Keynote.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
