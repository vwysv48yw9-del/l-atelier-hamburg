"use client"

import { motion } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

// Hochwertige Unsplash-Platzhalter — austauschbar gegen echte Fotos
const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&h=1200&q=90",
    alt: "L'Atelier — Atmosphäre im Salon",
    pos: "center 35%",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&h=900&q=90",
    alt: "Professionelles Barbier-Werkzeug",
    pos: "center 50%",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&h=1050&q=90",
    alt: "Präzision beim Haarschnitt",
    pos: "center 25%",
  },
]

export function Impressions() {
  return (
    <section
      aria-hidden="true"
      style={{ backgroundColor: "#1c1f1f" }}
      className="overflow-hidden"
    >
      {/* ── Desktop: 3-spaltig, unten ausgerichtet ── */}
      <div className="hidden lg:flex items-end gap-[3px]">

        {/* Bild 1 — großes Hochformat links */}
        <motion.div
          className="relative overflow-hidden shrink-0 img-zoom-wrap"
          style={{ width: "42%", height: "clamp(480px, 58vw, 740px)" }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <img
            src={PHOTOS[0].src}
            alt={PHOTOS[0].alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            style={{ objectPosition: PHOTOS[0].pos }}
          />
          {/* Subtile Vignette oben */}
          <div
            className="absolute inset-x-0 top-0 pointer-events-none"
            style={{
              height: "180px",
              background: "linear-gradient(to bottom, rgba(10,12,12,0.55) 0%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Mitte — Label + Bild 2 */}
        <div className="flex flex-col gap-[3px]" style={{ width: "27%" }}>
          {/* Editorial-Label */}
          <motion.div
            className="flex items-center gap-3 px-5 pb-4 pt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            />
            <span
              className="font-display font-light italic text-[10px] whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.14)", letterSpacing: "0.05em" }}
            >
              Einblicke
            </span>
          </motion.div>

          {/* Bild 2 — Querformat */}
          <motion.div
            className="relative overflow-hidden img-zoom-wrap"
            style={{ height: "clamp(300px, 36vw, 460px)" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.12 }}
          >
            <img
              src={PHOTOS[1].src}
              alt={PHOTOS[1].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ objectPosition: PHOTOS[1].pos }}
            />
          </motion.div>
        </div>

        {/* Bild 3 — Hochformat rechts, etwas kürzer als Bild 1 */}
        <motion.div
          className="relative overflow-hidden flex-1 img-zoom-wrap"
          style={{ height: "clamp(380px, 48vw, 620px)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.22 }}
        >
          <img
            src={PHOTOS[2].src}
            alt={PHOTOS[2].alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ objectPosition: PHOTOS[2].pos }}
          />
          {/* Subtile Vignette rechts */}
          <div
            className="absolute inset-y-0 right-0 pointer-events-none"
            style={{
              width: "80px",
              background: "linear-gradient(to left, rgba(10,12,12,0.3) 0%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>

      {/* ── Mobile: gestapelt ── */}
      <div className="lg:hidden flex flex-col gap-[3px]">
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden w-full"
            style={{ height: i === 0 ? "72vw" : i === 1 ? "56vw" : "64vw" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: photo.pos }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
