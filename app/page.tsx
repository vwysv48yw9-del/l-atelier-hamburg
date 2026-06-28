import { Header }        from "@/components/layout/header"
import { Footer }        from "@/components/layout/footer"
import { Hero }          from "@/components/sections/hero"
import { Services }      from "@/components/sections/services"
import { About }         from "@/components/sections/about"
import { Reviews }       from "@/components/sections/reviews"
import { Map }           from "@/components/sections/map"
import { TikTokCta }     from "@/components/sections/tiktok-cta"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <TikTokCta />
        <Map />
      </main>
      <Footer />
    </>
  )
}
