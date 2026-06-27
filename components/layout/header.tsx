"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const WhatsAppIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
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
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)
  const [activeHref, setActiveHref] = useState("")

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    fn()
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    NAV.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Outer fixed shell — pointer-events-none so hero clicks pass through gaps */}
      <div className="fixed inset-x-0 top-0 z-50 pointer-events-none">

        <header
          className={cn(
            "pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled
              ? "mt-[10px] mx-[14px] sm:mx-[20px] rounded-[20px]"
              : "mt-0 mx-0 rounded-none"
          )}
          style={scrolled ? {
            backgroundColor: "rgba(10,12,12,0.86)",
            backdropFilter: "blur(40px) saturate(1.8)",
            WebkitBackdropFilter: "blur(40px) saturate(1.8)",
            border: "1px solid rgba(255,255,255,0.058)",
            boxShadow: "0 16px 56px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.05)",
          } : {
            backgroundColor: "transparent",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            border: "1px solid transparent",
            boxShadow: "none",
          }}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              scrolled
                ? "px-5 sm:px-7 md:px-8 h-[52px]"
                : "max-w-6xl mx-auto px-6 h-[70px]"
            )}
          >

            {/* Wordmark */}
            <a href="/" className="flex flex-col leading-none group shrink-0">
              <span
                className="font-display font-light italic transition-all duration-500"
                style={{
                  color: "rgba(255,255,255,0.92)",
                  fontSize: scrolled ? "15px" : "17px",
                  letterSpacing: "-0.01em",
                }}
              >
                L&apos;Atelier
              </span>
              <span
                className="tracking-[0.28em] uppercase transition-all duration-500"
                style={{
                  color: "#a08868",
                  fontSize: scrolled ? "7px" : "8px",
                  marginTop: "3px",
                }}
              >
                Hair · Style
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {NAV.map((l) => {
                const isActive = activeHref === l.href
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "nav-link text-[11px] tracking-[0.16em] transition-colors duration-400",
                      isActive ? "nav-link-active" : ""
                    )}
                    style={{
                      color: isActive
                        ? "rgba(255,255,255,0.90)"
                        : "rgba(255,255,255,0.42)",
                    }}
                  >
                    {l.label}
                  </a>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href={SALON.phoneHref}
                className="text-[11px] tracking-[0.12em] transition-colors duration-300 hover:text-white"
                style={{ color: "rgba(255,255,255,0.32)" }}
              >
                {SALON.phone}
              </a>

              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.14em] font-medium rounded-full px-4 h-[30px] transition-colors duration-300"
                style={{
                  color: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(160,136,104,0.30)",
                  backgroundColor: "rgba(160,136,104,0.07)",
                }}
                whileHover={{
                  backgroundColor: "rgba(160,136,104,0.14)",
                  borderColor: "rgba(160,136,104,0.55)",
                  color: "rgba(255,255,255,0.95)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
              >
                <WhatsAppIcon />
                WhatsApp
              </motion.a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.48)" }}
              aria-label="Menü öffnen"
            >
              <Menu size={17} strokeWidth={1.5} />
            </button>

          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50"
              style={{ backgroundColor: "rgba(4,5,5,0.65)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{
                backgroundColor: "rgba(9,11,11,0.96)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                borderLeft: "1px solid rgba(255,255,255,0.055)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.42, ease: EASE }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-6 h-[70px]"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.055)" }}
              >
                <span
                  className="font-display font-light italic"
                  style={{ fontSize: "17px", color: "rgba(255,255,255,0.88)", letterSpacing: "-0.01em" }}
                >
                  L&apos;Atelier
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                  aria-label="Menü schließen"
                >
                  <X size={15} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-3 pt-8 pb-4 gap-0.5">
                {NAV.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3.5 rounded-xl text-[13px] tracking-[0.06em] transition-colors hover:text-white"
                    style={{
                      color: activeHref === l.href
                        ? "rgba(255,255,255,0.88)"
                        : "rgba(255,255,255,0.42)",
                    }}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.38, ease: EASE }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="mt-auto px-5 pb-10 flex flex-col gap-3">
                <motion.a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full h-12 rounded-2xl text-[12.5px] text-white font-medium"
                  style={{
                    backgroundColor: "rgba(160,136,104,0.10)",
                    border: "1px solid rgba(160,136,104,0.28)",
                  }}
                  whileHover={{ backgroundColor: "rgba(160,136,104,0.18)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  <WhatsAppIcon />
                  Termin per WhatsApp
                </motion.a>
                <a
                  href={SALON.phoneHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center text-[12px] tracking-wide transition-colors hover:text-white"
                  style={{ color: "#5a5754" }}
                >
                  {SALON.phone}
                </a>
                <p className="text-center text-[10px] tracking-wide mt-1" style={{ color: "#363330" }}>
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
