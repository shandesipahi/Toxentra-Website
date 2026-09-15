"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const LABELS = {
  en: {
    heading: "Send Us a Message",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    company: "Company / Organization",
    subject: "Subject",
    selectSubject: "Select a subject",
    subjects: ["Toxicological Risk Assessment", "Regulatory Consulting", "Product Safety Consulting", "General Inquiry"],
    message: "Your Message",
    firstNamePh: "Enter your first name",
    lastNamePh: "Enter your last name",
    emailPh: "Enter your email address",
    companyPh: "Enter your company name",
    messagePh: "How can we help you?",
    consentPre: "I agree to the processing of my personal data in accordance with the",
    consentLink: "Privacy Policy",
    sending: "Sending...",
    send: "Send Message",
    thankYou: "Thank you!",
    received: "Your message has been received. Our team will get back to you promptly.",
    genericError: "Something went wrong. Please try again.",
  },
  tr: {
    heading: "Bize Mesaj Gönderin",
    firstName: "Ad",
    lastName: "Soyad",
    email: "E-posta Adresi",
    company: "Şirket / Kurum",
    subject: "Konu",
    selectSubject: "Bir konu seçin",
    subjects: ["Toksikolojik Risk Değerlendirmesi", "Regülasyon Danışmanlığı", "Ürün Güvenliliği Danışmanlığı", "Genel Bilgi Talebi"],
    message: "Mesajınız",
    firstNamePh: "Adınızı girin",
    lastNamePh: "Soyadınızı girin",
    emailPh: "E-posta adresinizi girin",
    companyPh: "Şirket adınızı girin",
    messagePh: "Size nasıl yardımcı olabiliriz?",
    consentPre: "Kişisel verilerimin",
    consentLink: "Gizlilik Politikası",
    sending: "Gönderiliyor...",
    send: "Mesaj Gönder",
    thankYou: "Teşekkürler!",
    received: "Mesajınız alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.",
    genericError: "Bir sorun oluştu. Lütfen tekrar deneyin.",
  },
  ar: {
    heading: "أرسل لنا رسالة",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    company: "الشركة / المؤسسة",
    subject: "الموضوع",
    selectSubject: "اختر موضوعًا",
    subjects: ["تقييم المخاطر السُّمّية", "الاستشارات التنظيمية", "استشارات سلامة المنتجات", "استفسار عام"],
    message: "رسالتك",
    firstNamePh: "أدخل اسمك الأول",
    lastNamePh: "أدخل اسم عائلتك",
    emailPh: "أدخل بريدك الإلكتروني",
    companyPh: "أدخل اسم شركتك",
    messagePh: "كيف يمكننا مساعدتك؟",
    consentPre: "أوافق على معالجة بياناتي الشخصية وفقًا لـ",
    consentLink: "سياسة الخصوصية",
    sending: "جارٍ الإرسال...",
    send: "إرسال الرسالة",
    thankYou: "شكرًا لك!",
    received: "تم استلام رسالتك. سيتواصل معك فريقنا في أقرب وقت ممكن.",
    genericError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
  },
};

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5 text-navy-deep">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green/40 transition-shadow";

export default function ContactForm({ locale = "en" }) {
  const t = LABELS[locale] || LABELS.en;
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      subject: form.subject.value,
      message: form.message.value.trim(),
      consent: form.consent.checked,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || t.genericError);
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || t.genericError);
    }
  }

  if (status === "sent") {
    return (
      <div
        id="form"
        className="bg-white rounded-2xl shadow-xl border border-black/5 p-8 md:p-10 flex flex-col items-center justify-center text-center"
        style={{ minHeight: 400 }}
      >
        <h2 className="text-2xl font-bold mb-3 font-serif text-navy-deep">{t.thankYou}</h2>
        <p className="text-slate-600 text-sm max-w-xs">{t.received}</p>
      </div>
    );
  }

  return (
    <div id="form" className="bg-white rounded-2xl shadow-xl border border-black/5 p-8 md:p-10">
      <h2 className="text-2xl font-bold mb-7 font-serif text-navy-deep">{t.heading}</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label={t.firstName} required>
            <input name="firstName" required type="text" placeholder={t.firstNamePh} className={inputClass} />
          </Field>
          <Field label={t.lastName} required>
            <input name="lastName" required type="text" placeholder={t.lastNamePh} className={inputClass} />
          </Field>
        </div>
        <Field label={t.email} required>
          <input name="email" required type="email" placeholder={t.emailPh} className={inputClass} />
        </Field>
        <Field label={t.company}>
          <input name="company" type="text" placeholder={t.companyPh} className={inputClass} />
        </Field>
        <Field label={t.subject} required>
          <select name="subject" required defaultValue="" className={inputClass + " text-slate-400"}>
            <option value="" disabled>{t.selectSubject}</option>
            {t.subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label={t.message} required>
          <textarea name="message" required rows={5} placeholder={t.messagePh} className={inputClass} />
        </Field>
        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input name="consent" required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300" />
          <span>
            {t.consentPre}{" "}
            <a href="#" className="underline text-green-dark">{t.consentLink}</a>.
          </span>
        </label>

        {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] bg-green-dark disabled:opacity-60"
        >
          {status === "submitting" ? t.sending : t.send} <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
