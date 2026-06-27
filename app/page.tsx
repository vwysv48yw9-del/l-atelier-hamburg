import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Impressions } from "@/components/sections/impressions"
import { About } from "@/components/sections/about"
import { Craft } from "@/components/sections/craft"
import { Reviews } from "@/components/sections/reviews"
import { Atmosphere } from "@/components/sections/atmosphere"
import { Contact } from "@/components/sections/contact"
import { StickyWhatsApp } from "@/components/layout/sticky-whatsapp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Impressions />
        <About />
        <Craft />
        <Reviews />
        <Atmosphere />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
