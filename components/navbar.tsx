"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Command Team Coaching</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-sm font-medium transition-colors hover:text-slate-900/70">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-slate-900/70">
                About
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-sm font-medium transition-colors hover:text-slate-900/70">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-slate-900/70">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
          <Link href="/contact">
            <Button>Request Training</Button>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="ml-auto">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                About
              </Link>
              <Link href="/programs" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                Programs
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                Contact
              </Link>
              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Request Training</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
