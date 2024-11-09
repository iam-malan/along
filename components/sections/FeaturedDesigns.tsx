'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const designs = [
  {
    title: "Multi-Page",
    link: "https://salegal.netlify.app",
  },
  {
    title: "Single Page",
    link: "https://gvanzyl.vercel.app",
  },
]

export function FeaturedDesigns() {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight">Featured Designs</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {designs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all flex flex-col items-center"
            >
              <div className="p-8 w-full">
                <h3 className="font-serif text-2xl font-bold text-center mb-2">{item.title}</h3>
                <div className="relative aspect-video mb-6">
                  <Image
                    alt={`${item.title} Preview`}
                    className="rounded-xl object-cover object-center transition-transform group-hover:scale-105"
                    height="300"
                    src={`/images/${index === 0 ? 'multipage' : 'singlepage'}.png`}
                    width="600"
                    style={{
                      aspectRatio: "600/300",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="text-center">
                  <Link
                    className="font-sans inline-flex items-center justify-center rounded-md text-sm font-medium transition-all hover:scale-105 glass px-6 py-3"
                    href={item.link}
                  >
                    View Site
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
