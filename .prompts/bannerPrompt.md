Read AGENTS.md and every file in .agent/, then follow .workflow/00-master-workflow.md.

Project setup is already done. Do NOT do any git work (no branch, commit, push) and do NOT redo setup. Only build the design.

TASK: Build the BANNER (hero) section that is currently SELECTED in Figma, pixel-perfect.

1. Use the Figma MCP to read my current selection: design context, screenshot, variables/styles, and asset exports. If the selection is empty or the tool fails, stop and tell me. Do not guess the design.
2. Save the node id, tokens (colors, fonts, type scale, spacing, radii, shadows) and a 5-line plan in .workflow/notes.md and .workflow/templates/design-tokens.md. Add missing tokens to globals.css.
3. Create src/components/sections/Hero.tsx with copy in src/data/hero.ts. Reuse or create ui components for anything repeated. Export images/icons from Figma into public/ and use next/image. Use the exact Figma fonts.
4. Build mobile first, then sm (640), lg (1024), xl (1280), 2xl (1536). Match Figma within ±1px: font size, weight, line-height, letter-spacing, spacing, radius, colors, shadows, alignment. Text must match Figma exactly. Tokens only, no raw hex.
5. Animation (main focus): GSAP with useGSAP and Lenis smooth scroll.
   - Page-load intro timeline (navbar, headline, subtext, CTA, visual).
   - Animate any lines/connectors/underlines with SVG stroke draw.
   - Subtle parallax on the hero visual (desktop only, gsap.matchMedia), hover micro-interactions on buttons.
   - Only transform and opacity, respect prefers-reduced-motion, no flash of unstyled content.
6. Verify (do not skip): run npm run dev and npm run shots, compare the screenshots at 390, 640, 1024, 1280, 1536, 1920 against the Figma screenshot, following .workflow/04, 05 and 06. Fix every mismatch and re-capture until it matches. No horizontal overflow at any width.
7. Run npm run lint && npm run build and fix all errors.
8. Tick .workflow/templates/section-checklist.md. Report what you built, every deviation from Figma with the reason, and which frames/breakpoints you used. Then WAIT for my approval before the next section.