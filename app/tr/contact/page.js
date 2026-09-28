import ContactForm from "../../contact/ContactForm";
import { Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "İletişim — TOXENTRA",
  description:
    "Bir sorunuz mu var ya da uzman desteğine mi ihtiyacınız var? Toxentra'ya ulaşın, ekibimiz en kısa sürede sizinle iletişime geçsin.",
};

const contactInfo = [
  { icon: Mail, title: "E-posta", lines: ["info@toxentra.com"] },
  { icon: MapPin, title: "Konum", lines: ["İstanbul, Türkiye"] },
  { icon: Clock, title: "Çalışma Saatleri", lines: ["Monday – Friday", "09:00 – 17:30 (GMT+3)"] },
];

function Eyebrow({ children }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-green">
      {children}
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar active="contact" locale="tr" />

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 grid lg:grid-cols-2 gap-14 items-start">
        {/* Left column */}
        <div>
          <Eyebrow>Bize Ulaşın</Eyebrow>
          <h1 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6">
            <span className="text-navy-deep">Ürün Güvenliliği İçin</span>
            <br />
            <span className="text-green">Birlikte</span>
            <br />
            <span className="text-navy-deep">Çalışalım.</span>
          </h1>
          <div className="w-14 h-[3px] mb-6 bg-green" />
          <p className="text-slate-600 leading-relaxed max-w-sm mb-10">
            Bir sorunuz mu var ya da uzman desteğine mi ihtiyacınız var? Yardım etmek için buradayız. Bize ulaşın, ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>

          <div className="space-y-7">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-green-pale text-green">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1 text-navy-deep">{c.title}</h3>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm font-medium text-green-dark">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column — form (client component) */}
        <ContactForm locale="tr" />
      </section>

      {/* SECONDARY CTA STRIP */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-2xl bg-white/70 border border-black/5 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-green-pale text-green">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1 font-serif text-navy-deep">
                İhtiyaçlarınızı görüşmeyi mi tercih edersiniz?
              </h3>
              <p className="text-sm text-slate-600 max-w-md">
                Danışmanlık talep edin, uzmanlarımız hedeflerinize nasıl destek olabileceğimizi anlamak için sizinle iletişime geçsin.
              </p>
            </div>
          </div>
          <Link
            href="#form"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-green text-green-dark shrink-0 transition-colors hover:bg-white"
          >
            Danışmanlık Talep Edin <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer locale="tr" />
    </>
  );
}
