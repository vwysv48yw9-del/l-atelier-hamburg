"use client"

import { motion } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

type ServiceItem = {
  name:    string
  desc:    string
  price:   string
  isExtra?: boolean
}

type ServiceGroup = {
  heading: string
  items:   ServiceItem[]
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    heading: "Haarschnitt",
    items: [
      { name: "Herrenschnitt",         desc: "Wir reden zuerst. Dann schneiden wir.",                      price: "28" },
      { name: "Skin / Low / Mid Fade", desc: "Den Übergang, den man erst beim zweiten Hinsehen bemerkt.", price: "24" },
      { name: "Kinderschnitt",         desc: "Ruhig bleiben. Gut aussehen. Für die Kleinen.",              price: "18" },
    ],
  },
  {
    heading: "Kombinationen",
    items: [
      { name: "Schnitt + Bart", desc: "Wenn Haar und Bart zur selben Person gehören.", price: "40" },
      { name: "Schnitt + Fade", desc: "Klassische Länge oben. Moderne Kante unten.",  price: "34" },
    ],
  },
  {
    heading: "Bart",
    items: [
      { name: "Bartpflege", desc: "Ein Bart, der Charakter hat — nicht nur Wuchs.", price: "14" },
      { name: "Rasur",      desc: "Heiße Kompresse. Offene Klinge. Das Original.",   price: "18" },
    ],
  },
  {
    heading: "Extras",
    items: [
      { name: "Haarwäsche",  desc: "Optional. Vor jedem Schnitt empfohlen.", price: "5", isExtra: true },
      { name: "Augenbrauen", desc: "Ein Detail. Ein großer Unterschied.",     price: "6", isExtra: true },
    ],
  },
]

// Pre-computed start indices for stagger delays — avoids mutation during render
const GROUP_START_INDICES = SERVICE_GROUPS.map((_, i) =>
  SERVICE_GROUPS.slice(0, i).reduce((sum, g) => sum + g.items.length, 0)
)

function ServiceRow({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.045 }}
    >
      {/* Trennlinie */}
      <motion.div
        className="w-full"
        style={{
          height:          "1px",
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
          paddingBottom: "clamp(1.1rem, 2vw, 1.5rem)",
        }}
        whileHover="hovered"
      >
        {/* Hover-Hintergrund */}
        <motion.div
          className="absolute -inset-x-4 inset-y-0 rounded-xl pointer-events-none"
          variants={{ hovered: { backgroundColor: "rgba(255,255,255,0.022)" } }}
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
            style={{ color: "#a08868", letterSpacing: "-0.02em" }}
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
              {item.isExtra ? "+" : "ab"}
            </span>
            <span style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)" }}>
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
          {SERVICE_GROUPS.map((group, groupIndex) => {
            const startIndex = GROUP_START_INDICES[groupIndex]
            return (
              <div key={group.heading}>

                {/* Gruppenabstand (außer erste Gruppe) */}
                {groupIndex > 0 && (
                  <div style={{ height: "clamp(2rem, 3.5vw, 2.8rem)" }} />
                )}

                {/* Gruppenüberschrift */}
                <motion.p
                  className="text-[9px] tracking-[0.38em] uppercase font-medium mb-3"
                  style={{ color: "rgba(160,136,104,0.55)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: startIndex * 0.045 }}
                >
                  {group.heading}
                </motion.p>

                {/* Zeilen */}
                {group.items.map((item, itemIndex) => (
                  <ServiceRow
                    key={item.name}
                    item={item}
                    index={startIndex + itemIndex}
                  />
                ))}

              </div>
            )
          })}

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
