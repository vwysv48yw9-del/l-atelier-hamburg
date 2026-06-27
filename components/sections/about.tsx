"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay } },
})

export function About() {
  return (
    <section id="salon" className="grid grid-cols-1 lg:grid-cols-2">

      {/* Außenfoto links */}
      <motion.div
        className="relative overflow-hidden"
        style={{ minHeight: "clamp(400px, 58vw, 740px)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1.0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image
            src="/images/aussen.png"
            alt="L'Atelier Hamburg – Außenansicht Reinskamp 2A"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: "20% 22%" }}
          />
        </motion.div>
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
          style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", color: "#1c1f1f" }}
        >
          Ein moderner Salon<br />
          in Hamburg-Billstedt.
        </motion.h2>

        <motion.div variants={fadeUp(0.1)} className="flex flex-col gap-4 mb-12">
          <p className="text-[14.5px] leading-relaxed font-medium" style={{ color: "#282520" }}>
            Klare Linien. Saubere Arbeit. Entspannte Atmosphäre.
          </p>
          <p className="text-[14.5px] leading-relaxed" style={{ color: "#4a4744" }}>
            Kein Luxus-Tempel. Kein Schnellschneiden.
          </p>
          <p className="text-[14.5px] leading-relaxed" style={{ color: "#4a4744" }}>
            Inhabergeführt und persönlich — du weißt, wer deine Haare schneidet.
            Einfach gute Haarschnitte, jedes Mal.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp(0.15)}
          className="grid grid-cols-3 gap-6 mb-12 pt-9"
          style={{ borderTop: "1px solid rgba(27,30,30,0.1)" }}
        >
          {[
            { val: "9+",  label: "Jahre Erfahrung" },
            { val: "1:1", label: "Persönlich" },
            { val: SALON.google.score, label: "Google Score" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-light text-[1.6rem] mb-1" style={{ color: "#1c1f1f" }}>{s.val}</div>
              <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "#aaa" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp(0.2)}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase font-semibold border-b pb-1.5 transition-colors duration-300 hover:text-[#a08868]"
            style={{ color: "#1c1f1f", borderColor: "rgba(27,30,30,0.15)" }}
          >
            Termin vereinbaren
            <ArrowRight size={11} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
