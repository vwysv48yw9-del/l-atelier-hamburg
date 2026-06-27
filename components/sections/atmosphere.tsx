"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

export function Atmosphere() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section
      ref={ref}
      aria-hidden="true"
      className="relative overflow-hidden"
      style={{ height: "clamp(320px, 52vw, 680px)" }}
    >
      {/* Parallax-Bild */}
      <motion.div className="absolute inset-0" style={{ y, scale: 1.18 }}>
        <img
          src="https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?auto=format&fit=crop&w=1920&h=900&q=90"
          alt="L'Atelier Hamburg — Salon-Atmosphäre"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 38%" }}
        />
      </motion.div>

      {/* Dunkel-Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(6,5,4,0.52)" }}
      />

      {/* Oben Scrim — Übergang von Reviews (hell) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-10"
        style={{
          height: "140px",
          background: "linear-gradient(to bottom, rgba(250,248,245,1) 0%, rgba(250,248,245,0) 100%)",
        }}
      />

      {/* Unten Scrim — Übergang zu Contact (dunkel) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
        style={{
          height: "120px",
          background: "linear-gradient(to top, rgba(28,31,31,1) 0%, transparent 100%)",
        }}
      />

      {/* Zitat — editorial, mittig */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
      >
        <p
          className="font-display font-light italic leading-snug"
          style={{
            fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
            color: "rgba(255,255,255,0.88)",
            maxWidth: "22ch",
            letterSpacing: "-0.01em",
          }}
        >
          Inhabergeführt. Persönlich. Hamburg.
        </p>
        <div
          className="mt-5 h-px w-8"
          style={{ backgroundColor: "rgba(160,136,104,0.55)" }}
        />
      </motion.div>
    </section>
  )
}
