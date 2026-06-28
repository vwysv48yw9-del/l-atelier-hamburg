# ADR-001: Next.js 16 + React 19

**Date:** 2026-06-28
**Status:** Accepted

---

## Context

This project was initialized as a new marketing site. At the time, Next.js 14 was the long-term stable release and Next.js 15 was the current stable release. Next.js 16 with React 19 was the latest available version, carrying breaking changes relative to prior releases.

The project had no legacy constraints — it was greenfield. The framework version decision was made at initialization and shapes the upgrade path for the lifetime of the site.

---

## Options Considered

### Option 1 — Next.js 14 (LTS)

The long-term stable release with the widest ecosystem compatibility and the most complete documentation at the time.

**Trade-offs:** Proven stability, broad third-party support. Does not include React 19 features. Requires a future major upgrade before React 19 adoption.

### Option 2 — Next.js 15 (stable)

The current stable release at the time of the decision.

**Trade-offs:** Stable and supported. Supports both React 18 and React 19, but React 19 support was partial at the time of release.

### Option 3 — Next.js 16 + React 19

The latest available release, including full React 19 support and the most recent framework improvements.

**Trade-offs:** Carries breaking API changes relative to prior releases — documented in `node_modules/next/dist/docs/`. Some third-party libraries may lag behind React 19 compatibility. Documentation and community resources are thinner than for older releases.

---

## Decision

**We chose Option 3 — Next.js 16 + React 19.**

The site is a simple static marketing surface with minimal dependencies, which reduces the risk of third-party compatibility issues. Starting on the latest release avoids a near-term major upgrade and gives the project the longest runway on a supported version.

---

## Consequences

**Accepted trade-offs:**
- Breaking changes require reading framework documentation before making changes — do not rely on prior Next.js knowledge or model training data. See the Stack section of `CLAUDE.md`.
- Community resources and third-party guides may reference older APIs.

**Follow-on actions required:**
- None at this time.

**Conditions for revisiting:**
- A required dependency is incompatible with Next.js 16 or React 19 and has no workaround.
- Next.js releases a version that introduces features this project needs.
