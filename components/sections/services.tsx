"use client"

import { Phone } from "lucide-react"
import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const s = (delay: number) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

const SERVICES = [
  {
    category: "Schnitt",
    items: [
      { name: "Herrenschnitt",    desc: "Waschen · Schneiden · Stylen",  price: "ab 32 €" },
      { name: "Kinderschnitt",    desc: "bis 12 Jahre",                   price: "ab 22 €" },
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
      { name: "Bartpflege",       desc: "Form · Pflege · Finish",           price: "ab 18 €" },
      { name: "Rasur",            desc: "Hot Towel · Klinge · Aftercare",   price: "ab 22 €" },
      { name: "Schnitt + Bart",   desc: "Der komplette Look",               price: "ab 44 €" },
    ],
  },
]

export function Services() {
  return (
    <section
      id="leistungen"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#1b1e1e" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-14 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p
            className="text-[11px] tracking-[0.32em] uppercase mb-4 font-medium"
            style={{ color: "#a08868" }}
          >
            Leistungen & Preise
          </p>
          <h2
            className="font-display font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#F5F3EE" }}
          >
            Klare Preise.{" "}
            <span style={{ color: "#5a5a5a" }}>Keine Überraschungen.</span>
          </h2>
        </motion.div>

        {/* Preisliste */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {SERVICES.map((group, gi) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.07, delayChildren: gi * 0.1 } },
              }}
            >
              {/* Kategorie-Label */}
              <motion.div
                variants={s(0)}
                className="text-[11px] uppercase tracking-[0.25em] font-semibold pb-4 mb-6"
                style={{ color: "#C8C2B8", borderBottom: "1px solid #2e2e2e" }}
              >
                {group.category}
              </motion.div>

              {/* Items */}
              <div className="flex flex-col gap-6">
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={s(0)}
                    className="flex items-start justify-between gap-6"
                  >
                    <div>
                      <div className="text-[15px] font-medium mb-0.5" style={{ color: "#F5F3EE" }}>
                        {item.name}
                      </div>
                      <div className="text-[13px]" style={{ color: "#9B958B" }}>
                        {item.desc}
                      </div>
                    </div>
                    <div className="text-[15px] font-bold shrink-0 tabular-nums" style={{ color: "#a08868" }}>
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
          className="mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ borderTop: "1px solid #2e2e2e" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-[13px]" style={{ color: "#9B958B" }}>
            Alle Preise inkl. MwSt. · Kein Schnell-Schnell.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase font-semibold border px-6 h-10 rounded-full transition-colors hover:text-white hover:border-white/40"
            style={{ color: "#C8C2B8", borderColor: "#444" }}
          >
            <Phone size={12} />
            Jetzt Termin anfragen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
