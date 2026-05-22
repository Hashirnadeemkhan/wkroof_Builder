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
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg,#131F31,#1B2A41)" }}>
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
          <div className="relative rounded-xl overflow-hidden w-full max-w-md shrink-0" style={{ height: "300px" }}>
            <Image src="/new-Roof-768x510.jpeg" alt="New Roofs" fill className="object-cover object-center" sizes="448px" />
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
