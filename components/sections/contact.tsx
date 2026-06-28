"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } },
})

const PIN_LEFT = 40.70
const PIN_TOP  = 41.50

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

function GoldPin() {
  return (
    <svg
      width="26" height="34" viewBox="0 0 26 34"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.65)) drop-shadow(0 0 10px rgba(160,136,104,0.35))", display: "block" }}
      aria-hidden
    >
      <path d="M13 0C6.373 0 1 5.373 1 12c0 8.284 12 22 12 22S25 20.284 25 12C25 5.373 19.627 0 13 0z" fill="#a08868" fillOpacity="0.95" />
      <circle cx="13" cy="12" r="4" fill="white" fillOpacity="0.92" />
    </svg>
  )
}

function Stars() {
  return (
    <span className="flex gap-[3px]" aria-hidden>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="11" height="11" viewBox="0 0 10 10" fill="#a08868">
          <path d="M5 0l1.12 3.44H9.76L6.82 5.57l1.12 3.44L5 7.01l-2.94 2 1.12-3.44L.24 3.44H3.88L5 0z" />
        </svg>
      ))}
    </span>
  )
}

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
  </svg>
)

export function Contact() {
  return (
    <section id="kontakt" style={{ backgroundColor: "#1c1f1f" }} className="py-16 md:py-28">
      {/*
        Breiter Container (max-w-6xl) damit die rechte Spalte
        ~600px einnehmen kann ohne die linke zu quetschen.
      */}
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_1fr] gap-14 lg:gap-16 lg:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >

          {/* ── Linke Spalte ── */}
          <div>
            <motion.p
              variants={fadeUp()}
              className="text-[10px] tracking-[0.40em] uppercase font-medium mb-8"
              style={{ color: "#a08868" }}
            >
              Kontakt
            </motion.p>

            <motion.h2
              variants={fadeUp(0.04)}
              className="font-display font-light italic leading-[1.06] mb-5"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", color: "#F5F3EE", letterSpacing: "-0.024em" }}
            >
              Komm vorbei.
            </motion.h2>

            <motion.p
              variants={fadeUp(0.08)}
              className="mb-10 leading-relaxed"
              style={{ fontSize: "15px", color: "rgba(245,243,238,0.40)", maxWidth: "38ch" }}
            >
              Schreib uns auf WhatsApp — wir finden
              gemeinsam den passenden Termin.
            </motion.p>

            {/* WhatsApp */}
            <motion.div variants={fadeUp(0.12)} className="mb-4">
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start font-semibold text-white"
                style={{
                  fontSize: "13px", letterSpacing: "0.06em",
                  backgroundColor: "rgba(160,136,104,0.13)",
                  border: "1px solid rgba(160,136,104,0.42)",
                  height: "56px", paddingLeft: "26px", paddingRight: "30px",
                  borderRadius: "9999px", minWidth: "0",
                }}
                whileHover={{ backgroundColor: "rgba(160,136,104,0.22)", borderColor: "rgba(160,136,104,0.72)", scale: 1.012, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
              >
                <WhatsAppIcon />
                Jetzt auf WhatsApp schreiben
              </motion.a>
            </motion.div>

            {/* Telefon */}
            <motion.div variants={fadeUp(0.13)}>
              <a
                href={SALON.phoneHref}
                className="group inline-flex items-baseline gap-3"
                style={{ color: "rgba(245,243,238,0.28)" }}
              >
                <span style={{ fontSize: "11px", letterSpacing: "0.1em" }}>oder anrufen</span>
                <span
                  className="font-display font-light transition-colors duration-300 group-hover:text-white"
                  style={{ fontSize: "clamp(1.35rem, 2.1vw, 1.65rem)", color: "rgba(245,243,238,0.70)", letterSpacing: "-0.01em" }}
                >
                  {SALON.phone}
                </span>
              </a>
            </motion.div>
          </div>

          {/* ── Rechte Spalte: Karte (identisches Layout wie bisherige Location-Section) ── */}
          <motion.div variants={fadeUp(0.1)}>
            <div
              style={{
                position:        "relative",
                borderRadius:    "22px",
                overflow:        "hidden",
                aspectRatio:     "16 / 9",
                backgroundColor: "#0e1010",
                boxShadow:       "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.055)",
              }}
            >
              {/* Kartenbild */}
              <Image
                src="/images/location-apple-final.png"
                alt="Karte – L'Atelier Hamburg, Reinskamp 2A, Billstedt"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                style={{
                  objectFit:      "cover",
                  objectPosition: "52% 44%",
                  filter:         "saturate(0.82) brightness(0.86) contrast(1.07)",
                }}
              />

              {/* Vignette */}
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 49% 44%, transparent 32%, rgba(0,0,0,0.48) 100%)", pointerEvents: "none" }} />

              {/* Rechte Seite abdunkeln */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(0,0,0,0.64) 0%, rgba(0,0,0,0.18) 45%, transparent 65%)", pointerEvents: "none" }} />

              {/* Unten abdunkeln */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.42) 0%, transparent 45%)", pointerEvents: "none" }} />

              {/* Gold-Pin */}
              <div
                style={{
                  position:  "absolute",
                  left:      `${PIN_LEFT}%`,
                  top:       `${PIN_TOP}%`,
                  transform: "translate(-50%, -100%)",
                  zIndex:    10,
                }}
              >
                <div className="map-pulse-ring" style={{ position: "absolute", top: "12px", left: "13px", width: "26px", height: "26px", borderRadius: "50%", border: "1.5px solid rgba(160,136,104,0.65)", transform: "translate(-50%, -50%)", animationDelay: "0s" }} />
                <div className="map-pulse-ring" style={{ position: "absolute", top: "12px", left: "13px", width: "26px", height: "26px", borderRadius: "50%", border: "1.5px solid rgba(160,136,104,0.40)", transform: "translate(-50%, -50%)", animationDelay: "1.6s" }} />
                <GoldPin />
              </div>

              {/* Glass-Card — identisch zur bisherigen Location-Section */}
              <div
                style={{
                  position:        "absolute",
                  right:           "clamp(16px, 3vw, 28px)",
                  top:             "50%",
                  transform:       "translateY(-50%)",
                  width:           "clamp(220px, 28%, 280px)",
                  backgroundColor: "rgba(10,12,12,0.76)",
                  backdropFilter:  "blur(22px) saturate(1.5)",
                  border:          "1px solid rgba(160,136,104,0.18)",
                  borderRadius:    "18px",
                  padding:         "22px 22px",
                  boxShadow:       "0 20px 56px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <p className="text-[9px] tracking-[0.38em] uppercase font-medium mb-4" style={{ color: "#a08868" }}>
                  Standort
                </p>

                <p
                  className="font-display font-light italic leading-tight mb-5"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "#F5F3EE", letterSpacing: "-0.015em" }}
                >
                  Mitten in Billstedt.
                </p>

                <div className="flex items-center gap-2 mb-5">
                  <Stars />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontWeight: 500, letterSpacing: "-0.01em" }}>
                    {SALON.google.score}
                  </span>
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.28)", letterSpacing: "0.03em" }}>
                    · Google
                  </span>
                </div>

                <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.07)", marginBottom: "16px" }} />

                <div className="mb-6" style={{ fontSize: "12.5px", color: "rgba(245,243,238,0.52)", lineHeight: 1.7 }}>
                  <p>{SALON.street}</p>
                  <p>{SALON.city}</p>
                  <p style={{ fontSize: "11px", color: "rgba(245,243,238,0.26)", marginTop: "4px" }}>
                    5 Min. · U-Bahn Billstedt
                  </p>
                </div>

                <motion.a
                  href={SALON.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full font-medium"
                  style={{
                    fontSize:        "10.5px",
                    letterSpacing:   "0.15em",
                    textTransform:   "uppercase",
                    color:           "#c4a882",
                    backgroundColor: "rgba(160,136,104,0.09)",
                    border:          "1px solid rgba(160,136,104,0.26)",
                    borderRadius:    "9999px",
                    height:          "42px",
                  }}
                  whileHover={{ backgroundColor: "rgba(160,136,104,0.20)", borderColor: "rgba(160,136,104,0.58)", scale: 1.03, y: -1, boxShadow: "0 6px 22px rgba(160,136,104,0.26)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
                >
                  Navigation starten
                  <ArrowIcon />
                </motion.a>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
