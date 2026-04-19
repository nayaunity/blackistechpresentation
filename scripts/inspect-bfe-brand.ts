// Extracts brand palette from theblackfemaleengineer.com by loading the site
// in Playwright and collecting the actually-rendered CSS. Prints the palette
// so we can tune the workshop theme.

import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  await page.goto("https://theblackfemaleengineer.com/", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  const script = `
    (() => {
      const colorFreq = new Map();
      const fontFreq = new Map();
      const all = document.querySelectorAll("*");
      for (let i = 0; i < all.length; i++) {
        const el = all[i];
        const s = window.getComputedStyle(el);
        if (s.color && s.color !== "rgba(0, 0, 0, 0)") {
          colorFreq.set(s.color, (colorFreq.get(s.color) || 0) + 1);
        }
        if (s.backgroundColor && s.backgroundColor !== "rgba(0, 0, 0, 0)" && s.backgroundColor !== "transparent") {
          colorFreq.set(s.backgroundColor, (colorFreq.get(s.backgroundColor) || 0) + 1);
        }
        if (s.borderTopColor && s.borderTopColor !== "rgba(0, 0, 0, 0)") {
          colorFreq.set(s.borderTopColor, (colorFreq.get(s.borderTopColor) || 0) + 1);
        }
        if (s.fontFamily) {
          fontFreq.set(s.fontFamily, (fontFreq.get(s.fontFamily) || 0) + 1);
        }
      }
      const sortMap = (m) => Array.from(m.entries()).sort((a,b) => b[1]-a[1]).slice(0, 25);
      const buttons = Array.from(document.querySelectorAll("a,button")).slice(0, 30);
      const ctaButtons = [];
      for (const el of buttons) {
        const s = window.getComputedStyle(el);
        const text = (el.innerText || "").trim().slice(0, 40);
        if (text.length > 0 && s.backgroundColor !== "rgba(0, 0, 0, 0)") {
          ctaButtons.push({ text, bg: s.backgroundColor, color: s.color });
        }
      }
      return { colors: sortMap(colorFreq), fonts: sortMap(fontFreq), ctaButtons: ctaButtons.slice(0, 10) };
    })()
  `;
  const data = (await page.evaluate(script)) as {
    colors: Array<[string, number]>;
    fonts: Array<[string, number]>;
    ctaButtons: Array<{ text: string; bg: string; color: string }>;
  };

  console.log("\n== Top colors (count, value) ==");
  data.colors.forEach(([c, n]) => console.log(`  ${n.toString().padStart(5)}  ${c}`));

  console.log("\n== Top fonts ==");
  data.fonts.forEach(([f, n]) => console.log(`  ${n.toString().padStart(5)}  ${f}`));

  console.log("\n== CTAs ==");
  data.ctaButtons.forEach((b) =>
    console.log(`  "${b.text}"  bg=${b.bg}  fg=${b.color}`),
  );

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
