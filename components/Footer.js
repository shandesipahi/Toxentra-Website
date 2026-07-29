import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { LogoLight } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <LogoLight />
          <p className="text-sm text-slate-300 mt-4 leading-relaxed max-w-xs">
            Independent toxicology and regulatory consulting for safer products and confident market access.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.linkedin.com/company/toxentra-r-d-and-consulting-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <Link href="/contact#form" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors" aria-label="Contact us">
              <Mail size={16} />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Mail size={15} /> info@toxentra.com</li>
            <li className="flex items-center gap-2"><MapPin size={15} /> Istanbul, Türkiye</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <span>© 2026 Toxentra. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
