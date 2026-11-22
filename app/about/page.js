import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  Gem,
  Users,
  FlaskConical,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Microscope,
  Settings,
  TestTube,
  Share2,
  MessageCircle,
  GraduationCap,
  Check,
  Pill,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us — TOXENTRA",
  description:
    "Toxentra is an independent toxicology and product safety consulting company providing science-based support for product safety.",
};

const values = [
  "Scientific Excellence",
  "Integrity & Independence",
  "Quality & Rigor",
  "Collaboration & Respect",
  "Commitment to Safety",
];

const stats = [
  { icon: Pill, big: "Pharmaceuticals" },
  { icon: HeartPulse, big: "Medical Devices" },
  { icon: Sparkles, big: "Cosmetics" },
  { icon: FlaskConical, big: "Chemicals & Nutraceuticals" },
];

const whatWeDo = [
  [
    "Toxicological Risk Assessment",
    "Biological Evaluation (ISO 10993)",
    "Cosmetic Product Safety (CPSR)",
    "Pharmaceutical Toxicology",
  ],
  [
    "Environmental Risk Assessment (ERA)",
    "QSAR & Read-Across Assessment",
    "Scientific & Toxicological Reports",
    "Pharmacovigilance",
  ],
  [
    "Testing Strategy Design",
    "Laboratory Study Coordination (Through External Partners)",
  ],
];

const research = [
  {
    icon: Microscope,
    title: "Innovative Risk Assessment",
    text: "Development of advanced toxicological approaches and methodologies.",
  },
  {
    icon: Settings,
    title: "Medical Device Safety",
    text: "Biological evaluation and biocompatibility strategies.",
  },
  {
    icon: TestTube,
    title: "Formulation & Product Safety",
    text: "Safety assessment of novel pharmaceutical and cosmetic formulations.",
  },
  {
    icon: Share2,
    title: "Collaborative Research",
    text: "Academic and industry collaborations for scientific advancement.",
  },
];

const leadership = [
  "European Registered Toxicologist (ERT)",
  "Academic Researcher & University Faculty Member",
  "International Scientific Publications",
  "Expert in Toxicological Risk Assessment, Medical Device Safety & Regulatory Toxicology",
];

function Eyebrow({ children, className = "" }) {
  return (
    <span className={`text-xs font-semibold tracking-widest uppercase text-green ${className}`}>
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar active="About Us" />

      {/* FOUNDER */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16">
        <Eyebrow>ABOUT US · OUR FOUNDER</Eyebrow>
        <h1 className="text-4xl md:text-6xl leading-[1.1] font-bold font-serif mt-3 mb-6 text-navy-deep max-w-4xl">
          Founded by a toxicologist. Built on two decades of{" "}
          <span className="text-green">science</span>.
        </h1>
        <div className="w-14 h-[3px] mb-14 bg-green" />

        <div className="grid md:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-center pb-20">
          <div>
            <div className="relative">
              <Image
                src="/hande-sipahi.jpg"
                alt="Prof. Dr. Hande Sipahi"
                width={782}
                height={984}
                priority
                className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy-deep">
              Prof. Dr. Hande Sipahi
              <span className="text-green">, PhD, ERT, ATS</span>
            </h2>
            <p className="text-green font-medium mt-1 mb-6">Founder &amp; Scientific Director</p>
            <p className="text-slate-600 leading-[1.9] text-[1.05rem] mb-8">
              Prof. Dr. Hande Sipahi is the <strong className="font-semibold text-navy-deep">Founder and Scientific Director of TOXENTRA</strong>, with <strong className="font-semibold text-navy-deep">over 20 years of academic and pharmaceutical industry experience in toxicology</strong>. She currently serves as <strong className="font-semibold text-navy-deep">Head of the Department of Toxicology at the University of Health Sciences, Faculty of Pharmacy</strong>. Her primary areas of expertise include <strong className="font-semibold text-navy-deep">toxicological risk assessment, product safety, biocompatibility, and pharmacovigilance</strong>. She is a <strong className="font-semibold text-navy-deep">European Registered Toxicologist (ERT)</strong> and a <strong className="font-semibold text-navy-deep">Fellow of the Academy of Toxicological Sciences (ATS)</strong>.
            </p>
            <ul className="flex flex-col items-start gap-3 mb-10">
              {[
                "European Registered Toxicologist (ERT)",
                "Fellow, Academy of Toxicological Sciences (ATS)",
                "Former TİTCK Clinical Evaluation Commission member",
                "Member of EUROTOX, IUTOX & Turkish Society of Toxicology",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-navy-deep"
                >
                  <Check size={16} className="text-green shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 rounded-full bg-green-dark px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SCIENTIFIC ACHIEVEMENTS */}
      <section className="bg-navy-deep">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.2em] font-semibold text-[#7ED3A0] mb-10">
            SCIENTIFIC ACHIEVEMENTS
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {[
              ["150+", "Peer-reviewed publications"],
              ["30+", "Research projects"],
              ["100+", "Scientific safety assessments"],
              ["20+", "Years of academic & industry experience"],
            ].map(([n, l], i) => (
              <div key={l} className={`px-6 ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}>
                <div className="text-5xl md:text-6xl font-bold font-serif text-white">
                  {n.replace("+", "")}
                  <span className="text-[#4FBF80]">+</span>
                </div>
                <div className="text-slate-300 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TOXENTRA (moved below founder) */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>ABOUT TOXENTRA</Eyebrow>
          <h2 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6">
            <span className="text-navy-deep">Independent Science.</span>
            <br />
            <span className="text-navy-deep">Evidence-Based Solutions.</span>
            <br />
            <span className="text-green">Safer Products.</span>
          </h2>
          <div className="w-14 h-[3px] mb-6 bg-green" />
          <p className="text-slate-600 leading-relaxed mb-5">
            Toxentra is an independent toxicology consulting company dedicated to
            advancing product safety through a scientific approach,
            evidence-based decision-making, and alignment with international
            regulations.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We support pharmaceutical, medical device, cosmetics, chemical
            and biotechnology companies throughout the product
            lifecycle—from product development and testing strategies to
            toxicological risk assessment and safety evaluation.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-10"
          style={{ background: "linear-gradient(145deg, #0E2933 0%, #16394A 45%, #1B4A42 100%)" }}
        >
          {/* soft green glow accents */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(46,139,87,0.35) 0%, rgba(46,139,87,0) 70%)" }}
          />
          <div
            className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(46,139,87,0.18) 0%, rgba(46,139,87,0) 70%)" }}
          />

          {/* scientific molecular-node backdrop */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid slice"
          >
            {[
              [40, 60], [140, 30], [230, 90], [90, 160], [200, 220],
              [340, 50], [430, 140], [380, 260], [460, 340], [300, 320],
              [180, 380], [80, 300], [60, 430], [260, 440], [400, 430],
            ].map(([x, y], i, arr) => (
              <g key={i}>
                {i < arr.length - 1 && (
                  <line x1={x} y1={y} x2={arr[i + 1][0]} y2={arr[i + 1][1]} stroke="#2E8B57" strokeWidth="1" />
                )}
                <circle cx={x} cy={y} r={i % 3 === 0 ? 4.5 : 2.5} fill={i % 2 === 0 ? "#2E8B57" : "#FFFFFF"} />
              </g>
            ))}
          </svg>

          {/* subtle top border sheen */}
          <div
            className="absolute top-0 left-0 w-full h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)" }}
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.big} className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl sm:aspect-square flex flex-col justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 border border-green text-green">
                    <Icon size={20} />
                  </div>
                  <div className={`font-extrabold mb-1.5 sm:mb-2 text-green tracking-tight ${s.label ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl leading-snug"}`}>
                    {s.big}
                  </div>
                  {s.label && (
                    <div className="text-sm font-bold text-navy-deep leading-snug">{s.label}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">
        <div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green text-green">
            <Target size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-navy-deep">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To provide independent, evidence-based toxicology and scientific
            support that helps our clients develop safe and effective
            products.
          </p>
        </div>
        <div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green text-green">
            <Eye size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-navy-deep">Our Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To be a trusted, science-driven partner in product safety.
          </p>
        </div>
        <div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green text-green">
            <Gem size={24} />
          </div>
          <h3 className="font-bold text-lg mb-3 text-navy-deep">Our Values</h3>
          <ul className="space-y-1.5">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-green" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2 className="text-3xl md:text-[2.25rem] font-bold font-serif mt-3 mb-6 leading-tight text-navy-deep">
              Science at the Core, Impact in Every Decision.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>
                We understand the complexity of bringing products to
                market—and the critical importance of safety assessment at
                every step.
              </p>
              <p>
                Our multidisciplinary approach combines scientific knowledge in
                toxicology, pharmacology and product safety to provide
                reliable, evidence-based solutions tailored to our clients'
                needs.
              </p>
            </div>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl p-10 md:p-14 flex justify-center"
            style={{ background: "linear-gradient(135deg, #EDE7DA 0%, #F7F3EA 50%, #E4DED0 100%)" }}
          >
            <div className="w-full max-w-sm bg-white rounded-md shadow-xl p-8 relative" style={{ minHeight: 360 }}>
              <Image src="/logo.png" alt="TOXENTRA" width={112} height={24} className="h-6 w-auto mb-8" />
              <h3 className="text-2xl font-bold font-serif leading-tight mb-2 text-navy-deep">
                TOXICOLOGICAL
                <br />
                RISK ASSESSMENT
              </h3>
              <p className="text-sm text-slate-500 mb-8">Science. Evaluation. Confidence.</p>
              <ul className="space-y-1.5 text-sm text-slate-600">
                {["ISO 10993", "ICH", "EMA", "FDA", "OECD"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <svg className="absolute bottom-0 left-0 w-full opacity-70" height="60" viewBox="0 0 400 60" preserveAspectRatio="none">
                <path d="M0,40 C100,10 300,60 400,20 L400,60 L0,60 Z" fill="#2E8B57" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Eyebrow>WHAT WE DO</Eyebrow>
        <h2 className="text-3xl md:text-[2.25rem] font-bold font-serif mt-3 mb-10 leading-tight max-w-xl text-navy-deep">
          Toxicology and Product Safety Services
        </h2>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-4 bg-white rounded-2xl border border-black/5 p-10">
          {whatWeDo.map((col, i) => (
            <ul key={i} className="space-y-4">
              {col.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={17} className="shrink-0 mt-0.5 text-green" />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-navy text-navy transition-colors hover:bg-white"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* RESEARCH & INNOVATION */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Eyebrow>RESEARCH &amp; INNOVATION</Eyebrow>
              <p className="text-slate-600 leading-relaxed mt-3">
                Toxentra conducts and participates in scientific projects
                that advance toxicological science and support safer
                products and better risk assessment.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border-2 border-green text-green-dark shrink-0 transition-colors hover:bg-white"
            >
              View Our Projects <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {research.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title}>
                  <Icon size={26} className="mb-4 text-green" />
                  <h4 className="font-semibold text-sm mb-1.5 text-navy-deep">{r.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA + LEADERSHIP */}
      <section className="bg-navy-deep">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-green text-green">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif text-white mb-3 leading-tight">
                Let&apos;s Advance Your Product Safety
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
                Whether you are at the early stages of development or
                preparing for market entry, we are here to support your
                journey.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] bg-green"
              >
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div>
            <Eyebrow>OUR LEADERSHIP</Eyebrow>
            <div className="flex gap-5 mt-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-green text-green">
                <GraduationCap size={22} />
              </div>
              <ul className="space-y-2.5 text-sm text-slate-200">
                {leadership.map((l) => (
                  <li key={l} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-green" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
