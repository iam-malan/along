'use client'

import { motion } from "framer-motion"

const services = [
  {
    title: "Custom-built Website",
    description: "State-of-the-art website with modern frameworks, built from the ground up.",
    icon: "🎨"
  },
  {
    title: "Legal-Specific",
    description: "Specifically hard-coded for legal practitioners.",
    icon: "⚖️"
  },
  {
    title: "SEO Optimized",
    description: "Full search engine optimization.",
    icon: "🔍"
  },
  {
    title: "Mobile-Friendly",
    description: "100% mobile-friendly design.",
    icon: "📱"
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight">Our Unique Offering</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="float glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center flex flex-col items-center"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-4">{item.title}</h3>
              <p className="font-sans text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
