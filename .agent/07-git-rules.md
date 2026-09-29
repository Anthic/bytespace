# Git rules
- NEVER commit to `main`. Work on a feature branch.
- Branch names: `feat/setup`, `feat/hero`, `feat/navbar`, `feat/<section>`, `feat/auth-pages`, `fix/<thing>`.
- Conventional commits: `feat(hero): add intro timeline`, `fix(navbar): mobile menu overflow`, `chore: setup gsap and lenis`.
- Small commits, one logical change each.
- Open a PR into `main` with: summary, screenshots (Figma vs build at sm/lg/xl/xxl), checklist, Vercel preview link.
- Do not commit: `.env*`, `node_modules`, `.next`, `.workflow/shots/*` images, personal data.