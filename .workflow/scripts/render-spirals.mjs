import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");

async function render() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 800, height: 600 },
    deviceScaleFactor: 2,
  });

  const spiral1Path = path.join(root, "public/images/features/test-spiral.png").replace(/\\/g, "/");
  const spiral2Path = path.join(root, "public/images/features/test-spiral2.png").replace(/\\/g, "/");

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 40px;
            background: transparent;
          }
          .spiral-box {
            position: relative;
            width: 430px;
            height: 430px;
            display: inline-block;
            isolation: isolate;
          }
          .spiral-img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .spiral-tint {
            position: absolute;
            inset: 0;
            background: #d4fb20;
            mix-blend-mode: hard-light;
            -webkit-mask-size: contain;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: center;
            mask-size: contain;
            mask-repeat: no-repeat;
            mask-position: center;
          }
        </style>
      </head>
      <body>
        <div id="spiral1" class="spiral-box">
          <img class="spiral-img" src="file:///${spiral1Path}" />
          <div class="spiral-tint" style="-webkit-mask-image: url('file:///${spiral1Path}'); mask-image: url('file:///${spiral1Path}');"></div>
        </div>

        <div id="spiral2" class="spiral-box">
          <img class="spiral-img" src="file:///${spiral2Path}" />
          <div class="spiral-tint" style="-webkit-mask-image: url('file:///${spiral2Path}'); mask-image: url('file:///${spiral2Path}');"></div>
        </div>
      </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForTimeout(500);

  const el1 = await page.$("#spiral1");
  await el1.screenshot({
    path: path.join(root, "public/images/features/spiral-growth-yellow.png"),
    omitBackground: true,
  });

  const el2 = await page.$("#spiral2");
  await el2.screenshot({
    path: path.join(root, "public/images/features/spiral-manage-yellow.png"),
    omitBackground: true,
  });

  await browser.close();
  console.log("Rendered yellow spirals successfully!");
}

render().catch(console.error);
