import ContactForm from "./ContactForm";
import { Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact — TOXENTRA",
  description:
    "Have a question or need expert support? Reach out to Toxentra and our team will get back to you promptly.",
};

const contactInfo = [
  { icon: Mail, title: "Email", lines: ["info@toxentra.com"] },
  { icon: MapPin, title: "Location", lines: ["Istanbul, Türkiye"] },
  { icon: Clock, title: "Business Hours", lines: ["Monday – Friday", "09:00 – 17:30 (GMT+3)"] },
];

function Eyebrow({ children }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-green">
      {children}
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar active="Contact" />

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 grid lg:grid-cols-2 gap-14 items-start">
        {/* Left column */}
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6">
            <span className="text-navy-deep">Let&apos;s Advance</span>
            <br />
            <span className="text-green">Product Safety</span>
            <br />
            <span className="text-navy-deep">Together.</span>
          </h1>
          <div className="w-14 h-[3px] mb-6 bg-green" />
          <p className="text-slate-600 leading-relaxed max-w-sm mb-10">
            Have a question or need expert support? We&apos;re here to help.
            Reach out to us and our team will get back to you promptly.
          </p>

          <div className="space-y-7">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-green-pale text-green">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1 text-navy-deep">{c.title}</h3>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm font-medium text-green-dark">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column — form (client component) */}
        <ContactForm />
      </section>

      {/* SECONDARY CTA STRIP */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-2xl bg-white/70 border border-black/5 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-green-pale text-green">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1 font-serif text-navy-deep">
                Prefer to discuss your needs?
              </h3>
              <p className="text-sm text-slate-600 max-w-md">
                Request a consultation and our experts will contact you to
                understand how we can support your goals.
              </p>
            </div>
          </div>
          <Link
            href="#form"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-green text-green-dark shrink-0 transition-colors hover:bg-white"
          >
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
