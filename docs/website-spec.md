# Website Spec — L'Atelier Hamburg

**Status:** Vereinfacht · 2026-06-28
**Zweck dieser Datei:** Source of Truth für alle künftigen Reviews, Inhalts- und Designentscheidungen.
Änderungen an der Website müssen hier nachgezogen werden.

---

## Ziel der Website

Marketing-Website für einen inhabergeführten Herrensalon in Hamburg-Billstedt.

**Primäres Ziel:** Besucher dazu bringen, per WhatsApp einen Termin anzufragen.
**Sekundäres Ziel:** Vertrauen aufbauen durch Atmosphäre, Bewertungen und den Charakter des Salons.
**Kein Ziel:** Informationsplattform, Buchungssystem, E-Commerce.

**Zielgruppe:** Männer in Hamburg und Umgebung, die einen persönlichen, qualitätsbewussten Friseur suchen.

---

## Aktive Seitenstruktur

Die Startseite (`/`) setzt sich aus diesen Elementen in dieser Reihenfolge zusammen:

```
[Header]               — fixiert, scrollabhängig
[Hero]                 — Vollbild-Einstieg, primärer CTA
[Services]             — Leistungen & Preise
[About]                — Salon-Vorstellung, Foto, Stats
[Reviews]              — Google-Bewertungen
[Transition-Gradient]  — visueller Übergang hell→dunkel (kein Text, nur Gestaltung)
[TikTokCta]            — Social-Media-Einblick (Platzhalter bis Go-live)
[Footer]               — Adresse, Öffnungszeiten, Links
[StickyWhatsApp]       — Fixierter CTA-Button (nur Mobile, erscheint nach 400px Scroll)
```

Weitere Routen:
- `/impressum` — Pflichtangaben (unvollständig, enthält TODO-Blöcke)
- `/datenschutz` — Datenschutzerklärung (unvollständig, enthält TODO-Blöcke)

---

## Globale Designwerte

### Farbpalette

| Token | Hex | Verwendung |
|---|---|---|
| `--color-bg` | `#faf8f5` | Seitenhintergrund, helle Sektionen |
| `--color-warm` | `#f0eeeb` | About-Sektion Hintergrund |
| `--color-dark` | `#1c1f1f` | Dunkle Sektionen (Services, Contact, TikTok) |
| `--color-deeper` | `#151412` | — |
| `--color-accent` | `#a08868` | Gold/Bronze: Eyebrows, Preise, CTAs, Sterne, Pins |
| `--color-brick` | `#7a3c2c` | Definiert, aktuell nicht verwendet |
| Footer-Hintergrund | `#111210` | Noch dunkler als `--color-dark` |

### Typografie

| Variable | Font | Verwendung |
|---|---|---|
| `--font-sans` | Geist (Google) | Lauftext, Labels, Navigation, Preise |
| `--font-display` | Cormorant Garamond 300/400, normal + italic | Headlines, Zitate, Wordmark |

**Typografisches System:**
- Eyebrow-Labels: `9–11px`, `tracking-[0.38–0.44em]`, Uppercase, Gewicht 500, Farbe `#a08868`
- Headlines: `font-display`, `font-light`, `clamp()` für responsive Größen, `letter-spacing: -0.024em`
- Fließtext: `14–15px`, `leading-relaxed`, Geist

### Animationen

- **Einheitliche Easing-Kurve:** `[0.16, 1, 0.3, 1]` (in jedem Komponent als `const EASE`)
- **Entrance:** `opacity: 0 → 1`, `y: 16–28px → 0`, per `whileInView`
- **Ken Burns:** Hero-Bild, `22s`, `scale(1.0) → scale(1.05)`
- **Parallax:** Hero-Bild (`0–10%`), About-Bild (`-5–5%`), VisualBreak (`-9–9%`)
- **Reduced Motion:** Alle Animationen deaktiviert via `@media (prefers-reduced-motion: reduce)`

---

## Header

**Komponente:** `components/layout/header.tsx`
**Typ:** Fixiert, `z-50`, reagiert auf Scroll-Position

### Zustände

| Zustand | Trigger | Verhalten |
|---|---|---|
| Transparent | ScrollY ≤ 60px | Kein Hintergrund, kein Rahmen, volle Breite, Höhe 70px |
| Floating | ScrollY > 60px | Glassmorphism, gerundete Ecken (20px), Margin 10px/14–20px, Höhe 52px |

### Inhalte

**Wordmark (links):**
- Zeile 1: *L'Atelier* — `font-display`, italic, `rgba(255,255,255,0.92)`, 17px (scrolled: 15px)
- Zeile 2: `HAIR · STYLE` — `tracking-[0.28em]`, uppercase, `#a08868`, 8px (scrolled: 7px)
- Link: `/`

**Navigation (Desktop, ab `md`):**

| Label | Anker |
|---|---|
| Salon | `#salon` |
| Leistungen | `#leistungen` |
| Bewertungen | `#bewertungen` |
| Einblicke | `#einblicke` |

Aktiver Link wird per IntersectionObserver (`rootMargin: "-30% 0px -60% 0px"`) ermittelt.

**Desktop-CTAs (rechts):**
- Telefon: `040 7136020` → `tel:+49407136020`, dezent (`rgba(255,255,255,0.32)`)
- WhatsApp-Button: *WhatsApp* + Icon → WA_URL, Pill-Form, 30px hoch

**Mobile:**
- Burger-Icon (Lucide `Menu`, 17px) → öffnet Drawer
- Drawer: rechts, 288px breit, Slide-in-Animation
  - Wordmark *L'Atelier*
  - Navigation-Links (staggered fade-in)
  - CTA: *Termin per WhatsApp* (volle Breite)
  - Sekundär: Telefonnummer
  - Öffnungszeiten: `Di – Fr: 10:00 – 20:00 Uhr · Sa: 10:00 – 20:00 Uhr`

---

## Hero

**Komponente:** `components/sections/hero.tsx`
**ID:** — (kein Anker, kein Nav-Link)
**Höhe:** `100svh`

### Bild
- Quelle: `/images/innen.png` (Innenansicht des Salons)
- `priority`, `quality={100}`, `object-position: 55% 30%`
- Ken-Burns-Animation: 22s
- Parallax beim Scrollen (Y: 0 → 10%)

### Overlay-System
1. Basis-Dimmer: `rgba(4,3,2,0.08)`
2. Navigation-Scrim oben (22% Höhe): `rgba(4,3,2,0.55) → transparent`
3. Text-Zone unten (68% Höhe): `rgba(4,3,2,0.96) → transparent`

### Texte

**Eyebrow:**
- Text: `Hamburg-Billstedt · Reinskamp 2A`
- Farbe: `#a08868`
- Style: 9–10px, `tracking-[0.38em]`, uppercase
- Daneben: horizontale Linie, zieht sich nach rechts (Delay 0.72s)

**Headline (h1):**
```
Schnitte,
die sitzen.
```
- Font: `font-display`, `font-light`
- Größe: `clamp(3.2rem, 6.5vw, 5.6rem)`
- Farbe Zeile 1: `#F7F4EF`
- Farbe Zeile 2: `rgba(247,244,239,0.75)`
- `max-width: 13ch`

### CTA

**Primär:** *Jetzt Termin anfragen* + WhatsApp-Icon
- → `WA_URL` (WhatsApp, neuer Tab)
- Pill, glassmorphism, `height: 56px`, `border-radius: 9999px`
- `motion.a` mit `whileHover` (scale, heller)

### Scroll-Indikator
- Pulsierender vertikaler Strich (40px), nur Desktop (`md:`), erscheint nach 1.4s Delay

---

## Services

**Komponente:** `components/sections/services.tsx`
**ID:** `#leistungen`
**Hintergrund:** `#1c1f1f`

### Header

**Eyebrow:** `LEISTUNGEN & PREISE`

### Leistungsliste

Gruppierte Darstellung nach Kundenperspektive. Gruppenüberschriften: `9px`, `tracking-[0.38em]`, uppercase, `rgba(160,136,104,0.55)`. Jede Zeile: Name links (Größe + Farbe on Hover), Beschreibung darunter, Preis rechts. Zwischen den Gruppen visueller Abstand (`clamp(2rem, 3.5vw, 2.8rem)`).

**Gruppe: Haarschnitt**

| Leistung | Beschreibung | Preis |
|---|---|---|
| Herrenschnitt | Wir reden zuerst. Dann schneiden wir. | ab 28 € |
| Skin / Low / Mid Fade | Den Übergang, den man erst beim zweiten Hinsehen bemerkt. | ab 24 € |
| Kinderschnitt | Ruhig bleiben. Gut aussehen. Für die Kleinen. | ab 18 € |

**Gruppe: Kombinationen**

| Leistung | Beschreibung | Preis |
|---|---|---|
| Schnitt + Bart | Wenn Haar und Bart zur selben Person gehören. | ab 40 € |
| Schnitt + Fade | Klassische Länge oben. Moderne Kante unten. | ab 34 € |

**Gruppe: Bart**

| Leistung | Beschreibung | Preis |
|---|---|---|
| Bartpflege | Ein Bart, der Charakter hat — nicht nur Wuchs. | ab 14 € |
| Rasur | Heiße Kompresse. Offene Klinge. Das Original. | ab 18 € |

**Gruppe: Extras** *(Add-ons, zusätzlich zu einem Termin buchbar)*

| Leistung | Beschreibung | Preis |
|---|---|---|
| Haarwäsche | Optional. Vor jedem Schnitt empfohlen. | + 5 € |
| Augenbrauen | Ein Detail. Ein großer Unterschied. | + 6 € |

Extras-Preise werden mit `+` statt `ab` angezeigt.

**Entfernt:** Shape Up (nicht mehr im Angebot).

### Footer der Sektion

- `Alle Preise inkl. MwSt.` (Hinweistext)

---

## About

**Komponente:** `components/sections/about.tsx`
**ID:** `#salon`
**Layout:** 2-spaltig (lg), 1-spaltig (mobile) — Foto links, Text rechts

### Bild (links)
- Quelle: `/images/aussen.png` (Außenansicht, Reinskamp 2A)
- Alt: `L'Atelier Hamburg – Außenansicht Reinskamp 2A`
- Parallax: `-5% → 5%`
- Vignetten oben und unten (Übergänge)

### Text (rechts)
- Hintergrund: `#f0eeeb`

**Eyebrow:** `DER SALON`

**Headline (h2):**
```
Gegründet mit
einer Überzeugung.
```
- `clamp(1.9rem, 3.6vw, 2.9rem)`, `font-display`, `font-light`

**Fließtext (2 Absätze):**
1. > Dass ein Haarschnitt mehr ist als ein Haarschnitt — wenn derjenige, der ihn macht, wirklich zuhört.
2. > Wir führen L'Atelier inhabergeführt in Hamburg-Billstedt. Kein Filialkonzept. Keine anonyme Buchung. Du kommst rein, wir kennen dich — oder lernen dich kennen.

*Entfernt: „Das Ergebnis spricht für sich." — unbelegte Behauptung für einen neuen Salon. Beweisführung übernimmt die Reviews-Section.*

**Kennzahl (1 Stat):**

| Wert | Label |
|---|---|
| 1:1 | Persönlich |

*Entfernt: „10+ Jahre Erfahrung" — unbelegte Angabe. Wird ergänzt, wenn der Inhaber korrekte Daten liefert.*

---

## Reviews

**Komponente:** `components/sections/reviews.tsx`
**ID:** `#bewertungen`
**Hintergrund:** `#faf8f5`

### Header

**Eyebrow:** `KUNDENSTIMMEN`

**Score (editorial, groß):**
- Zahl: `4,8` — `clamp(3.2rem, 7vw, 5.6rem)`, `font-display`, Farbe `#e8e2d8`
- 5 Sterne rechts daneben
- `5 Rezensionen` darunter

### Testimonials

3 Google-Bewertungen. Beim Scrollen in den Viewport: Opacity 1. Außerhalb: Opacity 0.38.

**Testimonial 1 — Michelle:**
> „War heute das erste Mal bei L'Atelier und bin wirklich begeistert. Man wird super freundlich empfangen und vor allem sehr ehrlich und professionell beraten."

**Testimonial 2 — Florian Kaßner:**
> „Sehr angenehme Atmosphäre und ein wirklich gutes Ergebnis. Man merkt, dass hier mit Sorgfalt gearbeitet wird. Komme auf jeden Fall wieder."

**Testimonial 3 — Jakub Ulatowski:**
> „Wenn Sie möchten, dass Ihr Friseur auch Ihr Freund ist, kann ich diesen Salon wärmstens empfehlen. Die Professionalität dort ist in Hamburg seit Langem beispiellos."

Jedes Testimonial: Blockquote (display italic) + 5 Sterne + Name uppercase + `· Google`

---

## TikTokCta

**Komponente:** `components/sections/tiktok-cta.tsx`
**Hintergrund:** `#1c1f1f`, `border-top: rgba(255,255,255,0.05)`
**Kein ID-Anker** (kein Nav-Link)

> **Platzhalter-Status:** Die Video-Karten verwenden bis zum Go-live bewusst Platzhalter-IDs (`"1"` bis `"5"`). Die Sektion dient in der Präsentationsphase als Visualisierung zukünftiger Funktionalität — sie zeigt dem Kunden, dass TikTok integriert wird und wie die fertige Sektion aussehen wird. Vor Veröffentlichung müssen die Platzhalter durch echte TikTok-Video-IDs ersetzt werden.

### Oberer Bereich (2-spaltig, lg)

**Links:**

**Eyebrow:** `EINBLICKE`

**Headline (h2, italic):** *Überzeuge dich selbst.*
- `clamp(2.6rem, 5.5vw, 4.4rem)`, max-width `18ch`

**Rechts — Profilkarte:**
- → `https://www.tiktok.com/@latelier.du.style0`
- Profilbild: `/images/tiktok-profile.jpeg` (Fallback: „L" in display-italic)
- Name: **L'atelier du style** + TikTok-Icon
- Handle: `@latelier.du.style0`
- Hover: schwebt hoch (-5px), goldener Rahmen

### Video-Slider

Horizontal scrollbarer Container mit 5 Placeholder-Karten.

**Wichtig:** Die TikTok-Video-IDs sind Platzhalter (`"1"`, `"2"`, ..., `"5"`). Echte Video-IDs müssen eingetragen werden.

Jede Karte:
- Aspect-Ratio 9:16 (Hochformat)
- Play-Icon-Circle (accent-colored)
- Handle `@latelier.du.style0` in der Mitte
- Badge unten: `TikTok ansehen`
- Links: alle → `SALON.tiktok` (TikTok-Profil, nicht einzelne Videos)

**Breakpoints:**
- Mobile: `min-width: 72vw` — Peek-Effekt: nächste Karte ca. 30px sichtbar
- Tablet (`md:`): `calc(50% - 8px)` (2 Karten)
- Desktop (`lg:`): `calc(33.333% - 11px)` (3 Karten)

**Hint:** `← Scrollen →` — `12px`, `rgba(255,255,255,0.32)`, sichtbar aber dezent

---

## Footer

**Komponente:** `components/layout/footer.tsx`
**Hintergrund:** `#111210`

### Brand-Stempel (dekorativ)

*L'Atelier* in riesiger display-Schrift (`clamp(5rem, 14vw, 11rem)`), `rgba(255,255,255,0.045)` — kaum sichtbar, dient als texturales Hintergrundelement.

### Hauptinhalt (3-spaltig, md)

**Spalte 1 — Brand (md:col-span-5):**
- *L'Atelier* (display italic)
- `HAIR · STYLE` (accent, uppercase)
- > Inhabergeführter Herrensalon in Hamburg-Billstedt.
- `Reinskamp 2A · 22117 Hamburg`

**Spalte 2 — Kontakt (md:col-span-3):**
- `040 7136020` → `tel:+49407136020`
- `Route starten` → `SALON.mapsUrl`

**Spalte 3 — Öffnungszeiten (md:col-span-4):**

| Tage | Zeit |
|---|---|
| Di – Fr | 10:00 – 20:00 Uhr |
| Sa | 10:00 – 20:00 Uhr |
| Mo + So | Geschlossen |

### Bottom Bar

- Links: `© [Jahr] L'Atelier · Hamburg` (dynamisches Jahr)
- Rechts: `Impressum` → `/impressum` · `Datenschutz` → `/datenschutz`

---

## StickyWhatsApp (Mobile-Floating-CTA)

**Komponente:** `components/layout/sticky-whatsapp.tsx`
**Sichtbar:** Nur auf Mobile (`md:hidden`)
**Trigger:** Erscheint nach 400px Scroll, verschwindet wieder
**Position:** Fixiert, unten, `z-40`

**Button:** *Termin per WhatsApp* + WhatsApp-Icon (18px)
- → `WA_URL`
- `height: 56px`, `border-radius: 16px`
- Hintergrund: `#1b1e1e`, Rahmen: `rgba(160,136,104,0.22)`
- Animation: `wa-pulse` Puls-Ring (2.6s, unendlich)

---

## Unterseiten

### /impressum

**Status: Unvollständig — nicht produktionsreif**

Enthält TODO-Blöcke (gelb hervorgehoben):
- `TODO_INHABERNAME` — vollständiger Name des Inhabers
- `TODO_UST_ID` — Umsatzsteuer-Identifikationsnummer
- `TODO_HANDWERKSKAMMER` — zuständige Handwerkskammer

Befüllte Felder aus `lib/config.ts`:
- Adresse: Reinskamp 2A, 22117 Hamburg
- Telefon: 040 7136020
- E-Mail: `platzhalter@gmx.de` ← Platzhalter, muss ersetzt werden

### /datenschutz

**Status: Unvollständig — nicht produktionsreif**

Enthält TODO-Blöcke:
- `TODO_INHABERNAME`
- Hosting-Anbieter nicht eingetragen
- Weitere Drittdienste (z.B. Fonts) nicht aufgeführt

Korrekte Abschnitte vorhanden:
- Erhebung Server-Log-Daten
- WhatsApp (korrekt referenziert)
- Google Maps (referenziert — **Hinweis:** nur die inaktive `map.tsx`-Komponente nutzt ein Maps-Embed; die aktive `contact.tsx` und `location.tsx` verwenden ein statisches Bild)
- Betroffenenrechte
- Beschwerderecht (Hamburger Datenschutzbeauftragter)

---

## Nicht-aktive Komponenten

Diese Komponenten existieren im Codebase, sind aber **nicht in `app/page.tsx` eingebunden**.

| Komponente | Datei | Beschreibung | Warum inaktiv |
|---|---|---|---|
| `Atmosphere` | `sections/atmosphere.tsx` | Parallax-Vollbild (Unsplash), Zitat: *Inhabergeführt. Persönlich. Hamburg.* | Unsplash-Bild, kein eigenes Foto |
| `Craft` | `sections/craft.tsx` | Vollbild-Sektion, Innen-Foto, Zitat über das Handwerk | Überschneidet sich mit VisualBreak |
| `Impressions` | `sections/impressions.tsx` | 3-spaltige Fotogalerie (3 Unsplash-Platzhalter) | Kein eigenes Bildmaterial |
| `Map` | `sections/map.tsx` | Google-Maps-Iframe + Anfahrtsbeschreibung (ÖPNV + PKW) | Ersetzt durch statisches Kartenbild in Contact/Location |
| `VisualBreak` | `sections/visual-break.tsx` | Parallax-Vollbild (Innen-Foto), großes Zitat: *Jeder Schnitt bekommt die Zeit, die er verdient.* | Nicht in aktuelle Page eingebunden |

---

## Offene Punkte & Platzhalter

Diese Punkte sind im Code markiert oder identifiziert — sie müssen vor Produktionsgang aufgelöst werden.

| Element | Datei | Problem |
|---|---|---|
| `SALON.email` | `lib/config.ts` | `"platzhalter@gmx.de"` — echte E-Mail-Adresse fehlt |
| Inhabername | `app/impressum/page.tsx`, `app/datenschutz/page.tsx` | `TODO_INHABERNAME` — vollständiger Name fehlt |
| USt-ID | `app/impressum/page.tsx` | `TODO_UST_ID` fehlt |
| Handwerkskammer | `app/impressum/page.tsx` | `TODO_HANDWERKSKAMMER` fehlt |
| TikTok-Video-IDs | `sections/tiktok-cta.tsx` | Platzhalter `"1"` bis `"5"` — echte Video-IDs fehlen |
| Produktions-URL | `CLAUDE.md`, Environments | TBD |
| Hosting-Anbieter | `app/datenschutz/page.tsx` | Nicht eingetragen |
| Rechtsprüfung | Impressum + Datenschutz | Beide Seiten sind nicht anwaltlich geprüft |

---

## Inhalte aus `lib/config.ts` (Source of Truth)

Alle folgenden Werte sind zentral definiert. Änderungen nur dort vornehmen.

```
SALON.name        = "L'Atelier"
SALON.phone       = "040 7136020"
SALON.phoneHref   = "tel:+49407136020"
SALON.whatsapp    = "4917622812063"
SALON.street      = "Reinskamp 2A"
SALON.city        = "22117 Hamburg"
SALON.district    = "Hamburg-Billstedt"
SALON.hours.weekdays = "Di – Fr: 10:00 – 20:00 Uhr"
SALON.hours.saturday = "Sa: 10:00 – 20:00 Uhr"
SALON.hours.closed   = "Mo + So: Geschlossen"
SALON.google.score   = "4,8"
SALON.google.count   = "5 Rezensionen"
SALON.email       = "platzhalter@gmx.de"   ← Platzhalter
SALON.tiktok      = "https://www.tiktok.com/@latelier.du.style0"
WA_URL            = "https://wa.me/4917622812063?text=[vorausgefüllte Nachricht]"
```
