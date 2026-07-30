import {
  Target,
  FileText,
  Search,
  Route,
  BookOpen,
  MessageSquare,
  Users,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";
import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Scientific & Regulatory Consulting — TOXENTRA",
  description:
    "Independent scientific and regulatory consulting supporting product development, technical documentation and market access.",
};

const services = [
  { icon: Target, title: "Regulatory Strategy", text: "Development of regulatory strategies tailored to product type, intended market and applicable regulatory frameworks to facilitate efficient product development and market access." },
  { icon: FileText, title: "Scientific Documentation", text: "Preparation and scientific review of technical reports, safety assessments, literature evaluations and regulatory documents supporting product development and regulatory submissions." },
  { icon: Search, title: "Gap Analysis", text: "Identification of scientific, technical and regulatory gaps within existing documentation and development programs, together with practical recommendations for achieving compliance." },
  { icon: Route, title: "Regulatory Pathway Assessment", text: "Evaluation of applicable regulatory requirements, product classification and documentation needs to support strategic planning before product development or market entry." },
  { icon: BookOpen, title: "Scientific Literature Review", text: "Comprehensive review and critical appraisal of published scientific evidence to support regulatory documentation, product claims and safety evaluations." },
  { icon: MessageSquare, title: "Expert Scientific Opinion", text: "Preparation of independent scientific opinions addressing toxicological, pharmacological and regulatory questions for manufacturers, research organizations and legal or technical stakeholders." },
  { icon: Users, title: "Product Development Consulting", text: "Scientific guidance throughout product development, supporting study planning, safety assessment and regulatory decision-making from concept to commercialization." },
  { icon: ClipboardCheck, title: "Technical Documentation Review", text: "Independent review of technical documentation to ensure scientific consistency, completeness and alignment with current regulatory expectations." },
  { icon: GraduationCap, title: "Regulatory Training", text: "Professional training programs covering toxicology, regulatory science, product safety, scientific documentation and current international regulatory requirements." },
];

const whyUs = [
  "Independent scientific expertise combining toxicology, pharmacology and regulatory science.",
  "Evidence-based consulting tailored to project-specific requirements.",
  "Regulatory-ready documentation aligned with international expectations.",
  "Strategic support throughout the entire product lifecycle.",
  "Practical solutions focused on scientific quality and regulatory success.",
];

const faqs = [
  { q: "What is scientific and regulatory consulting?", a: "Scientific and regulatory consulting provides expert guidance on the scientific and regulatory aspects of product development, helping organizations prepare robust documentation, meet regulatory requirements and support successful market access." },
  { q: "When should regulatory consulting begin?", a: "Regulatory strategy is most effective when integrated early in product development. Early planning helps identify applicable requirements, reduce development risks and avoid unnecessary delays during regulatory review." },
  { q: "What types of products does TOXENTRA support?", a: "TOXENTRA provides scientific and regulatory consulting for pharmaceuticals, medical devices, cosmetics, food supplements, chemicals and other health-related products requiring scientific safety evaluation or regulatory documentation." },
  { q: "Can TOXENTRA review existing documentation?", a: "Yes. We perform independent scientific and regulatory reviews of existing technical documentation, identifying potential gaps and providing recommendations for improvement before regulatory submission." },
  { q: "What is a regulatory gap analysis?", a: "A regulatory gap analysis compares existing documentation with current regulatory expectations to identify missing information, scientific deficiencies or documentation gaps that may affect regulatory compliance." },
  { q: "How can TOXENTRA support regulatory submissions?", a: "TOXENTRA provides scientific support through regulatory strategy development, technical documentation review, literature evaluation, toxicological assessment, expert scientific opinions and preparation of regulatory-ready reports." },
];

const related = [
  { title: "Toxicological Risk Assessment", href: "/services/toxicological-risk-assessment" },
  { title: "Medical Device Safety", href: "/services/medical-device-safety" },
  { title: "Cosmetic Product Safety (CPSR)", href: "/services/cosmetic-product-safety" },
  { title: "Clinical & Pharmacological Evaluation", href: "/services/clinical-pharmacological-evaluation" },
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Scientific & Regulatory Consulting"
      title="Transforming Scientific Knowledge into Regulatory Success"
      subtitle="Independent scientific and regulatory consulting supporting product development, technical documentation and market access across pharmaceuticals, medical devices, cosmetics and consumer products."
      overview={[
        "Successful product development requires more than scientific innovation. It also depends on a clear understanding of regulatory expectations, robust scientific documentation and well-planned development strategies. Integrating scientific expertise with regulatory knowledge helps organizations navigate increasingly complex approval processes while ensuring product safety, quality and compliance.",
        "At TOXENTRA, we provide independent scientific and regulatory consulting tailored to the needs of manufacturers, research organizations and innovative companies. Our multidisciplinary approach combines toxicology, pharmacology and regulatory science to support product development from early-stage planning through regulatory submission and post-market activities.",
        "Whether you require strategic regulatory advice, technical documentation or expert scientific evaluations, we deliver practical, evidence-based solutions designed to support successful product development and market access.",
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Looking for strategic scientific and regulatory support?"
      ctaText="Navigating today's regulatory landscape requires sound scientific evidence and a clear regulatory strategy. TOXENTRA provides independent consulting that helps organizations develop safer products, prepare stronger documentation and achieve successful market access."
    />
  );
}
