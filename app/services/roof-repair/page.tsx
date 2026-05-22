import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Roof Repair | WK Roofbuild",
  description: "Fast and reliable roof repair services in London. From minor leaks to major damage — WK Roofbuild fixes it all. Call 07863 216381.",
};

export default function RoofRepairPage() {
  return (
    <>
      <section
        className="py-24 px-6 relative"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(10,20,35,0.92) 0%, rgba(10,20,35,0.60) 100%), url('/WhatsApp%20Image%202026-05-21%20at%209.01.03%20PM.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="label-orange">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Roof Repair</h1>
            <p className="text-gray-400 text-lg max-w-xl mb-8">
              From minor leaks to major damage, our skilled team restores your roof quickly and precisely to ensure maximum structural security.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:07863216381" className="btn-primary">📞 Get Free Quote</a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 justify-center lg:justify-start">
              <Link href="/" className="hover:text-orange-400">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-orange-400">Services</Link><span>›</span>
              <span style={{ color: "#FF5A1A" }}>Roof Repair</span>
            </div>
          </div>
          <div className="shrink-0 w-full max-w-xl">
            <div className="rounded-2xl overflow-hidden relative" style={{ height: "420px", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
              <Image src="/WhatsApp%20Image%202026-05-21%20at%209.01.04%20PM.jpeg" alt="Roof Repair" fill className="object-cover object-center" sizes="600px" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,35,0.80) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#FF5A1A" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold leading-tight">WK Roofbuild Ltd</p>
                  <p className="text-sm leading-tight" style={{ color: "#FF9A6A" }}>London&apos;s Trusted Roofers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <span className="label-orange">Service Overview</span>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#1B2A41" }}>Expert Roof Repair Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A leaking or damaged roof can quickly become a costly problem if left unattended. Our skilled roof repair team responds rapidly to identify the source of the issue and restore your roof to its full protective capacity.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We handle everything from single broken tiles to widespread storm damage — carrying out all repairs to the highest standard with lasting materials and a thorough finish.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Leak detection & repair","Broken tile replacement","Flashing repairs","Ridge tile re-bedding","Storm damage repair","Felt repair & replacement","Lead work","Emergency call-outs"].map(i => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { t: "Leak Repairs", d: "We trace the source of roof leaks accurately and carry out targeted repairs to stop water ingress immediately.", e: "💧" },
              { t: "Tile Replacement", d: "Cracked, slipped, or missing tiles replaced quickly to restore the weatherproofing of your roof covering.", e: "🧱" },
              { t: "Storm Damage", d: "Rapid assessment and repair of storm-damaged roofs — we prioritise emergency call-outs to minimise further damage.", e: "⛈️" },
              { t: "Lead & Flashing", d: "Re-sealing and replacing lead flashing around chimneys, skylights, and valleys to prevent common leak points.", e: "🔧" },
            ].map(c => (
              <div key={c.t} className="flex gap-4 p-5 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-3xl">{c.e}</span>
                <div><h3 className="font-bold mb-1" style={{ color: "#1B2A41" }}>{c.t}</h3><p className="text-sm text-gray-500 leading-relaxed">{c.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="label-orange">Our Work</span>
            <h2 className="text-3xl font-bold" style={{ color: "#1B2A41" }}>Roof Repair Projects We&apos;re Proud Of</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/WhatsApp%20Image%202026-05-21%20at%209.01.04%20PM.jpeg" alt="Roof repair work" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/WhatsApp%20Image%202026-05-21%20at%209.01.03%20PM.jpeg" alt="Roof repair completed" fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center text-white" style={{ background: "linear-gradient(135deg,#1B2A41,#131F31)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Roof Leaking? Call Us Now</h2>
          <p className="text-gray-400 mb-8">We offer rapid response roof repairs across London. Available 24/7 for emergencies.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07863216381" className="btn-primary">📞 07863 216381</a>
            <Link href="/contact" className="btn-outline">Send an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
