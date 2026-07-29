import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  Search,
  FlaskConical,
  ShieldAlert,
  BookOpen,
  TestTube,
  Users,
  Send,
  ShieldCheck,
  Scale,
  Globe2,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Biological Evaluation (ISO 10993) — TOXENTRA",
  description:
    "Scientific support for biological evaluation and biocompatibility according to ISO 10993.",
};

const subServices = [
  {
    icon: ClipboardList,
    title: "Biological Evaluation Plan (BEP)",
    text: "Development of risk-based Biological Evaluation Plans defining the biological endpoints, evaluation strategy and supporting evidence required throughout the product lifecycle.",
  },
  {
    icon: FileText,
    title: "Biological Evaluation Report (BER)",
    text: "Preparation of comprehensive Biological Evaluation Reports integrating toxicological, biological, chemical and clinical evidence in accordance with ISO 10993-1.",
  },
  {
    icon: Search,
    title: "ISO 10993 Gap Analysis",
    text: "Identification of missing data, documentation gaps and additional evidence required to support regulatory compliance.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Characterization",
    text: "Scientific evaluation of material composition, extractables and leachables based on ISO 10993-18 principles.",
  },
  {
    icon: ShieldAlert,
    title: "Toxicological Risk Assessment of Extractables & Leachables",
    text: "Health risk assessment of identified chemical constituents using internationally accepted toxicological methodologies.",
  },
  {
    icon: BookOpen,
    title: "Literature Evaluation",
    text: "Critical review of published scientific evidence to support biological safety and reduce unnecessary biological testing where appropriate.",
  },
  {
    icon: TestTube,
    title: "Biocompatibility Testing Strategy",
    text: "Development of science-based testing strategies considering device type, intended use, duration of contact and regulatory expectations.",
  },
  {
    icon: Users,
    title: "Laboratory Study Coordination",
    text: "Scientific support in planning and coordinating biological testing with accredited laboratories.",
  },
  {
    icon: Send,
    title: "Regulatory Submission Support",
    text: "Preparation and review of biological evaluation documentation for regulatory submissions.",
  },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Regulatory Expertise",
    text: "Deep familiarity with the ISO 10993 series, EU MDR 2017/745 and FDA requirements for biological evaluation.",
  },
  {
    icon: Scale,
    title: "Evidence-Based Approach",
    text: "We prioritize existing data and literature evidence to reduce unnecessary animal and laboratory testing.",
  },
  {
    icon: Users,
    title: "Independent Advice",
    text: "Objective, science-first recommendations, free from commercial testing-lab incentives.",
  },
  {
    icon: Globe2,
    title: "International Perspective",
    text: "Experience supporting submissions across multiple regulatory jurisdictions.",
  },
];

const faqs = [
  {
    q: "What is a Biological Evaluation Report (BER)?",
    a: "A Biological Evaluation Report (BER) is a scientific document prepared in accordance with ISO 10993-1 that demonstrates whether the biological safety of a medical device has been adequately assessed. The report integrates available biological, chemical and toxicological information to determine whether the device is suitable for its intended clinical use.",
  },
  {
    q: "When is ISO 10993 required?",
    a: "ISO 10993 should be considered whenever a medical device comes into direct or indirect contact with the human body. The extent of biological evaluation depends on the device's nature, duration of contact, materials, manufacturing process and intended clinical application.",
  },
  {
    q: "Do all medical devices require biocompatibility testing?",
    a: "Not necessarily. ISO 10993 follows a risk-based approach. In many cases, existing biological data, chemical characterization, toxicological risk assessment and published literature may adequately demonstrate biological safety without conducting additional laboratory testing.",
  },
  {
    q: "Can literature data replace biological testing?",
    a: "Yes, under appropriate circumstances. When sufficient scientific evidence and equivalent material information are available, a well-documented literature evaluation combined with toxicological assessment may reduce or eliminate the need for additional biological testing, provided this approach is scientifically justified and compliant with regulatory expectations.",
  },
  {
    q: "What is the difference between a BEP and a BER?",
    a: "A Biological Evaluation Plan (BEP) defines the strategy for evaluating biological safety, while a Biological Evaluation Report (BER) documents the assessment process, supporting evidence and scientific conclusions regarding biological safety.",
  },
  {
    q: "How can TOXENTRA support biological evaluation?",
    a: "TOXENTRA provides scientific support throughout the biological evaluation process, including Biological Evaluation Plans (BEP), Biological Evaluation Reports (BER), ISO 10993 gap analyses, toxicological risk assessments, literature evaluations and regulatory documentation tailored to project-specific requirements.",
  },
];

function Eyebrow({ children }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-green">
      {children}
    </span>
  );
}

export default function BiologicalEvaluationPage() {
  return (
    <>
      <Navbar active="Services" />

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-14 text-center">
        <Eyebrow>ISO 10993</Eyebrow>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mt-3 mb-5 leading-tight text-navy-deep">
          Biological Evaluation Supporting Safe Medical Devices
        </h1>
        <div className="w-14 h-[3px] mx-auto mb-6 bg-green" />
        <p className="text-slate-600 leading-relaxed text-lg mb-8">
          Scientific support for biological evaluation and biocompatibility
          according to ISO 10993.
        </p>
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
          <p>
            Biological evaluation is a risk-based process used to assess the
            biological safety of medical devices throughout their lifecycle.
            Rather than relying solely on laboratory testing, ISO 10993
            promotes a comprehensive evaluation that integrates material
            characterization, toxicological risk assessment, literature
            evidence and, where necessary, biological testing.
          </p>
          <p>
            TOXENTRA provides independent scientific support for
            manufacturers throughout the biological evaluation process. Our
            approach combines current scientific evidence, regulatory
            expectations and internationally recognized standards to help
            demonstrate the biological safety of medical devices while
            avoiding unnecessary testing whenever scientifically justified.
          </p>
          <p>
            Whether you are developing a new device, updating an existing
            product or preparing regulatory documentation, we provide
            tailored scientific solutions aligned with ISO 10993 and
            applicable regulatory requirements.
          </p>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Eyebrow>What's Included</Eyebrow>
          <h2 className="text-3xl font-bold font-serif mt-3 text-navy-deep">
            Our Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-black/5 p-6 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-green-pale text-green">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-sm mb-2 leading-snug text-navy-deep">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE TOXENTRA */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <Eyebrow>Why TOXENTRA</Eyebrow>
            <h2 className="text-3xl font-bold font-serif mt-3 text-navy-deep">
              Why Choose TOXENTRA?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-green text-green">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1.5 text-navy-deep">{w.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{w.text}</p>
                </div>
              );
            })}
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

      {/* CTA */}
      <section className="bg-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4">
            Need support with biological evaluation?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Tell us about your device and we&apos;ll recommend the right
            evaluation strategy — testing-based or literature-based.
          </p>
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
