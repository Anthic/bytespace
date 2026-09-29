# Master workflow — follow for EVERY section
Order: Setup -> Navbar/Footer shell -> Hero -> remaining sections top-to-bottom -> Login/Signup (bonus) -> Final QA -> Deploy.

For each section run this loop. Do not skip steps.

1. **EXTRACT** (`02-design-extraction.md`) — pull node, screenshot, tokens, assets, breakpoints from Figma MCP.
2. **PLAN** — write a 5-line plan in `.workflow/notes.md`: components needed, reusable parts, animation idea.
3. **BUILD** (`03-build-section.md`) — base -> sm -> lg -> xl -> xxl, then animation.
4. **VERIFY VISUAL** (`04-visual-verification.md`) — compare against Figma screenshot.
5. **VERIFY RESPONSIVE** (`05-responsive-test.md`) — run capture script at all widths.
6. **VERIFY ANIMATION** (`06-animation-test.md`).
7. **FIX** any mismatch, repeat 4–6 until `templates/section-checklist.md` is fully ticked.
8. **COMMIT** on the feature branch (`07-git-pr-deploy.md`). Then next section.

Stop and ask the user if: Figma MCP fails, a design detail is ambiguous, or an asset can't be exported.
Report format when finishing a section: what was built, checklist result, any deviations from Figma with reasons.
