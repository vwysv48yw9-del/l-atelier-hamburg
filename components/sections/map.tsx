"use client"

import { useRef, useState, useEffect } from "react"
import { MapPin, Navigation } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const APPLE_MAPS_URL = `https://maps.apple.com/?address=${encodeURIComponent(`${SALON.street}, ${SALON.city}`)}&dirflg=d`

function RouteChooser({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("mousedown", handler)
    document.addEventListener("keydown", esc)
    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("keydown", esc)
    }
  }, [onClose])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      style={{
        position:        "absolute",
        bottom:          "calc(100% + 10px)",
        left:            0,
        right:           0,
        backgroundColor: "#1b1e1e",
        border:          "1px solid rgba(255,255,255,0.10)",
        borderRadius:    "16px",
        overflow:        "hidden",
        boxShadow:       "0 16px 48px rgba(0,0,0,0.32)",
        zIndex:          10,
      }}
    >
      <p style={{
        fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase",
        color: "rgba(255,255,255,0.30)", padding: "14px 18px 10px",
      }}>
        Navigation öffnen mit
      </p>

      <a
        href={SALON.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        style={{
          display: "flex", alignItems: "center", gap: "12px",
          padding: "12px 18px", textDecoration: "none",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          transition: "background-color 0.15s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        {/* Google Maps icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
          <circle cx="12" cy="9" r="2.5" fill="white"/>
        </svg>
        <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.82)", letterSpacing: "0.01em" }}>
          Google Maps
        </span>
      </a>

      <a
        href={APPLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        style={{
          display: "flex", alignItems: "center", gap: "12px",
          padding: "12px 18px 14px", textDecoration: "none",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          transition: "background-color 0.15s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        {/* Apple Maps icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#1C1C1E"/>
          <path d="M12 4C8.13 4 5 7.13 5 11c0 4.5 7 11 7 11s7-6.5 7-11c0-3.87-3.13-7-7-7z" fill="#30D158"/>
          <circle cx="12" cy="11" r="2" fill="white"/>
        </svg>
        <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.82)", letterSpacing: "0.01em" }}>
          Apple Karten
        </span>
      </a>
    </motion.div>
  )
}

export function Map() {
  const [chooserOpen, setChooserOpen] = useState(false)

  return (
    <section
      id="anfahrt"
      style={{ backgroundColor: "#f5f3ee" }}
      className="py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          {/* Header */}
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.40em] uppercase font-medium mb-5" style={{ color: "#a08868" }}>
              Anfahrt
            </p>
            <h2
              className="font-display font-light italic leading-[1.08]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "#1b1e1e", letterSpacing: "-0.022em" }}
            >
              Mitten in Billstedt.
            </h2>
          </div>

          {/* Map + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">


            {/* Info-Panel */}
            <div className="order-1 lg:order-2 flex flex-col gap-6 lg:py-2">

              {/* Adresse */}
              <div className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: "#a08868" }} />
                <div>
                  <div className="font-semibold" style={{ fontSize: "15px", color: "#1b1e1e", letterSpacing: "-0.01em", marginBottom: "3px" }}>
                    {SALON.street}
                  </div>
                  <div style={{ fontSize: "13.5px", color: "#7a7774" }}>{SALON.city}</div>
                  <div style={{ fontSize: "13px", color: "#a09e9c", marginTop: "1px" }}>{SALON.district}</div>
                </div>
              </div>

              {/* Route starten */}
              <div style={{ position: "relative" }}>
                <motion.button
                  onClick={() => setChooserOpen(v => !v)}
                  className="inline-flex items-center justify-center gap-2.5 w-full"
                  style={{
                    height:          "52px",
                    borderRadius:    "9999px",
                    backgroundColor: "#1b1e1e",
                    color:           "#f5f3ee",
                    fontSize:        "12px",
                    letterSpacing:   "0.08em",
                    textTransform:   "uppercase",
                    fontWeight:      600,
                    border:          "1px solid transparent",
                    cursor:          "pointer",
                  }}
                  whileHover={{ backgroundColor: "#2a2e2e", scale: 1.012 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
                >
                  <Navigation size={13} strokeWidth={1.5} />
                  Route starten
                </motion.button>

                <AnimatePresence>
                  {chooserOpen && <RouteChooser onClose={() => setChooserOpen(false)} />}
                </AnimatePresence>
              </div>

              {/* Öffnungszeiten */}
              <div id="oeffnungszeiten" style={{ borderTop: "1px solid rgba(27,30,30,0.08)", paddingTop: "20px" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.06em", color: "#a08868", marginBottom: "10px", textTransform: "uppercase" }}>
                  Öffnungszeiten
                </p>
                <div style={{ fontSize: "13px", color: "#6a6764", lineHeight: 1.7 }}>
                  <div>{SALON.hours.weekdays}</div>
                  <div>{SALON.hours.saturday}</div>
                  <div style={{ color: "#a09e9c" }}>{SALON.hours.closed}</div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
