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
| Hero / Banner | `1:1695` | Completed | 1. Extrapolated responsive mobile layout for `< xl` as Figma provided the 1440px desktop frame. 2. Filter drop-shadow used on character PNG to preserve silhouette transparency. 3. Hero person lifted 2% higher per user instruction. |
| Logo Partner | `1:1794` | Completed | Added responsive wrap for small screens with exact 72px gap on desktop, `#f5f5f6` bg, and GSAP scroll entrance. |
| Popular Courses | `12:101` to `33:683` | Completed | Complete section from "Discover Your Passion, Build Your Skills" to 3 rows of interactive category filter pills, through to the 3x2 course cards grid (6 cards). Fully responsive with 1 col (mobile), 2 cols (tablet), 3 cols (desktop). |
