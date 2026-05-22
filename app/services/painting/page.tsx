import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Painting Service | WK Roofbuild",
  description:
    "Professional interior and exterior painting services in London by WK Roofbuild. Quality paints, expert preparation, flawless finish. Call 07863 216381.",
};

const CheckIcon = () => (
  <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PaintingServicePage() {
  return (
    <>
      {/* Page Banner */}
      <section
        className="page-banner py-24 px-4 relative"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(10,20,35,0.92) 0%, rgba(10,20,35,0.60) 100%), url('/WhatsApp%20Image%202026-05-21%20at%209.03.31%20PM.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FF5A1A" }}>
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Professional Painting Service
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Expert interior and exterior painting for homes and businesses across London.
              Premium materials, meticulous preparation, and a flawless finish — every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a href="tel:07863216381" className="btn-orange text-center">
                📞 Get Free Quote
              </a>
              <Link href="/contact" className="btn-outline text-center">
                Contact Us
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-8 text-sm text-gray-500 justify-center lg:justify-start">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/services" className="hover:text-orange-400 transition-colors">Services</Link>
              <span>›</span>
              <span style={{ color: "#FF5A1A" }}>Painting Service</span>
            </div>
          </div>

          <div className="shrink-0 w-full max-w-xl">
            <div className="rounded-2xl overflow-hidden relative" style={{ height: "420px", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
              <Image src="/WhatsApp%20Image%202026-05-21%20at%209.03.31%20PM.jpeg" alt="Painting Service" fill className="object-cover object-center" sizes="600px" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,35,0.80) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#FF5A1A" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
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

      {/* Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FF5A1A" }}>
              Service Overview
            </p>
            <h2 className="text-3xl font-bold mb-5 section-title left" style={{ color: "#1B2A41" }}>
              Transform Your Space With Colour
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A fresh coat of paint is one of the most cost-effective ways to completely
              transform any space. Whether you want to refresh tired walls, change the mood
              of a room, or protect your exterior from the British weather, our expert painters
              deliver outstanding results every time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work on residential and commercial properties of all sizes — from a single
              bedroom to a full office block. Our team takes care of everything: moving
              furniture, covering floors, filling cracks, sanding surfaces, applying primer,
              and finishing with your chosen paint. We leave your property clean and tidy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We only use premium paints from trusted brands, ensuring your walls look
              beautiful and the finish lasts for years. We also offer free colour consultation
              to help you choose the perfect shade.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Interior painting",
                "Exterior painting",
                "Wall preparation & filling",
                "Sanding & priming",
                "Feature walls",
                "Ceiling painting",
                "Woodwork & skirting",
                "Commercial repaints",
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
                title: "Interior Painting",
                desc: "We paint living rooms, bedrooms, kitchens, bathrooms, hallways, and commercial interiors. Full prep included.",
                icon: "🏠",
              },
              {
                title: "Exterior Painting",
                desc: "Weather-resistant exterior painting to protect and beautify your home or business. All surfaces covered.",
                icon: "🏢",
              },
              {
                title: "Surface Preparation",
                desc: "Proper prep is key to a long-lasting finish. We fill cracks, sand, and prime before any paint is applied.",
                icon: "🔧",
              },
              {
                title: "Colour Consultation",
                desc: "Not sure which colour to choose? Our team will guide you through options to find the perfect match.",
                icon: "🎨",
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

      {/* Showcase Image */}
      <section className="px-4 pb-4" style={{ backgroundColor: "#F5F7FA", paddingTop: "0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="/Gemini_Generated_Image_hlvy74hlvy74hlvy.png"
              alt="Professional interior painting"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,20,35,0.65) 0%, transparent 60%)" }} />
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center px-10 max-w-md">
              <span className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF5A1A" }}>Our Painting Work</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">Flawless Finish — Interior &amp; Exterior</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Premium paints, meticulous preparation, and a professional team dedicated to transforming your space beautifully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Painting Service */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FF5A1A" }}>
              Why WK Roofbuild
            </p>
            <h2 className="text-3xl font-bold section-title" style={{ color: "#1B2A41" }}>
              Our Painting Promise
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Premium Paints", desc: "We use only top-quality paints from leading brands, ensuring vibrant colours and durability.", num: "01" },
              { title: "No Mess Left Behind", desc: "We protect all surfaces, furniture, and floors, and leave your property spotless when we are done.", num: "02" },
              { title: "On Time, Every Time", desc: "We respect your schedule. Our team arrives punctually and completes work within the agreed timeframe.", num: "03" },
              { title: "Competitive Pricing", desc: "We offer honest, transparent quotes with no hidden costs. You know exactly what you are paying for.", num: "04" },
              { title: "Experienced Painters", desc: "All our painters are trained professionals with years of experience in both residential and commercial projects.", num: "05" },
              { title: "Satisfaction Guaranteed", desc: "We do not consider a job finished until you are completely happy with the result. Your satisfaction is our priority.", num: "06" },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-7 shadow-sm relative overflow-hidden">
                <span
                  className="absolute top-2 right-4 text-6xl font-extrabold opacity-5"
                  style={{ color: "#1B2A41" }}
                >
                  {item.num}
                </span>
                <div
                  className="w-10 h-1 mb-4 rounded-full"
                  style={{ backgroundColor: "#FF5A1A" }}
                />
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1B2A41" }}>{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="label-orange">Our Work</span>
            <h2 className="text-3xl font-bold" style={{ color: "#1B2A41" }}>Painting Projects We&apos;re Proud Of</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/WhatsApp%20Image%202026-05-21%20at%209.03.31%20PM.jpeg" alt="Painting project" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <Image src="/Gemini_Generated_Image_hlvy74hlvy74hlvy.png" alt="Interior painting" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
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
            Ready for a Fresh New Look?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact WK Roofbuild today for a free, no-obligation painting quote. We cover all of London.
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
