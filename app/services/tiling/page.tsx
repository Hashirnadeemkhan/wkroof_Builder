import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiling Installation Service | WK Roofbuild",
  description:
    "Professional tiling installation for kitchens, bathrooms, floors and walls in London by WK Roofbuild. All tile types. Call 07863 216381.",
};

const CheckIcon = () => (
  <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function TilingServicePage() {
  return (
    <>
      {/* Page Banner */}
      <section
        className="page-banner py-24 px-4"
        style={{ background: "linear-gradient(135deg, #131F31 0%, #1B2A41 100%)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FF5A1A" }}>
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Tiling Installation Services
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Expert tiling for kitchens, bathrooms, floors, walls and commercial spaces
              across London. All tile types handled with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a href="tel:07863216381" className="btn-orange text-center">
                📞 Get Free Quote
              </a>
              <Link href="/contact" className="btn-outline text-center">
                Contact Us
              </Link>
            </div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-8 text-sm text-gray-500 justify-center lg:justify-start">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/services" className="hover:text-orange-400 transition-colors">Services</Link>
              <span>›</span>
              <span style={{ color: "#FF5A1A" }}>Tiling Installation</span>
            </div>
          </div>

          {/* Icon */}
          <div className="shrink-0">
            <div
              className="w-52 h-52 rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(232,130,12,0.15)", border: "2px solid rgba(232,130,12,0.3)" }}
            >
              <svg className="w-24 h-24" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FF5A1A" }}>
              Service Overview
            </p>
            <h2 className="text-3xl font-bold mb-5 section-title left" style={{ color: "#1B2A41" }}>
              Precision Tiling for Every Space
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Beautifully tiled surfaces elevate the look and feel of any room. Whether you
              are renovating a bathroom, updating a kitchen, laying new floor tiles, or
              fitting out a commercial space, our tiling specialists deliver impeccable results
              with perfect alignment and clean, consistent grouting.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with all types of tiles — ceramic, porcelain, natural stone, marble,
              travertine, and mosaic — and handle all aspects of the job: surface preparation,
              waterproofing, adhesive application, tile cutting, grouting, and sealing.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every tiling project is carried out to the highest standard. We take pride in
              our accuracy and attention to detail, ensuring tiles are perfectly level, evenly
              spaced, and professionally finished.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Floor tiling",
                "Wall tiling",
                "Kitchen tiling",
                "Bathroom tiling",
                "Porcelain & ceramic tiles",
                "Natural stone & marble",
                "Mosaic tile installation",
                "Waterproofing & sealing",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            {[
              {
                title: "Kitchen Tiling",
                desc: "Splashbacks, walls, and floor tiles for kitchens. We help you choose the right tile for a functional and stylish finish.",
                icon: "🍳",
              },
              {
                title: "Bathroom Tiling",
                desc: "Full bathroom tiling including waterproof membranes, floor-to-ceiling wall tiles, and wet room installations.",
                icon: "🚿",
              },
              {
                title: "Floor Tiling",
                desc: "Precise floor tile installation for any room. We level the subfloor and ensure tiles are laid perfectly flat.",
                icon: "⬜",
              },
              {
                title: "Commercial Tiling",
                desc: "Large-scale tiling for offices, restaurants, shops, and public areas. We work to tight deadlines with minimal disruption.",
                icon: "🏢",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex gap-5 p-6 rounded-xl border border-gray-100 shadow-sm"
              >
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#1B2A41" }}>{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tile Types */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FF5A1A" }}>
              Materials We Work With
            </p>
            <h2 className="text-3xl font-bold section-title" style={{ color: "#1B2A41" }}>
              Tile Types We Install
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Ceramic Tiles", desc: "Affordable, versatile, and available in a huge range of designs. Ideal for walls and lighter-traffic floors.", num: "01" },
              { name: "Porcelain Tiles", desc: "Highly durable and water-resistant. Perfect for bathrooms, kitchens, and high-traffic floor areas.", num: "02" },
              { name: "Natural Stone", desc: "Limestone, sandstone, and slate tiles for a natural, premium look. Each piece is unique.", num: "03" },
              { name: "Marble Tiles", desc: "Luxurious and timeless. We handle marble with the care it deserves for a stunning finish.", num: "04" },
              { name: "Mosaic Tiles", desc: "Small glass or stone tiles arranged in intricate patterns. Great for feature walls and splash-backs.", num: "05" },
              { name: "Travertine Tiles", desc: "A classic natural stone with a warm, earthy tone. Popular for bathrooms and hallways.", num: "06" },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-7 shadow-sm relative overflow-hidden">
                <span
                  className="absolute top-2 right-4 text-6xl font-extrabold opacity-5"
                  style={{ color: "#1B2A41" }}
                >
                  {item.num}
                </span>
                <div className="w-10 h-1 mb-4 rounded-full" style={{ backgroundColor: "#FF5A1A" }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1B2A41" }}>{item.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 text-white text-center"
        style={{ background: "linear-gradient(135deg, #1B2A41, #131F31)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Tiling Project?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact WK Roofbuild today for a free, no-obligation tiling quote. We cover all of London.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:07863216381"
              className="px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 text-white"
              style={{ backgroundColor: "#FF5A1A" }}
            >
              📞 07863 216381
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-bold border-2 border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-400 transition-all"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
