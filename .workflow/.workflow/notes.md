# Working notes (agent updates this)

## Node Information
- Section: Banner / Hero Frame
- Node ID: `1:1695` (`Hero_Frame`)
- Figma Dimensions: 1440px x 1024px
- Figma File: `26TBgRjmpuxudcErJsHUfy` (ByteSpace-New-Check-website)

## 5-Line Plan
1. **Shell & Layout**: Construct clean `Navbar` with ByteSpace logo, nav links (Home, Courses, Creators), auth actions (Sign In, Join Us, cart bag) and mobile hamburger drawer.
2. **Hero Structure**: Build responsive Hero container with dynamic heading, subtitle, search input with lime Search CTA button.
3. **Hero Visual & Badges**: Position central portrait with lime circle backdrop and floating 3D geometric shapes, plus 3 floating glassmorphism info cards ("UI/UX Design", "55% Learning Progress", "Happy Students 4.5").
4. **GSAP Intro Timeline**: Orchestrate load entrance with `useGSAP` (staggered reveal: Nav -> Headline lines -> Subtext -> Search bar -> Character -> Badges pop/float).
5. **Responsiveness & Parallax**: Implement mobile-first scaling across 390px, 640px, 1024px, 1280px, 1536px, 1920px with desktop mouse/scroll parallax and micro-interactions.

## Breakpoint table (confirm from Figma)
| name | Tailwind prefix | Min width | Test width | Figma Frame / Behavior |
|------|-----------------|-----------|------------|------------------------|
| base | none | 0 | 390 | Single column stacked, mobile navigation, compact badges |
| sm | `sm:` | 640 | 640 | Scaled hero text, flexible search bar |
| lg | `lg:` | 1024 | 1024 | Expanded layout, desktop navigation active |
| xl | `xl:` | 1280 | 1280 | Full composition with floating 3D elements |
| 2xl | `2xl:` | 1440/1536 | 1536 & 1920 | 1440px design frame centered with `max-w-[1440px] mx-auto` |

## Section log
| section | node ids | status | deviations |
|---------|----------|--------|-----------|
| Hero / Banner | `1:1695` | Completed | Extrapolated mobile responsive layout from 1440px frame |
| Register / Signup | `47:351` | Completed | Registration page: Persian Blue `#003be2` bg with 100% full-viewport seamless grid lines, ByteSpace logo header with Back to Home link. Left side: "Sign up and come in" heading & description, stacked course cards (Build Digital Asset + the Power of Big Data with lessons, duration, comments, avatars, pricing, rating), Happy Students badge with avatars, and 3D floating ornaments (yellow torus, yellow pyramid, silver spiral). Right side: Welcome to ByteSpace card with Full Name, Email, Password, Continue button in Electric Lime `#d4fb20`, and Login link. Zero overflow across 390px, 640px, 1024px, 1280px, 1440px, 1920px. |
