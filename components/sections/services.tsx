"use client"

import { motion } from "motion/react"
import { WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const SERVICES = [
  {
    name:  "Herrenschnitt",
    desc:  "Persönliche Beratung · Präziser Schnitt · Styling",
    price: "32",
  },
  {
    name:  "Kinderschnitt",
    desc:  "Entspannte Atmosphäre · Sorgfalt von Anfang an",
    price: "22",
    gap:   true,
  },
  {
    name:  "Skin / Low / Mid Fade",
    desc:  "Nahtlose Übergänge mit höchster Präzision",
    price: "28",
  },
  {
    name:  "Shape Up",
    desc:  "Klare Konturen. Sofort sichtbarer Unterschied.",
    price: "18",
  },
  {
    name:  "Schnitt + Fade",
    desc:  "Klassische Form, moderner Verlauf — aus einem Guss",
    price: "38",
    gap:   true,
  },
  {
    name:  "Bartpflege",
    desc:  "Perfekt geformt und sauber ausgearbeitet",
    price: "18",
  },
  {
    name:  "Rasur",
    desc:  "Heiße Kompresse · Präzise Klinge · Gepflegtes Finish",
    price: "22",
  },
  {
    name:  "Schnitt + Bart",
    desc:  "Frisur und Bartkonturen in perfekter Harmonie",
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

        {/* ── Header ── */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {/* Eyebrow + Linie */}
          <div className="flex items-center gap-5 mb-9">
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
          </div>

          {/* Headline */}
          <h2
            className="font-display font-light leading-[1.06] mb-8"
            style={{
              fontSize:      "clamp(3rem, 6vw, 5rem)",
              color:         "#F5F3EE",
              letterSpacing: "-0.028em",
            }}
          >
            Präzision,
            <br />
            <span style={{ color: "rgba(255,255,255,0.22)" }}>die man sieht.</span>
          </h2>

          {/* Intro */}
          <p
            className="leading-relaxed"
            style={{
              fontSize:      "clamp(0.95rem, 1.45vw, 1.08rem)",
              color:         "rgba(245,243,238,0.42)",
              letterSpacing: "0.01em",
              maxWidth:      "52ch",
            }}
          >
            Jede Leistung mit der Sorgfalt, die sie verdient.
            Persönlich. Präzise. Jedes Mal.
          </p>
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
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
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

          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium"
            style={{
              fontSize:        "10.5px",
              letterSpacing:   "0.22em",
              textTransform:   "uppercase",
              color:           "#6a6460",
              border:          "1px solid rgba(255,255,255,0.09)",
              padding:         "0 28px",
              height:          "44px",
              borderRadius:    "9999px",
            }}
            whileHover={{ scale: 1.015, y: -1, color: "#C8C2B8" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
          >
            Termin anfragen
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
