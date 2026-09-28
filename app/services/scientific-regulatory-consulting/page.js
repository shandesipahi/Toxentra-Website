import {
  BookOpen, ClipboardCheck, FileText, GraduationCap, MessageSquare, Route, Search, Target, Users
} from "lucide-react";
import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Scientific & Toxicological Consulting — TOXENTRA",
  description:
    "Independent scientific and toxicology consulting supporting product development and safety evaluation across pharmaceuticals, medical devices, cosmetics and consumer products.",
};

const services = [
  { icon: Target, title: "Scientific Strategy & Regulatory Alignment", text: "Development of scientific strategies that consider product type, intended market and applicable regulatory requirements." },
  { icon: FileText, title: "Scientific Reports & Documentation", text: "Preparation and scientific review of technical reports, safety assessments and literature evaluations supporting product development and safety assessment." },
  { icon: Search, title: "Scientific Gap Analysis", text: "Identification of scientific and technical gaps in available data and development programs, with recommendations for further evaluation where needed." },
  { icon: Route, title: "Regulatory Requirements Assessment", text: "Evaluation of applicable regulatory requirements relevant to product safety and scientific assessment." },
  { icon: BookOpen, title: "Scientific Literature Review", text: "Comprehensive review and critical appraisal of published scientific evidence to support product safety and scientific evaluations." },
  { icon: MessageSquare, title: "Expert Scientific Opinion", text: "Preparation of independent scientific opinions addressing toxicological, pharmacological and product safety questions." },
  { icon: Users, title: "Product Development Consulting", text: "Scientific guidance during product development, including study planning, toxicological assessment and product safety evaluation." },
  { icon: ClipboardCheck, title: "Scientific & Technical Review", text: "Independent scientific review of technical information to assess its consistency, completeness and relevance to product safety." },
  { icon: GraduationCap, title: "Scientific Training", text: "Professional training programs covering toxicology, product safety, risk assessment and related scientific topics." }
];

const whyUs = [
  "Independent scientific expertise in toxicology, pharmacology and product safety.",
  "Evidence-based consulting tailored to project-specific requirements.",
  "Scientific reports prepared with consideration of relevant regulatory requirements.",
  "Scientific support across different stages of the product lifecycle.",
  "Practical, evidence-based approaches focused on scientific quality and product safety."
];

const faqs = [
  { q: "What is scientific and toxicology consulting?", a: "Scientific and toxicology consulting provides evidence-based support for product safety, toxicological assessment and scientific decision-making throughout product development." },
  { q: "When should scientific safety assessment begin?", a: "Scientific safety assessment should be considered early in product development. Early evaluation can help identify data needs, guide testing strategies and support informed decisions as the product develops." },
  { q: "What types of products does TOXENTRA support?", a: "TOXENTRA provides scientific and toxicology consulting for pharmaceuticals, medical devices, cosmetics, food supplements, chemicals and other products requiring toxicological or safety evaluation." },
  { q: "Can TOXENTRA review existing scientific data and documentation?", a: "Yes. We independently review available scientific and technical information to identify data gaps and assess whether additional evaluation may be needed." },
  { q: "What is a scientific gap analysis?", a: "A scientific gap analysis evaluates available data to identify missing information or scientific limitations that may affect product safety assessment." },
  { q: "How can TOXENTRA support regulatory requirements?", a: "TOXENTRA provides scientific support through toxicological risk assessment, literature evaluation, scientific and technical review, and expert scientific opinions, taking relevant regulatory requirements into consideration." }
];

const related = [
  { title: "Toxicological Risk Assessment", href: "/services/toxicological-risk-assessment" },
  { title: "Medical Device Safety", href: "/services/medical-device-safety" },
  { title: "Cosmetic Product Safety (CPSR)", href: "/services/cosmetic-product-safety" },
  { title: "Clinical & Pharmacological Evaluation", href: "/services/clinical-pharmacological-evaluation" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Scientific & Toxicological Consulting"
      title="Turning Scientific Knowledge into Safer Products"
      subtitle="Independent scientific and toxicology consulting supporting product development and safety evaluation across pharmaceuticals, medical devices, cosmetics and consumer products."
      overview={[
    "Successful product development requires sound scientific evidence, appropriate safety assessment and a clear understanding of relevant regulatory requirements. Integrating scientific knowledge with a structured approach to product safety supports informed decision-making throughout product development.",
    "At TOXENTRA, we provide independent scientific and toxicology consulting tailored to the needs of manufacturers, research organizations and innovative companies. Our approach combines toxicology, pharmacology and product safety to support different stages of product development.",
    "Whether you require toxicological assessment, scientific evaluation or support in product development, we provide practical, evidence-based scientific guidance tailored to your needs."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Looking for independent scientific and toxicology support?"
      ctaText="Product safety decisions require reliable scientific evidence and appropriate toxicological assessment. TOXENTRA provides independent scientific support to help organizations evaluate product safety and make evidence-based decisions throughout product development."
    />
  );
}
