"use client";

import { useState, FormEvent } from "react";
import { inquiryCategories } from "@/lib/data";

type FormState = {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  category: string;
  company: string;
};

const initial: FormState = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  category: inquiryCategories[0],
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email.trim()) next.email = "Email address is required.";
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (!form.message.trim()) next.message = "Message is required.";
    else if (form.message.trim().length < 10)
      next.message = "Message must be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    if (form.company) {
      setStatus("success");
      setServerMessage("Thank you. Your inquiry has been received.");
      setForm(initial);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setServerMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setServerMessage(data?.message || "Thank you. Your inquiry has been received.");
      setForm(initial);
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again later.");
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  const inputClass =
    "w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm text-navy placeholder:text-navy/40 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-navy">
            Full Name <span className="text-orange">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            className={inputClass}
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            required
          />
          {errors.fullName && <p className="mt-1 text-xs text-orange">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-navy">
            Organization
          </label>
          <input
            id="organization"
            type="text"
            className={inputClass}
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy">
            Email Address <span className="text-orange">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />
          {errors.email && <p className="mt-1 text-xs text-orange">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-navy">
          Inquiry Category
        </label>
        <select
          id="category"
          className={inputClass}
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
        >
          {inquiryCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy">
          Subject <span className="text-orange">*</span>
        </label>
        <input
          id="subject"
          type="text"
          className={inputClass}
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          required
        />
        {errors.subject && <p className="mt-1 text-xs text-orange">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          Message <span className="text-orange">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          required
        />
        {errors.message && <p className="mt-1 text-xs text-orange">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-md bg-electric px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-700">{serverMessage}</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-orange">{serverMessage}</p>
      )}
    </form>
  );
}

export default ContactForm;

