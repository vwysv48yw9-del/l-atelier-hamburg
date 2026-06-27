import { Phone, MapPin, Clock } from "lucide-react"
import { SALON } from "@/lib/config"

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#141412" }} className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <p className="font-display font-light italic text-white mb-1" style={{ fontSize: "1.15rem" }}>
            L&apos;Atelier
          </p>
          <p className="text-[9px] tracking-[0.28em] uppercase mb-4" style={{ color: "#a08868" }}>
            Hair · Style
          </p>
          <p className="text-[13px] leading-relaxed" style={{ color: "#9B958B" }}>
            Inhabergeführter Herrensalon<br />in Hamburg-Billstedt.
          </p>
        </div>

        {/* Kontakt */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5" style={{ color: "#9B958B" }}>
            Kontakt
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={SALON.phoneHref}
              className="flex items-center gap-3 text-[13px] font-medium transition-colors hover:text-white"
              style={{ color: "#C8C2B8" }}
            >
              <Phone size={12} style={{ color: "#a08868" }} className="shrink-0" />
              {SALON.phone}
            </a>
            <div className="flex items-start gap-3 text-[13px]" style={{ color: "#9B958B" }}>
              <MapPin size={12} style={{ color: "#a08868" }} className="shrink-0 mt-0.5" />
              <span>{SALON.street} · {SALON.city}</span>
            </div>
          </div>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5" style={{ color: "#9B958B" }}>
            Öffnungszeiten
          </p>
          <div className="flex items-start gap-3">
            <Clock size={12} style={{ color: "#a08868" }} className="shrink-0 mt-0.5" />
            <div className="text-[13px] leading-relaxed">
              <div style={{ color: "#C8C2B8" }}>{SALON.hours.weekdays}</div>
              <div style={{ color: "#C8C2B8" }}>{SALON.hours.saturday}</div>
              <div className="mt-0.5" style={{ color: "#6a6764" }}>{SALON.hours.closed}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-[12px]" style={{ color: "#6a6764" }}>
          © {new Date().getFullYear()} L&apos;Atelier · Hamburg
        </p>
        <div className="flex items-center gap-6">
          <a href="/impressum" className="text-[12px] transition-colors hover:text-white" style={{ color: "#6a6764" }}>
            Impressum
          </a>
          <a href="/datenschutz" className="text-[12px] transition-colors hover:text-white" style={{ color: "#6a6764" }}>
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  )
}
