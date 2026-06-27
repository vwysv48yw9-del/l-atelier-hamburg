import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Craft } from "@/components/sections/craft"
import { Reviews } from "@/components/sections/reviews"
import { Contact } from "@/components/sections/contact"
import { StickyWhatsApp } from "@/components/layout/sticky-whatsapp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Craft />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
