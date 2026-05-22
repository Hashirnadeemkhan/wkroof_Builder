import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | WK Roofbuild Ltd",
  description:
    "Browse our portfolio of completed roofing, guttering, painting, and tiling projects across London. Real work from our experienced team at WK Roofbuild Ltd.",
};

const galleryItems = [
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.24.10%20PM.jpeg",
    alt: "WK Roofbuild team",
    caption: "WK Roofbuild Team",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.00.24%20PM.jpeg",
    alt: "Completed roofing project on red brick house",
    caption: "Roofing Project",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.01.03%20PM.jpeg",
    alt: "WK Roofbuild team working on a roof",
    caption: "Team at Work",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.01.04%20PM.jpeg",
    alt: "Worker laying slate tiles on roof",
    caption: "Slate Roof Installation",
    pos: "center",
  },
  {
    src: "/new-Roof-768x510.jpeg",
    alt: "New roof installation on brick house",
    caption: "New Roof Installation",
    pos: "center",
  },
  {
    src: "/guttering-roof-768x510.jpeg",
    alt: "Guttering installation on house",
    caption: "Guttering Installation",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.01.04%20PM%20(1).jpeg",
    alt: "Kitchen tiling with white metro tiles",
    caption: "Kitchen Tiling",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.03.31%20PM.jpeg",
    alt: "Interior painting service",
    caption: "Interior Painting",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-18%20at%206.19.42%20PM.jpeg",
    alt: "Roof repair and restoration",
    caption: "Roof Repair & Restoration",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-18%20at%209.29.46%20PM.jpeg",
    alt: "Chimney repair and repointing",
    caption: "Chimney Repair",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-19%20at%207.56.15%20PM.jpeg",
    alt: "Luxury bathroom tiling",
    caption: "Bathroom Tiling",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.16%20PM.jpeg",
    alt: "Roof batten and membrane work in progress",
    caption: "Roof Batten & Membrane",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.17%20PM.jpeg",
    alt: "Completed slate roof aerial view",
    caption: "Slate Roof — Aerial View",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.17%20PM%20(1).jpeg",
    alt: "Grey tile roof with Velux skylight",
    caption: "Tile Roof with Skylight",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.17%20PM%20(2).jpeg",
    alt: "Flat roof installation with scaffold",
    caption: "Flat Roof Installation",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.18%20PM.jpeg",
    alt: "Red clay tile roof with chimney stack",
    caption: "Clay Tile Roofing",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.18%20PM%20(1).jpeg",
    alt: "Flat roof deck installation",
    caption: "Flat Roof Deck",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.18%20PM%20(2).jpeg",
    alt: "Completed flat roof felt installation",
    caption: "Flat Roof — Completed",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.19%20PM.jpeg",
    alt: "Dormer roof felting and battening",
    caption: "Dormer Roof Felting",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.19%20PM%20(1).jpeg",
    alt: "Natural slate roof close-up",
    caption: "Natural Slate Roofing",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.19%20PM%20(2).jpeg",
    alt: "Roof repair on terraced house extension",
    caption: "Roof Repair",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.20%20PM.jpeg",
    alt: "Flat roof completion",
    caption: "Flat Roof",
    pos: "center",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.20%20PM%20(1).jpeg",
    alt: "Red clay tile roof viewed from above",
    caption: "Clay Tile Roof — Top View",
    pos: "top",
  },
  {
    src: "/WhatsApp%20Image%202026-05-21%20at%209.37.20%20PM%20(2).jpeg",
    alt: "White GRP flat roof with chimneys",
    caption: "GRP Flat Roof",
    pos: "top",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative py-20 px-6"
        style={{
          background:
            "linear-gradient(to right, rgba(10,20,35,0.92) 55%, rgba(10,20,35,0.70) 100%), url('/WhatsApp%20Image%202026-05-21%20at%209.00.24%20PM.jpeg') center/cover no-repeat",
          minHeight: "280px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="inline-block px-4 py-1.5 text-white text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "#FF5A1A" }}
          >
            Our Work
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Project Gallery
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            A showcase of our completed roofing, guttering, painting, and tiling projects.
            Every image reflects the quality and care we bring to each job.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#FF5A1A" }}
            >
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#1B2A41" }}>
              Our Completed Projects
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Real projects, real results. Browse through our work and see the standard of
              quality WK Roofbuild Ltd delivers on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md"
                style={{ height: "256px" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.pos }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay with caption */}
                <div
                  className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,20,35,0.85) 0%, transparent 60%)",
                  }}
                >
                  <div className="p-4 w-full">
                    <p className="text-white font-bold text-sm">{item.caption}</p>
                    <div className="w-8 h-0.5 mt-1" style={{ backgroundColor: "#FF5A1A" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 rounded-xl p-10 text-center"
            style={{ backgroundColor: "#1B2A41" }}
          >
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Get in touch today for a free estimate. Our team is ready to bring the same
              quality to your home or business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:07863216381"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF5A1A" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                07863 216381
              </a>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-white text-white font-bold rounded text-sm hover:bg-white hover:text-gray-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
