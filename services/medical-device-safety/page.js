import {
  ShieldAlert,
  Stethoscope,
  ShieldCheck,
  Search,
  Activity,
  ClipboardList,
  FileText,
  Scale,
} from "lucide-react";
import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Medical Device Safety — TOXENTRA",
  description:
    "Independent scientific support for the safety evaluation of medical devices throughout product development, regulatory approval and post-market surveillance.",
};

const services = [
  { icon: ShieldAlert, title: "Medical Device Toxicological Assessment", text: "Comprehensive toxicological evaluation of device materials, constituents, manufacturing residues, extractables and leachables to determine potential risks associated with patient exposure." },
  { icon: Stethoscope, title: "Clinical Evaluation Support", text: "Scientific review and interpretation of published clinical evidence to support clinical evaluation activities and demonstrate the safety and performance of medical devices." },
  { icon: ShieldCheck, title: "Biological Safety Strategy", text: "Development of science-based biological safety strategies integrating ISO 10993 principles, toxicological evidence and device-specific risk assessment throughout the product lifecycle." },
  { icon: Search, title: "Material Safety Review", text: "Scientific assessment of raw materials, additives, colorants and manufacturing substances to identify potential toxicological concerns before regulatory submission." },
  { icon: Activity, title: "Post-Market Safety Support", text: "Scientific evaluation of post-market safety information, literature and vigilance data to support ongoing safety monitoring and regulatory compliance." },
  { icon: ClipboardList, title: "Risk Management Support", text: "Scientific support for identifying, evaluating and documenting biological and toxicological risks as part of the overall medical device risk management process." },
  { icon: FileText, title: "Regulatory Documentation", text: "Preparation and scientific review of technical documentation supporting biological safety, toxicological evaluation and regulatory submissions." },
  { icon: Scale, title: "MDR Compliance Support", text: "Scientific support for demonstrating compliance with applicable Medical Device Regulation (MDR) requirements related to biological safety and toxicological evaluation." },
];

const whyUs = [
  "Independent scientific expertise in medical device safety.",
  "Risk-based evaluations aligned with international regulatory expectations.",
  "Experience in toxicological assessment and biological evaluation.",
  "Regulatory-ready scientific documentation.",
  "Tailored support throughout the entire product lifecycle.",
];

const faqs = [
  { q: "What is medical device safety assessment?", a: "Medical device safety assessment is the scientific evaluation of all factors that may affect patient safety, including materials, biological risks, toxicological hazards, clinical evidence and intended use. It supports the demonstration that a device is safe under its intended conditions of use." },
  { q: "Is biological evaluation sufficient to demonstrate device safety?", a: "Not always. Biological evaluation is an essential component of device safety, but manufacturers may also need toxicological assessments, clinical evaluation, risk management documentation and post-market safety activities depending on the device and applicable regulatory requirements." },
  { q: "When is toxicological assessment required for a medical device?", a: "Toxicological assessment is typically required whenever patients may be exposed to chemicals released from device materials, manufacturing residues, degradation products or extractables and leachables. The assessment helps determine whether these exposures present an acceptable level of risk." },
  { q: "How does TOXENTRA support MDR compliance?", a: "TOXENTRA provides scientific support in preparing toxicological evaluations, biological safety documentation, literature reviews, risk assessments and regulatory-ready reports that contribute to compliance with applicable MDR requirements." },
  { q: "What is the role of post-market safety?", a: "Medical device safety does not end after market approval. Post-market surveillance and vigilance activities help identify new safety information, evaluate potential risks and support the continuous demonstration of product safety throughout the device lifecycle." },
  { q: "Can TOXENTRA support both new and legacy medical devices?", a: "Yes. We provide scientific support for both newly developed medical devices and existing products requiring documentation updates, gap analyses or additional scientific evidence to meet evolving regulatory expectations." },
];

const related = [
  { title: "Biological Evaluation (ISO 10993)", href: "/services/biological-evaluation-iso-10993" },
  { title: "Toxicological Risk Assessment", href: "/services/toxicological-risk-assessment" },
  { title: "Clinical & Pharmacological Evaluation", href: "/services/clinical-pharmacological-evaluation" },
  { title: "Scientific & Regulatory Consulting", href: "/services/scientific-regulatory-consulting" },
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Medical Device Safety"
      title="Scientific Safety Throughout the Medical Device Lifecycle"
      subtitle="Independent scientific support for the safety evaluation of medical devices throughout product development, regulatory approval and post-market surveillance."
      overview={[
        "Ensuring the safety of medical devices requires a multidisciplinary, risk-based approach that extends beyond biological evaluation. Manufacturers must demonstrate that their devices are safe for their intended use by integrating toxicological assessment, biological safety, clinical evidence, risk management and regulatory documentation throughout the entire product lifecycle.",
        "At TOXENTRA, we provide independent scientific expertise to support manufacturers in meeting international regulatory expectations for medical device safety. Our evaluations are based on current scientific evidence, internationally recognized standards and regulatory guidance, helping organizations prepare robust technical documentation and demonstrate product safety with confidence.",
        "Whether you are developing an innovative device, updating an existing product or preparing documentation for market access, we deliver tailored scientific solutions that support regulatory compliance and patient safety.",
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Looking for independent scientific expertise?"
      ctaText="Medical device safety requires scientifically sound, risk-based decision-making throughout the product lifecycle. TOXENTRA provides tailored scientific support to help manufacturers demonstrate safety, meet regulatory expectations and prepare robust technical documentation."
    />
  );
}
