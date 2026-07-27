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
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us — TOXENTRA",
  description:
    "Toxentra is an independent toxicology and regulatory consulting company dedicated to advancing product safety through scientific excellence.",
};

const values = [
  "Scientific Excellence",
  "Integrity & Independence",
  "Quality & Rigor",
  "Collaboration & Respect",
  "Commitment to Safety",
];

const stats = [
  {
    icon: Users,
    big: "20+",
    label: "Years of Combined Experience",
    text: "Deep expertise in toxicology and regulatory science.",
  },
  {
    icon: FlaskConical,
    big: "Hundreds",
    label: "Scientific Safety Assessments",
    text: "Across pharmaceuticals, medical devices, cosmetics and chemicals.",
  },
  {
    icon: ShieldCheck,
    big: "ERT Certified",
    label: "European Registered Toxicologist",
    text: "Recognized professional certification in Europe.",
  },
  {
    icon: Globe2,
    big: "Global Regulatory Expertise",
    label: "",
    text: "EMA, FDA, OECD, ICH, ISO, SCCS and other international guidelines.",
  },
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
    "Scientific & Regulatory Reports",
    "Pharmacovigilance",
  ],
  [
    "Testing Strategy Design",
    "Laboratory Study Management (Through Trusted Partners)",
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
  "International Scientific Author",
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

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>ABOUT TOXENTRA</Eyebrow>
          <h1 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6">
            <span className="text-navy-deep">Independent Science.</span>
            <br />
            <span className="text-navy-deep">Regulatory Confidence.</span>
            <br />
            <span className="text-green">Safer Products.</span>
          </h1>
          <div className="w-14 h-[3px] mb-6 bg-green" />
          <p className="text-slate-600 leading-relaxed mb-5">
            Toxentra is an independent toxicology and regulatory consulting
            company dedicated to advancing product safety through scientific
            excellence, evidence-based decision making, and international
            regulatory expertise.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We support pharmaceutical, medical device, cosmetics, chemical
            and biotechnology companies throughout the entire product
            lifecycle—from early development and testing strategy to
            toxicological risk assessment, regulatory documentation and
            market approval.
          </p>
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
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">
        <div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green text-green">
            <Target size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-navy-deep">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To deliver independent, evidence-based toxicology and regulatory
            solutions that enable our clients to bring safe and effective
            products to people worldwide.
          </p>
        </div>
        <div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green text-green">
            <Eye size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-navy-deep">Our Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To be a trusted global partner that sets the standard for
            scientific excellence and regulatory integrity in product safety
            evaluation.
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
                Toxentra was founded by toxicologists and regulatory experts
                with over 20 years of combined experience in academia,
                industry and regulatory environments.
              </p>
              <p>
                We understand the complexity of bringing products to
                market—and the critical importance of safety assessment at
                every step.
              </p>
              <p>
                Our multidisciplinary team combines deep scientific
                knowledge with practical regulatory insight to deliver
                strategic, reliable and customized solutions for our
                clients.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.big} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4 border border-green text-green">
                    <Icon size={20} />
                  </div>
                  <div className={`font-bold text-lg mb-1 text-navy-deep ${s.label ? "font-serif" : ""}`}>
                    {s.big}
                  </div>
                  {s.label && (
                    <div className="text-xs font-semibold text-slate-500 mb-2">{s.label}</div>
                  )}
                  <p className="text-xs text-slate-500 leading-relaxed">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Eyebrow>WHAT WE DO</Eyebrow>
        <h2 className="text-3xl md:text-[2.25rem] font-bold font-serif mt-3 mb-10 leading-tight max-w-xl text-navy-deep">
          Comprehensive Scientific and Regulatory Services
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
