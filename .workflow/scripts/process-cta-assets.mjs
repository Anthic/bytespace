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

function processAsset(inputPath, outputPath, blendR, blendG, blendB) {
  const data = fs.readFileSync(inputPath);
  const png = PNG.sync.read(data);

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
    }
  }

  const buffer = PNG.sync.write(png);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Saved ${path.basename(outputPath)}`);
}

const ctaDir = path.join(root, "public/images/cta");
const featuresDir = path.join(root, "public/images/features");

// Yellow: #d4fb20 -> 212, 251, 32
// White: #f5f5f6 -> 245, 245, 246

processAsset(
  path.join(ctaDir, "raw-cone1.png"),
  path.join(ctaDir, "cta-pyramid-yellow.png"),
  212, 251, 32
);

processAsset(
  path.join(ctaDir, "raw-cone2.png"),
  path.join(ctaDir, "cta-cone-white.png"),
  245, 245, 246
);

processAsset(
  path.join(ctaDir, "raw-cone3.png"),
  path.join(ctaDir, "cta-torus-yellow.png"),
  212, 251, 32
);

processAsset(
  path.join(ctaDir, "raw-cone4.png"),
  path.join(ctaDir, "cta-cylinder-white.png"),
  245, 245, 246
);

processAsset(
  path.join(featuresDir, "spiral-manage.png"),
  path.join(ctaDir, "cta-spiral-silver.png"),
  245, 245, 246
);
