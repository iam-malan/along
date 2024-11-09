'use client'

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="w-full py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          className="float glass rounded-2xl p-12 shadow-xl text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl font-bold tracking-tight mb-6">Our Mission</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            To level the digital playing field, enabling smaller law firms to compete effectively online without breaking
            the bank. We understand the digital challenges faced by smaller law firms in today&apos;s competitive landscape,
            where online visibility can make a significant difference in attracting and retaining clients.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
