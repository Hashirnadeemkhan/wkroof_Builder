"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How often should I schedule a painting inspection?",
    a: "It's recommended to have your paintwork inspected at least once a year, especially after severe weather conditions. Regular inspections help identify peeling, cracking, or damp issues before they become costly.",
  },
  {
    q: "Can I install a flat roof on my extension myself?",
    a: "We strongly advise against DIY painting or tiling for complex projects. Professional installation ensures proper surface preparation, correct material application, and a finish that lasts. Improper work can lead to damp, cracking, or structural issues.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "A full interior repaint of a standard 3-bedroom home typically takes 3–5 days. Exterior painting may take 5–8 days depending on weather and surface condition. Large commercial projects are planned individually.",
  },
  {
    q: "Do you provide emergency roof repair services?",
    a: "Yes — we offer a rapid response service for urgent painting and tiling issues. Whether you have water ingress from a cracked tile or urgent cosmetic damage, contact us and we will prioritise your job.",
  },
  {
    q: "How long about a roof last?",
    a: "A professionally applied exterior paint finish typically lasts 8–12 years. Interior paints last 5–7 years with normal use. High-quality tile installations can last 20–30 years or more with proper care and maintenance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <span className="label-orange">Faqs</span>
        <h2 className="section-heading mb-10">Popular Questions</h2>

        <div className="space-y-0 border-t border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start gap-4 py-4 text-left"
              >
                {/* Orange triangle arrow */}
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5 transition-transform duration-300"
                  style={{
                    color: "#FF5A1A",
                    transform: openIndex === i ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 2l8 6-8 6V2z" />
                </svg>
                <span
                  className="font-semibold text-sm md:text-base leading-snug"
                  style={{ color: openIndex === i ? "#FF5A1A" : "#1B2A41" }}
                >
                  {faq.q}
                </span>
              </button>

              <div
                className="faq-body"
                style={{ maxHeight: openIndex === i ? "300px" : "0" }}
              >
                <p className="pb-4 pl-8 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
