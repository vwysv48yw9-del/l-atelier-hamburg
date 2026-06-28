import { Header }        from "@/components/layout/header"
import { Footer }        from "@/components/layout/footer"
import { Hero }          from "@/components/sections/hero"
import { Services }      from "@/components/sections/services"
import { About }         from "@/components/sections/about"
import { Reviews }       from "@/components/sections/reviews"
import { Contact }       from "@/components/sections/contact"
import { StickyWhatsApp } from "@/components/layout/sticky-whatsapp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Reviews />

        {/* Übergang: hell (#faf8f5) → dunkel (#1c1f1f) */}
        <div
          aria-hidden="true"
          style={{
            height: "180px",
            background: "linear-gradient(to bottom, #faf8f5 0%, #1e2121 55%, #1c1f1f 100%)",
          }}
        />

        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
