import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");

function hardLightBlend(baseVal, blendVal) {
  const b = baseVal / 255;
  const s = blendVal / 255;
  let out;
  if (s <= 0.5) {
    out = 2 * b * s;
  } else {
    out = 1 - 2 * (1 - b) * (1 - s);
  }
  return Math.min(255, Math.max(0, Math.round(out * 255)));
}

function processSpiral(inputName, outputName) {
  const inputPath = path.join(root, "public/images/features", inputName);
  const outputPath = path.join(root, "public/images/features", outputName);

  const data = fs.readFileSync(inputPath);
  const png = PNG.sync.read(data);

  // Blend color: #d4fb20 -> R=212, G=251, B=32
  const blendR = 212;
  const blendG = 251;
  const blendB = 32;

  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const alpha = png.data[idx + 3];
      if (alpha === 0) continue;

      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];

      png.data[idx] = hardLightBlend(r, blendR);
      png.data[idx + 1] = hardLightBlend(g, blendG);
      png.data[idx + 2] = hardLightBlend(b, blendB);
      // Alpha remains unchanged
    }
  }

  const buffer = PNG.sync.write(png);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Saved ${outputName}`);
}

processSpiral("test-spiral.png", "spiral-growth-yellow.png");
processSpiral("test-spiral2.png", "spiral-manage-yellow.png");
