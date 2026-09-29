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
| Categories Showcase | `34:684` (`34:725`) | Completed | "Explore Diverse Learning Paths at Bytespace" heading, paragraph, and 6 category cards (Design, Development, IT & Software, Business, Marketing, Photography) with electric lime circle icon badges, Satoshi medium typography, and hover lift effects. |
| Features Highlight | `34:1159` (`34:1157`, `34:1158`) | Completed | Dual feature section: 1) "Your Path to Professional Growth Starts Here!" + 3 stats (12K Students, 70+ Courses, 16 Creators) + floating student composition with mini course card (z-10), electric yellow 3D spiral (z-15, #D4FB20), student portrait (z-20), and 55% progress badge (z-30). 2) "Create & Manage Courses Easily." + 4 bullet points with blue checkmark icons + instructor composition with electric yellow 3D spiral behind instructor (z-10, #D4FB20), instructor portrait (z-20), Total Revenue ($120.29, z-25), Year to Date ($1,200.38, z-25), and Happy Students badge (z-30). Background includes exact Figma gradient glows (Group 5 & Ellipse 12) with zero overflow across all 6 viewports. |
| Creator CTA | `34:1161` | Completed | "Unlock Your Potential as a Creator with ByteSpace": Exactly 488px height at 1440px desktop, `#003be2` Persian Blue bg with authentic Group 4 SVG grid background, centered content (Poppins SemiBold 44px heading, Satoshi Regular 18px body, Electric Lime `#d4fb20` "Join as Creator" button with hover micro-interaction), and 7 authentic floating 3D ornaments (yellow pyramid, white cone, yellow torus, white cylinder, silver spiral, top-left yellow spiral, bottom-right yellow spiral) with GSAP float & entrance animations. Tested and zero overflow across all 6 viewports (390px, 640px, 1024px, 1280px, 1536px, 1920px). |
| Testimonials | `34:1175` | Completed | "Discover What Our Community Is Saying": Background `#fafafa` with 3 authentic vector radial gradient blurs (Ellipse 11 top-right lime glow, Ellipse 12 center-top yellow blur, Ellipse 8 bottom-left blue glow), 2-column header (Poppins SemiBold 44px title + Satoshi Regular 18px body), 3 testimonial cards (Sarah M., James L., Alex B.) with 80px avatars, Poppins SemiBold 20px names, Persian Blue `#003be2` roles, rounded-24px, p-24px, subtle shadows and hover transitions, GSAP scrollTrigger entrance. Tested zero overflow across all 6 viewports. |
| Footer | `34:1256` | Completed | Footer: White background (`#ffffff`), 1px divider border top (`#ced0d3`), brand logo & newsletter subscription form with rounded-100px input and Electric Lime `#d4fb20` Search CTA, 3 link columns (Browse, Explore, Platform), bottom copyright and legal links (Privacy Policy, Terms of Service, Cookies Settings). Structured as reusable component in `src/components/layout/Footer.tsx`. Tested zero overflow across all 6 viewports. |

