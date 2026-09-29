# Section checklist — Hero / Banner Section
Section: Hero / Banner (`1:1695`)
- [x] Figma node(s) + screenshot fetched via MCP (Node `1:1695`, dimensions 1440x1024)
- [x] Tokens only, no raw hex (defined in `globals.css` `@theme`)
- [x] Base (390) / sm (640) / lg (1024) / xl (1280) / xxl (1536, 1920) built
- [x] Visual diff within ±1px at Figma frame width
- [x] No horizontal overflow (`npm run shots` reported `overflow: false` across all 6 viewports)
- [x] GSAP animation added, tested, cleaned up with `useGSAP`, Lenis ticker sync, and floating micro-interactions
- [x] Reduced-motion handled (`prefers-reduced-motion` check)
- [x] Semantic HTML, alt text, accessible search form and buttons
- [x] lint + build pass (`npm run lint` and `npm run build` both exit code 0)
- [ ] Git commit pending user approval (per prompt instruction: "Do NOT do any git work... Then WAIT for my approval before the next section.")