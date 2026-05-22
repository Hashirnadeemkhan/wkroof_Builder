import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chimney Repair | WK Roofbuild",
  description: "Professional chimney repair and restoration services in London. Prevent leaks and improve safety. Call WK Roofbuild on 07863 216381.",
};

export default function ChimneyRepairPage() {
  return (
    <>
      <section
        className="py-24 px-6 relative"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(10,20,35,0.92) 0%, rgba(10,20,35,0.60) 100%), url('/WhatsApp%20Image%202026-05-18%20at%209.29.46%20PM.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="label-orange">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Chimney Repair</h1>
            <p className="text-gray-400 text-lg max-w-xl mb-8">
              We specialise in restoring chimney integrity — preventing leaks, improving efficiency, and enhancing overall safety for your home.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:07863216381" className="btn-primary">📞 Get Free Quote</a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 justify-center lg:justify-start">
              <Link href="/" className="hover:text-orange-400">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-orange-400">Services</Link><span>›</span>
              <span style={{ color: "#FF5A1A" }}>Chimney Repair</span>
            </div>
          </div>
          <div className="shrink-0 w-full max-w-xl">
            <div className="rounded-2xl overflow-hidden relative" style={{ height: "420px", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
              <Image src="/WhatsApp%20Image%202026-05-18%20at%209.29.46%20PM.jpeg" alt="Chimney Repair" fill className="object-cover object-top" sizes="600px" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,35,0.80) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#FF5A1A" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
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
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#1B2A41" }}>Chimney Repair & Restoration</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Chimneys are one of the most exposed parts of your property. Over time, weather, freeze-thaw cycles, and general wear cause mortar to deteriorate, brickwork to crack, and flashing to fail — all leading to potential leaks and structural issues.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our chimney repair specialists assess the condition of your chimney thoroughly and carry out the appropriate works — whether that is repointing, replacing the flashing, rebuilding a stack, or fitting a new chimney pot.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Chimney repointing","Lead flashing repair","Stack rebuilding","Chimney pot replacement","Damp proofing","Mortar repairs","Chimney capping","Full chimney surveys"].map(i => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { t: "Repointing", d: "Raking out old deteriorated mortar and replacing it with fresh mortar to restore waterproofing and structural integrity.", e: "🧱" },
              { t: "Lead Flashing", d: "Replacing or re-dressing lead flashing where the chimney meets the roof — a common source of water ingress.", e: "🔧" },
              { t: "Stack Rebuild", d: "Complete chimney stack rebuilds where the existing structure has become too damaged or unsafe to repair.", e: "🏗️" },
              { t: "Damp Proofing", d: "Specialist damp proofing treatments applied to chimney brickwork to prevent water penetration and internal damp patches.", e: "💧" },
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
            <h2 className="text-3xl font-bold" style={{ color: "#1B2A41" }}>Chimney Repair Projects We&apos;re Proud Of</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/WhatsApp%20Image%202026-05-18%20at%209.29.46%20PM.jpeg" alt="Chimney repair work" fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/WhatsApp%20Image%202026-05-21%20at%209.24.10%20PM.jpeg" alt="Chimney restoration" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center text-white" style={{ background: "linear-gradient(135deg,#1B2A41,#131F31)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Chimney Problems? We Can Help</h2>
          <p className="text-gray-400 mb-8">Contact us today for a free chimney survey and repair quote anywhere in London.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07863216381" className="btn-primary">📞 07863 216381</a>
            <Link href="/contact" className="btn-outline">Send an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
