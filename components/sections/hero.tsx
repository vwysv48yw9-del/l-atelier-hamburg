"use client"

import { useRef } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const GoogleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  return (
    <section ref={sectionRef} className="relative w-full min-h-[100svh] overflow-hidden">

      {/* Foto – Ken Burns + Parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: imgY }}>
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="/images/innen.png"
            alt="L'Atelier Hamburg – Innenansicht des Salons"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "55% 30%" }}
          />
        </div>
      </motion.div>

      {/* Leichtes globales Dimmen */}
      <div className="absolute inset-0" style={{ background: "rgba(4, 3, 2, 0.14)" }} />

      {/* Verlauf oben – Navigation */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(4,3,2,0.52) 0%, transparent 100%)",
        }}
      />

      {/* Verlauf unten – Text-Zone */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "60%",
          background: "linear-gradient(to top, rgba(5,4,3,0.92) 0%, rgba(5,4,3,0.58) 25%, rgba(5,4,3,0.22) 52%, transparent 100%)",
        }}
      />

      {/* Google Badge */}
      <motion.div
        className="absolute top-20 right-5 md:right-8 flex items-center gap-2 rounded-full px-3.5 py-1.5"
        style={{
          backgroundColor: "rgba(0,0,0,0.22)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: EASE }}
      >
        <GoogleIcon />
        <span className="flex gap-0.5">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} width="9" height="9" viewBox="0 0 10 10" fill="#b09070" aria-hidden>
              <path d="M5 0l1.12 3.44H9.76L6.82 5.57l1.12 3.44L5 7.01l-2.94 2 1.12-3.44L.24 3.44H3.88L5 0z"/>
            </svg>
          ))}
        </span>
        <span className="text-[11.5px] font-semibold text-white">{SALON.google.score}</span>
        <span className="text-[10.5px]" style={{ color: "#7a7570" }}>· {SALON.google.count}</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-[100svh] pb-20 sm:pb-24 md:pb-32">
        <div className="w-full max-w-6xl mx-auto px-8 sm:px-12 md:px-20">

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: EASE }}
          >
            <div className="w-7 h-px shrink-0" style={{ backgroundColor: "#a08868" }} />
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium" style={{ color: "#a08868" }}>
              {SALON.district} · {SALON.street}
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-light mb-10"
            style={{
              color: "#F7F4EF",
              fontSize: "clamp(1.75rem, 4.2vw, 2.9rem)",
              lineHeight: 1.38,
              letterSpacing: "-0.015em",
              maxWidth: "15ch",
            }}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.95, ease: EASE }}
          >
            Moderne Schnitte.<br />
            Saubere Fades.<br />
            Ehrliche Preise.
          </motion.h1>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.9, ease: EASE }}
          >
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2.5 text-white text-[11.5px] tracking-[0.12em] uppercase font-semibold rounded-full transition-all duration-300 hover:opacity-95 active:scale-[0.98] w-full sm:w-auto"
              style={{
                backgroundColor: "rgba(18, 16, 14, 0.88)",
                border: "1px solid rgba(160,136,104,0.3)",
                height: "50px",
                paddingLeft: "28px",
                paddingRight: "32px",
                backdropFilter: "blur(8px)",
              }}
            >
              <WhatsAppIcon />
              Termin per WhatsApp
            </a>

            <a
              href={SALON.phoneHref}
              className="inline-flex items-center gap-2 text-[11.5px] tracking-[0.06em] transition-colors duration-300 hover:text-white min-h-[44px]"
              style={{ color: "#7a7570" }}
            >
              <Phone size={11} strokeWidth={1.5} />
              {SALON.phone}
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll-Indikator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, transparent, rgba(160,136,104,0.5))" }} />
      </motion.div>

    </section>
  )
}
