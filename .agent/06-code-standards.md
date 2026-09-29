# Code standards

## Structure
```
src/
├─ app/
│  ├─ layout.tsx, page.tsx (landing), globals.css
│  ├─ login/page.tsx        (bonus)
│  └─ signup/page.tsx       (bonus)
├─ components/
│  ├─ ui/            Button, Container, Heading, Badge, Input, Card ...
│  ├─ layout/        Navbar, Footer, MobileMenu
│  ├─ sections/      Hero, Features, ... (one file per Figma section)
│  ├─ animation/     SplitTextReveal, Parallax, LineDraw
│  └─ providers/     SmoothScroll
├─ hooks/            useReveal, useMediaQuery ...
├─ lib/              gsap.ts (plugin registration), utils.ts (cn)
├─ data/             content arrays (nav links, features, pricing...)
└─ types/
public/ (icons, images, logos, fonts)
```

## Rules
- TypeScript strict. No `any`.
- Server components by default; add `"use client"` only where GSAP/state is needed.
- One component = one responsibility. Anything used twice becomes a reusable component in `ui/`.
- Content lives in `src/data/*.ts`; sections map over data.
- Semantic HTML (`header, nav, main, section, footer`), one `h1`, proper heading order, `alt` on images, accessible buttons/links, visible focus.
- Class merging via `cn()` (clsx + tailwind-merge).
- No inline styles unless dynamic. No dead code, no console.log, no unused files.
- Run before every commit: `npm run lint && npm run build`.