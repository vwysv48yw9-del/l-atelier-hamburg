# System Overview

L'Atelier Hamburg is a static marketing site with no backend, no API surface, and no user state.

---

## Request Path

```
Browser → Next.js (App Router) → app/page.tsx → section components → static HTML + CSS
```

All pages are statically rendered at build time. There are no server actions, API routes, or dynamic segments.

---

## Data Flow

All client-facing content originates from a single file: `lib/config.ts`.

```
lib/config.ts (SALON, WA_URL)
    └── imported by section components as needed
```

No CMS. No database. No environment-specific data. Content changes require a code change and redeploy.

---

## Page Structure

`app/page.tsx` composes the page in a fixed order:

```
Header
  Hero
  Services
  About
  Reviews
  [transition gradient]
  Contact
  TikTokCta
Footer
StickyWhatsApp  (fixed position, outside normal flow)
```

Each section is a self-contained component. Sections do not communicate with each other.

---

## Assets

Static images live in `public/images/`. They are served directly by Next.js with no CDN layer currently in place.
Next.js image optimization (`next/image`) handles format negotiation (AVIF, WebP) and responsive sizing at request time.
