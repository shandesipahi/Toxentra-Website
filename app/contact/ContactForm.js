"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | sent | error
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
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div
        id="form"
        className="bg-white rounded-2xl shadow-xl border border-black/5 p-8 md:p-10 flex flex-col items-center justify-center text-center"
        style={{ minHeight: 400 }}
      >
        <h2 className="text-2xl font-bold mb-3 font-serif text-navy-deep">Thank you!</h2>
        <p className="text-slate-600 text-sm max-w-xs">
          Your message has been received. Our team will get back to you
          promptly.
        </p>
      </div>
    );
  }

  return (
    <div id="form" className="bg-white rounded-2xl shadow-xl border border-black/5 p-8 md:p-10">
      <h2 className="text-2xl font-bold mb-7 font-serif text-navy-deep">Send Us a Message</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="First Name" required>
            <input name="firstName" required type="text" placeholder="Enter your first name" className={inputClass} />
          </Field>
          <Field label="Last Name" required>
            <input name="lastName" required type="text" placeholder="Enter your last name" className={inputClass} />
          </Field>
        </div>
        <Field label="Email Address" required>
          <input name="email" required type="email" placeholder="Enter your email address" className={inputClass} />
        </Field>
        <Field label="Company / Organization">
          <input name="company" type="text" placeholder="Enter your company name" className={inputClass} />
        </Field>
        <Field label="Subject" required>
          <select name="subject" required defaultValue="" className={inputClass + " text-slate-400"}>
            <option value="" disabled>
              Select a subject
            </option>
            <option>Toxicological Risk Assessment</option>
            <option>Regulatory Consulting</option>
            <option>Product Safety Consulting</option>
            <option>General Inquiry</option>
          </select>
        </Field>
        <Field label="Your Message" required>
          <textarea name="message" required rows={5} placeholder="How can we help you?" className={inputClass} />
        </Field>
        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input name="consent" required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300" />
          <span>
            I agree to the processing of my personal data in accordance with
            the{" "}
            <a href="#" className="underline text-green-dark">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {status === "error" && (
          <p className="text-sm text-red-600">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] bg-green-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send Message"} <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
