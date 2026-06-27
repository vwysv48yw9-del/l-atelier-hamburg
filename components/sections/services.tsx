"use client"

import { motion } from "motion/react"
import { WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const SERVICES = [
  {
    num: "I",
    category: "Schnitt",
    items: [
      { name: "Herrenschnitt",  desc: "Waschen · Schneiden · Stylen",  price: "32", unit: "€" },
      { name: "Kinderschnitt",  desc: "bis 12 Jahre",                   price: "22", unit: "€" },
    ],
  },
  {
    num: "II",
    category: "Fade & Styling",
    items: [
      { name: "Skin / Low / Mid Fade", desc: "Präziser Übergang, sauber ausgearbeitet", price: "28", unit: "€" },
      { name: "Shape Up",              desc: "Konturenpflege & Lineup",                  price: "18", unit: "€" },
      { name: "Schnitt + Fade",        desc: "Alles in einem Termin",                    price: "38", unit: "€" },
    ],
  },
  {
    num: "III",
    category: "Bart",
    items: [
      { name: "Bartpflege",     desc: "Form · Pflege · Finish",         price: "18", unit: "€" },
      { name: "Rasur",          desc: "Hot Towel · Klinge · Aftercare", price: "22", unit: "€" },
      { name: "Schnitt + Bart", desc: "Der komplette Look",             price: "44", unit: "€" },
    ],
  },
]

function ServiceGroup({
  group,
  index,
}: {
  group: typeof SERVICES[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: EASE, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-0 lg:gap-16"
    >
      {/* Linke Spalte – Kategorie-Label */}
      <div className="mb-8 lg:mb-0 pt-1">
        <div
          className="font-display font-light italic leading-none mb-2 select-none"
          style={{
            fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
          }}
        >
          {group.num}
        </div>
        <div
          className="font-display font-light italic"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: "#686460",
            letterSpacing: "-0.01em",
          }}
        >
          {group.category}
        </div>
      </div>

      {/* Rechte Spalte – Leistungen */}
      <div>
        {group.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 + i * 0.07 }}
            className="group/item relative flex items-start justify-between gap-8 cursor-default"
            style={{
              paddingTop: i === 0 ? 0 : "clamp(1.8rem, 3vw, 2.6rem)",
              paddingBottom: "clamp(1.8rem, 3vw, 2.6rem)",
              borderBottom:
                i < group.items.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
            }}
          >
            {/* Hover-Fläche */}
            <div
              className="absolute inset-x-[-1.5rem] inset-y-0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            />

            {/* Name + Beschreibung */}
            <div className="relative">
              <div
                className="font-light mb-2 transition-colors duration-400 group-hover/item:text-white"
                style={{
                  color: "#D8D2C8",
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.name}
              </div>
              <div
                className="text-[12px] tracking-wide"
                style={{ color: "#3e3c3a" }}
              >
                {item.desc}
              </div>
            </div>

            {/* Preis */}
            <div className="relative shrink-0 text-right pt-0.5">
              <div
                className="font-display font-light leading-none tabular-nums transition-colors duration-400 group-hover/item:text-[#c4a882]"
                style={{
                  color: "#a08868",
                  fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.price}
                <span
                  className="ml-1"
                  style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", opacity: 0.7 }}
                >
                  {item.unit}
                </span>
              </div>
              <div
                className="text-[10px] tracking-[0.2em] uppercase mt-1"
                style={{ color: "#3e3c3a" }}
              >
                ab
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section
      id="leistungen"
      className="py-28 md:py-44"
      style={{ backgroundColor: "#1c1f1f" }}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20">

        {/* Header */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-5 font-medium"
            style={{ color: "#a08868" }}
          >
            Leistungen & Preise
          </p>
          <h2
            className="font-display font-light leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 4.8vw, 3.6rem)",
              color: "#F5F3EE",
              letterSpacing: "-0.018em",
            }}
          >
            Klare Preise.{" "}
            <span style={{ color: "rgba(255,255,255,0.11)" }}>Keine Überraschungen.</span>
          </h2>
        </motion.div>

        {/* Kategorien – stacked, großzügig */}
        <div className="flex flex-col divide-y" style={{ "--tw-divide-color": "rgba(255,255,255,0.06)" } as React.CSSProperties}>
          {SERVICES.map((group, i) => (
            <div
              key={group.category}
              style={{
                paddingTop: i === 0 ? 0 : "clamp(3.5rem, 6vw, 5rem)",
                paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
              }}
            >
              <ServiceGroup group={group} index={i} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 md:mt-28 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <p
            className="text-[12px] tracking-wide"
            style={{ color: "#3e3c3a" }}
          >
            Alle Preise inkl. MwSt. · Kein Schnell-Schnell.
          </p>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-semibold px-8 h-11 rounded-full"
            style={{
              color: "#6e6a66",
              border: "1px solid rgba(255,255,255,0.08)",
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
