import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
const partnerSection = page.locator('section[aria-label="Partner Logos"]');
await partnerSection.scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await partnerSection.screenshot({ path: ".workflow/shots/build/partners-test.png" });
console.log("Saved partners-test.png");
await page.screenshot({ path: ".workflow/shots/build/fullpage-test.png", fullPage: true });
console.log("Saved fullpage-test.png");
await browser.close();
