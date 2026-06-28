"use client"

import { motion } from "motion/react"
import { WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const SERVICES = [
  {
    category: "Schnitt",
    items: [
      { name: "Herrenschnitt",        desc: "Waschen · Schneiden · Stylen",           price: "32" },
      { name: "Kinderschnitt",         desc: "bis 12 Jahre",                           price: "22" },
    ],
  },
  {
    category: "Fade & Styling",
    items: [
      { name: "Skin / Low / Mid Fade", desc: "Präziser Übergang, sauber ausgearbeitet", price: "28" },
      { name: "Shape Up",              desc: "Konturenpflege & Lineup",                price: "18" },
      { name: "Schnitt + Fade",        desc: "Schnitt · Fade · komplett in einem",      price: "38" },
    ],
  },
  {
    category: "Bart",
    items: [
      { name: "Bartpflege",            desc: "Form · Pflege · Finish",                 price: "18" },
      { name: "Rasur",                 desc: "Hot Towel · Klinge · Aftercare",         price: "22" },
      { name: "Schnitt + Bart",        desc: "Der komplette Look",                     price: "44" },
    ],
  },
]

export function Services() {
  return (
    <section
      id="leistungen"
      style={{ backgroundColor: "#1c1f1f" }}
      className="py-24 md:py-56"
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 md:px-20">

        {/* Section-Header */}
        <motion.div
          className="mb-16 md:mb-36"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <p
            className="text-[10px] tracking-[0.42em] uppercase mb-7 font-medium"
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
            Dein Stil.{" "}
            <span style={{ color: "rgba(255,255,255,0.18)" }}>Unser Handwerk.</span>
          </h2>
        </motion.div>

        {/* Service-Gruppen */}
        <div>
          {SERVICES.map((group, gi) => (
            <div key={group.category}>

              {/* Trenner zwischen Gruppen */}
              {gi > 0 && (
                <div
                  className="my-14 md:my-28"
                  style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }}
                />
              )}

              {/* Kategorie-Name — zentriert, dezent */}
              <motion.div
                className="text-center mb-10 md:mb-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: EASE, delay: gi * 0.06 }}
              >
                <span
                  className="font-display font-light italic"
                  style={{
                    fontSize: "clamp(1rem, 1.7vw, 1.3rem)",
                    color: "rgba(255,255,255,0.22)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {group.category}
                </span>
              </motion.div>

              {/* Leistungen */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, ease: EASE, delay: gi * 0.06 + 0.08 }}
              >
                {group.items.map((item, ii) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-10 group/item"
                    style={{
                      paddingTop: ii === 0 ? 0 : "clamp(3rem, 5vw, 4.5rem)",
                    }}
                  >
                    {/* Links: Name + Beschreibung */}
                    <div>
                      <div
                        className="font-light transition-colors duration-500 group-hover/item:text-white"
                        style={{
                          fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                          color: "#E8E2D8",
                          letterSpacing: "-0.014em",
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="mt-2.5"
                        style={{
                          fontSize: "12px",
                          color: "rgba(160,136,104,0.68)",
                          letterSpacing: "0.12em",
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>

                    {/* Rechts: Preis */}
                    <div className="shrink-0 text-right">
                      <div
                        className="font-display font-light leading-none transition-colors duration-500 group-hover/item:text-[#c4a882]"
                        style={{
                          fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)",
                          color: "#a08868",
                          letterSpacing: "-0.028em",
                        }}
                      >
                        {item.price}
                        <span
                          style={{
                            fontSize: "0.38em",
                            marginLeft: "0.1em",
                            opacity: 0.75,
                            verticalAlign: "super",
                          }}
                        >
                          €
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.18)",
                          letterSpacing: "0.3em",
                          marginTop: "5px",
                          textTransform: "uppercase",
                        }}
                      >
                        ab
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 md:mt-44 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p
            className="text-[11.5px] leading-relaxed"
            style={{ color: "#383432" }}
          >
            Alle Preise inkl. MwSt. · Kein Schnell-Schnell.
          </p>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2.5 text-[10.5px] tracking-[0.22em] uppercase font-medium px-8 h-11 rounded-full"
            style={{
              color: "#6a6460",
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
