"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

const EASE = [0.16, 1, 0.3, 1] as const

const NAV = [
  { label: "Leistungen",   href: "#leistungen"  },
  { label: "Salon",        href: "#salon"       },
  { label: "Bewertungen",  href: "#bewertungen" },
  { label: "Einblicke",    href: "#einblicke"   },
  { label: "Anfahrt",      href: "#anfahrt"     },
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
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
    const TRIGGER = 0.35

    const getActive = () => {
      const vh = window.innerHeight
      let active = ""
      for (const { href } of NAV) {
        const el = document.querySelector(href)
        if (!el) continue
        if (el.getBoundingClientRect().top <= vh * TRIGGER) active = href
      }
      setActiveHref(active)
    }

    window.addEventListener("scroll", getActive, { passive: true })
    getActive()
    return () => window.removeEventListener("scroll", getActive)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Outer fixed shell — pointer-events-none so hero clicks pass through gaps */}
      <div className="fixed inset-x-0 top-0 z-50 pointer-events-none" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>

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
                paddingTop: "env(safe-area-inset-top, 0px)",
                paddingBottom: "env(safe-area-inset-bottom, 0px)",
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

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
