import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roofing Service | WK Roofbuild",
  description: "Expert roofing installation and repair services in London by WK Roofbuild Ltd. Call 07863 216381 for a free quote.",
};

export default function RoofingPage() {
  return (
    <>
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg,#131F31,#1B2A41)" }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="label-orange">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Roofing</h1>
            <p className="text-gray-400 text-lg max-w-xl mb-8">
              Protect your property with expertly crafted roofing designed to withstand the elements while enhancing exterior style and value.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:07863216381" className="btn-primary">📞 Get Free Quote</a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 justify-center lg:justify-start">
              <Link href="/" className="hover:text-orange-400">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-orange-400">Services</Link><span>›</span>
              <span style={{ color: "#FF5A1A" }}>Roofing</span>
            </div>
          </div>
          <img src="https://picsum.photos/seed/roofing1/600/400" alt="Roofing" className="rounded-xl w-full max-w-md object-cover" style={{ height: "300px" }} />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="label-orange">Service Overview</span>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#1B2A41" }}>Professional Roofing Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A strong, well-installed roof is the most important protective element of any building. At WK Roofbuild Ltd, we deliver professional roofing solutions for residential and commercial properties across London.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you need a full re-roof, repairs, or a new installation, our skilled team uses premium materials and proven techniques to ensure a long-lasting result you can rely on for decades.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Full roof installation","Re-roofing & replacement","Tile & slate roofing","Felt & flat roofing","Ridge & hip tiles","Lead flashing","Roof inspections","Emergency repairs"].map(i => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { t: "New Installations", d: "Full roofing installations using premium tiles, slates, or felt depending on your property type and budget.", e: "🏠" },
              { t: "Re-roofing", d: "Stripping old roofing and replacing it completely for properties with severely worn or damaged roof coverings.", e: "🔄" },
              { t: "Tile & Slate Work", d: "Traditional tile and slate work carried out by experienced craftsmen for a classic, durable finish.", e: "🧱" },
              { t: "Emergency Repairs", d: "Rapid response roofing repairs to fix leaks and storm damage quickly, preventing further interior damage.", e: "⚡" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need a Roofing Expert?</h2>
          <p className="text-gray-400 mb-8">Contact WK Roofbuild today for a free, no-obligation roofing quote across London.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07863216381" className="btn-primary">📞 07863 216381</a>
            <Link href="/contact" className="btn-outline">Send an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
