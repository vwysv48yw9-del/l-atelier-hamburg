import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "L'Atelier Hamburg",
  description:
    "Moderne Herrenschnitte, Fades und Bartpflege in Hamburg-Billstedt. Termine bequem per WhatsApp vereinbaren.",
  openGraph: {
    title: "L'Atelier Hamburg",
    description:
      "Moderne Herrenschnitte, Fades und Bartpflege in Hamburg-Billstedt. Termine bequem per WhatsApp vereinbaren.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/innen.png",
        width: 1402,
        height: 1122,
        alt: "L'Atelier Hamburg – Innenansicht des Barbershops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Atelier Hamburg",
    description:
      "Moderne Herrenschnitte, Fades und Bartpflege in Hamburg-Billstedt. Termine bequem per WhatsApp vereinbaren.",
    images: ["/images/innen.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${geist.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--color-bg] text-[--color-dark]">
        {children}
      </body>
    </html>
  )
}
