// Shared helpers for the Playwright scripts that talk to Google Slides.
// Uses a persistent Chromium profile so Naya logs in once; subsequent runs
// reuse the cookies.

import path from "node:path";
import { chromium, type BrowserContext, type Page } from "playwright";

export const DECK_URL =
  "https://docs.google.com/presentation/d/1KsAL2UuwNbq_Y2jRkAFC5mdpaSn2SL4IRHlKqdnyZM4/edit";

const profileDir = path.resolve(process.cwd(), ".playwright-profile");

export async function openDeckContext(): Promise<{
  context: BrowserContext;
  page: Page;
}> {
  const context = await chromium.launchPersistentContext(profileDir, {
    headless: false,
    viewport: { width: 1440, height: 900 },
    args: ["--disable-blink-features=AutomationControlled"],
  });

  const page = context.pages()[0] ?? (await context.newPage());
  await page.goto(DECK_URL, { waitUntil: "domcontentloaded" });

  if (page.url().includes("accounts.google.com")) {
    console.log("\n→ Please sign in to Google in the opened window.");
    console.log("  I'll wait up to 5 minutes for you to finish.\n");
    await page.waitForURL(/presentation\/d\//, { timeout: 5 * 60 * 1000 });
  }

  await page.waitForLoadState("networkidle").catch(() => {});

  return { context, page };
}

export async function closeContext(context: BrowserContext) {
  await context.close();
}
