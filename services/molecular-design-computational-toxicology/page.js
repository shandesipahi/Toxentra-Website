import {
  Atom,
  Cpu,
  ShieldAlert,
  Activity,
  FlaskConical,
  Search,
  Gauge,
  BookOpen,
  FileText,
} from "lucide-react";
import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Molecular Design & Computational Toxicology — TOXENTRA",
  description:
    "Advanced computational approaches supporting molecular design, predictive toxicology and evidence-based safety assessment.",
};

const services = [
  { icon: Atom, title: "Molecular Docking Studies", text: "Computational prediction of molecular interactions between compounds and biological targets to support mechanism-of-action studies, lead optimization and scientific hypothesis generation." },
  { icon: Cpu, title: "QSAR Modeling", text: "Application of Quantitative Structure–Activity Relationship (QSAR) models to predict toxicological endpoints and physicochemical properties based on molecular structure." },
  { icon: ShieldAlert, title: "Predictive Toxicology", text: "In silico prediction of toxicological hazards, including mutagenicity, carcinogenicity, skin sensitization, hepatotoxicity and other safety-related endpoints using validated computational methodologies." },
  { icon: Activity, title: "ADME Prediction", text: "Computational evaluation of absorption, distribution, metabolism and excretion (ADME) properties to support early assessment of pharmacokinetic behavior and compound optimization." },
  { icon: FlaskConical, title: "Molecular Property Analysis", text: "Assessment of physicochemical characteristics such as molecular weight, lipophilicity, solubility and other molecular descriptors relevant to product development and safety." },
  { icon: Search, title: "Virtual Screening", text: "Identification and prioritization of promising compounds through computational screening of molecular libraries based on biological activity and safety-related characteristics." },
  { icon: Gauge, title: "Computational Risk Assessment", text: "Integration of computational toxicology data with exposure assessment and available scientific evidence to support weight-of-evidence evaluations and regulatory decision-making." },
  { icon: BookOpen, title: "Scientific Interpretation of In Silico Data", text: "Critical evaluation and interpretation of computational findings for scientific reports, regulatory documentation and product development strategies." },
  { icon: FileText, title: "Computational Toxicology Reports", text: "Preparation of comprehensive scientific reports summarizing computational analyses, toxicological predictions and their relevance for product safety and regulatory submissions." },
];

const whyUs = [
  "Independent scientific expertise in computational toxicology.",
  "Integration of molecular modeling with toxicological risk assessment.",
  "Evidence-based interpretation of in silico data.",
  "Regulatory-oriented scientific reporting.",
  "Tailored computational solutions supporting product innovation and safety.",
];

const faqs = [
  { q: "What is computational toxicology?", a: "Computational toxicology applies computer-based models and predictive methods to evaluate the potential safety of chemicals, pharmaceuticals, medical devices and consumer products. These approaches support scientific decision-making before or alongside experimental testing." },
  { q: "What is molecular docking?", a: "Molecular docking is a computational technique used to predict how a molecule interacts with a biological target, helping researchers investigate binding mechanisms and prioritize compounds for further study." },
  { q: "What is QSAR?", a: "Quantitative Structure–Activity Relationship (QSAR) modeling predicts biological or toxicological properties based on molecular structure. QSAR is widely used to support hazard identification and fill toxicological data gaps." },
  { q: "Can computational methods replace laboratory testing?", a: "Computational approaches provide valuable scientific evidence and may reduce the need for certain experimental studies. However, they are generally used alongside other sources of evidence as part of an integrated scientific assessment and should be applied according to the intended regulatory context." },
  { q: "What is predictive toxicology?", a: "Predictive toxicology combines computational models, toxicological databases and scientific algorithms to estimate potential hazards before experimental or clinical data become available." },
  { q: "How can TOXENTRA support computational toxicology projects?", a: "TOXENTRA provides independent scientific support through molecular docking, QSAR modeling, ADME prediction, predictive toxicology, virtual screening, computational risk assessment and preparation of regulatory-ready scientific reports." },
];

const related = [
  { title: "Toxicological Risk Assessment", href: "/services/toxicological-risk-assessment" },
  { title: "Clinical & Pharmacological Evaluation", href: "/services/clinical-pharmacological-evaluation" },
  { title: "Scientific & Regulatory Consulting", href: "/services/scientific-regulatory-consulting" },
  { title: "Cosmetic Product Safety", href: "/services/cosmetic-product-safety" },
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Molecular Design & Computational Toxicology"
      title="Accelerating Safer Product Development Through Computational Science"
      subtitle="Advanced computational approaches supporting molecular design, predictive toxicology and evidence-based safety assessment across pharmaceuticals, medical devices, cosmetics and chemicals."
      overview={[
        "Computational approaches have become an integral part of modern product development by enabling the early prediction of biological activity, toxicological hazards and molecular interactions before experimental testing. These methods support informed scientific decision-making, reduce development time and contribute to more efficient safety assessment while minimizing unnecessary laboratory studies.",
        "At TOXENTRA, we provide independent scientific expertise in molecular modeling, computational toxicology and in silico safety assessment. By integrating computational methods with toxicological knowledge and regulatory science, we help organizations evaluate potential risks, prioritize experimental studies and strengthen scientific evidence throughout product development.",
        "Whether you are designing a novel compound, evaluating ingredient safety or supporting regulatory documentation, we deliver evidence-based computational solutions tailored to your scientific and regulatory objectives.",
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Looking for computational solutions to support safer product development?"
      ctaText="Computational science offers powerful tools for predicting safety, understanding molecular interactions and strengthening scientific decision-making. TOXENTRA provides evidence-based computational toxicology services tailored to the needs of research, product development and regulatory science."
    />
  );
}
