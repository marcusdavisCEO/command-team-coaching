import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight">Command Team Coaching</span>
            </Link>
            <p className="text-sm text-gray-500">
              Empowering middle managers with transformative leadership tools and techniques.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-slate-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-slate-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-slate-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-slate-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-slate-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-slate-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-gray-500 hover:text-slate-900">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-sm text-gray-500 hover:text-slate-900">
                  Managerial Action Sequence
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-gray-500 hover:text-slate-900">
                  Self-Leadership Training
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-gray-500 hover:text-slate-900">
                  Custom Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-slate-900">
                  Request Training
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-500 space-y-2">
              <p>123 Leadership Way</p>
              <p>Business District, NY 10001</p>
              <p>info@commandteamcoaching.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Command Team Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
