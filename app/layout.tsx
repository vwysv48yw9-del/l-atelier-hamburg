import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "L'Atelier Hamburg Billstedt | Herrenfriseur & Fades",
  description:
    "Moderne Herrenschnitte, Fades und Bartpflege in Hamburg-Billstedt. Termine bequem per WhatsApp vereinbaren.",
  openGraph: {
    title: "L'Atelier Hamburg Billstedt | Herrenfriseur & Fades",
    description:
      "Moderne Herrenschnitte, Fades und Bartpflege in Hamburg-Billstedt. Termine bequem per WhatsApp vereinbaren.",
    locale: "de_DE",
    type: "website",
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
