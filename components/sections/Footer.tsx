'use client'

import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-8 glass">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="font-sans text-sm text-muted-foreground">© 2024 ALONG Initiative. All rights reserved.</p>
          <nav className="flex gap-8">
            <Link className="font-sans text-sm hover:text-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="font-sans text-sm hover:text-primary transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
