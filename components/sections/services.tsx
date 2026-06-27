"use client"

import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay } },
})

const SERVICES = [
  {
    category: "Schnitt",
    items: [
      { name: "Herrenschnitt",  desc: "Waschen · Schneiden · Stylen",           price: "ab 32 €" },
      { name: "Kinderschnitt",  desc: "bis 12 Jahre",                            price: "ab 22 €" },
    ],
  },
  {
    category: "Fade & Styling",
    items: [
      { name: "Skin / Low / Mid Fade", desc: "Präziser Übergang, sauber ausgearbeitet", price: "ab 28 €" },
      { name: "Shape Up",              desc: "Konturenpflege & Lineup",                  price: "ab 18 €" },
      { name: "Schnitt + Fade",        desc: "Alles in einem Termin",                    price: "ab 38 €" },
    ],
  },
  {
    category: "Bart",
    items: [
      { name: "Bartpflege",     desc: "Form · Pflege · Finish",         price: "ab 18 €" },
      { name: "Rasur",          desc: "Hot Towel · Klinge · Aftercare", price: "ab 22 €" },
      { name: "Schnitt + Bart", desc: "Der komplette Look",             price: "ab 44 €" },
    ],
  },
]

export function Services() {
  return (
    <section
      id="leistungen"
      className="py-28 md:py-40"
      style={{ backgroundColor: "#1c1f1f" }}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp()}
        >
          <p
            className="text-[10px] tracking-[0.38em] uppercase mb-5 font-medium"
            style={{ color: "#a08868" }}
          >
            Leistungen & Preise
          </p>
          <h2
            className="font-display font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#F5F3EE" }}
          >
            Klare Preise.{" "}
            <span style={{ color: "#3a3e3e" }}>Keine Überraschungen.</span>
          </h2>
        </motion.div>

        {/* Preisliste */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {SERVICES.map((group, gi) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: gi * 0.1 } },
              }}
            >
              {/* Kategorie */}
              <motion.div
                variants={fadeUp()}
                className="text-[9.5px] uppercase tracking-[0.32em] font-semibold pb-5 mb-7"
                style={{
                  color: "#686460",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {group.category}
              </motion.div>

              {/* Items */}
              <div className="flex flex-col gap-0">
                {group.items.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    variants={fadeUp()}
                    className="service-row group/row flex items-start justify-between gap-6 py-5"
                    style={{
                      borderBottom: idx < group.items.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                    }}
                  >
                    <div>
                      <div
                        className="text-[14px] font-medium mb-1 transition-colors duration-300 group-hover/row:text-white"
                        style={{ color: "#E8E4DE" }}
                      >
                        {item.name}
                      </div>
                      <div className="text-[12px]" style={{ color: "#565250" }}>
                        {item.desc}
                      </div>
                    </div>
                    <div
                      className="service-price text-[13.5px] font-medium shrink-0 tabular-nums transition-colors duration-300"
                      style={{ color: "#8a7860" }}
                    >
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer-Zeile */}
        <motion.div
          className="mt-16 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.1)}
        >
          <p className="text-[12.5px]" style={{ color: "#565250" }}>
            Alle Preise inkl. MwSt. · Kein Schnell-Schnell.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase font-semibold px-7 h-11 rounded-full transition-all duration-300 hover:text-white"
            style={{
              color: "#C8C2B8",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Jetzt Termin anfragen
          </a>
        </motion.div>

      </div>
    </section>
  )
}
