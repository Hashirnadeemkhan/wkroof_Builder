"use client";

import { useState } from "react";

type Errors = Partial<Record<"firstname" | "lastname" | "email" | "phone" | "message", string>>;

const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  company: "", // honeypot — kept empty by real users
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const inputClass =
    "w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-orange-400 bg-white";

  function validate(): Errors {
    const next: Errors = {};
    if (!form.firstname.trim()) next.firstname = "First name is required.";
    if (!form.lastname.trim()) next.lastname = "Last name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (form.phone.trim() && !/^[\d\s+()-]{7,}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid phone number.";
    }
    if (!form.message.trim()) {
      next.message = "Please tell us a little about your project.";
    } else if (form.message.trim().length < 10) {
      next.message = "Message is too short.";
    }
    return next;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send.");
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Failed to send.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center min-h-[420px]" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#FF5A1A" }}>
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#1B2A41" }}>Message Sent!</h3>
        <p className="text-gray-600 mb-6 max-w-sm">
          Thank you for getting in touch. We&apos;ve received your message and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#1B2A41" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-8 shadow-sm border border-gray-100" style={{ backgroundColor: "#F5F7FA" }}>
      <h3 className="text-xl font-bold mb-6" style={{ color: "#1B2A41" }}>Send Us a Message</h3>
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        {/* Honeypot field — hidden from real users */}
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium mb-1.5" style={{ color: "#1B2A41" }}>First Name</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              placeholder="John"
              className={`${inputClass} ${errors.firstname ? "border-red-400" : "border-gray-200"}`}
            />
            {errors.firstname && <p className="text-xs text-red-500 mt-1">{errors.firstname}</p>}
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium mb-1.5" style={{ color: "#1B2A41" }}>Last Name</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Smith"
              className={`${inputClass} ${errors.lastname ? "border-red-400" : "border-gray-200"}`}
            />
            {errors.lastname && <p className="text-xs text-red-500 mt-1">{errors.lastname}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "#1B2A41" }}>Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`${inputClass} ${errors.email ? "border-red-400" : "border-gray-200"}`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: "#1B2A41" }}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="07xxx xxxxxx"
            className={`${inputClass} ${errors.phone ? "border-red-400" : "border-gray-200"}`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1.5" style={{ color: "#1B2A41" }}>Service Needed</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass} border-gray-200 text-gray-600`}
          >
            <option value="">Select a service</option>
            <option>Painting Service</option>
            <option>Tiling Installation</option>
            <option>Both Services</option>
            <option>Other / Not Sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "#1B2A41" }}>Your Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your project..."
            className={`${inputClass} resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {serverError || "Could not send your message. Please try again or call us directly."}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 rounded-lg font-bold text-white transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ backgroundColor: "#FF5A1A" }}
        >
          {status === "loading" ? "Sending..." : "Send Message →"}
        </button>
      </form>
    </div>
  );
}
