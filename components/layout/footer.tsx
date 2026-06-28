"use client"

import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay } },
})

const HOURS = [
  { days: "Di – Fr", time: "10:00 – 20:00 Uhr" },
  { days: "Sa",      time: "10:00 – 20:00 Uhr" },
  { days: "Mo + So", time: "Geschlossen"        },
]

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111210",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Brand-Stempel */}
      <motion.div
        className="text-center pt-10 pb-0 select-none pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <p
          className="font-display font-light italic leading-none"
          style={{
            fontSize:      "clamp(5rem, 14vw, 11rem)",
            color:         "rgba(255,255,255,0.045)",
            letterSpacing: "-0.025em",
          }}
        >
          L&apos;Atelier
        </p>
      </motion.div>

      {/* Hauptinhalt */}
      <motion.div
        className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20 py-12 md:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand */}
          <motion.div className="md:col-span-5" variants={fadeUp()}>
            <p
              className="font-display font-light italic mb-1"
              style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.82)", letterSpacing: "-0.01em" }}
            >
              L&apos;Atelier
            </p>
            <p
              className="tracking-[0.3em] uppercase mb-6"
              style={{ fontSize: "8px", color: "#a08868" }}
            >
              Hair · Style
            </p>
            <p
              className="leading-relaxed mb-2"
              style={{ fontSize: "13px", color: "#555250", maxWidth: "26ch" }}
            >
              Inhabergeführter Herrensalon<br />in Hamburg-Billstedt.
            </p>
            <p
              style={{ fontSize: "12px", color: "#383634", letterSpacing: "0.01em" }}
            >
              Reinskamp 2A · 22117 Hamburg
            </p>

          </motion.div>

          {/* Kontakt */}
          <motion.div className="md:col-span-3" variants={fadeUp(0.07)}>
            <p
              className="uppercase tracking-[0.26em] font-medium mb-5"
              style={{ fontSize: "9px", color: "#363432" }}
            >
              Kontakt
            </p>
            <div className="flex flex-col gap-3">
              <motion.a
                href={SALON.phoneHref}
                className="text-[13px] transition-colors duration-300 hover:text-white"
                style={{ color: "#7a7674" }}
                whileHover={{ x: 2 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                {SALON.phone}
              </motion.a>
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] transition-colors duration-300 hover:text-white"
                style={{ color: "#7a7674" }}
                whileHover={{ x: 2 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                WhatsApp
              </motion.a>
              <motion.a
                href={SALON.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] transition-colors duration-300 hover:text-white"
                style={{ color: "#7a7674" }}
                whileHover={{ x: 2 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                Route starten
              </motion.a>
            </div>
          </motion.div>

          {/* Öffnungszeiten */}
          <motion.div className="md:col-span-4" variants={fadeUp(0.14)}>
            <p
              className="uppercase tracking-[0.26em] font-medium mb-5"
              style={{ fontSize: "9px", color: "#363432" }}
            >
              Öffnungszeiten
            </p>
            <div className="flex flex-col gap-2">
              {HOURS.map(({ days, time }) => (
                <div key={days} className="flex items-baseline justify-between gap-4">
                  <span style={{ fontSize: "12px", color: "#424040", minWidth: "5.5ch" }}>
                    {days}
                  </span>
                  <span style={{ fontSize: "13px", color: time === "Geschlossen" ? "#363432" : "#7a7674" }}>
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.032)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
      >
        <p style={{ fontSize: "11px", color: "#2c2a28", letterSpacing: "0.02em" }}>
          © {new Date().getFullYear()} L&apos;Atelier · Hamburg
        </p>
        <div className="flex items-center gap-7">
          {[
            { href: "/impressum",   label: "Impressum"   },
            { href: "/datenschutz", label: "Datenschutz" },
          ].map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className="transition-colors duration-300 hover:text-white"
              style={{ fontSize: "11px", color: "#2c2a28", letterSpacing: "0.02em" }}
              whileHover={{ y: -1 }}
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  )
}
