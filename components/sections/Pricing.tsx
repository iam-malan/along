'use client'

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "../ui/button"

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight">Exclusive Pricing</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto glass rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-all w-full"
        >
          <div className="text-center space-y-6">
            <h3 className="font-serif text-2xl font-bold">ALONG Initiative Rate</h3>
            <p className="font-serif text-6xl font-bold">R5,000</p>
            <p className="font-sans text-muted-foreground">Compared to market rate of R18,000 - R20,000</p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Check className="h-5 w-5" />
                <span className="font-sans">Initial Deposit: R2,500</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-5 w-5" />
                <span className="font-sans">Final Payment: R2,500</span>
              </div>
            </div>
            <Button className="w-full font-sans glass hover:scale-105 transition-all py-6">Get Started</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
