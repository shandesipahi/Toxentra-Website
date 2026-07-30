import {
  FileText,
  FlaskConical,
  Scale,
  Target,
  Share2,
  ShieldCheck,
  ClipboardCheck,
  ClipboardList,
} from "lucide-react";
import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Cosmetic Product Safety (CPSR) — TOXENTRA",
  description:
    "Independent scientific support for cosmetic product safety assessment in accordance with European cosmetic legislation and internationally recognized scientific principles.",
};

const services = [
  { icon: FileText, title: "Cosmetic Product Safety Report (CPSR)", text: "Preparation and scientific review of Cosmetic Product Safety Reports (CPSRs) in accordance with the requirements of Regulation (EC) No. 1223/2009, supporting product compliance before market placement." },
  { icon: FlaskConical, title: "Ingredient Toxicological Assessment", text: "Comprehensive evaluation of cosmetic ingredients using available toxicological data, published scientific literature and internationally recognized scientific opinions." },
  { icon: Scale, title: "Margin of Safety (MoS) Calculations", text: "Scientific calculation and interpretation of Margin of Safety values based on systemic exposure estimates and toxicological reference points for cosmetic ingredients." },
  { icon: Target, title: "Exposure Assessment", text: "Assessment of consumer exposure considering product type, frequency of use, application area, target population and foreseeable conditions of use." },
  { icon: Share2, title: "Ingredient Interaction Review", text: "Scientific evaluation of ingredient compatibility and potential toxicological considerations arising from product formulation and combined ingredient exposure." },
  { icon: ShieldCheck, title: "SCCS-Based Safety Evaluation", text: "Safety assessments performed using current opinions, guidance documents and scientific methodologies published by the Scientific Committee on Consumer Safety (SCCS), where applicable." },
  { icon: ClipboardCheck, title: "Label Compliance Review", text: "Scientific review of product labeling to support compliance with applicable cosmetic regulatory requirements, ingredient declarations and safety-related information." },
  { icon: ClipboardList, title: "Regulatory Documentation", text: "Preparation and scientific review of documentation supporting cosmetic product safety and regulatory compliance throughout the product lifecycle." },
];

const whyUs = [
  "Independent scientific expertise in cosmetic toxicology.",
  "Evidence-based safety evaluations using internationally accepted methodologies.",
  "Comprehensive assessment from ingredient evaluation to final product safety.",
  "Regulatory-ready scientific documentation.",
  "Tailored support for manufacturers, importers and brand owners.",
];

const faqs = [
  { q: "What is a Cosmetic Product Safety Report (CPSR)?", a: "A Cosmetic Product Safety Report (CPSR) is a scientific document demonstrating that a cosmetic product is safe for human health under normal or reasonably foreseeable conditions of use. It forms an essential part of the Product Information File (PIF) required under European cosmetic legislation." },
  { q: "Is a CPSR mandatory before placing a cosmetic product on the European market?", a: "Yes. Under Regulation (EC) No. 1223/2009, every cosmetic product placed on the European market must be supported by a Cosmetic Product Safety Report prepared before the product is marketed." },
  { q: "How is the safety of a cosmetic product evaluated?", a: "Safety evaluation involves reviewing ingredient toxicology, product formulation, exposure conditions, toxicological reference values, Margin of Safety calculations and available scientific evidence to determine whether the product is safe for consumers." },
  { q: "What is the Margin of Safety (MoS)?", a: "The Margin of Safety (MoS) compares the toxicological reference point of an ingredient with the estimated consumer exposure. It is one of the key scientific tools used to demonstrate that cosmetic ingredients are used within acceptable safety limits." },
  { q: "What information is required for a CPSR?", a: "Preparation of a CPSR typically requires information on product composition, ingredient specifications, manufacturing process, microbiological quality, stability, packaging, intended use, exposure assessment and available toxicological data." },
  { q: "How can TOXENTRA support cosmetic manufacturers?", a: "TOXENTRA provides independent scientific support throughout the cosmetic product development process, including ingredient toxicological assessment, exposure evaluation, Margin of Safety calculations, CPSR preparation, scientific literature evaluation and regulatory documentation." },
];

const related = [
  { title: "Toxicological Risk Assessment", href: "/services/toxicological-risk-assessment" },
  { title: "Scientific & Regulatory Consulting", href: "/services/scientific-regulatory-consulting" },
  { title: "Clinical & Pharmacological Evaluation", href: "/services/clinical-pharmacological-evaluation" },
  { title: "Training & Scientific Education", href: "/services/training-scientific-education" },
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Cosmetic Product Safety (CPSR)"
      title="Scientific Safety Assessment for Cosmetic Products"
      subtitle="Independent scientific support for cosmetic product safety assessment in accordance with European cosmetic legislation and internationally recognized scientific principles."
      overview={[
        "Ensuring the safety of cosmetic products is a fundamental requirement before they are placed on the market. A comprehensive safety assessment considers ingredient toxicology, exposure conditions, product formulation, intended use and current scientific evidence to demonstrate that a cosmetic product is safe for consumers under normal or reasonably foreseeable conditions of use.",
        "At TOXENTRA, we provide independent scientific support for cosmetic safety assessments based on internationally accepted toxicological principles and European regulatory requirements. Our evaluations integrate ingredient-specific toxicological data, exposure assessment and evidence-based scientific analysis to support the preparation of robust Cosmetic Product Safety Reports (CPSRs) and other regulatory documentation.",
        "Whether you are developing a new cosmetic formulation, reformulating an existing product or preparing documentation for market access, we provide tailored scientific solutions that help manufacturers demonstrate product safety with confidence.",
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Looking for independent scientific expertise?"
      ctaText="Every cosmetic formulation presents unique safety considerations. TOXENTRA provides evidence-based scientific assessments that support product safety, regulatory compliance and successful market access."
    />
  );
}
