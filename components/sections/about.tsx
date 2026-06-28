"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } },
})

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax – Bild bewegt sich langsam nach oben beim Scrollen
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <section ref={sectionRef} id="salon" className="grid grid-cols-1 lg:grid-cols-2">

      {/* Außenfoto links – mit Parallax */}
      <motion.div
        className="img-zoom-wrap relative overflow-hidden"
        style={{ minHeight: "clamp(400px, 58vw, 740px)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        {/* Parallax-Container – scale:1.12 gibt Spielraum für Parallax + Hover-Zoom */}
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: 1.08 }}>
          <Image
            src="/images/aussen.png"
            alt="L'Atelier Hamburg – Außenansicht Reinskamp 2A"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover [object-position:0%_22%]"
          />
        </motion.div>

        {/* Vignette oben – Übergang von Services (dunkel) */}
        <div
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{
            height: "110px",
            background: "linear-gradient(to bottom, rgba(16,18,18,0.55) 0%, transparent 100%)",
          }}
        />

        {/* Vignette unten – Übergang zu Craft (dunkel) */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "90px",
            background: "linear-gradient(to top, rgba(16,18,18,0.4) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Text rechts */}
      <motion.div
        className="flex flex-col justify-center px-8 py-16 sm:px-12 sm:py-20 lg:px-16 xl:px-24"
        style={{ backgroundColor: "#f0eeeb" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.p
          variants={fadeUp()}
          className="text-[10px] tracking-[0.38em] uppercase mb-7 font-medium"
          style={{ color: "#a08868" }}
        >
          Der Salon
        </motion.p>

        <motion.h2
          variants={fadeUp(0.05)}
          className="font-display font-light leading-tight mb-9"
          style={{
            fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
            color: "#1c1f1f",
            letterSpacing: "-0.015em",
          }}
        >
          Gegründet mit<br />
          einer Überzeugung.
        </motion.h2>

        <motion.div variants={fadeUp(0.1)} className="flex flex-col gap-4 mb-10">
          <p className="text-[14.5px] leading-relaxed font-medium" style={{ color: "#282520" }}>
            Dass ein Haarschnitt mehr ist als ein Haarschnitt —
            wenn derjenige, der ihn macht, wirklich zuhört.
          </p>
          <p className="text-[14.5px] leading-relaxed" style={{ color: "#4a4744" }}>
            Wir führen L&apos;Atelier inhabergeführt in Hamburg-Billstedt.
            Kein Filialkonzept. Keine anonyme Buchung. Du kommst rein, wir kennen dich —
            oder lernen dich kennen.
          </p>
        </motion.div>

        <motion.div
          className="pt-9"
          style={{ borderTop: "1px solid rgba(27,30,30,0.1)" }}
          variants={{
            hidden:  { opacity: 0, y: 16, scale: 0.88 },
            visible: { opacity: 1, y: 0,  scale: 1,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          <div
            className="font-display font-light mb-1.5"
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.4rem)", color: "#1c1f1f", letterSpacing: "-0.02em" }}
          >
            1:1
          </div>
          <div className="text-[9.5px] uppercase tracking-[0.2em]" style={{ color: "#c0b8b0" }}>
            Persönlich
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
