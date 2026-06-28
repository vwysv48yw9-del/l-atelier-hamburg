"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight, Play } from "lucide-react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

// TikTok-Video-IDs von @latelier.du.style0 — hier echte IDs eintragen.
// Format: https://www.tiktok.com/@latelier.du.style0/video/VIDEO_ID
const VIDEOS = [
  { id: "1", label: "Schnitt & Style" },
  { id: "2", label: "Transformation" },
  { id: "3", label: "Tägliches Handwerk" },
  { id: "4", label: "Einblick" },
  { id: "5", label: "Ergebnis" },
]

const TikTokIcon = () => (
  <svg
    width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden
    style={{ color: "rgba(245,243,238,0.35)", flexShrink: 0 }}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.5a8.27 8.27 0 004.84 1.56V6.63a4.85 4.85 0 01-1.07.06z" />
  </svg>
)

function ProfileCard({ imgError, setImgError }: { imgError: boolean; setImgError: (v: boolean) => void }) {
  return (
    <motion.a
      href={SALON.tiktok}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
      style={{
        display:         "inline-flex",
        alignItems:      "center",
        justifyContent:  "space-between",
        gap:             "28px",
        maxWidth:        "460px",
        width:           "100%",
        backgroundColor: "rgba(255,255,255,0.028)",
        border:          "1px solid rgba(255,255,255,0.068)",
        borderRadius:    "24px",
        padding:         "26px 30px",
        cursor:          "pointer",
        textDecoration:  "none",
      }}
      whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.050)", borderColor: "rgba(160,136,104,0.32)" }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px", minWidth: 0 }}>
        <div
          style={{
            width: "66px", height: "66px", borderRadius: "50%",
            overflow: "hidden", flexShrink: 0,
            background: "linear-gradient(145deg, rgba(160,136,104,0.22) 0%, rgba(160,136,104,0.06) 100%)",
            border: "1px solid rgba(160,136,104,0.22)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {!imgError ? (
            <Image
              src="/images/tiktok-profile.jpeg"
              alt="L'atelier du style TikTok"
              width={66} height={66}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-display font-light italic select-none"
              style={{ fontSize: "26px", color: "rgba(160,136,104,0.88)", letterSpacing: "-0.01em", lineHeight: 1 }}>
              L
            </span>
          )}
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span
              className="font-semibold transition-colors duration-[250ms] group-hover:text-white"
              style={{ fontSize: "16px", color: "rgba(245,243,238,0.90)", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}
            >
              L&apos;atelier du style
            </span>
            <TikTokIcon />
          </div>
          <span style={{ fontSize: "12.5px", color: "rgba(245,243,238,0.30)", letterSpacing: "0.025em" }}>
            @latelier.du.style0
          </span>
        </div>
      </div>

      <ArrowUpRight
        size={20} strokeWidth={1.5}
        className="shrink-0 transition-all duration-[250ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ color: "rgba(255,255,255,0.30)", flexShrink: 0 }}
      />
    </motion.a>
  )
}

function VideoCard({ index }: { index: number }) {
  return (
    <motion.a
      href={SALON.tiktok}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{
        borderRadius:    "18px",
        overflow:        "hidden",
        position:        "relative",
        aspectRatio:     "9 / 16",
        backgroundColor: "rgba(255,255,255,0.03)",
        border:          "1px solid rgba(255,255,255,0.07)",
        cursor:          "pointer",
        textDecoration:  "none",
        width:           "100%",
        display:         "block",
      }}
      whileHover={{ borderColor: "rgba(160,136,104,0.35)" }}
      transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
    >
      {/* Hintergrund-Gradient */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(160deg,
            rgba(${20 + index * 4},${22 + index * 3},${22 + index * 2},1) 0%,
            rgba(14,16,16,1) 100%)`,
        }}
      />

      {/* Zentriertes Play-Icon */}
      <div
        style={{
          position:       "absolute",
          inset:          0,
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          gap:            "16px",
        }}
      >
        <div
          className="transition-all duration-300 group-hover:scale-110"
          style={{
            width:           "56px",
            height:          "56px",
            borderRadius:    "50%",
            backgroundColor: "rgba(160,136,104,0.12)",
            border:          "1px solid rgba(160,136,104,0.28)",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
          }}
        >
          <Play size={20} strokeWidth={1.5} style={{ color: "#c4a882", marginLeft: "2px" }} />
        </div>
        <span style={{ fontSize: "11px", color: "rgba(245,243,238,0.28)", letterSpacing: "0.08em" }}>
          @latelier.du.style0
        </span>
      </div>

      {/* Unten: TikTok-Badge */}
      <div
        style={{
          position:        "absolute",
          bottom:          "16px",
          left:            "50%",
          transform:       "translateX(-50%)",
          display:         "flex",
          alignItems:      "center",
          gap:             "6px",
          backgroundColor: "rgba(10,12,12,0.72)",
          backdropFilter:  "blur(10px)",
          border:          "1px solid rgba(255,255,255,0.07)",
          borderRadius:    "9999px",
          padding:         "6px 14px",
          whiteSpace:      "nowrap",
        }}
      >
        <TikTokIcon />
        <span style={{ fontSize: "10px", color: "rgba(245,243,238,0.42)", letterSpacing: "0.06em" }}>
          TikTok ansehen
        </span>
      </div>
    </motion.a>
  )
}

export function TikTokCta() {
  const [imgError, setImgError] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  return (
    <section
      id="einblicke"
      style={{ backgroundColor: "#1c1f1f", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      className="py-16 md:py-28"
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.95, ease: EASE }}
        >

          {/* ── Oberer Bereich: zwei Spalten ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start mb-16">

            {/* Links: Eyebrow + Headline */}
            <div>
              <p
                className="text-[10px] tracking-[0.40em] uppercase font-medium mb-9"
                style={{ color: "#a08868" }}
              >
                Einblicke
              </p>

              <h2
                className="font-display font-light italic leading-[1.06] mb-0"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)", color: "#F5F3EE", letterSpacing: "-0.024em", maxWidth: "18ch" }}
              >
                Überzeuge dich selbst.
              </h2>
            </div>

            {/* Rechts: Profilkarte */}
            <div className="flex items-start lg:justify-end">
              <ProfileCard imgError={imgError} setImgError={setImgError} />
            </div>
          </div>

          {/* ── Video-Slider ──
              Mobile:  Peek-Carousel — aktive Karte zentriert, ~19% Nachbarkarte sichtbar
                       Slider bricht per negativer Margin auf volle Viewport-Breite aus.
                       Ghost-Spacer links/rechts ermöglichen, dass erste/letzte Karte
                       korrekt zentrieren kann.
              Desktop: Standard-Grid (2 bzw. 3 Karten sichtbar)
          ── */}
          <div
            className="-mx-8 sm:-mx-12 md:mx-0 [&::-webkit-scrollbar]:hidden"
            style={{
              overflowX:               "auto",
              scrollSnapType:          "x mandatory",
              scrollbarWidth:          "none",
              msOverflowStyle:         "none",
              WebkitOverflowScrolling: "touch",
              paddingBottom:           "12px",
            }}
            onScroll={() => !hasScrolled && setHasScrolled(true)}
          >
            <div className="flex gap-3 md:gap-4">

              {/* Ghost-Spacer links — zentriert erste Karte (nur Mobile).
                  Breite = (viewport - card) / 2 - gap = 16vw - 12px */}
              <div className="shrink-0 w-[calc(16vw-12px)] md:hidden" aria-hidden="true" />

              {VIDEOS.map((_, i) => (
                <div
                  key={i}
                  // snap-center auf Mobile, snap-start auf Desktop
                  className="shrink-0 snap-center md:snap-start min-w-[68vw] md:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-11px)]"
                >
                  <VideoCard index={i} />
                </div>
              ))}

              {/* Ghost-Spacer rechts — ermöglicht letzte Karte zu zentrieren (nur Mobile) */}
              <div className="shrink-0 w-[calc(16vw-12px)] md:hidden" aria-hidden="true" />

            </div>
          </div>

          {/* Hint — verschwindet nach erstem Wischen */}
          <motion.p
            className="mt-6 text-center md:hidden"
            style={{
              fontSize:      "13px",
              letterSpacing: "0.14em",
              color:         "rgba(255,255,255,0.45)",
              pointerEvents: "none",
              userSelect:    "none",
            }}
            animate={{ opacity: hasScrolled ? 0 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            aria-hidden={hasScrolled}
          >
            ← Wischen →
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}
