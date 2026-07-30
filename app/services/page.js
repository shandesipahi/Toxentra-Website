import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FlaskConical,
  Microscope,
  ShieldCheck,
  SprayCan,
  TrendingUp,
  Pill,
  Atom,
  FileText,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Services — TOXENTRA",
  description:
    "Toxentra provides end-to-end toxicology and regulatory services that support product safety, compliance and market access across global markets.",
};

const services = [
  {
    n: "1",
    icon: FlaskConical,
    title: "Toxicological Risk Assessment",
    href: "/services/toxicological-risk-assessment",
    text: "Comprehensive risk assessments to protect human health and support regulatory compliance.",
  },
  {
    n: "2",
    icon: Microscope,
    title: "Biological Evaluation (ISO 10993)",
    text: "Biological evaluation and biocompatibility services in accordance with ISO 10993 standards.",
    href: "/services/biological-evaluation-iso-10993",
  },
  {
    n: "3",
    icon: ShieldCheck,
    title: "Medical Device Toxicology",
    href: "/services/medical-device-safety",
    text: "Safety evaluation and regulatory support throughout the medical device lifecycle.",
  },
  {
    n: "4",
    icon: SprayCan,
    title: "Cosmetic Product Safety (CPSR)",
    href: "/services/cosmetic-product-safety",
    text: "Scientific safety assessment and report preparation in line with EU Cosmetics Regulation (EC) No 1223/2009.",
  },
  {
    n: "5",
    icon: TrendingUp,
    title: "Clinical & Pharmacological Evaluation",
    href: "/services/clinical-pharmacological-evaluation",
    text: "Evaluation of clinical, pharmacological and biopharmaceutical data to support product development and regulatory submissions.",
  },
  {
    n: "6",
    icon: Pill,
    title: "Pharmacovigilance",
    href: "/services/pharmacovigilance",
    bullets: ["Signal detection support", "Literature review support", "Training"],
  },
  {
    n: "7",
    icon: Atom,
    title: "Molecular Design & Computational Toxicology",
    href: "/services/molecular-design-computational-toxicology",
    text: "In silico solutions including CADD, small molecule design, metabolite synthesis, QSAR, docking and predictive toxicology.",
  },
  {
    n: "8",
    icon: FileText,
    title: "Scientific & Regulatory Consulting",
    href: "/services/scientific-regulatory-consulting",
    text: "Strategic regulatory advice and scientific solutions tailored to your product and target markets.",
  },
  {
    n: "9",
    icon: GraduationCap,
    title: "Training & Scientific Education",
    href: "/services/training-scientific-education",
    text: "Tailored training programs and workshops on toxicology, pharmacovigilance and regulatory sciences.",
  },
];

const process = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Initial Consultation",
    text: "We learn about your product, goals and regulatory needs.",
  },
  {
    n: "02",
    icon: Microscope,
    title: "Scientific Assessment",
    text: "Our experts conduct the necessary evaluations and studies.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Regulatory Strategy",
    text: "We develop a clear strategy to meet regulatory requirements.",
  },
  {
    n: "04",
    icon: FileText,
    title: "Final Report & Ongoing Support",
    text: "We deliver comprehensive reports and continue to support you.",
  },
];

function Eyebrow({ children }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-green">
      {children}
    </span>
  );
}

function IconCircle({ Icon }) {
  return (
    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-green-pale text-green">
      <Icon size={24} />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar active="Services" />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>Our Services</Eyebrow>
          <h1 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6">
            <span className="text-navy-deep">Scientific Expertise.</span>
            <br />
            <span className="text-green">Regulatory Solutions.</span>
          </h1>
          <div className="w-14 h-[3px] mb-6 bg-green" />
          <p className="text-slate-600 leading-relaxed max-w-md">
            Toxentra provides end-to-end toxicology and regulatory services
            that support product safety, compliance and market access across
            global markets.
          </p>
        </div>
        <div
          className="rounded-2xl overflow-hidden shadow-2xl p-10 md:p-14 flex justify-center"
          style={{ background: "linear-gradient(135deg, #EDE7DA 0%, #F7F3EA 50%, #E4DED0 100%)" }}
        >
          <div className="w-full max-w-sm bg-white rounded-md shadow-xl p-8 relative" style={{ minHeight: 300 }}>
            <Image src="/logo.png" alt="TOXENTRA" width={112} height={24} className="h-6 w-auto mb-8" />
            <h3 className="text-xl font-bold font-serif leading-tight text-navy-deep">
              Science.
              <br />
              Evaluation.
              <br />
              Confidence.
            </h3>
            <svg className="absolute bottom-0 left-0 w-full opacity-70" height="60" viewBox="0 0 400 60" preserveAspectRatio="none">
              <path d="M0,40 C100,10 300,60 400,20 L400,60 L0,60 Z" fill="#2E8B57" opacity="0.15" />
            </svg>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.n}
                href={s.href || "#"}
                className="bg-white rounded-2xl border border-black/5 p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <IconCircle Icon={Icon} />
                <h3 className="font-semibold text-base mb-2 leading-snug text-navy-deep">
                  {s.n}. {s.title}
                </h3>
                {s.bullets ? (
                  <ul className="text-sm text-slate-600 leading-relaxed space-y-1 mb-4 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-green" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{s.text}</p>
                )}
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-dark">
                  Learn More <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA BANNER (contained) */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-navy-deep">
          <svg
            className="absolute right-0 top-0 h-full opacity-[0.15] pointer-events-none"
            width="360"
            viewBox="0 0 360 240"
            preserveAspectRatio="xMidYMid slice"
          >
            {[
              [40, 40], [100, 20], [160, 80], [220, 30], [280, 70],
              [330, 130], [260, 150], [180, 170], [100, 140], [50, 190],
            ].map(([x, y], i, arr) => (
              <g key={i}>
                {i < arr.length - 1 && (
                  <line x1={x} y1={y} x2={arr[i + 1][0]} y2={arr[i + 1][1]} stroke="#2E8B57" strokeWidth="1" />
                )}
                <circle cx={x} cy={y} r="3" fill="#2E8B57" />
              </g>
            ))}
          </svg>
          <div className="flex gap-5 relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-green text-green">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif text-white mb-2">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                From early development to regulatory approval, Toxentra
                provides tailored scientific solutions for every stage of
                your product lifecycle.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shrink-0 transition-transform hover:scale-[1.03] bg-green"
          >
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-14 max-w-xl mx-auto">
          <Eyebrow>How We Support Your Project</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-bold font-serif mt-3 text-navy-deep">
            A Proven Process, Focused on Your Success
          </h2>
        </div>
        <div className="grid sm:grid-cols-4 gap-8 sm:gap-4 relative">
          {process.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.n} className="relative flex flex-col items-center text-center px-2">
                {i < process.length - 1 && (
                  <div className="hidden sm:block absolute top-7 left-1/2 w-full border-t-2 border-dashed border-[#C9D6CE]" />
                )}
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center mb-3 border-2 border-green text-green bg-cream">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-semibold mb-2 text-green">{p.n}</span>
                <h3 className="font-semibold text-sm mb-1.5 text-navy-deep">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[11rem]">{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
