import { Header }        from "@/components/layout/header"
import { Footer }        from "@/components/layout/footer"
import { Hero }          from "@/components/sections/hero"
import { Services }      from "@/components/sections/services"
import { About }         from "@/components/sections/about"
import { Reviews }       from "@/components/sections/reviews"
import { Contact }       from "@/components/sections/contact"
import { Location }     from "@/components/sections/location"
import { TikTokCta }    from "@/components/sections/tiktok-cta"
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
            height: "160px",
            background: "linear-gradient(to bottom, #faf8f5 0%, #252828 60%, #1c1f1f 100%)",
          }}
        />

        <Contact />
        <Location />
        <TikTokCta />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
