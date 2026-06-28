# L'Atelier Hamburg — Project Context

**Global context:** `agency-os/CLAUDE.md`
**Global standards:** `agency-os/standards/`

This document extends the global context. Do not duplicate anything already defined globally.
Only add what is specific to this project and cannot be inferred from the global layer.

---

## Project Overview

L'Atelier Hamburg is the marketing website for a men's barbershop in Hamburg-Billstedt.
The site presents the salon, its services, and its atmosphere — and directs visitors to book appointments via WhatsApp.
There is no backend, no user accounts, and no booking system. The site is a static marketing surface.

---

## Stack

- **Next.js 16.2.9** with the App Router
- **React 19.2.4**
- **TypeScript**
- **Tailwind CSS v4** — breaking changes from v3; the `@theme inline` block and CSS-first config replace `tailwind.config.js`
- **Motion** (`motion/react`) — Framer Motion's standalone package; import from `motion/react`, not `framer-motion`
- **Lucide React** for icons
- **clsx** + **tailwind-merge** via `lib/utils.ts`

**Before writing code that touches Next.js or Tailwind:** read the relevant guide in
`node_modules/next/dist/docs/` and `node_modules/tailwindcss/`. APIs, conventions, and
configuration may differ from training data. Heed deprecation notices.

---

## Architecture

Single-page application. One route: `app/page.tsx` composes all sections in order.

```
app/
  page.tsx          # Root page — section composition only
  layout.tsx        # Fonts, metadata, viewport, global CSS
  globals.css       # Design tokens, Tailwind base, animation utilities
lib/
  config.ts         # Single source of truth for all salon data (SALON, WA_URL)
  utils.ts          # cn() — clsx + tailwind-merge
components/
  layout/           # Header, Footer, StickyWhatsApp
  sections/         # One file per page section
public/
  images/           # Static image assets
```

`lib/config.ts` is the single source of truth for all client-facing content: contact details,
hours, URLs, and copy that changes without a code change. Do not hardcode salon data in components.

---

## Conventions

**Components:**
- Named exports, PascalCase. No default exports from component files.
- Files are kebab-case: `tiktok-cta.tsx`, not `TikTokCta.tsx`.
- Each section component is self-contained. It imports from `lib/config.ts` and receives no props.

**Styling:**
- Design tokens are CSS custom properties defined in `globals.css` under `:root`.
  Token names follow `--color-{name}` for colors, `--font-{role}` for typefaces.
- Use `font-display` class to apply the Cormorant Garamond display typeface.
- Tailwind utility classes are preferred for layout and spacing. Custom CSS in `globals.css` is
  reserved for animations, pseudo-elements, and patterns that Tailwind cannot express.
- Inline `style` props are used for values that require precise arithmetic or are design-critical
  (e.g. `clamp()` typography, gradient stops).

**Animations:**
- Motion components are used for entrance animations and scroll-driven effects.
- The `EASE` constant `[0.16, 1, 0.3, 1]` is the project-wide easing curve. Use it consistently.
- All animations must be suppressed under `prefers-reduced-motion`. See `globals.css`.

**Images:**
- Use `next/image` for all images. Do not use `<img>`.
- Static assets live in `public/images/`.

---

## Environments

| Environment | Purpose | URL / Access |
|---|---|---|
| Production | Live client site | TBD |
| Local | Development | `http://localhost:3000` — run `npm run dev` |

---

## Deployment

Not yet documented. Deployment target and process are to be established.

---

## Testing

No automated tests. This is an explicit decision, not an omission.

The site has no application logic, state management, or API surface. The risk profile does not
justify a test suite at this stage. Visual correctness is verified manually in the browser.

If server-side logic, form handling, or a CMS integration is added, this decision should be revisited.

---

## Key Decisions

| ADR | Summary |
|---|---|
| [ADR-001](docs/decisions/ADR-001-nextjs-16-react-19.md) | Next.js 16 + React 19 chosen over the stable LTS release |
| [ADR-002](docs/decisions/ADR-002-whatsapp-booking.md) | WhatsApp as the sole booking channel; no booking system |
