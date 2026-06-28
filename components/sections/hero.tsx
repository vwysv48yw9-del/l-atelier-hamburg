"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imgY     = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"])
  const fade     = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >

      {/* ── Foto ── */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src="/images/innen.png"
          alt="L'Atelier Hamburg — Innenansicht des Salons"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover animate-kenburns"
          style={{ objectPosition: "55% 30%" }}
        />
      </motion.div>

      {/* ── Overlay-System ── */}

      {/* Basis-Dimmer — so wenig wie möglich */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(4,3,2,0.08)" }}
      />

      {/* Navigation-Scrim oben */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "22%",
          background: "linear-gradient(to bottom, rgba(4,3,2,0.55) 0%, transparent 100%)",
        }}
      />

      {/* Text-Zone unten — präzise abgestimmt */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "68%",
          background: "linear-gradient(to top, rgba(4,3,2,0.96) 0%, rgba(4,3,2,0.72) 22%, rgba(4,3,2,0.30) 50%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex flex-col justify-end"
        style={{ minHeight: "100svh", y: contentY, opacity: fade }}
      >
        <div className="w-full max-w-6xl mx-auto px-8 sm:px-12 md:px-20 pb-32 sm:pb-28 md:pb-36">

          {/* Eyebrow — Text erscheint, dann zieht die Linie sich nach rechts */}
          <div className="flex items-center gap-5 mb-7 overflow-hidden">
            <motion.p
              className="shrink-0 text-[9px] sm:text-[10px] tracking-[0.38em] uppercase font-medium"
              style={{ color: "#a08868" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
            >
              {SALON.district} · {SALON.street}
            </motion.p>
            <motion.div
              className="flex-1 h-px"
              style={{ backgroundColor: "rgba(160,136,104,0.40)", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.72, duration: 1.5, ease: EASE }}
            />
          </div>

          {/* Headline */}
          <motion.h1
            className="font-display font-light mb-10 md:mb-12"
            style={{
              color:         "#F7F4EF",
              fontSize:      "clamp(3.2rem, 6.5vw, 5.6rem)",
              lineHeight:    1.08,
              letterSpacing: "-0.028em",
              maxWidth:      "13ch",
            }}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 1.0, ease: EASE }}
          >
            Schnitte,<br />
            <span style={{ color: "rgba(247,244,239,0.75)" }}>die sitzen.</span>
          </motion.h1>

          {/* CTA-Gruppe */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.9, ease: EASE }}
          >
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 font-semibold text-white w-full sm:w-auto"
              style={{
                fontSize:        "12.5px",
                letterSpacing:   "0.08em",
                textTransform:   "uppercase",
                backgroundColor: "rgba(160,136,104,0.16)",
                border:          "1px solid rgba(160,136,104,0.55)",
                backdropFilter:  "blur(12px)",
                height:          "56px",
                paddingLeft:     "32px",
                paddingRight:    "36px",
                borderRadius:    "9999px",
              }}
              whileHover={{
                backgroundColor: "rgba(160,136,104,0.28)",
                borderColor:     "rgba(160,136,104,0.80)",
                scale:           1.015,
                y:               -1,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            >
              <WhatsAppIcon />
              Jetzt Termin anfragen
            </motion.a>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll-Indikator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.9 }}
      >
        <motion.div
          className="w-px"
          style={{
            height:     "40px",
            background: "linear-gradient(to bottom, rgba(160,136,104,0.0), rgba(160,136,104,0.55))",
          }}
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </motion.section>
  )
}
