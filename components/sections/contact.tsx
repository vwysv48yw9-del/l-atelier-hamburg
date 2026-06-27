"use client"

import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay } },
})

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const inputBase: React.CSSProperties = {
  backgroundColor: "#131210",
  border: "1px solid rgba(255,255,255,0.07)",
  color: "#F5F3EE",
}

export function Contact() {
  return (
    <section id="kontakt" className="relative py-32 md:py-48" style={{ backgroundColor: "#1c1f1f" }}>

      {/* Scrim oben – Übergang von Reviews (hell) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-10"
        style={{
          height: "100px",
          background: "linear-gradient(to bottom, rgba(250,248,245,0.07) 0%, transparent 100%)",
        }}
      />
      <div className="relative z-20 max-w-6xl mx-auto px-8 sm:px-12 md:px-20">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Links */}
          <div>
            <motion.p
              variants={fadeUp()}
              className="text-[10px] tracking-[0.38em] uppercase mb-7 font-medium"
              style={{ color: "#a08868" }}
            >
              Kontakt
            </motion.p>

            <motion.h2
              variants={fadeUp(0.05)}
              className="font-display font-light italic mb-6 leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#F5F3EE", letterSpacing: "-0.02em" }}
            >
              Komm vorbei.
            </motion.h2>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-[14.5px] leading-relaxed mb-10"
              style={{ color: "#B0ABA3" }}
            >
              Schreib uns auf WhatsApp — wir finden gemeinsam
              einen passenden Termin.
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="mb-4">
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 text-white text-[13px] tracking-[0.06em] font-semibold rounded-full w-full sm:w-auto justify-center sm:justify-start"
                style={{
                  backgroundColor: "#1e2120",
                  border: "1px solid rgba(160,136,104,0.22)",
                  height: "54px",
                  paddingLeft: "28px",
                  paddingRight: "32px",
                }}
                whileHover={{ scale: 1.015, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              >
                <WhatsAppIcon />
                Jetzt auf WhatsApp schreiben
              </motion.a>
            </motion.div>

            <motion.p
              variants={fadeUp(0.2)}
              className="text-[12.5px] leading-relaxed mb-14"
              style={{ color: "#565250" }}
            >
              Wir antworten in der Regel schnell und finden gemeinsam einen passenden Termin.
            </motion.p>

            {/* Infos */}
            <motion.div
              variants={fadeUp(0.25)}
              className="flex flex-col gap-6 pt-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                {
                  icon: <Phone size={13} strokeWidth={1.5} style={{ color: "#7a7570" }} />,
                  label: "Anrufen",
                  content: (
                    <a
                      href={SALON.phoneHref}
                      className="text-[15px] font-medium transition-colors duration-300 hover:text-[#a08868]"
                      style={{ color: "#F5F3EE" }}
                    >
                      {SALON.phone}
                    </a>
                  ),
                },
                {
                  icon: <MapPin size={13} strokeWidth={1.5} style={{ color: "#7a7570" }} />,
                  label: undefined,
                  content: (
                    <>
                      <div className="text-[14px] font-medium" style={{ color: "#F5F3EE" }}>
                        {SALON.street} · {SALON.city}
                      </div>
                      <div className="text-[12px] mt-0.5" style={{ color: "#565250" }}>
                        {SALON.district} · nahe U-Bahn Billstedt
                      </div>
                    </>
                  ),
                },
                {
                  icon: <Clock size={13} strokeWidth={1.5} style={{ color: "#7a7570" }} />,
                  label: undefined,
                  content: (
                    <div className="text-[14px] leading-relaxed">
                      <div style={{ color: "#F5F3EE" }}>{SALON.hours.weekdays}</div>
                      <div style={{ color: "#F5F3EE" }}>{SALON.hours.saturday}</div>
                      <div className="mt-0.5" style={{ color: "#565250" }}>{SALON.hours.closed}</div>
                    </div>
                  ),
                },
                {
                  icon: <Mail size={13} strokeWidth={1.5} style={{ color: "#7a7570" }} />,
                  label: undefined,
                  content: (
                    <a
                      href={`mailto:${SALON.email}`}
                      className="text-[14px] transition-colors duration-300 hover:text-white"
                      style={{ color: "#B0ABA3" }}
                    >
                      {SALON.email}
                    </a>
                  ),
                },
              ].map(({ icon, label, content }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0">{icon}</div>
                  <div>
                    {label && (
                      <div className="text-[10px] tracking-[0.2em] uppercase mb-1.5 font-medium" style={{ color: "#565250" }}>
                        {label}
                      </div>
                    )}
                    {content}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Rechts: Formular */}
          <motion.div variants={fadeUp(0.1)} className="flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.38em] uppercase mb-8 font-medium" style={{ color: "#a08868" }}>
              Oder kurze Nachricht
            </p>

            <form className="flex flex-col gap-5">
              {[
                { label: "Name",     type: "text", placeholder: "Dein Name" },
                { label: "Telefon",  type: "tel",  placeholder: "040 / ..." },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="block text-[10px] uppercase tracking-[0.22em] mb-2.5 font-medium" style={{ color: "#565250" }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full rounded-xl px-4 py-3.5 text-[13.5px] focus:outline-none focus:ring-1 focus:ring-[#a08868]/40 transition-colors placeholder:text-[#333]"
                    style={inputBase}
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] mb-2.5 font-medium" style={{ color: "#565250" }}>
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  placeholder="z. B. Wunschtermin, Anliegen …"
                  className="w-full rounded-xl px-4 py-3.5 text-[13.5px] focus:outline-none focus:ring-1 focus:ring-[#a08868]/40 transition-colors resize-none placeholder:text-[#333]"
                  style={inputBase}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full h-[52px] rounded-xl text-[10.5px] tracking-[0.24em] uppercase font-semibold mt-2"
                style={{
                  backgroundColor: "rgba(160,136,104,0.14)",
                  border: "1px solid rgba(160,136,104,0.35)",
                  color: "#c4a882",
                }}
                whileHover={{
                  backgroundColor: "rgba(160,136,104,0.22)",
                  borderColor: "rgba(160,136,104,0.6)",
                  color: "#dcc9a8",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
              >
                Absenden
              </motion.button>

              <p className="text-[11px] text-center" style={{ color: "#464240" }}>
                Antwort innerhalb eines Werktages.
              </p>
            </form>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
