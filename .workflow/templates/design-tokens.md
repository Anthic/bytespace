# Design tokens (fill from Figma MCP variables/styles)

## Colors
| token | value | usage |
|-------|-------|-------|
| `--color-primary-blue` | `#003be2` | Hero background (Persian Blue/800) |
| `--color-electric-lime` | `#d4fb20` | CTA button, accent graphics, progress bar fill |
| `--color-dark` | `#242528` | Primary text on white & lime badges/buttons |
| `--color-muted-gray` | `#82868e` | Secondary text, input placeholder, ratings count |
| `--color-subtext-gray` | `#e5e6e8` | Hero subtitle text |
| `--color-light-gray` | `#f5f5f6` | Nav links, logo text |
| `--color-white` | `#ffffff` | Hero heading, card backgrounds, search input |
| `--color-progress-track` | `#f6f6f6` | Learning progress bar track |

## Typography
| style | font | weight | size (base/sm/lg/xl/2xl) | line-height | tracking |
|-------|------|--------|--------------------------|-------------|----------|
| Heading L | Poppins | 600 (SemiBold) | 36px / 48px / 60px / 72px / 72px | 1.2 | -0.72px (-1px) |
| Heading Stat | Poppins | 600 (SemiBold) | 32px / 40px / 48px / 48px / 48px | 1.2 | -0.48px |
| Logo | Clash Display / Poppins | 700 (Bold) | 20px / 24px / 24px / 24px / 24px | normal | normal |
| Body L (Subtext) | Satoshi / Inter | 400 (Regular) | 15px / 16px / 18px / 18px / 18px | 1.6 | 0 |
| Label L (Search) | Satoshi / Inter | 500 (Medium) | 16px / 18px / 18px / 18px / 18px | 1.2 | 0 |
| Label M (Nav) | Satoshi / Inter | 500 / 400 | 14px / 16px / 16px / 16px / 16px | 1.2 / 24px | 0 |
| Card Title | Satoshi / Inter | 500 (Medium) | 14px / 16px / 16px / 16px / 16px | 1.2 | 0 |
| Card Subtext | Satoshi / Inter | 400 (Regular) | 11px / 12px / 12px / 12px / 12px | 1.6 | 0 |

## Spacing / container
| breakpoint | container max | side padding |
|------------|---------------|--------------|
| base (390) | 100% | 16px |
| sm (640) | 640px | 24px |
| lg (1024) | 1024px | 48px |
| xl (1280) | 1280px | 80px |
| 2xl (1440/1536) | 1440px | 120px |

## Radii / shadows
- `rounded-card`: 16px (`rounded-[16px]`)
- `rounded-pill`: 24px (`rounded-[24px]`)
- `rounded-progress`: 24px (`rounded-[24px]`)
- `shadow-hero-image`:
  `51px 73px 72px 0px rgba(0,0,0,0.13), 37px 53px 56px 0px rgba(0,0,0,0.11), 26px 37px 36px 0px rgba(0,0,0,0.10), 17px 24px 24px 0px rgba(0,0,0,0.09), 10px 15px 16px 0px rgba(0,0,0,0.08), 5px 8px 10px 0px rgba(0,0,0,0.07), 2px 3px 6px 0px rgba(0,0,0,0.06), 1px 1px 3px 0px rgba(0,0,0,0.04)`
- `shadow-badge`: `0px 10px 30px rgba(0, 0, 0, 0.08)`