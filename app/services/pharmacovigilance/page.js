import {
  Activity, BarChart3, BookOpen, FileText, GraduationCap, Search, ShieldAlert
} from "lucide-react";
import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Pharmacovigilance — TOXENTRA",
  description:
    "Evidence-based pharmacovigilance support for signal evaluation, benefit–risk assessment and post-market safety.",
};

const services = [
  { icon: Activity, title: "Signal Detection & Signal Evaluation", text: "Scientific evaluation of potential safety signals using spontaneous reporting systems, published literature and evidence-based signal assessment methodologies." },
  { icon: BarChart3, title: "Disproportionality Analysis", text: "Statistical evaluation of spontaneous reporting databases using internationally recognized disproportionality methods to support signal detection and safety evaluation." },
  { icon: ShieldAlert, title: "Benefit–Risk Assessment", text: "Comprehensive scientific assessment integrating available safety and clinical evidence to support balanced benefit–risk evaluations throughout the product lifecycle." },
  { icon: BookOpen, title: "Scientific Literature Evaluation", text: "Systematic review and critical interpretation of published safety evidence supporting pharmacovigilance activities and safety evaluation." },
  { icon: Search, title: "Pharmacovigilance Data Interpretation", text: "Scientific interpretation of pharmacovigilance findings to support safety evaluation and evidence-based scientific decision-making." },
  { icon: ShieldAlert, title: "Scientific Medical Device Vigilance Support", text: "Scientific support for the evaluation of post-market safety information related to medical devices and vigilance activities where applicable." },
  { icon: GraduationCap, title: "MedDRA Training & Scientific Guidance", text: "Scientific guidance on the appropriate use of MedDRA terminology and coding principles to support accurate safety data interpretation and consistency." },
  { icon: GraduationCap, title: "Pharmacovigilance Training", text: "Professional training programs covering pharmacovigilance principles, signal detection, benefit–risk assessment and related scientific topics for industry and academia." },
  { icon: FileText, title: "Scientific Safety Reports", text: "Preparation of scientific reports supporting signal evaluation, literature review, benefit–risk assessment and post-market safety documentation." }
];

const whyUs = [
  "Independent scientific expertise in pharmacovigilance and toxicology.",
  "Experience in signal detection and disproportionality analysis.",
  "Evidence-based interpretation of real-world safety data.",
  "Scientific documentation aligned with relevant pharmacovigilance requirements.",
  "Tailored solutions for industry, research organizations and academia."
];

const faqs = [
  { q: "What is pharmacovigilance?", a: "Pharmacovigilance is the science and practice of detecting, assessing, understanding and preventing adverse effects or other medicine-related problems throughout the product lifecycle." },
  { q: "What is signal detection?", a: "Signal detection is the process of identifying new or changing safety information that may indicate a potential association between a medicinal product and an adverse event requiring further scientific evaluation." },
  { q: "What is disproportionality analysis?", a: "Disproportionality analysis is a statistical approach used to identify potential safety signals in spontaneous reporting databases by evaluating whether specific adverse events are reported more frequently than expected for a particular medicinal product." },
  { q: "Why is benefit–risk assessment important?", a: "Benefit–risk assessment integrates available evidence on efficacy and safety to determine whether the overall clinical benefits of a medicinal product continue to outweigh its potential risks throughout its lifecycle." },
  { q: "What is MedDRA?", a: "MedDRA (Medical Dictionary for Regulatory Activities) is the internationally standardized medical terminology used for coding, analyzing and communicating adverse event information in pharmacovigilance activities." },
  { q: "How can TOXENTRA support pharmacovigilance activities?", a: "TOXENTRA provides independent scientific support through signal detection and evaluation, disproportionality analyses, literature review, benefit–risk assessment and preparation of scientific safety reports tailored to project-specific needs." }
];

const related = [
  { title: "Clinical & Pharmacological Evaluation", href: "/services/clinical-pharmacological-evaluation" },
  { title: "Toxicological Risk Assessment", href: "/services/toxicological-risk-assessment" },
  { title: "Scientific & Toxicology Consulting", href: "/services/scientific-regulatory-consulting" },
  { title: "Scientific Training", href: "/services/training-scientific-education" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Pharmacovigilance"
      title="Advancing Drug Safety Through Scientific Pharmacovigilance"
      subtitle="Evidence-based pharmacovigilance support for signal evaluation, benefit–risk assessment and post-market safety."
      overview={[
    "Pharmacovigilance plays a critical role in protecting public health by continuously monitoring the safety of medicinal products after they enter clinical use. The analysis of real-world safety data, scientific literature and emerging safety signals provides essential evidence for identifying potential risks and supporting informed regulatory decisions.",
    "At TOXENTRA, we provide independent scientific pharmacovigilance support based on evidence-driven methodologies and current regulatory expectations. Our expertise combines pharmacology, toxicology and pharmacoepidemiology to evaluate safety data, interpret emerging signals and contribute to benefit–risk assessment throughout the product lifecycle.",
    "Whether you require scientific support for signal evaluation, literature assessment or pharmacovigilance training, we deliver tailored solutions designed to strengthen product safety and support evidence-based decision-making."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Looking for independent scientific expertise?"
      ctaText="Pharmacovigilance is more than regulatory compliance—it is a scientific discipline that supports safer medicines and informed decision-making. TOXENTRA provides evidence-based pharmacovigilance support tailored to the scientific needs of each project."
    />
  );
}
