import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Guttering Services | WK Roofbuild",
  description: "Professional gutter installation, cleaning, and repair services in London. Protect your property from water damage. Call 07863 216381.",
};

export default function GutteringPage() {
  return (
    <>
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg,#131F31,#1B2A41)" }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="label-orange">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Guttering</h1>
            <p className="text-gray-400 text-lg max-w-xl mb-8">
              Keep your property protected from water damage with our custom gutter installation, cleaning, and maintenance services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:07863216381" className="btn-primary">📞 Get Free Quote</a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 justify-center lg:justify-start">
              <Link href="/" className="hover:text-orange-400">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-orange-400">Services</Link><span>›</span>
              <span style={{ color: "#FF5A1A" }}>Guttering</span>
            </div>
          </div>
          <Image src="https://picsum.photos/seed/gutter6/600/400" alt="Guttering" width={600} height={400} className="rounded-xl w-full max-w-md object-cover" style={{ height: "300px" }} />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <span className="label-orange">Service Overview</span>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#1B2A41" }}>Gutter Installation & Maintenance</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Effective guttering is essential for directing rainwater away from your property and protecting your foundations, walls, and roof structure from water damage. Blocked or broken gutters can cause significant and costly problems over time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              WK Roofbuild Ltd provides a full range of guttering services — from new installations and replacements to repairs and regular cleaning — ensuring your gutters always perform as they should.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["New gutter installation","Gutter replacement","Gutter cleaning","Leak repairs","Downpipe fitting","Fascia & soffit fitting","UPVC & cast iron gutters","Commercial guttering"].map(i => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { t: "New Installation", d: "Full gutter system design and installation — sized correctly for your roof area and tailored to complement your property.", e: "🏠" },
              { t: "Gutter Cleaning", d: "Manual removal of leaves, moss, and debris from gutters and downpipes to ensure free-flowing drainage.", e: "🍃" },
              { t: "Repairs & Sealing", d: "Re-sealing leaking joints, replacing cracked sections, and fixing sagging gutters to restore proper function.", e: "🔧" },
              { t: "Fascias & Soffits", d: "Installation and replacement of uPVC fascias and soffits to finish your roofline cleanly and protect the roof structure.", e: "🪵" },
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
          <h2 className="text-3xl font-extrabold mb-4">Gutter Problems? Get in Touch</h2>
          <p className="text-gray-400 mb-8">Free survey and quote for all guttering work in London. Call or message us today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07863216381" className="btn-primary">📞 07863 216381</a>
            <Link href="/contact" className="btn-outline">Send an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
