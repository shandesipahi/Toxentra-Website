"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoDark } from "./Logo";

const NAV_IDS = ["home", "about", "services", "contact"];
const PATHS = { home: "", about: "/about", services: "/services", contact: "/contact" };

const LABELS = {
  en: { home: "Home", about: "About Us", services: "Services", contact: "Contact", cta: "Request a Consultation" },
  tr: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetler", contact: "İletişim", cta: "Danışmanlık Talep Edin" },
  ar: { home: "الرئيسية", about: "من نحن", services: "الخدمات", contact: "اتصل بنا", cta: "اطلب استشارة" },
};

// Backward-compatible: old pages pass full English labels (e.g. "About Us"),
// new locale pages pass stable ids (e.g. "about").
const LEGACY_MAP = { Home: "home", "About Us": "about", Services: "services", Contact: "contact" };
function normalize(active) {
  if (!active) return "";
  return LEGACY_MAP[active] || active.toLowerCase();
}

function stripLocale(path) {
  if (!path) return "/";
  if (path.startsWith("/tr")) return path.slice(3) || "/";
  if (path.startsWith("/ar")) return path.slice(3) || "/";
  return path;
}

export default function Navbar({ active, locale = "en" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = LABELS[locale] || LABELS.en;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const activeId = normalize(active);
  const basePath = stripLocale(pathname);
  const basePathForLink = basePath === "/" ? "" : basePath;

  const navLinks = NAV_IDS.map((id) => ({
    id,
    label: t[id],
    href: `${prefix}${PATHS[id]}` || "/",
  }));

  const switcher = (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
      <Link href={basePathForLink || "/"} className={locale === "en" ? "text-green" : "hover:text-navy"}>EN</Link>
      <span className="text-slate-300">|</span>
      <Link href={`/tr${basePathForLink}`} className={locale === "tr" ? "text-green" : "hover:text-navy"}>TR</Link>
      <span className="text-slate-300">|</span>
      <Link href={`/ar${basePathForLink}`} className={locale === "ar" ? "text-green" : "hover:text-navy"}>AR</Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link href={prefix || "/"} aria-label="Home">
          <LogoDark />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors pb-1 border-b-2 ${
                activeId === l.id
                  ? "text-green border-green"
                  : "text-slate-700 border-transparent hover:text-navy"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          {switcher}
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] bg-green-dark"
          >
            {t.cta} <ArrowRight size={15} />
          </Link>
        </div>
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
              key={l.id}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${activeId === l.id ? "text-green" : "text-slate-700"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={`${prefix}/contact`}
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-green-dark"
          >
            {t.cta}
          </Link>
          <div className="pt-2 border-t border-black/5">{switcher}</div>
        </div>
      )}
    </header>
  );
}
