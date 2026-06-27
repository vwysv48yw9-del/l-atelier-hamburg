"use client"

import { motion } from "motion/react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const TODO_REVIEWS: Array<{
  name: string
  date: string
  stars: number
  text: string
}> = [
  {
    name:  "Michelle",
    date:  "vor einem Monat",
    stars: 5,
    text:  "War heute das erste Mal bei L'Atelier und bin wirklich begeistert. Man wird super freundlich empfangen und vor allem sehr ehrlich und professionell beraten.",
  },
  {
    name:  "Jamil Oo",
    date:  "vor einem Monat",
    stars: 5,
    text:  "Meine Freundin und ich sind absolut begeistert von diesem Friseursalon! Super freundliches Team, tolle Atmosphäre und unsere Haarschnitte sind perfekt geworden.",
  },
  {
    name:  "Jakub Ulatowski",
    date:  "vor 2 Monaten",
    stars: 5,
    text:  "Wenn Sie möchten, dass Ihr Friseur auch Ihr Freund ist, kann ich diesen Salon wärmstens empfehlen. Die Professionalität dort ist in Hamburg seit Langem beispiellos.",
  },
  {
    name:  "Florian Kaßner",
    date:  "vor einem Monat",
    stars: 5,
    text:  "Sehr angenehme Atmosphäre und ein wirklich gutes Ergebnis. Man merkt, dass hier mit Sorgfalt gearbeitet wird. Komme auf jeden Fall wieder.",
  },
]

const SCORE = SALON.google.score
const COUNT = SALON.google.count

function Stars({ count = 5, size = 11 }: { count?: number; size?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 10 10" fill="#a08868" aria-hidden>
          <path d="M5 0l1.12 3.44H9.76L6.82 5.57l1.12 3.44L5 7.01l-2.94 2 1.12-3.44L.24 3.44H3.88L5 0z"/>
        </svg>
      ))}
    </span>
  )
}

function ReviewCard({
  review,
  delay,
  offsetY = 0,
}: {
  review: typeof TODO_REVIEWS[0]
  delay: number
  offsetY?: number
}) {
  return (
    <motion.article
      className="review-card flex flex-col p-8 rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(27,30,30,0.06)",
        boxShadow: "0 2px 16px rgba(27,30,30,0.05), 0 1px 3px rgba(27,30,30,0.04)",
        marginTop: offsetY,
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      <div className="flex items-center justify-between mb-5">
        <Stars count={review.stars} size={10} />
        <span className="text-[10.5px] uppercase tracking-[0.16em]" style={{ color: "#bbb" }}>
          {review.date}
        </span>
      </div>

      {review.text && (
        <p
          className="font-display font-light italic leading-relaxed mb-6 flex-1"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "#3a3734" }}
        >
          „{review.text}"
        </p>
      )}

      <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(27,30,30,0.06)" }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
          style={{ backgroundColor: "#f0eeeb", color: "#6a6460" }}
        >
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="text-[12.5px] font-semibold" style={{ color: "#1c1f1f" }}>{review.name}</div>
          <div className="text-[11px]" style={{ color: "#b0aaa4" }}>Google-Rezension</div>
        </div>
      </div>
    </motion.article>
  )
}

export function Reviews() {
  if (TODO_REVIEWS.length === 0) {
    return (
      <section id="bewertungen" className="py-28 md:py-40" style={{ backgroundColor: "#faf8f5" }}>
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20">
          <p className="text-[10px] tracking-[0.38em] uppercase mb-5 font-medium" style={{ color: "#a08868" }}>
            Bewertungen
          </p>
          <h2 className="font-display font-light mb-8" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1c1f1f" }}>
            Das sagen Kunden.
          </h2>
        </div>
      </section>
    )
  }

  const left  = TODO_REVIEWS.filter((_, i) => i % 2 === 0)
  const right = TODO_REVIEWS.filter((_, i) => i % 2 === 1)

  return (
    <section id="bewertungen" className="relative py-28 md:py-40" style={{ backgroundColor: "#faf8f5" }}>

      {/* Scrim oben – Schatten von Craft (dunkel) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-10"
        style={{
          height: "100px",
          background: "linear-gradient(to bottom, rgba(6,5,4,0.07) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-8 sm:px-12 md:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20 mb-16 md:mb-24">

          {/* Score */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <div
              className="font-display font-light leading-none mb-3"
              style={{ fontSize: "clamp(6rem, 14vw, 11rem)", color: "#e8e2d8", letterSpacing: "-0.04em" }}
            >
              {SCORE}
            </div>
            <Stars count={5} size={14} />
          </motion.div>

          {/* Text + Meta */}
          <motion.div
            className="pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          >
            <p
              className="text-[10px] tracking-[0.38em] uppercase mb-5 font-medium"
              style={{ color: "#a08868" }}
            >
              Kundenstimmen
            </p>
            <h2
              className="font-display font-light leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", color: "#1c1f1f", letterSpacing: "-0.015em" }}
            >
              Was unsere Kunden<br className="hidden sm:block" /> sagen.
            </h2>
            <p className="text-[12.5px]" style={{ color: "#b0a89e" }}>
              {COUNT} verifizierte Bewertungen · Google
            </p>
          </motion.div>
        </div>

        {/* Masonry-ähnliches 2-Spalten-Layout */}
        <div className="hidden md:grid grid-cols-2 gap-5 items-start">
          {/* Linke Spalte */}
          <div className="flex flex-col gap-5">
            {left.map((r, i) => (
              <ReviewCard key={r.name} review={r} delay={i * 0.08} />
            ))}
          </div>
          {/* Rechte Spalte – leicht nach unten versetzt */}
          <div className="flex flex-col gap-5" style={{ paddingTop: "2.5rem" }}>
            {right.map((r, i) => (
              <ReviewCard key={r.name} review={r} delay={0.1 + i * 0.08} />
            ))}
          </div>
        </div>

        {/* Mobile: 1 Spalte */}
        <div className="flex flex-col gap-4 md:hidden">
          {TODO_REVIEWS.map((r, i) => (
            <ReviewCard key={r.name} review={r} delay={i * 0.07} />
          ))}
        </div>

      </div>
    </section>
  )
}

