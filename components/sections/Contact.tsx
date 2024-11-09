'use client'

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const requirements = [
  "Preferred color scheme",
  "Desired images/branding elements",
  "Firm content (practice areas, team information, contact details etc.)",
]

export function Contact() {
  return (
    <section id="contact" className="w-full py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight">Contact Us</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 shadow-xl flex flex-col items-center lg:items-start"
          >
            <h3 className="font-serif text-2xl font-bold tracking-tight mb-8">What We Need From You</h3>
            <ul className="space-y-6 w-full">
              {requirements.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 font-sans"
                >
                  <Check className="h-6 w-6 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 shadow-xl"
          >
            <form className="space-y-6">
              <Input placeholder="Your Name" className="font-sans glass p-6" />
              <Input placeholder="Your Email" type="email" className="font-sans glass p-6" />
              <Textarea placeholder="Your Message" className="font-sans glass p-6 min-h-[150px]" />
              <Button type="submit" className="w-full font-sans glass hover:scale-105 transition-all py-6">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
