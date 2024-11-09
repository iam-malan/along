'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            South African Legal Online Network Growth Initiative
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering smaller law firms with a robust online presence. Custom-built websites by legal practitioners,
            for legal practitioners.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              className="font-sans inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none glass"
              href="#contact"
            >
              Get Started
            </Link>
            <Link
              className="font-sans inline-flex h-12 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none glass"
              href="#about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
