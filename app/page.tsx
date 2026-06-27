import { Header }        from "@/components/layout/header"
import { Footer }        from "@/components/layout/footer"
import { Hero }          from "@/components/sections/hero"
import { Services }      from "@/components/sections/services"
import { VisualBreak }   from "@/components/sections/visual-break"
import { About }         from "@/components/sections/about"
import { Reviews }       from "@/components/sections/reviews"
import { Location }      from "@/components/sections/location"
import { Contact }       from "@/components/sections/contact"
import { StickyWhatsApp } from "@/components/layout/sticky-whatsapp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <VisualBreak />
        <About />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
