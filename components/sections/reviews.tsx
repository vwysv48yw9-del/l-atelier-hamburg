"use client"

import { motion } from "motion/react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

// ─── TODO: Echte Google-Bewertungen eintragen ──────────────────────────────
// Ersetze die Platzhalter-Reviews durch verifizierte Kundenstimmen.
// Google-Score und Anzahl der Rezensionen ebenfalls aktualisieren.
//
// Format:
// { name: "Vorname", location: "Ort", date: "vor X Monaten", stars: 5, text: "..." }
//
// KEINE erfundenen Bewertungen verwenden.
// ─────────────────────────────────────────────────────────────────────────────

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
    text:  "",
  },
]

const TODO_SCORE = SALON.google.score
const TODO_COUNT = SALON.google.count

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 10 10" fill="#a08868" aria-hidden>
          <path d="M5 0l1.12 3.44H9.76L6.82 5.57l1.12 3.44L5 7.01l-2.94 2 1.12-3.44L.24 3.44H3.88L5 0z"/>
        </svg>
      ))}
    </span>
  )
}

export function Reviews() {
  // Wenn keine echten Bewertungen vorhanden: Platzhalter-Sektion anzeigen
  if (TODO_REVIEWS.length === 0) {
    return (
      <section id="bewertungen" className="py-20 md:py-28" style={{ backgroundColor: "#faf8f5" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: "#a08868" }}>
              Bewertungen
            </p>
            <h2
              className="font-display font-light leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1b1e1e" }}
            >
              Das sagen Kunden.
            </h2>
            <div
              className="rounded-xl px-6 py-8 border-2 border-dashed"
              style={{ borderColor: "#d8d2c8", backgroundColor: "#f5f3f0" }}
            >
              <p className="text-[13px] font-mono" style={{ color: "#9B958B" }}>
                TODO: Echte Google-Bewertungen eintragen.<br />
                Daten aus Google Business Profile kopieren und in<br />
                <code className="bg-white/60 px-1 rounded">components/sections/reviews.tsx</code> einfügen.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Stars count={5} />
                <span className="text-[13px]" style={{ color: "#aaa" }}>
                  {TODO_SCORE} · {TODO_COUNT} · Google
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="bewertungen" className="py-20 md:py-28" style={{ backgroundColor: "#faf8f5" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <motion.div
          className="flex flex-col md:flex-row md:items-end gap-6 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="flex-1">
            <div
              className="font-display font-light italic leading-none mb-3"
              style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", color: "#ddd8d0" }}
            >
              {TODO_SCORE}
            </div>
            <h2
              className="font-display font-light leading-tight"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", color: "#1b1e1e" }}
            >
              Das sagen Kunden.
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Stars count={5} />
            <span className="text-[13px]" style={{ color: "#888" }}>{TODO_COUNT} · Google</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {TODO_REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.07 }}
              className={[
                "py-9",
                i % 2 === 1 ? "md:pl-12" : "md:pr-12",
                i < TODO_REVIEWS.length - 1 ? "border-b border-[#e0dbd3]" : "",
                i % 2 === 0 ? "md:border-r md:border-[#e0dbd3]" : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-2 mb-4">
                <Stars count={r.stars} />
                <span className="text-[11px] uppercase tracking-wide" style={{ color: "#aaa" }}>{r.date}</span>
              </div>
              {r.text && (
                <p
                  className="font-display font-light italic leading-relaxed mb-6"
                  style={{ fontSize: "clamp(1rem, 1.7vw, 1.15rem)", color: "#3a3734" }}
                >
                  „{r.text}"
                </p>
              )}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                  style={{ backgroundColor: "#e0dbd3", color: "#5a5754" }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[13px] font-semibold" style={{ color: "#1b1e1e" }}>{r.name}</div>
                  <div className="text-[12px]" style={{ color: "#999" }}>Google-Rezension</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
