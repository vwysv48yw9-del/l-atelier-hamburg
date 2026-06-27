"use client"

import { MapPin, Car, Train } from "lucide-react"
import { motion } from "motion/react"
import { SALON } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

export function Map() {
  return (
    <section style={{ backgroundColor: "#f0eeeb" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-20">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: "#a08868" }}>
              Anfahrt
            </p>
            <h2
              className="font-display font-light leading-tight mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1b1e1e" }}
            >
              Mitten in Hamburg-Billstedt.
            </h2>
            <p className="text-[15px] mb-8" style={{ color: "#6a6764" }}>
              Parkmöglichkeiten direkt vor dem Salon.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#a08868" }} />
                <div>
                  <div className="text-[14px] font-semibold" style={{ color: "#1b1e1e" }}>
                    {SALON.street}
                  </div>
                  <div className="text-[13px] mt-0.5" style={{ color: "#6a6764" }}>
                    {SALON.city} · {SALON.district}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Train size={16} className="mt-0.5 shrink-0" style={{ color: "#a08868" }} />
                <div className="text-[13px] leading-relaxed" style={{ color: "#6a6764" }}>
                  U-Bahn Billstedt (U2/U4) · ca. 5 Minuten Fußweg
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car size={16} className="mt-0.5 shrink-0" style={{ color: "#a08868" }} />
                <div className="text-[13px] leading-relaxed" style={{ color: "#6a6764" }}>
                  Kostenlose Parkplätze direkt vor dem Salon
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ minHeight: "300px", border: "1px solid rgba(27,30,30,0.1)" }}
          >
            <iframe
              src={SALON.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="L'Atelier Hamburg – Standort"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
