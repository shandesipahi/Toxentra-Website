import {
  ShieldAlert,
  Scale,
  Layers,
  Cpu,
  Gauge,
  Search,
  FileText,
} from "lucide-react";
import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Toxicological Risk Assessment — TOXENTRA",
  description:
    "Evidence-based toxicological risk assessments supporting pharmaceuticals, medical devices, cosmetics, chemicals and consumer products.",
};

const services = [
  { icon: ShieldAlert, title: "Human Health Risk Assessment", text: "Comprehensive toxicological evaluations integrating hazard identification, exposure assessment and risk characterization to determine the potential health risks associated with chemicals, ingredients, impurities and finished products." },
  { icon: Scale, title: "Margin of Safety (MoS)", text: "Calculation and scientific interpretation of Margin of Safety (MoS) values based on toxicological reference points and estimated human exposure to support product safety evaluations." },
  { icon: Layers, title: "Read-Across & Weight of Evidence (WoE)", text: "Development of scientifically justified read-across approaches and Weight of Evidence evaluations to address toxicological data gaps while maximizing the use of existing scientific information." },
  { icon: Cpu, title: "QSAR Assessment", text: "Application of internationally recognized computational toxicology models to predict toxicological endpoints and provide supporting evidence where experimental data are limited." },
  { icon: Gauge, title: "Threshold of Toxicological Concern (TTC)", text: "Risk assessment based on the Threshold of Toxicological Concern concept for substances with limited toxicological data, following internationally accepted scientific principles." },
  { icon: Search, title: "Impurity Assessment", text: "Scientific evaluation of impurities, degradation products, process-related contaminants and extractables/leachables to determine their potential toxicological significance." },
  { icon: FileText, title: "Scientific Reports", text: "Preparation of clear, scientifically robust and regulatory-ready toxicological reports suitable for regulatory submissions, technical documentation and product safety dossiers." },
];

const whyUs = [
  "Independent scientific expertise in toxicology and risk assessment.",
  "Evidence-based evaluations aligned with international regulatory expectations.",
  "Experience across pharmaceuticals, medical devices, cosmetics and chemicals.",
  "Transparent, scientifically justified decision-making.",
  "Project-specific solutions tailored to regulatory and product development needs.",
];

const faqs = [
  { q: "What is toxicological risk assessment?", a: "Toxicological risk assessment is the scientific process of determining whether exposure to a substance or product may present a health risk under its intended conditions of use. It combines hazard identification, exposure assessment and risk characterization to support evidence-based safety decisions." },
  { q: "When is a toxicological risk assessment required?", a: "A toxicological risk assessment may be required during product development, regulatory submissions, biological evaluations, cosmetic safety assessments, chemical registrations or whenever potential human exposure to a substance needs to be scientifically evaluated." },
  { q: "What is Margin of Safety (MoS)?", a: "Margin of Safety (MoS) is a quantitative measure comparing a toxicological reference value with estimated human exposure. It is widely used to determine whether the expected exposure remains within an acceptable safety margin." },
  { q: "What is Read-Across?", a: "Read-across is a scientifically accepted approach that uses toxicological information from structurally or biologically similar substances to predict the safety of a target substance when direct experimental data are limited." },
  { q: "Can QSAR replace laboratory studies?", a: "QSAR models provide valuable supporting information for hazard assessment and may reduce the need for additional testing in specific situations. However, they should generally be considered as part of an integrated Weight of Evidence approach rather than a standalone replacement for experimental data." },
  { q: "How can TOXENTRA support toxicological risk assessment?", a: "TOXENTRA provides independent scientific support across the entire risk assessment process, including hazard identification, exposure assessment, Margin of Safety calculations, Read-Across, Weight of Evidence evaluations, QSAR assessments and preparation of regulatory-ready toxicological reports." },
];

const related = [
  { title: "Biological Evaluation (ISO 10993)", href: "/services/biological-evaluation-iso-10993" },
  { title: "Medical Device Safety", href: "/services/medical-device-safety" },
  { title: "Cosmetic Product Safety", href: "/services/cosmetic-product-safety" },
  { title: "Scientific & Regulatory Consulting", href: "/services/scientific-regulatory-consulting" },
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Toxicological Risk Assessment"
      title="Protecting Human Health Through Science-Based Risk Assessment"
      subtitle="Evidence-based toxicological risk assessments supporting pharmaceuticals, medical devices, cosmetics, chemicals and consumer products in accordance with internationally recognized regulatory principles."
      overview={[
        "Toxicological risk assessment is a scientific process used to evaluate whether exposure to a chemical substance, material or product may pose a risk to human health under its intended conditions of use. It integrates hazard identification, dose–response assessment, exposure estimation and risk characterization to support informed regulatory and product safety decisions.",
        "At TOXENTRA, we provide independent, science-based toxicological evaluations tailored to product-specific regulatory requirements. Our assessments combine current scientific knowledge, internationally accepted methodologies and evidence-based approaches to support product development, regulatory submissions and post-market safety evaluations.",
        "Whether you are developing a pharmaceutical, medical device, cosmetic, food supplement or chemical product, we deliver transparent, scientifically justified and regulatory-ready risk assessments that facilitate confident decision-making throughout the product lifecycle.",
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Looking for independent scientific expertise?"
      ctaText="Every product presents unique toxicological and regulatory challenges. Our experts provide tailored, evidence-based solutions designed to support product safety, regulatory compliance and successful product development."
    />
  );
}
