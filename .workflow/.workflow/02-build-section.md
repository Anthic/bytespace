# Build section
1. Create `src/components/sections/<Name>.tsx` and put copy in `src/data/<name>.ts`.
2. Reuse `ui/` components. If a needed piece repeats, create it in `ui/` first.
3. Build mobile/base layout to match the mobile frame.
4. Add `sm:` -> `lg:` -> `xl:` -> `2xl:` overrides one by one, checking each against its Figma frame.
5. Add animation with `useGSAP` per `.agent/05-animation-gsap.md`.
6. Run `npm run lint`. Fix all warnings.