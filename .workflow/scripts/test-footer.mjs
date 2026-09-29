import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");

async function testFooter() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const footer = await page.$("footer[data-node-id='34:1256']");
  if (!footer) {
    console.error("Footer not found!");
    await browser.close();
    process.exit(1);
  }

  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  const box = await footer.boundingBox();
  console.log("Footer bounding box:", box);

  const screenshotPath = path.join(root, ".workflow/footer-screenshot.png");
  await footer.screenshot({ path: screenshotPath });
  console.log("Saved Footer screenshot to", screenshotPath);

  await browser.close();
}

testFooter().catch(console.error);
