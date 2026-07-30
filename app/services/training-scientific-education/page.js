import ServiceDetailLayout from "../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Training & Scientific Education — TOXENTRA",
  description:
    "Professional training programs designed to strengthen expertise in toxicology, regulatory science, pharmacovigilance and product safety.",
};

const whyUs = [
  "Training delivered by experienced scientific experts.",
  "Evidence-based content reflecting current international guidance.",
  "Practical learning supported by real-world case studies.",
  "Programs tailored to organizational needs and participant experience.",
  "Flexible delivery through on-site or online formats.",
];

const faqs = [
  { q: "Who are TOXENTRA's training programs designed for?", a: "Our programs are designed for professionals working in the pharmaceutical, medical device, cosmetic, biotechnology and chemical sectors, as well as researchers, academic institutions, healthcare professionals and regulatory organizations." },
  { q: "Are training programs customized?", a: "Yes. Every organization has unique scientific and regulatory needs. Training content can be adapted according to the audience, product area, regulatory focus and desired learning outcomes." },
  { q: "Can training be delivered online?", a: "Yes. TOXENTRA offers both online and on-site training programs depending on client preferences and organizational requirements." },
  { q: "Are practical case studies included?", a: "Yes. Whenever appropriate, our training programs incorporate scientific case studies, regulatory examples and practical applications to facilitate knowledge transfer and improve participant engagement." },
  { q: "Can TOXENTRA develop organization-specific courses?", a: "Absolutely. We work closely with organizations to design customized educational programs that address specific scientific, technical and regulatory challenges while aligning with their business objectives." },
];

const related = [
  { title: "Pharmacovigilance", href: "/services/pharmacovigilance" },
  { title: "Scientific & Regulatory Consulting", href: "/services/scientific-regulatory-consulting" },
  { title: "Medical Device Safety", href: "/services/medical-device-safety" },
  { title: "Toxicological Risk Assessment", href: "/services/toxicological-risk-assessment" },
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Training & Scientific Education"
      title="Empowering Professionals Through Scientific Knowledge"
      subtitle="Professional training programs designed to strengthen expertise in toxicology, regulatory science, pharmacovigilance and product safety across healthcare and life sciences."
      overview={[
        "Continuous scientific education is essential for maintaining high standards of product safety, regulatory compliance and professional competence in the life sciences sector. As scientific knowledge and regulatory expectations continue to evolve, organizations require practical, evidence-based training that translates current scientific developments into real-world applications.",
        "At TOXENTRA, we provide independent scientific education and professional training tailored to the needs of industry, academia and regulatory professionals. Our programs combine current scientific evidence with practical case studies and international regulatory perspectives, helping participants develop the knowledge and skills required to address today's scientific and regulatory challenges.",
        "Whether delivered on-site or online, our training programs are customized according to the specific needs of each organization and audience.",
      ]}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Invest in scientific excellence through professional education"
      ctaText="Strong scientific knowledge is the foundation of safe products and successful regulatory outcomes. TOXENTRA delivers practical, evidence-based education that helps organizations build expertise, strengthen compliance and foster continuous professional development."
    />
  );
}
