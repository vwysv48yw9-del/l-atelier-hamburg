"use client"

import { Phone, MapPin, Clock } from "lucide-react"
import { motion } from "motion/react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay } },
})

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#131210", paddingBottom: "env(safe-area-inset-bottom, 0px)" }} className="border-t border-white/[0.05]">

      {/* Hauptbereich */}
      <motion.div
        className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20 py-20 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand */}
          <motion.div className="md:col-span-5" variants={fadeUp()}>
            <p className="font-display font-light italic text-white mb-1" style={{ fontSize: "1.25rem" }}>
              L&apos;Atelier
            </p>
            <p className="text-[9px] tracking-[0.32em] uppercase mb-6" style={{ color: "#a08868" }}>
              Hair · Style
            </p>
            <p className="text-[13.5px] leading-relaxed max-w-[26ch]" style={{ color: "#7a7570" }}>
              Inhabergeführter Herrensalon<br />in Hamburg-Billstedt.
            </p>
            <p className="text-[12px] mt-4 leading-relaxed" style={{ color: "#464240" }}>
              Reinskamp 2A · 22117 Hamburg
            </p>
          </motion.div>

          {/* Kontakt */}
          <motion.div className="md:col-span-3" variants={fadeUp(0.08)}>
            <p className="text-[9.5px] uppercase tracking-[0.28em] font-semibold mb-7" style={{ color: "#464240" }}>
              Kontakt
            </p>
            <div className="flex flex-col gap-4">
              <motion.a
                href={SALON.phoneHref}
                className="flex items-center gap-3 text-[13px] transition-colors duration-300 hover:text-white"
                style={{ color: "#B0ABA3" }}
                whileHover={{ x: 2 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                <Phone size={11} strokeWidth={1.5} style={{ color: "#a08868" }} className="shrink-0" />
                {SALON.phone}
              </motion.a>
              <div className="flex items-start gap-3 text-[13px]" style={{ color: "#7a7570" }}>
                <MapPin size={11} strokeWidth={1.5} style={{ color: "#a08868" }} className="shrink-0 mt-0.5" />
                <span>{SALON.street} · {SALON.city}</span>
              </div>
              {SALON.email && (
                <motion.a
                  href={`mailto:${SALON.email}`}
                  className="text-[13px] transition-colors duration-300 hover:text-white"
                  style={{ color: "#7a7570" }}
                  whileHover={{ x: 2 }}
                  transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                >
                  {SALON.email}
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Öffnungszeiten */}
          <motion.div className="md:col-span-4" variants={fadeUp(0.16)}>
            <p className="text-[9.5px] uppercase tracking-[0.28em] font-semibold mb-7" style={{ color: "#464240" }}>
              Öffnungszeiten
            </p>
            <div className="flex items-start gap-3">
              <Clock size={11} strokeWidth={1.5} style={{ color: "#a08868" }} className="shrink-0 mt-0.5" />
              <div className="text-[13px] leading-relaxed flex flex-col gap-1">
                <div style={{ color: "#B0ABA3" }}>{SALON.hours.weekdays}</div>
                <div style={{ color: "#B0ABA3" }}>{SALON.hours.saturday}</div>
                <div className="mt-1" style={{ color: "#464240" }}>{SALON.hours.closed}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
      >
        <p className="text-[11.5px]" style={{ color: "#363330" }}>
          © {new Date().getFullYear()} L&apos;Atelier · Hamburg
        </p>
        <div className="flex items-center gap-7">
          {[
            { href: "/impressum",  label: "Impressum"   },
            { href: "/datenschutz", label: "Datenschutz" },
          ].map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className="text-[11.5px] transition-colors duration-300 hover:text-white"
              style={{ color: "#363330" }}
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
