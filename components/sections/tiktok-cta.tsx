"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const TikTokIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    style={{ color: "rgba(245,243,238,0.35)", flexShrink: 0 }}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.5a8.27 8.27 0 004.84 1.56V6.63a4.85 4.85 0 01-1.07.06z" />
  </svg>
)

export function TikTokCta() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      style={{
        backgroundColor: "#1c1f1f",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
      className="py-24 md:py-40"
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.95, ease: EASE }}
        >

          {/* Eyebrow */}
          <p
            className="text-[10px] tracking-[0.40em] uppercase font-medium mb-9"
            style={{ color: "#a08868" }}
          >
            Einblicke
          </p>

          {/* Headline */}
          <h2
            className="font-display font-light italic leading-[1.06] mb-10"
            style={{
              fontSize:      "clamp(2.6rem, 5.5vw, 4.4rem)",
              color:         "#F5F3EE",
              letterSpacing: "-0.024em",
              maxWidth:      "18ch",
            }}
          >
            Überzeuge dich selbst.
          </h2>

          {/* Body */}
          <div className="mb-14 max-w-[38ch]">
            <p
              className="leading-[2] mb-6"
              style={{ fontSize: "15px", color: "rgba(245,243,238,0.46)" }}
            >
              Tägliche Schnitte.<br />
              Echte Kunden.<br />
              Echte Ergebnisse.
            </p>
            <p
              className="leading-[1.85]"
              style={{ fontSize: "14px", color: "rgba(245,243,238,0.24)" }}
            >
              Keine Werbefotos.<br />
              Sondern unser tägliches Handwerk.
            </p>
          </div>

          {/* Card */}
          <motion.a
            href={SALON.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              justifyContent:  "space-between",
              gap:             "24px",
              maxWidth:        "400px",
              width:           "100%",
              backgroundColor: "rgba(255,255,255,0.028)",
              border:          "1px solid rgba(255,255,255,0.068)",
              borderRadius:    "22px",
              padding:         "22px 26px",
              cursor:          "pointer",
              textDecoration:  "none",
            }}
            whileHover={{
              y:               -5,
              backgroundColor: "rgba(255,255,255,0.050)",
              borderColor:     "rgba(160,136,104,0.32)",
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
          >
            {/* Avatar + Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0 }}>

              {/* Profilbild */}
              <div
                style={{
                  width:        "56px",
                  height:       "56px",
                  borderRadius: "50%",
                  overflow:     "hidden",
                  flexShrink:   0,
                  background:   "linear-gradient(145deg, rgba(160,136,104,0.22) 0%, rgba(160,136,104,0.06) 100%)",
                  border:       "1px solid rgba(160,136,104,0.22)",
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                }}
              >
                {!imgError ? (
                  <Image
                    src="/images/tiktok-profile.jpeg"
                    alt="L'atelier du style TikTok"
                    width={56}
                    height={56}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span
                    className="font-display font-light italic select-none"
                    style={{ fontSize: "22px", color: "rgba(160,136,104,0.88)", letterSpacing: "-0.01em", lineHeight: 1 }}
                  >
                    L
                  </span>
                )}
              </div>

              {/* Textinfo */}
              <div style={{ minWidth: 0 }}>
                {/* Name + TikTok-Icon */}
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "5px" }}>
                  <span
                    className="font-medium transition-colors duration-[250ms] group-hover:text-white"
                    style={{
                      fontSize:      "14px",
                      color:         "rgba(245,243,238,0.82)",
                      letterSpacing: "-0.01em",
                      whiteSpace:    "nowrap",
                    }}
                  >
                    L&apos;atelier du style
                  </span>
                  <TikTokIcon />
                </div>
                {/* Handle */}
                <span
                  style={{
                    fontSize:      "11.5px",
                    color:         "rgba(245,243,238,0.24)",
                    letterSpacing: "0.025em",
                  }}
                >
                  @latelier.du.style0
                </span>
              </div>
            </div>

            {/* Pfeil */}
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="shrink-0 transition-all duration-[250ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: "rgba(255,255,255,0.14)", flexShrink: 0 }}
            />
          </motion.a>

          {/* Micro-label */}
          <p
            className="mt-4"
            style={{
              fontSize:      "10px",
              color:         "rgba(255,255,255,0.12)",
              letterSpacing: "0.05em",
            }}
          >
            Öffnet TikTok · @latelier.du.style0
          </p>

        </motion.div>
      </div>
    </section>
  )
}
