"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

export function Location() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "clamp(500px, 78vh, 880px)" }}
    >
      {/* Parallax-Bild — Außenansicht, Schild deutlich sichtbar */}
      <motion.div className="absolute inset-0" style={{ y, scale: 1.20 }}>
        <Image
          src="/images/aussen.png"
          alt="L'Atelier Hamburg — Reinskamp 2A, Hamburg-Billstedt"
          fill
          loading="lazy"
          quality={95}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "22% 28%" }}
        />
      </motion.div>

      {/* Sehr leichtes Overlay — das Foto soll maximal wirken */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(5,4,3,0.22)" }}
      />

      {/* Oben — Übergang von Reviews (hell) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, rgba(250,248,245,1) 0%, rgba(250,248,245,0) 100%)",
        }}
      />

      {/* Unten — in Kontakt (dunkel) übergehen */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to top, rgba(28,31,31,1) 0%, transparent 100%)",
        }}
      />

      {/* Adresse — unten links, wie eine Bildunterschrift */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-8 sm:px-12 md:px-20 pb-14 md:pb-16"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        <p
          className="text-[9px] tracking-[0.42em] uppercase font-medium mb-2.5"
          style={{ color: "rgba(160,136,104,0.80)" }}
        >
          Standort
        </p>
        <p
          className="font-display font-light italic"
          style={{
            fontSize: "clamp(1.15rem, 2.2vw, 1.75rem)",
            color: "rgba(247,244,239,0.88)",
            letterSpacing: "-0.01em",
          }}
        >
          Reinskamp 2A · Hamburg-Billstedt
        </p>
      </motion.div>
    </section>
  )
}
