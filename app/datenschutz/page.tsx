import { SALON } from "@/lib/config"

export const metadata = {
  title: "Datenschutz | L'Atelier Hamburg",
}

function TodoBlock({ label }: { label: string }) {
  return (
    <span className="font-mono bg-yellow-100 text-yellow-800 px-1 rounded text-[0.9em]">
      {label}
    </span>
  )
}

export default function DatenschutzPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20" style={{ color: "#1b1e1e" }}>
      <h1
        className="font-display font-light mb-10"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Datenschutzerklärung
      </h1>

      <div className="flex flex-col gap-8 text-[15px] leading-relaxed" style={{ color: "#3a3734" }}>
        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Verantwortlicher
          </h2>
          <p>
            <TodoBlock label="TODO_INHABERNAME" /><br />
            {SALON.street}<br />
            {SALON.city}<br />
            E-Mail: {SALON.email}
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Erhebung und Verarbeitung personenbezogener Daten
          </h2>
          <p>
            Beim Besuch dieser Website werden durch den Webserver automatisch allgemeine Informationen
            erfasst (sog. Server-Log-Dateien). Dazu gehören z. B. Browsertyp, Betriebssystem,
            Datum und Uhrzeit des Zugriffs sowie die IP-Adresse. Diese Daten lassen keine
            Rückschlüsse auf einzelne Personen zu und werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            WhatsApp
          </h2>
          <p>
            Über den WhatsApp-Button dieser Website wird eine Verbindung zum WhatsApp-Dienst der
            Meta Platforms Ireland Limited hergestellt. Dabei werden Daten (u. a. Telefonnummer)
            an WhatsApp übertragen. Bitte beachten Sie die{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#a08868]"
            >
              Datenschutzrichtlinie von WhatsApp
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Google Maps
          </h2>
          <p>
            Diese Website verwendet Google Maps zur Darstellung von Karteninformationen.
            Betreiber: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            Durch die Nutzung von Google Maps können Daten an Google übertragen werden.
            Weitere Informationen finden Sie in der{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#a08868]"
            >
              Datenschutzerklärung von Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit
            und Widerspruch gegen die Verarbeitung. Wenden Sie sich dazu an: {SALON.email}
          </p>
        </section>

        <section>
          <h2 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B958B" }}>
            Beschwerderecht
          </h2>
          <p>
            Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
            Zuständige Behörde für Hamburg: Der Hamburgische Beauftragte für Datenschutz und
            Informationsfreiheit.
          </p>
        </section>

        <p className="text-[12px] font-mono border border-dashed rounded px-4 py-3" style={{ color: "#9B958B", borderColor: "#d8d2c8" }}>
          TODO: Datenschutzerklärung vor Veröffentlichung rechtlich prüfen lassen.<br />
          Hosting-Anbieter und ggf. weitere Drittdienste (Analytics, Fonts) ergänzen.
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
