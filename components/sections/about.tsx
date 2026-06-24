"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export function About() {
  return (
    <section id="salon" className="grid grid-cols-1 lg:grid-cols-2">

      {/* Innenfoto links */}
      <motion.div
        className="relative"
        style={{ minHeight: "clamp(360px, 55vw, 700px)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: EASE }}
      >
        <Image
          src="/images/innen.png"
          alt="Innenraum L'Atelier Hamburg – moderner Friseursalon"
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
          style={{ filter: "contrast(1.04) brightness(0.95) saturate(1.05)" }}
        />
      </motion.div>

      {/* Text rechts */}
      <motion.div
        className="flex flex-col justify-center px-6 py-14 sm:px-8 sm:py-16 lg:px-14 xl:px-20"
        style={{ backgroundColor: "#f0eeeb" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.32em] uppercase mb-6 font-medium"
          style={{ color: "#a08868" }}
        >
          Der Salon
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-display font-light leading-tight mb-8"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1b1e1e" }}
        >
          Ein moderner Salon<br />
          in Hamburg-Billstedt.
        </motion.h2>

        <motion.div variants={fadeUp} className="flex flex-col gap-4 mb-10">
          <p className="text-[15px] leading-relaxed font-medium" style={{ color: "#2a2724" }}>
            Klare Linien. Saubere Arbeit. Entspannte Atmosphäre.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: "#4a4744" }}>
            Kein Luxus-Tempel. Kein Schnellschneiden.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: "#4a4744" }}>
            Inhabergeführt und persönlich — du weißt wer deine Haare schneidet.
            Einfach gute Haarschnitte, jedes Mal.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-3 gap-6 mb-10 pt-8"
          style={{ borderTop: "1px solid rgba(27,30,30,0.12)" }}
        >
          {[
            { val: "9+",  label: "Jahre Erfahrung" },
            { val: "1:1", label: "Persönlich" },
            { val: SALON.google.score, label: "Google Score" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-light text-2xl" style={{ color: "#1b1e1e" }}>{s.val}</div>
              <div className="text-[11px] uppercase tracking-wide mt-1" style={{ color: "#999" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase font-semibold border-b pb-1 transition-colors hover:text-[#a08868]"
            style={{ color: "#1b1e1e", borderColor: "rgba(27,30,30,0.2)" }}
          >
            Termin vereinbaren
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
