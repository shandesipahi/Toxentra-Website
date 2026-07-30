import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Eyebrow({ children }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-green">
      {children}
    </span>
  );
}

export default function ServiceDetailLayout({
  eyebrow,
  title,
  subtitle,
  overview,
  services,
  whyUs,
  faqs,
  related,
  ctaTitle,
  ctaText,
}) {
  return (
    <>
      <Navbar active="Services" />

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-14 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mt-3 mb-5 leading-tight text-navy-deep">
          {title}
        </h1>
        <div className="w-14 h-[3px] mx-auto mb-6 bg-green" />
        <p className="text-slate-600 leading-relaxed text-lg mb-8">{subtitle}</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] bg-green-dark"
        >
          Request a Consultation <ArrowRight size={16} />
        </Link>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-5 text-slate-600 leading-relaxed">
          {overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* OUR SERVICES */}
      {services && services.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <Eyebrow>What&apos;s Included</Eyebrow>
            <h2 className="text-3xl font-bold font-serif mt-3 text-navy-deep">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl border border-black/5 p-6 hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-green-pale text-green">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 leading-snug text-navy-deep">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* WHY CHOOSE TOXENTRA */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <Eyebrow>Why TOXENTRA</Eyebrow>
            <h2 className="text-3xl font-bold font-serif mt-3 text-navy-deep">Why Choose TOXENTRA?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyUs.map((w) => (
              <div key={w} className="flex gap-3 sm:block">
                <span className="w-2 h-2 rounded-full bg-green mt-2 shrink-0 sm:mb-3 sm:mt-0" />
                <p className="text-sm text-slate-600 leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-3xl font-bold font-serif mt-3 text-navy-deep">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-white rounded-xl border border-black/5 px-6 py-4 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-sm text-navy-deep">
                {f.q}
                <span className="text-green transition-transform group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}
      {related && related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <Eyebrow>Related Services</Eyebrow>
          <h2 className="text-2xl font-bold font-serif mt-3 mb-8 text-navy-deep">
            Explore Related Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r) =>
              r.href ? (
                <Link
                  key={r.title}
                  href={r.href}
                  className="bg-white rounded-xl border border-black/5 p-5 hover:shadow-lg transition-all flex items-center justify-between gap-2"
                >
                  <span className="text-sm font-semibold text-navy-deep">{r.title}</span>
                  <ArrowRight size={15} className="text-green shrink-0" />
                </Link>
              ) : (
                <div
                  key={r.title}
                  className="bg-white rounded-xl border border-black/5 p-5 flex items-center justify-between gap-2 opacity-70"
                >
                  <span className="text-sm font-semibold text-navy-deep">{r.title}</span>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 border border-green text-green">
            <MessageCircle size={22} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4">{ctaTitle}</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">{ctaText}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition-transform hover:scale-[1.03] bg-green text-white"
          >
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
