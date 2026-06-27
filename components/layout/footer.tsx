import { Phone, MapPin, Clock } from "lucide-react"
import { SALON } from "@/lib/config"

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#131210" }} className="border-t border-white/[0.05]">

      {/* Hauptbereich */}
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand – breiter */}
          <div className="md:col-span-5">
            <p className="font-display font-light italic text-white mb-1" style={{ fontSize: "1.25rem" }}>
              L&apos;Atelier
            </p>
            <p className="text-[9px] tracking-[0.32em] uppercase mb-6" style={{ color: "#a08868" }}>
              Hair · Style
            </p>
            <p className="text-[13.5px] leading-relaxed max-w-[26ch]" style={{ color: "#7a7570" }}>
              Inhabergeführter Herrensalon<br />in Hamburg-Billstedt.
            </p>
            <p className="text-[12px] mt-4 leading-relaxed" style={{ color: "#464240" }}>
              Reinskamp 2A · 22117 Hamburg
            </p>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-3">
            <p className="text-[9.5px] uppercase tracking-[0.28em] font-semibold mb-7" style={{ color: "#464240" }}>
              Kontakt
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={SALON.phoneHref}
                className="flex items-center gap-3 text-[13px] transition-colors duration-300 hover:text-white group"
                style={{ color: "#B0ABA3" }}
              >
                <Phone size={11} strokeWidth={1.5} style={{ color: "#a08868" }} className="shrink-0" />
                {SALON.phone}
              </a>
              <div className="flex items-start gap-3 text-[13px]" style={{ color: "#7a7570" }}>
                <MapPin size={11} strokeWidth={1.5} style={{ color: "#a08868" }} className="shrink-0 mt-0.5" />
                <span>{SALON.street} · {SALON.city}</span>
              </div>
              {SALON.email && (
                <a
                  href={`mailto:${SALON.email}`}
                  className="text-[13px] transition-colors duration-300 hover:text-white"
                  style={{ color: "#7a7570" }}
                >
                  {SALON.email}
                </a>
              )}
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div className="md:col-span-4">
            <p className="text-[9.5px] uppercase tracking-[0.28em] font-semibold mb-7" style={{ color: "#464240" }}>
              Öffnungszeiten
            </p>
            <div className="flex items-start gap-3">
              <Clock size={11} strokeWidth={1.5} style={{ color: "#a08868" }} className="shrink-0 mt-0.5" />
              <div className="text-[13px] leading-relaxed flex flex-col gap-1">
                <div style={{ color: "#B0ABA3" }}>{SALON.hours.weekdays}</div>
                <div style={{ color: "#B0ABA3" }}>{SALON.hours.saturday}</div>
                <div className="mt-1" style={{ color: "#464240" }}>{SALON.hours.closed}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <p className="text-[11.5px]" style={{ color: "#363330" }}>
          © {new Date().getFullYear()} L&apos;Atelier · Hamburg
        </p>
        <div className="flex items-center gap-7">
          <a
            href="/impressum"
            className="text-[11.5px] transition-colors duration-300 hover:text-white"
            style={{ color: "#363330" }}
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-[11.5px] transition-colors duration-300 hover:text-white"
            style={{ color: "#363330" }}
          >
            Datenschutz
          </a>
        </div>
      </div>

    </footer>
  )
}
