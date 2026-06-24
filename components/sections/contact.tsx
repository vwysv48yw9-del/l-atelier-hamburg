"use client"

import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { motion } from "motion/react"
import { SALON, WA_URL } from "@/lib/config"

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28" style={{ backgroundColor: "#1b1e1e" }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Links */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light italic mb-5 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F5F3EE" }}
            >
              Komm vorbei.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[15px] leading-relaxed mb-10"
              style={{ color: "#C8C2B8" }}
            >
              Schreib uns auf WhatsApp — wir finden gemeinsam<br className="hidden sm:block" />
              einen passenden Termin.
            </motion.p>

            {/* Primär: WhatsApp CTA */}
            <motion.div variants={fadeUp} className="mb-5">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white text-[14px] tracking-[0.06em] font-semibold rounded-full transition-opacity hover:opacity-88 w-full sm:w-auto justify-center sm:justify-start"
                style={{ backgroundColor: "#1f2320", border: "1px solid rgba(255,255,255,0.12)", height: "56px", paddingLeft: "28px", paddingRight: "32px" }}
              >
                <WhatsAppIcon />
                Jetzt auf WhatsApp schreiben
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[13px] leading-relaxed mb-12"
              style={{ color: "#9B958B" }}
            >
              Wir antworten in der Regel schnell und finden gemeinsam einen passenden Termin.
            </motion.p>

            {/* Kontaktinfos */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 pt-8"
              style={{ borderTop: "1px solid #2e2e2e" }}
            >
              {/* Telefon */}
              <div className="flex items-start gap-4">
                <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "#9B958B" }} />
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-1 font-medium" style={{ color: "#9B958B" }}>Anrufen</div>
                  <a
                    href={SALON.phoneHref}
                    className="text-[16px] font-medium transition-colors hover:text-[#a08868]"
                    style={{ color: "#F5F3EE" }}
                  >
                    {SALON.phone}
                  </a>
                </div>
              </div>

              {/* Adresse */}
              <div className="flex items-start gap-4">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#9B958B" }} />
                <div>
                  <div className="text-[14px] font-medium" style={{ color: "#F5F3EE" }}>{SALON.street} · {SALON.city}</div>
                  <div className="text-[12px] mt-1" style={{ color: "#9B958B" }}>{SALON.district} · nahe U-Bahn Billstedt</div>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex items-start gap-4">
                <Clock size={15} className="mt-0.5 shrink-0" style={{ color: "#9B958B" }} />
                <div className="text-[14px] leading-relaxed">
                  <div style={{ color: "#F5F3EE" }}>{SALON.hours.weekdays}</div>
                  <div style={{ color: "#F5F3EE" }}>{SALON.hours.saturday}</div>
                  <div className="mt-1" style={{ color: "#9B958B" }}>{SALON.hours.closed}</div>
                </div>
              </div>

              {/* E-Mail */}
              <div className="flex items-center gap-4">
                <Mail size={15} className="shrink-0" style={{ color: "#9B958B" }} />
                <a
                  href={`mailto:${SALON.email}`}
                  className="text-[14px] transition-colors hover:text-white"
                  style={{ color: "#C8C2B8" }}
                >
                  {SALON.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Rechts: Kurzes Formular als Fallback */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.28em] uppercase mb-3 font-medium" style={{ color: "#9B958B" }}>
              Oder kurze Nachricht
            </p>
            <p className="text-[13px] mb-8" style={{ color: "#666" }}>
              Alternativ zum WhatsApp-Chat.
            </p>

            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] mb-2 font-medium" style={{ color: "#9B958B" }}>Name</label>
                <input
                  type="text"
                  placeholder="Dein Name"
                  className="w-full rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#a08868]/70"
                  style={{ backgroundColor: "#141412", border: "1px solid #2e2e2e", color: "#F5F3EE" }}
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] mb-2 font-medium" style={{ color: "#9B958B" }}>Telefon</label>
                <input
                  type="tel"
                  placeholder="040 / ..."
                  className="w-full rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#a08868]/70"
                  style={{ backgroundColor: "#141412", border: "1px solid #2e2e2e", color: "#F5F3EE" }}
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] mb-2 font-medium" style={{ color: "#9B958B" }}>Nachricht</label>
                <textarea
                  rows={4}
                  placeholder="z. B. Wunschtermin, Anliegen …"
                  className="w-full rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#a08868]/70 resize-none"
                  style={{ backgroundColor: "#141412", border: "1px solid #2e2e2e", color: "#F5F3EE" }}
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-lg text-white text-[12px] tracking-[0.18em] uppercase font-semibold mt-1 transition-opacity hover:opacity-88"
                style={{ backgroundColor: "#a08868" }}
              >
                Absenden
              </button>

              <p className="text-[12px] text-center" style={{ color: "#9B958B" }}>
                Antwort innerhalb eines Werktages.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
