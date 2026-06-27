"use client"

import Image from "next/image"
import { motion } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

export function Craft() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "clamp(480px, 70vh, 820px)" }}>

      {/* Hintergrundbild */}
      <div className="absolute inset-0">
        <Image
          src="/images/innen.png"
          alt="L'Atelier Hamburg – Atmosphäre im Salon"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "65% 45%" }}
        />
      </div>

      {/* Basis-Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(6, 5, 4, 0.70)" }} />

      {/* Horizontaler Verlauf links – Textzone */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: "linear-gradient(to right, rgba(6,5,4,0.88) 0%, rgba(6,5,4,0.52) 45%, transparent 75%)",
        }}
      />

      {/* Scrim oben – Lichtspill von About (hell) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "130px",
          background: "linear-gradient(to bottom, rgba(240,238,235,0.22) 0%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Scrim unten – sanfter Übergang zu Reviews (hell) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "140px",
          background: "linear-gradient(to top, rgba(250,248,245,0.18) 0%, rgba(250,248,245,0.04) 55%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center" style={{ minHeight: "inherit" }}>
        <div className="w-full max-w-6xl mx-auto px-8 sm:px-12 md:px-20 py-24 md:py-32">
          <motion.div
            className="max-w-[560px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
          >
            {/* Label */}
            <motion.div
              className="flex items-center gap-4 mb-10"
              variants={{
                hidden:  { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
            >
              <div className="w-7 h-px" style={{ backgroundColor: "#a08868" }} />
              <span
                className="text-[10px] tracking-[0.38em] uppercase font-medium"
                style={{ color: "#a08868" }}
              >
                Das Handwerk
              </span>
            </motion.div>

            {/* Zitat */}
            <motion.blockquote
              className="font-display font-light mb-8"
              style={{
                color: "#F7F4EF",
                fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
              variants={{
                hidden:  { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
              }}
            >
              Jeder Schnitt bekommt<br />
              die Zeit, die er verdient.
            </motion.blockquote>

            {/* Subtext */}
            <motion.p
              className="text-[14px] leading-relaxed"
              style={{ color: "rgba(200,194,184,0.72)" }}
              variants={{
                hidden:  { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
            >
              Kein Fließband. Kein Stress. Nur sauberes Handwerk —<br className="hidden sm:block" />
              und ein Ergebnis, das sich sehen lassen kann.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
