import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Flat Roofs | WK Roofbuild",
  description: "Seamless flat roofing solutions for residential and commercial properties in London. Call WK Roofbuild on 07863 216381.",
};

export default function FlatRoofsPage() {
  return (
    <>
      <section
        className="py-24 px-6 relative"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(10,20,35,0.92) 0%, rgba(10,20,35,0.60) 100%), url('/flatroof.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="label-orange">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Flat Roofs</h1>
            <p className="text-gray-400 text-lg max-w-xl mb-8">
              Our flat roofing solutions provide a seamless, durable surface ideal for residential and commercial properties seeking low-maintenance protection.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:07863216381" className="btn-primary">📞 Get Free Quote</a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 justify-center lg:justify-start">
              <Link href="/" className="hover:text-orange-400">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-orange-400">Services</Link><span>›</span>
              <span style={{ color: "#FF5A1A" }}>Flat Roofs</span>
            </div>
          </div>
          <div className="shrink-0 w-full max-w-xl">
            <div className="rounded-2xl overflow-hidden relative" style={{ height: "420px", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
              <Image src="/flatroof.jpeg" alt="Flat Roofs" fill className="object-cover object-center" sizes="600px" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,35,0.80) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#FF5A1A" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
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
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#1B2A41" }}>Durable Flat Roofing Systems</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Flat roofs are a popular choice for extensions, garages, outbuildings, and commercial buildings. When properly installed, they offer excellent durability and minimal maintenance requirements.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              WK Roofbuild Ltd installs all types of flat roofing systems including felt, EPDM rubber, GRP fibreglass, and liquid membrane. Each system is suited to different budgets and longevity requirements.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["EPDM rubber roofing","GRP fibreglass roofing","Felt flat roofing","Liquid membrane systems","Drainage solutions","Insulation fitting","Roof lights & skylights","Repairs & maintenance"].map(i => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { t: "EPDM Rubber", d: "Highly durable rubber membrane roofing with a lifespan of 25–50 years. Excellent waterproofing with minimal maintenance.", e: "💧" },
              { t: "GRP Fibreglass", d: "Glass-reinforced plastic roofing — seamless, extremely durable, and available in a range of finishes.", e: "🔩" },
              { t: "Felt Systems", d: "Traditional 3-layer felt roofing. A cost-effective solution ideal for garages, extensions, and outbuildings.", e: "🏗️" },
              { t: "Drainage & Falls", d: "Correct drainage is critical on flat roofs. We ensure proper falls are built in to prevent pooling and water ingress.", e: "🌊" },
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
            <h2 className="text-3xl font-bold" style={{ color: "#1B2A41" }}>Flat Roof Projects We&apos;re Proud Of</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/flatroof.jpeg" alt="Flat roof completed" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/WhatsApp%20Image%202026-05-21%20at%209.37.18%20PM.jpeg" alt="Flat roof installation" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center text-white" style={{ background: "linear-gradient(135deg,#1B2A41,#131F31)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Get a Flat Roof Quote Today</h2>
          <p className="text-gray-400 mb-8">Free site visit and no-obligation quote anywhere in London. Call or message us now.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07863216381" className="btn-primary">📞 07863 216381</a>
            <Link href="/contact" className="btn-outline">Send an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
