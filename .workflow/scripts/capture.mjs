// Usage: npm run dev (alada terminal-e), tarpor: npm run shots
// Onno page-er jonno: URL=http://localhost:3000/login npm run shots
import { chromium } from "playwright";
import fs from "node:fs";

const url = process.env.URL || "http://localhost:3000";
const widths = [390, 640, 1024, 1280, 1536, 1920];
const out = ".workflow/shots/build";
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle" });
  // page scroll kore ScrollTrigger animation fire koranor jonno
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  );
  await page.screenshot({ path: `${out}/${width}.png`, fullPage: true });
  console.log(`${width}px  overflow: ${overflow}`);
  await page.close();
}
await browser.close();