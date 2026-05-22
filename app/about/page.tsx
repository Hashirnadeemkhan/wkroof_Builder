import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | WK Roofbuild",
  description:
    "Learn about WK Roofbuild Ltd — London's trusted painting and tiling specialists with over 10 years of experience.",
};

const CheckIcon = () => (
  <svg className="w-5 h-5 shrink-0" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="py-20 px-4 text-center" style={{ background: "linear-gradient(135deg, #131F31 0%, #1B2A41 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FF5A1A" }}>Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About WK Roofbuild</h1>
          <p className="text-gray-400 text-lg">Trusted building professionals serving London for over 10 years.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <span style={{ color: "#FF5A1A" }}>About Us</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-2 gap-3">
            {/* Team photo full width so all 3 people are visible */}
            <div className="col-span-2 relative rounded-xl overflow-hidden" style={{ height: "310px" }}>
              <Image
                src="/WhatsApp%20Image%202026-05-21%20at%209.24.10%20PM.jpeg"
                alt="WK Roofbuild team"
                fill
                className="object-cover object-top"
                sizes="600px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ height: "160px" }}>
              <Image
                src="/WhatsApp%20Image%202026-05-21%20at%209.00.24%20PM.jpeg"
                alt="Roofing project"
                fill
                className="object-cover object-center"
                sizes="300px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ height: "160px" }}>
              <Image
                src="/WhatsApp%20Image%202026-05-21%20at%209.01.03%20PM.jpeg"
                alt="Roofing team at work"
                fill
                className="object-cover object-top"
                sizes="300px"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FF5A1A" }}>Our Story</p>
            <h2 className="text-3xl font-bold mb-5 section-title left" style={{ color: "#1B2A41" }}>Built on Quality & Trust</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              WK Roofbuild Ltd was founded with a simple mission: to deliver the highest quality building services to homeowners and businesses across London, at fair and transparent prices.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over the past decade, we have grown from a small team of two into a full professional outfit, completing hundreds of projects from single room repaints to large-scale commercial tiling installations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              What has never changed is our commitment to craftsmanship, punctuality, and customer satisfaction. Every project, no matter the size, receives the same level of care and attention to detail.
            </p>
            <ul className="space-y-3 mb-8">
              {["Fully certified and insured tradespeople", "Detailed upfront quotes — no hidden costs", "Respectful of your home and schedule", "Guaranteed satisfaction on every job"].map(i => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700"><CheckIcon />{i}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-orange">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FF5A1A" }}>What Drives Us</p>
          <h2 className="text-3xl font-bold section-title mb-14" style={{ color: "#1B2A41" }}>Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { title: "Quality", desc: "We never cut corners. Every job is done right, using the best materials available.", icon: "⭐" },
              { title: "Integrity", desc: "Honest pricing, clear communication, and genuine respect for our clients.", icon: "🤝" },
              { title: "Reliability", desc: "We show up on time and complete work within the agreed timeframe. Always.", icon: "🕐" },
              { title: "Excellence", desc: "We hold ourselves to the highest standards and continually improve our skills.", icon: "🏆" },
            ].map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-bold text-xl mt-4 mb-2" style={{ color: "#1B2A41" }}>{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: "linear-gradient(135deg, #FF5A1A, #ff7a3d)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-orange-100 mb-8">Contact the WK Roofbuild team today — we would love to help with your project.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07863216381" className="px-8 py-4 rounded-lg font-bold text-orange-600 bg-white hover:scale-105 transition-transform">📞 07863 216381</a>
            <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-white border-2 border-white hover:bg-white hover:text-orange-600 transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
