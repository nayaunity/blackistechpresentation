// Opens the workshop's Google Slides deck and prints a best-effort extract of
// the deck's theme: slide count, text samples, computed colors and fonts. Use
// the output to tune `src/lib/workshop/theme.ts` when the deck aesthetic
// differs from the Flickering Hearth defaults.
//
// Run:   npm run workshop:inspect
//
// Notes:
// - Google Slides renders most artwork to <canvas>, so DOM scraping for exact
//   colors is approximate. For authoritative theme extraction, export a slide
//   as PNG from the editor and sample it visually.

import { closeContext, openDeckContext } from "./_gslides-shared";

async function main() {
  const { context, page } = await openDeckContext();

  const title = await page.title();
  console.log("title:", title);

  const slideCount = await page
    .locator("[role='listitem'][aria-label^='Slide']")
    .count()
    .catch(() => 0);
  console.log("slide count (approx):", slideCount);

  const fonts = await page.evaluate(() => {
    const seen = new Set<string>();
    document.querySelectorAll<HTMLElement>("*").forEach((el) => {
      const f = window.getComputedStyle(el).fontFamily;
      if (f) seen.add(f);
    });
    return Array.from(seen).slice(0, 20);
  });
  console.log("sample font families:");
  fonts.forEach((f) => console.log("  -", f));

  const palette = await page.evaluate(() => {
    const seen = new Set<string>();
    const add = (c: string) => {
      if (!c || c === "rgba(0, 0, 0, 0)" || c === "transparent") return;
      seen.add(c);
    };
    document.querySelectorAll<HTMLElement>("*").forEach((el) => {
      const s = window.getComputedStyle(el);
      add(s.color);
      add(s.backgroundColor);
    });
    return Array.from(seen).slice(0, 30);
  });
  console.log("sample colors:");
  palette.forEach((c) => console.log("  -", c));

  const firstSlideText = await page
    .locator("[role='listitem'][aria-label^='Slide']")
    .first()
    .innerText()
    .catch(() => "");
  console.log("\nfirst slide preview:\n", firstSlideText.slice(0, 400));

  console.log(
    "\nDone. Update src/lib/workshop/theme.ts if the values above differ from the defaults.",
  );

  await closeContext(context);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
