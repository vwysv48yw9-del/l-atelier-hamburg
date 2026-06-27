"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

export function VisualBreak() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "clamp(480px, 82vh, 960px)" }}
    >
      {/* Parallax-Bild — andere Ausschnitt als Hero (Stühle, Spiegel, Boden) */}
      <motion.div className="absolute inset-0" style={{ y, scale: 1.22 }}>
        <Image
          src="/images/innen.png"
          alt="L'Atelier Hamburg — Atmosphäre"
          fill
          loading="lazy"
          quality={95}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 62%" }}
        />
      </motion.div>

      {/* Basis-Verdunkelung — Bild soll wirken, nicht verschwinden */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(5,4,3,0.38)" }}
      />

      {/* Oben — Übergang von Services (dunkel) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "280px",
          background: "linear-gradient(to bottom, rgba(28,31,31,1) 0%, rgba(28,31,31,0.55) 40%, transparent 100%)",
        }}
      />

      {/* Unten — subtiler Abschluss */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "160px",
          background: "linear-gradient(to top, rgba(10,12,12,0.7) 0%, transparent 100%)",
        }}
      />

      {/* Zitat — mittig, viel Raum drumherum */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <motion.p
          className="text-[9px] tracking-[0.44em] uppercase font-medium mb-8"
          style={{ color: "rgba(160,136,104,0.85)" }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          Das Handwerk
        </motion.p>

        <motion.blockquote
          className="font-display font-light italic leading-[1.14]"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
            color: "rgba(247,244,239,0.93)",
            maxWidth: "18ch",
            letterSpacing: "-0.025em",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.05, ease: EASE, delay: 0.12 }}
        >
          Jeder Schnitt bekommt<br />
          die Zeit, die er verdient.
        </motion.blockquote>

        <motion.div
          className="mt-10 h-px w-9"
          style={{ backgroundColor: "rgba(160,136,104,0.45)" }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
        />
      </div>
    </section>
  )
}
