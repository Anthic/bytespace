import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

// Capture Categories Showcase
const catSection = page.locator('section[aria-label="Diverse Learning Paths"]');
await catSection.scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
await catSection.screenshot({ path: ".workflow/shots/build/categories-section.png" });
console.log("Saved categories-section.png");

// Capture Features Highlight
const featSection = page.locator('section[aria-label="Features & Capabilities"]');
await featSection.scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
await featSection.screenshot({ path: ".workflow/shots/build/features-section.png" });
console.log("Saved features-section.png");

// Capture Fullpage
await page.screenshot({ path: ".workflow/shots/build/fullpage-all.png", fullPage: true });
console.log("Saved fullpage-all.png");

await browser.close();
