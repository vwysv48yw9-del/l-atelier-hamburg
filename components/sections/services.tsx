"use client"

import { motion } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

const SERVICES = [
  {
    name:  "Herrenschnitt",
    desc:  "Wir reden zuerst. Dann schneiden wir.",
    price: "32",
  },
  {
    name:  "Kinderschnitt",
    desc:  "Ruhig bleiben. Gut aussehen. Für die Kleinen.",
    price: "22",
    gap:   true,
  },
  {
    name:  "Skin / Low / Mid Fade",
    desc:  "Den Übergang, den man erst beim zweiten Hinsehen bemerkt.",
    price: "28",
  },
  {
    name:  "Shape Up",
    desc:  "Wenn der Rahmen stimmt, stimmt alles.",
    price: "18",
  },
  {
    name:  "Schnitt + Fade",
    desc:  "Klassische Länge oben. Moderne Kante unten.",
    price: "38",
    gap:   true,
  },
  {
    name:  "Bartpflege",
    desc:  "Ein Bart, der Charakter hat — nicht nur Wuchs.",
    price: "18",
  },
  {
    name:  "Rasur",
    desc:  "Heiße Kompresse. Offene Klinge. Das Original.",
    price: "22",
  },
  {
    name:  "Schnitt + Bart",
    desc:  "Wenn Haar und Bart zur selben Person gehören.",
    price: "44",
  },
]

function ServiceRow({ item, index }: { item: typeof SERVICES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.045 }}
    >
      {/* Trennlinie — reagiert auf Hover des Rows */}
      <motion.div
        className="w-full"
        style={{
          height: "1px",
          backgroundColor: index === 0
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.07)",
        }}
        whileHover={{ backgroundColor: "rgba(160,136,104,0.3)" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Zeile */}
      <motion.div
        className="relative flex items-center justify-between gap-10 group cursor-default"
        style={{
          paddingTop:    "clamp(1.1rem, 2vw, 1.5rem)",
          paddingBottom: item.gap
            ? "clamp(1.7rem, 3vw, 2.4rem)"
            : "clamp(1.1rem, 2vw, 1.5rem)",
        }}
        whileHover="hovered"
      >
        {/* Hover-Hintergrund */}
        <motion.div
          className="absolute -inset-x-4 inset-y-0 rounded-xl pointer-events-none"
          variants={{
            hovered: { backgroundColor: "rgba(255,255,255,0.022)" },
          }}
          style={{ backgroundColor: "rgba(255,255,255,0)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {/* Links: Name + Beschreibung */}
        <div className="relative flex-1 min-w-0">
          <motion.div
            className="font-light leading-snug"
            style={{
              fontSize:      "clamp(1.2rem, 2vw, 1.5rem)",
              color:         "#C8C2B8",
              letterSpacing: "-0.014em",
            }}
            variants={{ hovered: { color: "#F5F3EE" } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {item.name}
          </motion.div>
          <motion.div
            className="mt-1.5 leading-snug"
            style={{
              fontSize:      "clamp(0.9rem, 1.35vw, 1.05rem)",
              color:         "rgba(245,243,238,0.58)",
              letterSpacing: "0.02em",
            }}
            variants={{ hovered: { color: "rgba(245,243,238,0.82)" } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {item.desc}
          </motion.div>
        </div>

        {/* Rechts: Preis */}
        <div className="relative shrink-0 text-right">
          <motion.div
            className="font-display font-light leading-none tabular-nums"
            style={{
              color:         "#a08868",
              letterSpacing: "-0.02em",
            }}
            variants={{ hovered: { color: "#c9a97c" } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <span
              style={{
                fontSize:      "clamp(0.75rem, 1vw, 0.85rem)",
                letterSpacing: "0.1em",
                opacity:       0.55,
                marginRight:   "0.4em",
                fontFamily:    "inherit",
                fontWeight:    300,
              }}
            >
              ab
            </span>
            <span
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
              }}
            >
              {item.price} €
            </span>
          </motion.div>
        </div>

      </motion.div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section
      id="leistungen"
      style={{ backgroundColor: "#1c1f1f" }}
      className="py-20 md:py-36"
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 md:px-20">

        {/* ── Eyebrow ── */}
        <motion.div
          className="flex items-center gap-5 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p
            className="shrink-0 text-[10px] tracking-[0.44em] uppercase font-medium"
            style={{ color: "#a08868" }}
          >
            Leistungen & Preise
          </p>
          <div
            className="flex-1"
            style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}
          />
        </motion.div>

        {/* ── Leistungsliste ── */}
        <div>
          {SERVICES.map((item, i) => (
            <ServiceRow key={item.name} item={item} index={i} />
          ))}

          {/* Abschlusslinie */}
          <motion.div
            style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.07)" }}
            whileHover={{ backgroundColor: "rgba(160,136,104,0.3)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>

        {/* ── Footer ── */}
        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        >
          <p
            style={{
              fontSize:      "11px",
              color:         "rgba(255,255,255,0.15)",
              letterSpacing: "0.07em",
            }}
          >
            Alle Preise inkl. MwSt.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
