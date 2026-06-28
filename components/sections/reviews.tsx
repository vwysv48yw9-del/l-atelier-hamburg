"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const TESTIMONIALS = [
  {
    text: "War heute das erste Mal bei L'Atelier und bin wirklich begeistert. Man wird super freundlich empfangen und vor allem sehr ehrlich und professionell beraten.",
    name: "Michelle",
  },
  {
    text: "Sehr angenehme Atmosphäre und ein wirklich gutes Ergebnis. Man merkt, dass hier mit Sorgfalt gearbeitet wird. Komme auf jeden Fall wieder.",
    name: "Florian Kaßner",
  },
  {
    text: "Wenn Sie möchten, dass Ihr Friseur auch Ihr Freund ist, kann ich diesen Salon wärmstens empfehlen. Die Professionalität dort ist in Hamburg seit Langem beispiellos.",
    name: "Jakub Ulatowski",
  },
]

function Stars({ size = 9 }: { size?: number }) {
  return (
    <span className="flex gap-[3px]" aria-hidden>
      {[1,2,3,4,5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 10 10" fill="#a08868">
          <path d="M5 0l1.12 3.44H9.76L6.82 5.57l1.12 3.44L5 7.01l-2.94 2 1.12-3.44L.24 3.44H3.88L5 0z"/>
        </svg>
      ))}
    </span>
  )
}

function Testimonial({ item, index }: { item: typeof TESTIMONIALS[0]; index: number }) {
  const ref     = useRef<HTMLElement>(null)
  const inView  = useInView(ref, { margin: "-35% 0px -35% 0px" })

  return (
    <motion.article
      ref={ref}
      className="py-8 md:py-11"
      style={{ borderTop: "1px solid rgba(27,30,30,0.07)" }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: EASE, delay: index * 0.07 }}
    >
      <motion.div
        animate={{ opacity: inView ? 1 : 0.38 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Zitat */}
        <blockquote
          className="font-display font-light italic leading-[1.35] mb-8 md:mb-10"
          style={{
            fontSize:      "clamp(1.35rem, 2.4vw, 1.95rem)",
            color:         "#1c1f1f",
            letterSpacing: "-0.016em",
            maxWidth:      "46ch",
          }}
        >
          „{item.text}"
        </blockquote>

        {/* Autor */}
        <div className="flex items-center gap-5">
          <Stars size={9} />
          <span
            style={{
              fontSize:      "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color:         "#6a6460",
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              fontSize: "10px",
              color:    "rgba(27,30,30,0.22)",
              letterSpacing: "0.06em",
            }}
          >
            · Google
          </span>
        </div>
      </motion.div>
    </motion.article>
  )
}

export function Reviews() {
  return (
    <section id="bewertungen" className="py-10 md:py-16" style={{ backgroundColor: "#faf8f5" }}>
      <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-20">

        {/* Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <p
            className="text-[10px] tracking-[0.42em] uppercase font-medium mb-6"
            style={{ color: "#a08868" }}
          >
            Kundenstimmen
          </p>

          {/* Score — groß, editorial */}
          <div className="flex items-baseline gap-5 mb-3">
            <span
              className="font-display font-light leading-none"
              style={{
                fontSize:      "clamp(3.2rem, 7vw, 5.6rem)",
                color:         "#e8e2d8",
                letterSpacing: "-0.04em",
              }}
            >
              {SALON.google.score}
            </span>
            <div className="flex flex-col gap-2 pb-2">
              <Stars size={12} />
              <span
                style={{
                  fontSize:      "11px",
                  color:         "rgba(27,30,30,0.35)",
                  letterSpacing: "0.08em",
                }}
              >
                {SALON.google.count}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div>
          {TESTIMONIALS.map((item, i) => (
            <Testimonial key={item.name} item={item} index={i} />
          ))}
          {/* Abschlusslinie */}
          <div style={{ height: "1px", backgroundColor: "rgba(27,30,30,0.07)" }} />
        </div>

      </div>
    </section>
  )
}
