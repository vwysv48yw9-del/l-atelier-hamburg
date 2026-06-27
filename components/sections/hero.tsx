"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const s = (delay: number) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay } },
})

const GoogleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">

      {/* Foto */}
      <div className="absolute inset-0">
        <Image
          src="/images/aussen.png"
          alt="L'Atelier Hamburg – Außenansicht Reinskamp 2A"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "contrast(1.08) brightness(0.8) saturate(1.1)" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(10, 8, 6, 0.2)" }} />

      {/* Verlauf unten */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "58%",
          background: "linear-gradient(to top, rgba(6,5,4,0.94) 0%, rgba(6,5,4,0.55) 32%, transparent 100%)",
        }}
      />

      {/* Google Score Badge */}
      <motion.div
        className="absolute top-20 right-4 md:right-6 flex items-center gap-2 rounded-full px-3 py-1.5"
        style={{ backgroundColor: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <GoogleIcon />
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#a08868" aria-hidden>
              <path d="M5 0l1.12 3.44H9.76L6.82 5.57l1.12 3.44L5 7.01l-2.94 2 1.12-3.44L.24 3.44H3.88L5 0z"/>
            </svg>
          ))}
        </div>
        <span className="text-[12px] font-semibold text-white">{SALON.google.score}</span>
        <span className="text-[11px]" style={{ color: "#9B958B" }}>· {SALON.google.count}</span>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-end min-h-[100svh] max-w-6xl mx-auto px-5 sm:px-6 pb-20 md:pb-24"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={s(0)}
          className="text-[11px] tracking-[0.3em] uppercase mb-5 font-medium"
          style={{ color: "#a08868" }}
        >
          {SALON.district} · {SALON.street}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={s(0.06)}
          className="mb-8 leading-snug font-light"
          style={{
            color: "#F5F3EE",
            fontSize: "clamp(1.15rem, 2.6vw, 1.7rem)",
            maxWidth: "20ch",
          }}
        >
          Moderne Schnitte.<br />
          Saubere Fades.<br />
          Ehrliche Preise.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={s(0.12)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
          {/* Primär: WhatsApp */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-white text-[13px] tracking-[0.06em] uppercase font-semibold rounded-full transition-opacity hover:opacity-88 w-full sm:w-auto"
            style={{ backgroundColor: "#1b1e1e", border: "1px solid rgba(255,255,255,0.15)", height: "52px", paddingLeft: "24px", paddingRight: "28px" }}
          >
            <WhatsAppIcon />
            Termin per WhatsApp
          </a>

          {/* Sekundär: Anrufen */}
          <a
            href={SALON.phoneHref}
            className="inline-flex items-center gap-2 text-[13px] transition-colors hover:text-white min-h-[44px]"
            style={{ color: "#9B958B" }}
          >
            <Phone size={13} />
            {SALON.phone}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll-Linie */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none">
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, #a08868)" }} />
      </div>
    </section>
  )
}
