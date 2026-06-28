// ─── Kontaktdaten ─────────────────────────────────────────────────────────────
// Quelle: Google Business Profile (Stand: Juni 2026)

export const SALON = {
  name:        "L'Atelier",

  phone:       "040 7136020",
  phoneHref:   "tel:+49407136020",

  // WhatsApp-Nummer ohne + und Leerzeichen – bitte bestätigen ob gleiche Nr.
  whatsapp:    "4917622812063",

  street:      "Reinskamp 2A",
  city:        "22117 Hamburg",
  district:    "Hamburg-Billstedt",

  // Google Maps Embed – aus Google Maps → Teilen → Karte einbetten
  mapsEmbed:   "https://maps.google.com/maps?q=Reinskamp+2A%2C+22117+Hamburg&t=&z=16&ie=UTF8&iwloc=&output=embed",

  hours: {
    weekdays: "Di – Fr: 10:00 – 20:00 Uhr",
    saturday: "Sa: 10:00 – 20:00 Uhr",
    closed:   "Mo + So: Geschlossen",
  },

  google: {
    score: "4,8",
    count: "5 Rezensionen",
  },

  email: "platzhalter@gmx.de",

  tiktok: "https://www.tiktok.com/@latelier.du.style0",

  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Reinskamp+2A%2C+22117+Hamburg",
} as const

// WhatsApp-Link mit vorbereiteter Nachricht
const WA_MSG = encodeURIComponent(
  "Hallo L'Atelier, ich würde gerne einen Termin vereinbaren."
)
export const WA_URL = `https://wa.me/${SALON.whatsapp}?text=${WA_MSG}`
