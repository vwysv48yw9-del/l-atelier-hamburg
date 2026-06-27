"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { SALON, WA_URL } from "@/lib/config"

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const NAV = [
  { label: "Salon",       href: "#salon"       },
  { label: "Leistungen",  href: "#leistungen"  },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Kontakt",     href: "#kontakt"     },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#1a1c1c]/90 backdrop-blur-xl border-b border-white/[0.05] py-0"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div
          className={cn(
            "max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500",
            scrolled ? "h-14" : "h-16"
          )}
        >
          {/* Wordmark */}
          <a href="/" className="flex flex-col leading-none group">
            <span
              className="text-[12.5px] font-semibold tracking-[0.24em] text-white uppercase transition-opacity duration-300 group-hover:opacity-80"
            >
              L&apos;Atelier
            </span>
            <span className="text-[8.5px] tracking-[0.3em] uppercase mt-0.5 transition-colors duration-300" style={{ color: "#a08868" }}>
              Hair · Style
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-[11.5px] tracking-[0.14em] transition-colors duration-300 hover:text-[#b09878]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11.5px] tracking-wide transition-colors duration-300 hover:text-white"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href={SALON.phoneHref}
              className="flex items-center gap-2 text-[11.5px] tracking-wide transition-colors duration-300 hover:text-white"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Phone size={10} strokeWidth={1.5} style={{ color: "#a08868" }} />
              {SALON.phone}
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.5)" }}
            aria-label="Menü öffnen"
          >
            <Menu size={17} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col border-l border-white/[0.06]"
              style={{ backgroundColor: "#1a1c1c" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
                <span className="text-[12.5px] font-semibold tracking-[0.24em] text-white uppercase">
                  L&apos;Atelier
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-11 h-11 flex items-center justify-center transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  aria-label="Menü schließen"
                >
                  <X size={15} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-col px-3 py-8 gap-0.5">
                {NAV.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3.5 rounded-lg text-[13.5px] tracking-[0.04em] transition-colors hover:text-white hover:bg-white/[0.04]"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto px-4 pb-10 flex flex-col gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full h-12 rounded-xl text-[13px] text-white font-medium transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "#1f2120", border: "1px solid rgba(160,136,104,0.2)" }}
                >
                  <WhatsAppIcon />
                  Termin per WhatsApp
                </a>
                <a
                  href={SALON.phoneHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full h-10 text-[13px] transition-colors hover:text-white"
                  style={{ color: "#7a7570" }}
                >
                  <Phone size={12} strokeWidth={1.5} style={{ color: "#a08868" }} />
                  {SALON.phone}
                </a>
                <p className="text-center text-[10.5px] mt-1" style={{ color: "#444" }}>
                  {SALON.hours.weekdays} · {SALON.hours.saturday}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
