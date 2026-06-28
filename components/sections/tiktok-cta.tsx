"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight, Play } from "lucide-react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const VIDEOS = [
  { id: "1", label: "Schnitt & Style" },
  { id: "2", label: "Transformation" },
  { id: "3", label: "Tägliches Handwerk" },
  { id: "4", label: "Einblick" },
  { id: "5", label: "Ergebnis" },
]

// Infinite loop: clone last item at front, first item at back
const EXTENDED = [VIDEOS[VIDEOS.length - 1], ...VIDEOS, VIDEOS[0]]
const REAL_START = 1 // index of first real video in EXTENDED
const REAL_END = VIDEOS.length // index of last real video in EXTENDED

const CARD_FRACTION = 0.65 // active card takes 65% of container width (~15% peek on each side)
const GAP = 12 // px between cards

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

function VideoCard({ index, isActive }: { index: number; isActive: boolean }) {
  return (
    <a
      href={SALON.tiktok}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      style={{
        borderRadius:    "18px",
        overflow:        "hidden",
        position:        "relative",
        aspectRatio:     "9 / 16",
        backgroundColor: "rgba(255,255,255,0.03)",
        border:          isActive
          ? "1px solid rgba(160,136,104,0.30)"
          : "1px solid rgba(255,255,255,0.06)",
        cursor:          "pointer",
        textDecoration:  "none",
        width:           "100%",
        display:         "block",
        userSelect:      "none",
        WebkitUserDrag:  "none" as React.CSSProperties["WebkitUserDrag"],
        transition:      "border-color 0.4s ease",
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(160deg,
            rgba(${20 + (index % VIDEOS.length) * 4},${22 + (index % VIDEOS.length) * 3},${22 + (index % VIDEOS.length) * 2},1) 0%,
            rgba(14,16,16,1) 100%)`,
        }}
      />

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
          style={{
            width:           "56px",
            height:          "56px",
            borderRadius:    "50%",
            backgroundColor: isActive ? "rgba(160,136,104,0.18)" : "rgba(160,136,104,0.08)",
            border:          isActive ? "1px solid rgba(160,136,104,0.40)" : "1px solid rgba(160,136,104,0.18)",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            transition:      "all 0.4s ease",
          }}
        >
          <Play size={20} strokeWidth={1.5} style={{ color: isActive ? "#c4a882" : "#7a6648", marginLeft: "2px", transition: "color 0.4s ease" }} />
        </div>
        <span style={{ fontSize: "11px", color: isActive ? "rgba(245,243,238,0.32)" : "rgba(245,243,238,0.16)", letterSpacing: "0.08em", transition: "color 0.4s ease" }}>
          @latelier.du.style0
        </span>
      </div>

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
          opacity:         isActive ? 1 : 0,
          transition:      "opacity 0.4s ease",
        }}
      >
        <TikTokIcon />
        <span style={{ fontSize: "10px", color: "rgba(245,243,238,0.42)", letterSpacing: "0.06em" }}>
          TikTok ansehen
        </span>
      </div>
    </a>
  )
}

function InfiniteCarousel() {
  // activeIdx indexes into EXTENDED (1 = first real video)
  const [activeIdx, setActiveIdx] = useState(REAL_START)
  const [animated, setAnimated] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragOffset = useRef(0)
  const isJumping = useRef(false)

  const getTranslateX = useCallback((idx: number, containerW: number) => {
    const cardW = containerW * CARD_FRACTION
    const centerOffset = (containerW - cardW) / 2
    return centerOffset - idx * (cardW + GAP)
  }, [])

  const applyTransform = useCallback((tx: number, animate: boolean) => {
    const track = trackRef.current
    if (!track) return
    track.style.transition = animate ? "transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
    track.style.transform = `translateX(${tx}px)`
  }, [])

  const goTo = useCallback((idx: number, anim = true) => {
    const containerW = containerRef.current?.offsetWidth ?? 0
    setAnimated(anim)
    setActiveIdx(idx)
    applyTransform(getTranslateX(idx, containerW), anim)
  }, [applyTransform, getTranslateX])

  // Initial position (no animation)
  useEffect(() => {
    const containerW = containerRef.current?.offsetWidth ?? 0
    applyTransform(getTranslateX(REAL_START, containerW), false)
  }, [applyTransform, getTranslateX])

  // After transition ends, jump from clone to real without animation
  const handleTransitionEnd = useCallback(() => {
    if (isJumping.current) return
    const containerW = containerRef.current?.offsetWidth ?? 0

    if (activeIdx === 0) {
      isJumping.current = true
      applyTransform(getTranslateX(REAL_END, containerW), false)
      setActiveIdx(REAL_END)
      requestAnimationFrame(() => { isJumping.current = false })
    } else if (activeIdx === EXTENDED.length - 1) {
      isJumping.current = true
      applyTransform(getTranslateX(REAL_START, containerW), false)
      setActiveIdx(REAL_START)
      requestAnimationFrame(() => { isJumping.current = false })
    }
  }, [activeIdx, applyTransform, getTranslateX])

  // Recalculate on resize
  useEffect(() => {
    const obs = new ResizeObserver(() => {
      const containerW = containerRef.current?.offsetWidth ?? 0
      applyTransform(getTranslateX(activeIdx, containerW), false)
    })
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [activeIdx, applyTransform, getTranslateX])

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) < 10 || Math.abs(dy) > Math.abs(dx) * 1.5) return
    if (dx < -30) goTo(activeIdx + 1)
    else if (dx > 30) goTo(activeIdx - 1)
  }

  // Mouse drag (desktop preview)
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    dragOffset.current = 0
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    const containerW = containerRef.current?.offsetWidth ?? 0
    dragOffset.current = e.clientX - dragStartX.current
    applyTransform(getTranslateX(activeIdx, containerW) + dragOffset.current, false)
  }

  const onMouseUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    if (dragOffset.current < -50) goTo(activeIdx + 1)
    else if (dragOffset.current > 50) goTo(activeIdx - 1)
    else goTo(activeIdx)
  }

  return (
    <div
      ref={containerRef}
      style={{ overflow: "hidden", cursor: "grab", userSelect: "none" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        ref={trackRef}
        style={{
          display:    "flex",
          alignItems: "center",
          gap:        `${GAP}px`,
          willChange: "transform",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {EXTENDED.map((video, i) => {
          const isActive = i === activeIdx
          const dist = Math.abs(i - activeIdx)
          const scale = isActive ? 1 : dist === 1 ? 0.93 : 0.88
          const opacity = isActive ? 1 : dist === 1 ? 0.55 : 0.35

          return (
            <div
              key={`${i}-${video.id}`}
              style={{
                flexShrink: 0,
                width:      `${CARD_FRACTION * 100}%`,
                transform:  `scale(${scale})`,
                opacity,
                transition: "transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.42s cubic-bezier(0.16, 1, 0.3, 1)",
                // Anchor scale to the inner edge so the peeking sliver stays visible; center vertically
                transformOrigin: i < activeIdx ? "right center" : i > activeIdx ? "left center" : "center center",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <VideoCard index={i % VIDEOS.length} isActive={isActive} />
            </div>
          )
        })}
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display:        "flex",
          justifyContent: "center",
          gap:            "7px",
          marginTop:      "20px",
        }}
        aria-hidden="true"
      >
        {VIDEOS.map((_, i) => {
          const realActive = ((activeIdx - REAL_START) + VIDEOS.length) % VIDEOS.length
          const isActiveDot = i === realActive
          return (
            <div
              key={i}
              style={{
                width:           isActiveDot ? "20px" : "6px",
                height:          "6px",
                borderRadius:    "9999px",
                backgroundColor: isActiveDot ? "#a08868" : "rgba(255,255,255,0.22)",
                transition:      "width 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.35s ease",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export function TikTokCta() {
  const [imgError, setImgError] = useState(false)

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

            <div className="flex items-start lg:justify-end">
              <ProfileCard imgError={imgError} setImgError={setImgError} />
            </div>
          </div>

          {/* ── Infinite Peek-Carousel (mobile + desktop) ── */}
          <div className="-mx-8 sm:-mx-12 md:mx-0">
            {/* Mobile: full-bleed infinite carousel */}
            <div className="md:hidden">
              <InfiniteCarousel />
            </div>

            {/* Desktop: standard grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {VIDEOS.map((_, i) => (
                <VideoCard key={i} index={i} isActive={false} />
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
