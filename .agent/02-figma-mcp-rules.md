# Figma MCP rules
You have the Figma MCP. USE IT for every section. Do not guess visuals from memory.

For each section/frame:
1. Get the node: use the MCP design-context / node tools with the frame's node-id.
2. Get a screenshot of that frame (reference image) and keep it for comparison.
3. Get variables/styles (colors, typography, spacing, radii, shadows) and put them in `.workflow/templates/design-tokens.md`, then in `globals.css` `@theme`.
4. Export assets (icons, logos, images) at proper size. SVG for icons/logos, WebP/PNG for photos. Save under `public/` (`/icons`, `/images`, `/logos`).
5. Read auto-layout data: direction, gap, padding, alignment, sizing (fixed/hug/fill), constraints. Translate to flex/grid faithfully.
6. Check EVERY breakpoint frame that exists in Figma (mobile/tablet/desktop). If a frame is missing for a breakpoint, extrapolate from the nearest one and note it in `.workflow/notes.md`.

Rules:
- Never invent colors, fonts, sizes, or copy. Values come from Figma.
- Text copy must match Figma exactly (including capitalization and punctuation).
- If MCP output contains generated React/Tailwind code, treat it as a REFERENCE only. Rewrite into our component structure; do not paste blindly.
- If MCP is unavailable or a node fails: stop and tell the user. Do not fake it.