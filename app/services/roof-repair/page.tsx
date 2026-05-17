import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roof Repair | WK Roofbuild",
  description: "Fast and reliable roof repair services in London. From minor leaks to major damage — WK Roofbuild fixes it all. Call 07863 216381.",
};

export default function RoofRepairPage() {
  return (
    <>
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg,#131F31,#1B2A41)" }}>
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
          <Image src="https://picsum.photos/seed/repair4/600/400" alt="Roof Repair" width={600} height={400} className="rounded-xl w-full max-w-md object-cover" style={{ height: "300px" }} />
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
