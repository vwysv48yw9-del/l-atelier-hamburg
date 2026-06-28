"use client"

import { MapPin, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } },
})

const HOURS = [
  { days: "Di – Fr", time: "10:00 – 20:00 Uhr" },
  { days: "Sa",      time: "10:00 – 20:00 Uhr" },
  { days: "Mo + So", time: "Geschlossen"        },
]

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const inputBase: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border:          "1px solid rgba(255,255,255,0.07)",
  color:           "#F5F3EE",
  borderRadius:    "10px",
  width:           "100%",
  padding:         "12px 16px",
  fontSize:        "13px",
  letterSpacing:   "0.01em",
  outline:         "none",
}

export function Contact() {
  return (
    <section id="kontakt" style={{ backgroundColor: "#1c1f1f" }} className="py-16 md:py-28">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 md:px-20">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-14 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >

          {/* ── Linke Spalte ── */}
          <div>

            <motion.p
              variants={fadeUp()}
              className="text-[10px] tracking-[0.40em] uppercase font-medium mb-8"
              style={{ color: "#a08868" }}
            >
              Kontakt
            </motion.p>

            <motion.h2
              variants={fadeUp(0.04)}
              className="font-display font-light italic leading-[1.06] mb-5"
              style={{
                fontSize:      "clamp(2.6rem, 5vw, 4rem)",
                color:         "#F5F3EE",
                letterSpacing: "-0.024em",
              }}
            >
              Komm vorbei.
            </motion.h2>

            <motion.p
              variants={fadeUp(0.08)}
              className="mb-10 leading-relaxed"
              style={{
                fontSize: "15px",
                color:    "rgba(245,243,238,0.40)",
                maxWidth: "38ch",
              }}
            >
              Schreib uns auf WhatsApp — wir finden
              gemeinsam den passenden Termin.
            </motion.p>

            {/* WhatsApp — primärer CTA */}
            <motion.div variants={fadeUp(0.12)} className="mb-4">
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start font-semibold text-white"
                style={{
                  fontSize:        "13px",
                  letterSpacing:   "0.06em",
                  backgroundColor: "rgba(160,136,104,0.13)",
                  border:          "1px solid rgba(160,136,104,0.42)",
                  height:          "56px",
                  paddingLeft:     "26px",
                  paddingRight:    "30px",
                  borderRadius:    "9999px",
                  minWidth:        "0",
                }}
                whileHover={{
                  backgroundColor: "rgba(160,136,104,0.22)",
                  borderColor:     "rgba(160,136,104,0.72)",
                  scale:           1.012,
                  y:               -1,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
              >
                <WhatsAppIcon />
                Jetzt auf WhatsApp schreiben
              </motion.a>
            </motion.div>

            {/* Telefon */}
            <motion.div variants={fadeUp(0.13)} className="mb-12">
              <a
                href={SALON.phoneHref}
                className="group inline-flex items-baseline gap-3"
                style={{ color: "rgba(245,243,238,0.28)" }}
              >
                <span style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
                  oder anrufen
                </span>
                <span
                  className="font-display font-light transition-colors duration-300 group-hover:text-white"
                  style={{
                    fontSize:      "clamp(1.35rem, 2.1vw, 1.65rem)",
                    color:         "rgba(245,243,238,0.70)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {SALON.phone}
                </span>
              </a>
            </motion.div>

            {/* Trennlinie */}
            <motion.div
              variants={fadeUp(0.15)}
              style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }}
              className="mb-9"
            />

            {/* Infos: Adresse + Öffnungszeiten */}
            <motion.div
              variants={fadeUp(0.17)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-9"
            >
              {/* Adresse */}
              <div>
                <p
                  className="text-[9px] tracking-[0.28em] uppercase font-medium mb-4"
                  style={{ color: "rgba(160,136,104,0.58)" }}
                >
                  Adresse
                </p>
                <p
                  className="leading-[1.7]"
                  style={{ fontSize: "13.5px", color: "rgba(245,243,238,0.68)" }}
                >
                  {SALON.street}<br />
                  {SALON.city}
                </p>
                <p className="mt-1" style={{ fontSize: "12px", color: "rgba(245,243,238,0.28)" }}>
                  nahe U-Bahn Billstedt
                </p>
              </div>

              {/* Öffnungszeiten */}
              <div>
                <p
                  className="text-[9px] tracking-[0.28em] uppercase font-medium mb-4"
                  style={{ color: "rgba(160,136,104,0.58)" }}
                >
                  Öffnungszeiten
                </p>
                <div className="flex flex-col gap-2">
                  {HOURS.map(({ days, time }) => (
                    <div key={days} className="flex items-baseline justify-between gap-4">
                      <span style={{ fontSize: "12px", color: "rgba(245,243,238,0.32)", minWidth: "5.5ch", letterSpacing: "0.01em" }}>
                        {days}
                      </span>
                      <span style={{ fontSize: "13px", color: time === "Geschlossen" ? "rgba(245,243,238,0.18)" : "rgba(245,243,238,0.68)" }}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Google Maps — Route starten */}
            <motion.div variants={fadeUp(0.21)} className="mt-9 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <motion.a
                href={SALON.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4"
                whileHover={{ x: 3 }}
                transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              >
                {/* Icon-Kreis */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[rgba(160,136,104,0.35)]"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <MapPin
                    size={13}
                    strokeWidth={1.5}
                    style={{ color: "rgba(160,136,104,0.65)" }}
                  />
                </div>

                {/* Text */}
                <div>
                  <p
                    className="transition-colors duration-300 group-hover:text-white"
                    style={{ fontSize: "13.5px", fontWeight: 500, color: "rgba(245,243,238,0.72)" }}
                  >
                    Route starten
                  </p>
                  <p style={{ fontSize: "11px", color: "rgba(245,243,238,0.28)", marginTop: "2px" }}>
                    In Google Maps öffnen
                  </p>
                </div>

                {/* Pfeil */}
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="ml-1 transition-all duration-300 group-hover:text-[rgba(160,136,104,0.8)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "rgba(255,255,255,0.16)" }}
                />
              </motion.a>
            </motion.div>

          </div>

          {/* ── Rechte Spalte: Formular ── */}
          <motion.div
            variants={fadeUp(0.1)}
            className="w-full lg:w-[300px] xl:w-[340px]"
          >
            <div
              className="rounded-2xl p-6 sm:p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.032)",
                border:          "1px solid rgba(255,255,255,0.065)",
              }}
            >
              <p
                className="text-[9px] tracking-[0.28em] uppercase font-medium mb-6"
                style={{ color: "rgba(160,136,104,0.62)" }}
              >
                Kurze Nachricht
              </p>

              <form className="flex flex-col gap-3.5">
                {[
                  { label: "Name",    type: "text", placeholder: "Dein Name" },
                  { label: "Telefon", type: "tel",  placeholder: "040 / ..."  },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label
                      className="block text-[9px] uppercase tracking-[0.22em] mb-2 font-medium"
                      style={{ color: "rgba(245,243,238,0.22)" }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="focus:ring-1 focus:ring-[#a08868]/30 transition-all placeholder:text-[#4a4846]"
                      style={inputBase}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-[9px] uppercase tracking-[0.22em] mb-2 font-medium"
                    style={{ color: "rgba(245,243,238,0.22)" }}
                  >
                    Nachricht
                  </label>
                  <textarea
                    rows={3}
                    placeholder="z. B. Wunschtermin …"
                    className="focus:ring-1 focus:ring-[#a08868]/30 transition-all resize-none placeholder:text-[#4a4846]"
                    style={inputBase}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full font-semibold mt-1"
                  style={{
                    fontSize:        "10.5px",
                    letterSpacing:   "0.18em",
                    textTransform:   "uppercase",
                    height:          "48px",
                    borderRadius:    "10px",
                    backgroundColor: "rgba(160,136,104,0.10)",
                    border:          "1px solid rgba(160,136,104,0.28)",
                    color:           "#c4a882",
                  }}
                  whileHover={{
                    backgroundColor: "rgba(160,136,104,0.18)",
                    borderColor:     "rgba(160,136,104,0.52)",
                    color:           "#dcc9a8",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                >
                  Termin anfragen
                </motion.button>

                <p
                  className="text-center"
                  style={{ fontSize: "10px", color: "rgba(255,255,255,0.13)", letterSpacing: "0.04em" }}
                >
                  Antwort innerhalb eines Werktages
                </p>
              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
