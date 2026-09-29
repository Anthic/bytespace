# Animation rules (GSAP + Lenis) — a MAIN scoring area
Packages: `gsap`, `@gsap/react`, `lenis`. (GSAP core and ScrollTrigger/SplitText are free to use via the `gsap` package.)

## Smooth scroll
- One `SmoothScroll` client component in `src/components/providers/SmoothScroll.tsx`, mounted once in `app/layout.tsx`.
- Wire Lenis to GSAP's ticker so ScrollTrigger stays in sync:

```tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return <>{children}</>;
}
```

- Anchor links (`#pricing`) must scroll via `lenis.scrollTo`, not native jump.

## Writing animations
- Use `useGSAP` from `@gsap/react` with `{ scope: containerRef }` — it auto-cleans up. Never use raw `useEffect` for tweens.
- Register plugins once in `src/lib/gsap.ts` and import from there.
- Animate `transform` and `opacity` only (x, y, scale, rotate, autoAlpha). Avoid animating width/height/top/left.
- Hide initial state with `gsap.set` / `from` inside `useGSAP` and use `autoAlpha` to avoid flash of unstyled content.
- Use `gsap.matchMedia()` so desktop-only effects (pin, parallax) are disabled or simplified on phone.
- Respect `prefers-reduced-motion`: reduce to simple fades.
- Reusable hooks/components: `useReveal`, `useStagger`, `<SplitTextReveal>`, `<Parallax>` in `src/hooks` and `src/components/animation`.

## Motion language (keep consistent)
- Ease: `power3.out` for entrances, `power2.inOut` for transitions.
- Reveal: y 40 -> 0, opacity 0 -> 1, duration 0.8–1.0.
- Stagger: 0.08–0.12s.
- ScrollTrigger default: `start: "top 80%"`, `toggleActions: "play none none none"`, `once: true` unless Figma implies scrub.
- Hero: intro timeline on load (nav -> headline lines -> subtext -> CTA -> visual).
- "Animation lines": draw SVG paths with `strokeDashoffset` tied to scroll with `scrub: true` where the design has lines/connectors/underlines.
- Hover micro-interactions on buttons/cards (scale/translate <= 4%, 0.3s).

## Must never
- No jank: 60fps, no layout thrash, no `will-change` everywhere.
- No animation that hides content permanently if JS fails.
- Call `ScrollTrigger.refresh()` after images/fonts load if positions are off.