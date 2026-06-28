"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const PIN_LEFT = 40.70
const PIN_TOP  = 41.50

function GoldPin() {
  return (
    <svg
      width="26"
      height="34"
      viewBox="0 0 26 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter:  "drop-shadow(0 3px 10px rgba(0,0,0,0.65)) drop-shadow(0 0 10px rgba(160,136,104,0.35))",
        display: "block",
      }}
      aria-hidden
    >
      <path
        d="M13 0C6.373 0 1 5.373 1 12c0 8.284 12 22 12 22S25 20.284 25 12C25 5.373 19.627 0 13 0z"
        fill="#a08868"
        fillOpacity="0.95"
      />
      <circle cx="13" cy="12" r="4" fill="white" fillOpacity="0.92" />
    </svg>
  )
}

function Stars() {
  return (
    <span className="flex gap-[3px]" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 10 10" fill="#a08868">
          <path d="M5 0l1.12 3.44H9.76L6.82 5.57l1.12 3.44L5 7.01l-2.94 2 1.12-3.44L.24 3.44H3.88L5 0z" />
        </svg>
      ))}
    </span>
  )
}

const ArrowIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
  </svg>
)

export function Location() {
  return (
    <section
      style={{
        backgroundColor: "#1c1f1f",
        borderTop:       "1px solid rgba(255,255,255,0.05)",
      }}
      className="py-24 md:py-36"
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.0, ease: EASE }}
        >

          {/* ── Karten-Block ── */}
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

            {/* Lokales Kartenbild */}
            <Image
              src="/images/location-apple-final.png"
              alt="Karte – L'Atelier Hamburg, Reinskamp 2A, Billstedt"
              fill
              sizes="(max-width: 1024px) 100vw, 864px"
              style={{
                objectFit:      "cover",
                objectPosition: "52% 44%",
                filter: "saturate(0.82) brightness(0.86) contrast(1.07)",
              }}
            />

            {/* Vignette – Ränder abdunkeln */}
            <div
              style={{
                position:      "absolute",
                inset:         0,
                background:    "radial-gradient(ellipse at 49% 44%, transparent 32%, rgba(0,0,0,0.48) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Rechte Seite abdunkeln – Lesbarkeit Glass-Card */}
            <div
              style={{
                position:      "absolute",
                inset:         0,
                background:    "linear-gradient(to left, rgba(0,0,0,0.64) 0%, rgba(0,0,0,0.18) 45%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* Unten abdunkeln */}
            <div
              style={{
                position:      "absolute",
                inset:         0,
                background:    "linear-gradient(to top, rgba(0,0,0,0.42) 0%, transparent 45%)",
                pointerEvents: "none",
              }}
            />

            {/* ── Goldener Premium-Marker ── */}
            <div
              style={{
                position:  "absolute",
                left:      `${PIN_LEFT}%`,
                top:       `${PIN_TOP}%`,
                transform: "translate(-50%, -100%)",
                zIndex:    10,
              }}
            >
              {/* Puls-Ring 1 */}
              <div
                className="map-pulse-ring"
                style={{
                  position:       "absolute",
                  top:            "12px",
                  left:           "13px",
                  width:          "26px",
                  height:         "26px",
                  borderRadius:   "50%",
                  border:         "1.5px solid rgba(160,136,104,0.65)",
                  transform:      "translate(-50%, -50%)",
                  animationDelay: "0s",
                }}
              />
              {/* Puls-Ring 2 – versetzt */}
              <div
                className="map-pulse-ring"
                style={{
                  position:       "absolute",
                  top:            "12px",
                  left:           "13px",
                  width:          "26px",
                  height:         "26px",
                  borderRadius:   "50%",
                  border:         "1.5px solid rgba(160,136,104,0.40)",
                  transform:      "translate(-50%, -50%)",
                  animationDelay: "1.6s",
                }}
              />
              <GoldPin />
            </div>

            {/* ── Glass-Card rechts ── */}
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
              <p
                className="text-[9px] tracking-[0.38em] uppercase font-medium mb-4"
                style={{ color: "#a08868" }}
              >
                Standort
              </p>

              <p
                className="font-display font-light italic leading-tight mb-5"
                style={{
                  fontSize:      "clamp(1.1rem, 2vw, 1.35rem)",
                  color:         "#F5F3EE",
                  letterSpacing: "-0.015em",
                }}
              >
                Mitten in Billstedt.
              </p>

              <div className="flex items-center gap-2 mb-5">
                <Stars />
                <span
                  style={{
                    fontSize:      "13px",
                    color:         "rgba(255,255,255,0.75)",
                    fontWeight:    500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {SALON.google.score}
                </span>
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.28)", letterSpacing: "0.03em" }}>
                  · Google
                </span>
              </div>

              <div
                style={{
                  height:          "1px",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  marginBottom:    "16px",
                }}
              />

              <div
                className="mb-6"
                style={{ fontSize: "12.5px", color: "rgba(245,243,238,0.52)", lineHeight: 1.7 }}
              >
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
                whileHover={{
                  backgroundColor: "rgba(160,136,104,0.20)",
                  borderColor:     "rgba(160,136,104,0.58)",
                  scale:           1.03,
                  y:               -1,
                  boxShadow:       "0 6px 22px rgba(160,136,104,0.26)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
              >
                Navigation starten
                <ArrowIcon />
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
