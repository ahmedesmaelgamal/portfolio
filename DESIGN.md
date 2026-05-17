# DESIGN.md

## Color Strategy

**Committed** — One saturated color carries the surface. Deep dark background with a single accent used deliberately.

### Palette (OKLCH-based)

```
Background:    oklch(0.12 0.01 195)   #0c1a1e  — dark teal-tinted black
Surface:       oklch(0.16 0.01 195)   #132226  — elevated dark
Surface Alt:   oklch(0.20 0.01 195)   #1c2e33  — cards, inset
Border:        oklch(0.28 0.01 195)   #2a3f45  — subtle borders
Muted:         oklch(0.55 0.01 195)   #6b8a91  — secondary text
Body:          oklch(0.75 0.01 195)   #a8c0c8  — body text
Foreground:    oklch(0.92 0.005 195)  #e0eaed  — headings, primary text

Accent:        oklch(0.72 0.15 195)   #00d4aa  — teal/cyan primary accent
Accent Warm:   oklch(0.78 0.15 85)    #f5c542  — amber/gold secondary (sparingly)
```

### Color Rules

- Never use pure #000 or #fff. All neutrals are tinted toward teal (hue ~195).
- Accent appears on: links, active states, key highlights, interactive elements — never more than 10% of surface.
- Warm accent (amber) only for: availability badge, one CTA, subtle highlights.
- Reduce chroma as lightness approaches 0 or 100.

## Typography

**Primary Family:** JetBrains Mono (for headings, labels, metadata) — but NOT as lazy "developer" shorthand. Used deliberately for its technical precision and distinctive character.

**Body Family:** DM Sans — clean, geometric, highly readable at small sizes. Pairs well with JetBrains Mono's technical feel without being monospace everywhere.

**Scale (fluid clamp):**
```
xs:    clamp(0.7rem, 0.65rem + 0.25vw, 0.75rem)
sm:    clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem)
base:  clamp(0.9rem, 0.85rem + 0.25vw, 1rem)
lg:    clamp(1.1rem, 1rem + 0.5vw, 1.25rem)
xl:    clamp(1.3rem, 1.1rem + 1vw, 1.5rem)
2xl:   clamp(1.6rem, 1.2rem + 2vw, 2.25rem)
3xl:   clamp(2rem, 1.4rem + 3vw, 3rem)
4xl:   clamp(2.5rem, 1.6rem + 4.5vw, 4rem)
```

**Line Heights:** 1.6 for body, 1.2 for headings, 1.4 for labels
**Letter Spacing:** -0.02em for headings, 0 for body, 0.08em for uppercase labels
**Weight Contrast:** 400 (body) / 500 (labels) / 600 (semibold) / 700 (headings)

## Spacing

```
Section padding:     py-24 md:py-32 lg:py-40
Container max-width: 68rem (1088px)
Container padding:   px-5 md:px-8
Card padding:        p-6 md:p-8
Gap scale:           2, 4, 6, 8, 12, 16, 24, 32
```

## Layout

- Left-aligned text as default. No centered-stack everything.
- Asymmetric compositions where possible. Break the grid intentionally.
- Generous whitespace. Sections breathe.
- No cards unless they're the right affordance. Prefer direct content layout.
- Project pages: full-width with constrained text columns (max 65ch for readability).

## Motion

- One well-orchestrated page-load with staggered reveals.
- Scroll-triggered reveals for sections (Intersection Observer).
- No bounce, no elastic. Ease-out-expo only: cubic-bezier(0.22, 1, 0.36, 1).
- Stagger: 80-150ms between children.
- Hover states: subtle translate-y(-2px) + shadow change, 300ms.
- Reduced motion: all animations disabled.

## Components

### Navigation
- Fixed top bar, minimal. Name left, links right, dark mode toggle.
- On scroll: subtle background blur + border.
- Mobile: hamburger with full-screen overlay.

### Hero
- Name large. Role clear. One-line summary. Contact links.
- No photo (keeps it clean, avoids stock-photo feel).
- Subtle animated element — maybe a typing cursor on roles, or a minimal code-style decoration.

### About
- Short, direct paragraph. No fluff. Education + key facts in a compact grid.

### Projects
- Each project gets a card with: name, one-line description, tech stack tags, links.
- Hover: subtle lift + border glow.
- Click: expands to full project detail (or navigates to project page).

### Skills
- Grouped by category. Clean tag/chip layout. No progress bars (they're meaningless).

### Experience
- Timeline-style. Company, role, dates, brief description. Compact.

### Contact
- Email, phone, LinkedIn, GitHub. Simple. No form needed (or a minimal one).

### Footer
- Minimal. Copyright + links.
