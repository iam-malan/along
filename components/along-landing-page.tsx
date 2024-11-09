'use client'

import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Services } from "./sections/Services"
import { FeaturedDesigns } from "./sections/FeaturedDesigns"
import { Pricing } from "./sections/Pricing"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"

export function AlongLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Services />
        <FeaturedDesigns />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
