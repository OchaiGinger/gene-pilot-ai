"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Image
              src="/gene-pilot.png"
              alt="GenePilot Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-foreground">GenePilot.AI</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/team" className="text-foreground hover:text-primary transition-colors">
            Team
          </Link>
        </div>

        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/services">Get Started</Link>
        </Button>
      </div>
    </nav>
  )
}
