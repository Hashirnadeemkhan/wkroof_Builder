import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services | WK Roofbuild",
  description: "Explore all roofing, painting, and tiling services by WK Roofbuild Ltd in London. Click any service to learn more.",
};

const services = [
  {
    href: "/services/roofing",
    title: "Roofing",
    desc: "Protect your property with expertly crafted roofing designed to withstand the elements while enhancing exterior style and value.",
    img: "https://picsum.photos/seed/roofing1/600/350",
  },
  {
    href: "/services/new-roofs",
    title: "New Roofs",
    desc: "Upgrade your home with a premium new roof built for long-lasting performance, improved energy efficiency, and modern visual appeal.",
    img: "https://picsum.photos/seed/newroof2/600/350",
  },
  {
    href: "/services/flat-roofs",
    title: "Flat Roofs",
    desc: "Our flat roofing solutions provide a seamless, durable surface ideal for residential and commercial properties seeking low-maintenance protection.",
    img: "https://picsum.photos/seed/flatroof3/600/350",
  },
  {
    href: "/services/roof-repair",
    title: "Roof Repair",
    desc: "From minor leaks to major damage, our skilled team restores your roof quickly and precisely to ensure maximum structural security.",
    img: "https://picsum.photos/seed/repair4/600/350",
  },
  {
    href: "/services/chimney-repair",
    title: "Chimney Repair",
    desc: "We specialise in restoring chimney integrity — preventing leaks, improving efficiency, and enhancing overall safety for your home.",
    img: "https://picsum.photos/seed/chimney5/600/350",
  },
  {
    href: "/services/guttering",
    title: "Guttering",
    desc: "Keep your property protected from water damage with our custom gutter installation, cleaning, and maintenance services.",
    img: "https://picsum.photos/seed/gutter6/600/350",
  },
  {
    href: "/services/painting",
    title: "Painting Service",
    desc: "Professional interior and exterior painting that transforms your space with premium paints, meticulous prep, and a flawless finish.",
    img: "https://picsum.photos/seed/painting7/600/350",
  },
  {
    href: "/services/tiling",
    title: "Tiling Installation",
    desc: "Expert tiling for kitchens, bathrooms, floors, and commercial spaces — all tile types, perfectly aligned and sealed.",
    img: "https://picsum.photos/seed/tiling8/600/350",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg,#131F31,#1B2A41)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="label-orange">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg">
            Click on any service below to learn more about how we can help you.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <span style={{ color: "#FF5A1A" }}>Services</span>
          </div>
        </div>
      </section>

      {/* Services grid — same exact layout as homepage */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="label-orange">Our Services</span>
            <h2 className="section-heading">Explore Our Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.href}
                className="border border-gray-200 bg-white service-card"
              >
                {/* Photo */}
                <Image
                  src={svc.img}
                  alt={svc.title}
                  width={600}
                  height={350}
                  className="w-full object-cover"
                  style={{ height: "200px" }}
                />
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#1B2A41" }}>
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <div className="text-center">
                    <Link href={svc.href} className="read-more-btn inline-block px-10">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1B2A41" }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-500 mb-8">
            Call us or send a message — we are happy to advise you on the best solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07863216381" className="btn-orange">📞 Call 07863 216381</a>
            <Link href="/contact" className="btn-outline-dark">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  );
}
