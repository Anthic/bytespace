# Responsive rules (sm, lg, xl, xxl)
Mobile-first Tailwind. Target widths for testing:

| Name | Tailwind prefix | Min width | Test width |
|------|-----------------|-----------|------------|
| base (phone) | none | 0 | 390 |
| sm | `sm:` | 640 | 640 |
| lg | `lg:` | 1024 | 1024 |
| xl | `xl:` | 1280 | 1280 |
| xxl | `2xl:` | 1536 | 1536 and 1920 |

- Confirm the real Figma frame widths and adjust the table (edit `@theme` breakpoints in `globals.css` if Figma differs). Record the final table in `.workflow/notes.md`.
- Write base styles first, then add `sm:`, `lg:`, `xl:`, `2xl:` overrides only where the design changes.
- Use `clamp()` for fluid type/spacing ONLY when Figma frames imply fluid scaling; otherwise use exact per-breakpoint values.
- Beyond 2xl: cap content with `max-w-[Npx] mx-auto` matching the Figma container. Backgrounds may stretch.
- Navbar: desktop nav + mobile menu (hamburger) with animated open/close.
- Touch targets >= 44px on phone/sm.
- Use `min-h-svh` not `100vh` for full-height sections (mobile browser bars).