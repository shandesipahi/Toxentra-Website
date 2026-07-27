import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  FileText,
  Globe2,
  LineChart,
  Users,
  ArrowRight,
  FlaskConical,
  ClipboardCheck,
  Scale,
  Microscope,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Scientific Excellence",
    text: "ERT-certified expertise supported by academic research and hands-on regulatory experience.",
  },
  {
    icon: FileText,
    title: "Regulatory Expertise",
    text: "Global regulatory knowledge aligned with EMA, FDA, OECD, ISO and ICH frameworks.",
  },
  {
    icon: Globe2,
    title: "International Perspective",
    text: "Supporting clients across markets and jurisdictions with scientific rigor and integrity.",
  },
  {
    icon: LineChart,
    title: "Evidence-Based Approach",
    text: "Decisions built on reliable data, structured risk assessment and sound scientific reasoning.",
  },
  {
    icon: Users,
    title: "Independent Advice",
    text: "Objective, unbiased and confidential scientific consulting — free of commercial conflicts.",
  },
];

const services = [
  {
    icon: FlaskConical,
    title: "Toxicological Assessment",
    text: "Scientific evaluation of the potential health risks associated with your products, from raw material to finished formulation.",
  },
  {
    icon: ClipboardCheck,
    title: "Product Safety Consulting",
    text: "Preparation and evaluation of safety documentation for cosmetic, chemical and nutraceutical products.",
  },
  {
    icon: Scale,
    title: "Regulatory Consulting",
    text: "Managing compliance with national and international regulations for pharmaceuticals, medical devices and related sectors.",
  },
  {
    icon: Microscope,
    title: "R&D Consulting",
    text: "Scientific and technical support throughout your product development lifecycle, from concept to submission.",
  },
];

function Eyebrow({ children }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-green">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar active="Home" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid slice"
        >
          {[
            [60, 60], [180, 40], [300, 110], [120, 180], [260, 240],
            [420, 70], [520, 160], [640, 90], [700, 220], [420, 300],
          ].map(([x, y], i, arr) => (
            <g key={i}>
              {i < arr.length - 1 && (
                <line x1={x} y1={y} x2={arr[i + 1][0]} y2={arr[i + 1][1]} stroke="#173B4A" strokeWidth="1.5" />
              )}
              <circle cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill={i % 2 === 0 ? "#2E8B57" : "#173B4A"} />
            </g>
          ))}
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>Toxicology &amp; Regulatory Consulting</Eyebrow>
            <h1 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6">
              <span className="text-navy-deep">Your partner in</span><br />
              <span className="text-navy-deep">science, </span>
              <span className="text-green">safety</span>
              <span className="text-navy-deep">, and approval.</span>
            </h1>
            <div className="w-14 h-[3px] mb-6 bg-green" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-lg">
              TOXENTRA delivers toxicology, product safety and regulatory
              consulting for the pharmaceutical, medical device, cosmetic,
              chemical and nutraceutical industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] bg-green-dark"
              >
                Request a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-navy text-navy transition-colors hover:bg-white"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl p-10 md:p-14 flex justify-center"
              style={{ background: "linear-gradient(135deg, #EDE7DA 0%, #F7F3EA 50%, #E4DED0 100%)" }}
            >
              <div className="w-full max-w-sm bg-white rounded-md shadow-xl p-8 relative" style={{ minHeight: 320 }}>
                <Image src="/logo.png" alt="TOXENTRA" width={112} height={24} className="h-6 w-auto mb-8" />

                <h3 className="text-xl font-bold font-serif leading-tight tracking-tight mb-2 text-navy-deep">
                  Your Partner in Science, Safety &amp; Approval
                </h3>
                <p className="text-sm text-slate-500">
                  Toxicology &amp; regulatory consulting for pharma, medical
                  devices, cosmetics, chemicals and nutraceuticals.
                </p>
                <svg className="absolute bottom-0 left-0 w-full opacity-70" height="60" viewBox="0 0 400 60" preserveAspectRatio="none">
                  <path d="M0,40 C100,10 300,60 400,20 L400,60 L0,60 Z" fill="#2E8B57" opacity="0.15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-black/5 bg-white/60">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <Eyebrow>Why TOXENTRA</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold font-serif mt-3 text-navy-deep">
              A scientific foundation you can build on
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustPoints.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-green text-green">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="text-3xl md:text-[2.25rem] font-bold font-serif mt-3 mb-4 leading-tight text-navy-deep">
            Services built around your product&apos;s journey
          </h2>
          <p className="text-slate-600 leading-relaxed">
            From early-stage safety evaluation to final regulatory approval,
            we bring science and compliance together at every step.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-white rounded-2xl border border-black/5 p-7 hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5 border border-green text-green">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-navy-deep">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-navy text-navy transition-colors hover:bg-white"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <Eyebrow>About TOXENTRA</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold font-serif mt-3 mb-4 leading-tight text-navy-deep">
              Where scientific rigor meets regulatory clarity
            </h2>
            <p className="text-slate-600 leading-relaxed">
              TOXENTRA brings together toxicological assessment, product
              safety and regulatory strategy so your products reach the
              market safely and in full compliance. Our team works alongside
              R&amp;D, quality and regulatory affairs teams across the
              pharmaceutical, medical device, cosmetic, chemical and
              nutraceutical industries.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-navy text-navy transition-colors hover:bg-white self-start md:justify-self-end"
          >
            More About Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4">
            Bring your product to market with confidence.
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Tell us about your product and regulatory pathway — our team will
            get back to you to schedule a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition-transform hover:scale-[1.03] bg-green text-white"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
