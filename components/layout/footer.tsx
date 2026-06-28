"use client"

import { motion } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

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
        className="text-center pt-8 pb-0 select-none pointer-events-none overflow-hidden"
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

      {/* Rechtlicher Abschluss */}
      <motion.div
        className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p style={{ fontSize: "11px", color: "#2c2a28", letterSpacing: "0.02em" }}>
          © {new Date().getFullYear()}{" "}L&apos;Atelier · Hamburg
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
