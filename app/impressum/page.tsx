import { SALON } from "@/lib/config"

export const metadata = {
  title: "Impressum | L'Atelier Hamburg",
}

function TodoBlock({ label }: { label: string }) {
  return (
    <span className="font-mono bg-yellow-100 text-yellow-800 px-1 rounded text-[0.9em]">
      {label}
    </span>
  )
}

export default function ImpressumPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20" style={{ color: "#1b1e1e" }}>
      <h1
        className="font-display font-light mb-10"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Impressum
      </h1>

      <div className="flex flex-col gap-8 text-[15px] leading-relaxed" style={{ color: "#3a3734" }}>
        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            <TodoBlock label="TODO_INHABERNAME" /><br />
            {SALON.street}<br />
            {SALON.city}
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Kontakt
          </h2>
          <p>
            Telefon: {SALON.phone}<br />
            E-Mail: {SALON.email}
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <p>
            <TodoBlock label="TODO_UST_ID" /> (gemäß §27a Umsatzsteuergesetz)
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Berufsbezeichnung
          </h2>
          <p>
            Friseurmeister/in · zuständige Kammer: <TodoBlock label="TODO_HANDWERKSKAMMER" />
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>

        <p className="text-[12px] font-mono border border-dashed rounded px-4 py-3" style={{ color: "#9B958B", borderColor: "#d8d2c8" }}>
          TODO: Impressum vor Veröffentlichung von einem Rechtsanwalt prüfen lassen.<br />
          Inhabername, USt-ID und Handwerkskammer eintragen.
        </p>
      </div>

      <div className="mt-10">
        <a href="/" className="text-[13px] transition-colors hover:text-[#a08868]" style={{ color: "#9B958B" }}>
          ← Zurück zur Startseite
        </a>
      </div>
    </main>
  )
}
