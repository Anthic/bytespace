import { chromium } from "playwright";

const viewports = [
  { width: 390, height: 844 },
  { width: 640, height: 900 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

async function testAllViewports() {
  const browser = await chromium.launch();

  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: vp,
      deviceScaleFactor: 1,
    });

    await page.goto("http://localhost:3000/signup", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    console.log(`${vp.width}px  overflow: ${hasOverflow}`);
    await page.close();
  }

  await browser.close();
}

testAllViewports().catch(console.error);
