import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { LogoLight } from "./Logo";

const LABELS = {
  en: {
    tagline: "Independent toxicology and regulatory consulting for safer products and confident market access.",
    company: "Company",
    aboutUs: "About Us",
    services: "Services",
    contact: "Contact",
    contactHeading: "Contact",
    location: "Istanbul, Türkiye",
    copyright: "© 2026 Toxentra. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  tr: {
    tagline: "Daha güvenli ürünler ve güvenilir pazara giriş için bağımsız toksikoloji ve regülasyon danışmanlığı.",
    company: "Şirket",
    aboutUs: "Hakkımızda",
    services: "Hizmetler",
    contact: "İletişim",
    contactHeading: "İletişim",
    location: "İstanbul, Türkiye",
    copyright: "© 2026 Toxentra. Tüm hakları saklıdır.",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
  },
  ar: {
    tagline: "استشارات مستقلة في علم السموم والشؤون التنظيمية لمنتجات أكثر أمانًا ودخول واثق إلى الأسواق.",
    company: "الشركة",
    aboutUs: "من نحن",
    services: "الخدمات",
    contact: "اتصل بنا",
    contactHeading: "اتصل بنا",
    location: "إسطنبول، تركيا",
    copyright: "© 2026 Toxentra. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
  },
};

export default function Footer({ locale = "en" }) {
  const t = LABELS[locale] || LABELS.en;
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <footer className="bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <LogoLight />
          <p className="text-sm text-slate-300 mt-4 leading-relaxed max-w-xs">{t.tagline}</p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.linkedin.com/company/toxentra-r-d-and-consulting-ltd/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <Link
              href={`${prefix}/contact#form`}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
              aria-label="Contact us"
            >
              <Mail size={16} />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">{t.company}</h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link href={`${prefix}/about`} className="hover:text-white">{t.aboutUs}</Link></li>
            <li><Link href={`${prefix}/services`} className="hover:text-white">{t.services}</Link></li>
            <li><Link href={`${prefix}/contact`} className="hover:text-white">{t.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">{t.contactHeading}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Mail size={15} /> info@toxentra.com</li>
            <li className="flex items-center gap-2"><MapPin size={15} /> {t.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <span>{t.copyright}</span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">{t.privacy}</Link>
            <Link href="#" className="hover:text-white">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
