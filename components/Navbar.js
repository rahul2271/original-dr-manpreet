"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-xl text-gray-900"
        >
          <div className="w-18 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-semibold shadow">
            DMA
          </div>
          <span className="tracking-tight">Dr. Manpreet Ayurveda</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <Link href="/services" className="hover:text-emerald-600 transition">
            Services
          </Link>
          <Link href="/blog" className="hover:text-emerald-600 transition">
            Blog
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition">
            About
          </Link>
          <Link
            href="/consultation"
            className="px-5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition font-medium shadow"
          >
            Book
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-800 font-medium">
            <Link
              href="/services"
              className="hover:text-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="hover:text-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="hover:text-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/consultation"
              className="px-5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition text-center shadow"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
