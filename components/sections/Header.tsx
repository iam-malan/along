'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-center glass">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <motion.div
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="ALONG Logo"
              className="h-8 w-8 text-primary"
              height={40}
              width={40}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="ml-2 font-serif text-2xl font-bold text-primary tracking-tight"
          >
            ALONG
          </motion.span>
        </Link>
        <nav className="flex gap-8">
          {['About', 'Services', 'Pricing', 'Contact'].map((item) => (
            <Link 
              key={item} 
              className="font-sans text-sm font-medium hover:text-primary transition-colors" 
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
