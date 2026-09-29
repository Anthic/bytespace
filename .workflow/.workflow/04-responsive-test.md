# Responsive test
Run the capture script; it screenshots at 390, 640, 1024, 1280, 1536, 1920 and checks horizontal overflow.
For each width:
- [ ] No horizontal scroll (script reports `overflow: false`)
- [ ] Layout matches the corresponding Figma frame (or nearest frame if none)
- [ ] Text does not clip/overlap; buttons not squashed
- [ ] Images keep aspect ratio; no layout shift
- [ ] Navbar switches correctly (desktop nav <-> mobile menu)
- [ ] Touch targets >= 44px on phone/sm
Also test in-between widths (768, 900, 1100, 1400) so nothing breaks between breakpoints.