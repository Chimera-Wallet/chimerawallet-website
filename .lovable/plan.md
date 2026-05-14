## Site-wide DRY refactor

Goal: Reduce repetition without changing visuals. The codebase repeats a small set of patterns 15-25 times each.

### Repeated patterns identified

1. **Card surface** — `rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6` appears in `token.tsx`, `referrals.tsx`, `about.tsx`, `card.tsx`, `news.tsx`, `press-kit.tsx` (≥15 places).
2. **Glow card** — same surface + `bg #100E1C` + `box-shadow 0 0 40px rgba(31,59,219,.5)` (≥5 places, e.g. "OPEN CHIMERA" link in `app.tsx`/`card.tsx`/`index.tsx`).
3. **Eyebrow label** — `text-[10px]/text-xs font-bold tracking-widest text-[var(--brand-green)]` (≥10 places).
4. **Brand button** — `rounded-full px-6 py-3 text-xs font-bold tracking-widest text-[var(--brand-navy)] bg-[var(--brand-green)]` (≥6 places).
5. **Ghost button** — `rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest hover:bg-white/10` (≥4 places).
6. **Section wrapper** — `mx-auto max-w-7xl px-6 py-N` everywhere.
7. **Hero block** — eyebrow + `hero-title` + h2 subtitle + small muted description, on every page.

### Plan

**1. Extend `src/styles.css`** with utility classes (CSS-only, no JSX changes needed for adopters):
- `.surface-card` — the navy-card surface (border + bg + radius).
- `.surface-glow` — the #100E1C glow surface.
- `.eyebrow` — the green tracked label.
- `.btn-brand` and `.btn-ghost` — the two pill buttons.

This alone removes ~80% of the duplicated class strings without any structural change.

**2. Create `src/components/ui.tsx`** exporting small primitives that wrap the utility classes:
- `Section({ as, size, className, children })` — max-w-7xl wrapper, `size` controls vertical padding (`sm` py-12 / `md` py-16 / `lg` py-20).
- `Card({ variant: 'default' | 'glow', padding, className, children })` — applies `.surface-card` / `.surface-glow`.
- `Eyebrow({ children, className })` — `<p className="eyebrow ...">`.
- `BrandButton` and `GhostButton` — `<button>`/`<a>` polymorphic via `asChild`-style `as` prop or just two components (anchor + button) for simplicity.

**3. Migrate route by route**, smallest first:
- `press-kit.tsx`, `privacy-*.tsx`, `news.tsx`, `referrals.tsx`, `about.tsx`, `app.tsx`, `card.tsx`, `token.tsx`, `index.tsx`.
- Keep visuals identical — only swap class strings/markup, no design changes.
- Drop unnecessary wrapper divs where a primitive replaces them.

**4. Remove dead code** while sweeping: `Placeholder` import in `index.tsx` if unused, redundant `key` on inner div when `Reveal` already keys, duplicate `<div>` wrappers around single children.

### Out of scope

- No visual/design changes — pixel-equal output.
- No changes to `Reveal`, `CtaCard`, `ScrollableComparison` (already shared).
- No changes to routing, data, or copy.

### Verification

- After each route migration, the build must pass.
- Spot-check `/`, `/app`, `/card`, `/token` in preview at desktop + mobile widths.
