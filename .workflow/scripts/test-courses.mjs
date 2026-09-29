import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
const coursesSection = page.locator('section[aria-label="Popular Courses"]');
await coursesSection.scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await coursesSection.screenshot({ path: ".workflow/shots/build/courses-section.png" });
console.log("Saved courses-section.png");
const ruleInfo = await page.evaluate(() => {
  let matchingRules = [];
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.cssText && rule.cssText.includes('grid-cols')) {
          matchingRules.push(rule.cssText);
        }
      }
    } catch {}
  }
  return { matchingRules, innerWidth: window.innerWidth };
});
console.log("Grid rules:", JSON.stringify(ruleInfo.matchingRules, null, 2));
await page.screenshot({ path: ".workflow/shots/build/fullpage-courses.png", fullPage: true });
console.log("Saved fullpage-courses.png");
await browser.close();
