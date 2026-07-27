"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { LogoDark } from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Scientific Resources", href: "#", dropdown: true },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <LogoDark />
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors pb-1 border-b-2 ${
                active === l.label
                  ? "text-green border-green"
                  : "text-slate-700 border-transparent hover:text-navy"
              }`}
            >
              {l.label}
              {l.dropdown && <ChevronDown size={14} />}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] bg-green-dark"
        >
          Request a Consultation <ArrowRight size={15} />
        </Link>
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-black/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${active === l.label ? "text-green" : "text-slate-700"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-green-dark"
          >
            Request a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
