# Visual verification (Figma vs build)
1. Start dev server: `npm run dev`.
2. Capture: `npm run shots`. Output: `.workflow/shots/build/<width>.png`.
3. Fetch the Figma reference again via MCP for the same frame and view both images side by side.
4. Compare precisely:
   - [ ] Section height and total layout match
   - [ ] Every text: font, size, weight, line-height, color, line breaks
   - [ ] Spacing between all elements (measure, don't eyeball)
   - [ ] Radii, borders, shadows, gradients
   - [ ] Images/icons: size, crop, position
   - [ ] Alignment of edges and baselines
5. Optional numeric diff with `pixelmatch`; investigate any diff cluster larger than a few px.
6. Any mismatch -> fix -> re-capture. Repeat until identical within ±1px.