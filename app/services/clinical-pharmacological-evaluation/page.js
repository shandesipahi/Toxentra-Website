import {
  FileText,
  Activity,
  TrendingUp,
  Share2,
  Atom,
  Gauge,
  Repeat,
  Layers,
  FlaskConical,
  BookOpen,
} from "lucide-react";
import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Clinical & Pharmacological Evaluation — TOXENTRA",
  description:
    "Independent scientific evaluations integrating clinical evidence and pharmacological principles to support product development, regulatory decision-making and product safety.",
};

const services = [
  { icon: FileText, title: "Clinical Pharmacology Reports", text: "Preparation of comprehensive scientific reports integrating pharmacological, toxicological and clinical evidence to support regulatory submissions, product development and scientific decision-making." },
  { icon: Activity, title: "Pharmacokinetic (PK) Evaluation", text: "Scientific assessment of absorption, distribution, metabolism and excretion (ADME) characteristics to understand systemic exposure and support product safety and efficacy evaluations." },
  { icon: TrendingUp, title: "Pharmacodynamic (PD) Assessment", text: "Evaluation of pharmacological mechanisms, biological activity and dose-related effects to support the scientific understanding of product performance." },
  { icon: Share2, title: "Drug–Drug & Drug–Food Interaction Assessment", text: "Scientific review of potential interactions affecting pharmacokinetics, pharmacodynamics or clinical outcomes based on published evidence and pharmacological principles." },
  { icon: Atom, title: "CYP450 Interaction Evaluation", text: "Assessment of metabolic pathways involving cytochrome P450 enzymes to identify potential metabolic interactions and support product safety evaluations." },
  { icon: Gauge, title: "Dose–Response & Therapeutic Window Analysis", text: "Evaluation of dose-dependent pharmacological responses and therapeutic exposure ranges using available scientific evidence." },
  { icon: Repeat, title: "Bioavailability / Bioequivalence Assessment", text: "Scientific interpretation of bioavailability and bioequivalence data to support product development and regulatory documentation where applicable." },
  { icon: Layers, title: "BCS-Based Product Evaluation", text: "Assessment of products according to the Biopharmaceutics Classification System (BCS) to support formulation development and regulatory strategy." },
  { icon: FlaskConical, title: "Nutraceutical Scientific Evaluation", text: "Evidence-based scientific assessment of nutraceuticals, food supplements and health-related products considering available clinical, pharmacological and toxicological evidence." },
  { icon: BookOpen, title: "Literature Review & Evidence Synthesis", text: "Comprehensive evaluation and synthesis of published scientific literature to support regulatory submissions, scientific reports and product development strategies." },
];

const whyUs = [
  "Independent scientific expertise in clinical pharmacology and toxicology.",
  "Evidence-based interpretation of published clinical data.",
  "Integration of pharmacological, toxicological and regulatory perspectives.",
  "Regulatory-ready scientific documentation.",
  "Tailored evaluations supporting product development and market access.",
];

const faqs = [
  { q: "What is a clinical and pharmacological evaluation?", a: "A clinical and pharmacological evaluation is a scientific assessment that integrates clinical evidence, pharmacological data and published literature to support product safety, efficacy and regulatory decision-making." },
  { q: "When is a clinical evaluation required?", a: "Clinical evaluations may be required during product development, regulatory submissions, scientific dossier preparation or when existing clinical evidence needs to be critically assessed to support product claims or safety." },
  { q: "What is the difference between pharmacokinetics and pharmacodynamics?", a: "Pharmacokinetics describes how the body absorbs, distributes, metabolizes and eliminates a substance, whereas pharmacodynamics explains how the substance interacts with biological systems to produce its effects." },
  { q: "Why are drug interactions important?", a: "Drug–drug and drug–food interactions may alter the safety or effectiveness of a product by affecting systemic exposure or pharmacological activity. Evaluating these interactions supports informed clinical and regulatory decisions." },
  { q: "What is the Biopharmaceutics Classification System (BCS)?", a: "The Biopharmaceutics Classification System (BCS) categorizes drug substances according to their solubility and intestinal permeability. It is widely used to support formulation development and certain regulatory decisions." },
  { q: "How can TOXENTRA support clinical and pharmacological evaluation?", a: "TOXENTRA provides independent scientific support through clinical evidence evaluation, pharmacokinetic and pharmacodynamic assessments, interaction analysis, BCS-based evaluations, literature reviews and preparation of regulatory-ready scientific reports." },
];

const related = [
  { title: "Toxicological Risk Assessment", href: "/services/toxicological-risk-assessment" },
  { title: "Pharmacovigilance", href: "/services/pharmacovigilance" },
  { title: "Scientific & Regulatory Consulting", href: "/services/scientific-regulatory-consulting" },
  { title: "Medical Device Safety", href: "/services/medical-device-safety" },
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Clinical & Pharmacological Evaluation"
      title="Evidence-Based Scientific Evaluation Supporting Product Development"
      subtitle="Independent scientific evaluations integrating clinical evidence and pharmacological principles to support product development, regulatory decision-making and product safety."
      overview={[
        "Clinical and pharmacological evaluation provides the scientific foundation for understanding how a product behaves in the human body and whether available evidence supports its safety and intended use. By integrating pharmacokinetic and pharmacodynamic data with published clinical evidence, these evaluations support informed decision-making throughout product development and regulatory assessment.",
        "At TOXENTRA, we provide independent scientific evaluations based on current clinical evidence, pharmacological principles and internationally accepted methodologies. Our assessments support pharmaceuticals, medical devices, food supplements and other health-related products by translating complex scientific data into clear, evidence-based conclusions suitable for regulatory documentation and product development.",
        "Whether you are preparing a scientific dossier, evaluating published evidence or assessing the clinical relevance of pharmacological data, we provide tailored scientific solutions designed to support product safety, regulatory compliance and successful market access.",
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Looking for independent scientific expertise?"
      ctaText="Clinical and pharmacological evidence plays a critical role in product development and regulatory decision-making. TOXENTRA provides tailored, evidence-based evaluations that support scientific excellence, regulatory compliance and successful product development."
    />
  );
}
