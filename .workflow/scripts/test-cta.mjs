import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");

async function testCTA() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 900 },
    deviceScaleFactor: 2,
  });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const section = await page.$("section[data-node-id='34:1161']");
  if (!section) {
    console.error("CTA section not found!");
    await browser.close();
    process.exit(1);
  }

  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  const box = await section.boundingBox();
  console.log("Section bounding box:", box);

  const screenshotPath = path.join(root, ".workflow/cta-screenshot.png");
  await section.screenshot({ path: screenshotPath });
  console.log("Saved CTA screenshot to", screenshotPath);

  await browser.close();
}

testCTA().catch(console.error);
