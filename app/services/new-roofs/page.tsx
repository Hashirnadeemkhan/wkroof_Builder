import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "New Roofs | WK Roofbuild",
  description: "Premium new roof installations in London. Improved energy efficiency and modern appeal. Call WK Roofbuild on 07863 216381.",
};

export default function NewRoofsPage() {
  return (
    <>
      <section
        className="py-24 px-6 relative"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(10,20,35,0.92) 0%, rgba(10,20,35,0.60) 100%), url('/new-Roof-768x510.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="label-orange">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">New Roofs</h1>
            <p className="text-gray-400 text-lg max-w-xl mb-8">
              Upgrade your home with a premium new roof built for long-lasting performance, improved energy efficiency, and modern visual appeal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:07863216381" className="btn-primary">📞 Get Free Quote</a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 justify-center lg:justify-start">
              <Link href="/" className="hover:text-orange-400">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-orange-400">Services</Link><span>›</span>
              <span style={{ color: "#FF5A1A" }}>New Roofs</span>
            </div>
          </div>
          <div className="shrink-0 w-full max-w-xl">
            <div className="rounded-2xl overflow-hidden relative" style={{ height: "420px", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
              <Image src="/new-Roof-768x510.jpeg" alt="New Roofs" fill className="object-cover object-center" sizes="600px" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,35,0.80) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#FF5A1A" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="label-orange">Service Overview</span>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#1B2A41" }}>Brand New Roof Installation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A new roof is one of the most significant investments you can make in your property. WK Roofbuild Ltd specialises in complete new roof installations using only the highest quality materials, tailored to your property style and budget.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From modern flat roofs to traditional pitched tile roofs, our experienced team will guide you through every option — ensuring your new roof delivers performance, curb appeal, and value for decades to come.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Full design consultation","Material selection support","Pitched roof installation","Flat roof systems","Energy-efficient options","Underlay & insulation","Ridge tile finishing","Warranty provided"].map(i => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { t: "Pitched Roofs", d: "Traditional pitched roof installations in concrete, clay, or slate tiles — built to last and enhance your property's appearance.", e: "🏡" },
              { t: "Flat Roofs", d: "Modern flat roof systems using felt, EPDM, or fibreglass — low maintenance and ideal for extensions and outbuildings.", e: "📐" },
              { t: "Insulation", d: "Proper roof insulation installed during the process to improve your home's energy efficiency and reduce heating bills.", e: "♨️" },
              { t: "Guttering & Fascias", d: "New guttering, fascias, and soffits installed alongside your new roof for a complete, finished look.", e: "🔧" },
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
            <h2 className="text-3xl font-bold" style={{ color: "#1B2A41" }}>New Roof Projects We&apos;re Proud Of</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/new-Roof-768x510.jpeg" alt="New roof installation" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/WhatsApp%20Image%202026-05-21%20at%209.00.24%20PM.jpeg" alt="Completed roofing project" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center text-white" style={{ background: "linear-gradient(135deg,#1B2A41,#131F31)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Ready for a New Roof?</h2>
          <p className="text-gray-400 mb-8">Get in touch today for a free site visit and no-obligation quote anywhere in London.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07863216381" className="btn-primary">📞 07863 216381</a>
            <Link href="/contact" className="btn-outline">Send an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
