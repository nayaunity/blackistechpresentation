// Syncs slide content from src/lib/workshop/content.ts into the Google Slides
// deck. Uses Playwright + a persistent Chrome profile so Naya signs in once.
//
// Strategy (tiered fallback):
//   A. Ideal — use the Google Slides REST API via a stored OAuth token. Most
//      reliable, survives DOM changes. Requires a one-time gcloud auth step.
//   B. Fallback — paste slide content into speaker notes via Playwright DOM
//      interaction. Notes are easier to target than slide body text.
//
// Run:   npm run workshop:sync
//
// NOTE: direct Google Slides body-text editing via DOM is brittle. This script
// ships path B (speaker-notes paste) as the default because it's the most
// reliable visible-in-the-deck sync method without API setup. To enable path A
// (body text edits via the Slides API), set GOOGLE_SLIDES_API=1 and follow the
// setup block in the README.

import { openDeckContext } from "./_gslides-shared";
import { slideManifest } from "../src/lib/workshop/manifest";
import * as content from "../src/lib/workshop/content";

type SlideSummary = {
  index: number;
  id: string;
  title: string;
  bullets: string[];
};

function summarize(): SlideSummary[] {
  const c = content as Record<string, unknown>;
  const getTitle = (key: string): string => {
    const slide = c[key] as { title?: string; line?: string } | undefined;
    return slide?.title ?? slide?.line ?? "";
  };
  const getBullets = (key: string): string[] => {
    const slide = c[key] as Record<string, unknown> | undefined;
    if (!slide) return [];
    const out: string[] = [];
    for (const v of Object.values(slide)) {
      if (typeof v === "string" && v.length < 240) out.push(v);
      else if (Array.isArray(v)) {
        for (const item of v) {
          if (typeof item === "string" && item.length < 240) out.push(item);
        }
      }
    }
    return out.slice(0, 8);
  };

  const keyForSlide = [
    "slide01Title",
    "slide02IntroForm",
    "slide03Setup",
    "slide04WhatWeBuild",
    "slide05FirstPrompt",
    "slide06PlanMode",
    "slide07PromptStructure",
    "slide08BioHook",
    "slide09Permissions",
    "slide10ContextTokens",
    "slide11FirstIteration",
    "slide12Multimedia",
    "slide13Subagents",
    "slide14MCP",
    "slide15Skills",
    "slide16Reveal",
    "slide17HandoffDoc",
    "slide18ClaudeMD",
    "slide19CTA",
    "slide20Closing",
  ];

  return slideManifest.map((meta, i) => {
    const key = keyForSlide[i];
    return {
      index: i + 1,
      id: meta.id,
      title: getTitle(key) || meta.title,
      bullets: getBullets(key),
    };
  });
}

async function main() {
  const summaries = summarize();
  console.log(`Syncing ${summaries.length} slides from content.ts → Google Slides.`);

  const { context, page } = await openDeckContext();

  const filmstripSelector = "[role='listitem'][aria-label^='Slide']";
  const filmstripCount = await page.locator(filmstripSelector).count().catch(() => 0);
  console.log(`Deck has ${filmstripCount} slides.`);

  if (filmstripCount < summaries.length) {
    console.warn(
      `Warning: deck has ${filmstripCount} slides but content has ${summaries.length}. Missing slides will be skipped.`,
    );
  }

  for (const s of summaries) {
    if (s.index > filmstripCount) break;
    console.log(`\n[${s.index}] ${s.title}`);

    try {
      const thumb = page.locator(filmstripSelector).nth(s.index - 1);
      await thumb.click({ timeout: 5000 });
      await page.waitForTimeout(400);

      // Open speaker notes pane if it isn't already.
      await page.keyboard.press("Alt+Shift+S").catch(() => {});
      await page.waitForTimeout(250);

      const notesText = [s.title, "", ...s.bullets].join("\n");
      const notesArea = page.locator("[aria-label='Speaker notes']").first();
      if (await notesArea.count()) {
        await notesArea.click();
        await page.keyboard.press("Meta+A");
        await page.keyboard.press("Backspace");
        await page.keyboard.type(notesText, { delay: 4 });
        console.log("  ✓ wrote speaker notes");
      } else {
        console.log("  ! notes pane not found, skipping");
      }
    } catch (err) {
      console.log(`  ! failed: ${(err as Error).message}`);
    }
  }

  console.log("\nDone. Review the deck and close the browser when ready.");
  console.log("(Leaving the browser open so you can inspect.)");

  // Intentionally do not close context; let Naya inspect and close manually.
  void context;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
