import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

/* ─── HERO ───────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(to right, rgba(10,20,35,0.92) 55%, rgba(10,20,35,0.55) 100%), url('https://picsum.photos/seed/building99/1600/900') center/cover no-repeat",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        {/* Badge */}
        <div
          className="inline-block px-4 py-1.5 text-white text-xs font-bold uppercase tracking-widest mb-6"
          style={{ backgroundColor: "#FF5A1A" }}
        >
          WK Roofbuild Ltd
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight mb-5 max-w-2xl">
          Your Trusted Roofing &amp; Guttering Experts
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          Welcome to WK Roofbuild Ltd — where precision, durability, and client satisfaction
          meet. We&apos;re committed to delivering high-quality roofing, painting, and tiling
          services with outstanding craftsmanship you can trust.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="tel:07863216381" className="btn-primary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            07863 216381
          </a>
          <Link href="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ──────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left — photo collage (3 images) */}
        <div className="grid grid-cols-2 gap-3">
          {/* Tall left */}
          <Image
            src="https://picsum.photos/seed/house10/400/600"
            alt="Our work"
            width={400}
            height={600}
            className="rounded object-cover w-full row-span-2"
            style={{ height: "380px" }}
          />
          {/* Two stacked right */}
          <Image
            src="https://picsum.photos/seed/roof20/400/280"
            alt="Roofing"
            width={400}
            height={280}
            className="rounded object-cover w-full"
            style={{ height: "183px" }}
          />
          <Image
            src="https://picsum.photos/seed/tile30/400/280"
            alt="Tiling"
            width={400}
            height={280}
            className="rounded object-cover w-full"
            style={{ height: "183px" }}
          />
        </div>

        {/* Right — text */}
        <div>
          <span className="label-orange">About Us</span>
          <h2 className="section-heading mb-5">
            Professional Roofing and Guttering Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At WK Roofbuild Ltd, we do more than just roofs. We serve as trusted partners
            dedicated to protecting your home or business. Backed by years of industry
            experience, exceptional craftsmanship, and a strong focus on customer satisfaction,
            our skilled team delivers dependable, high-standard roofing solutions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            You can count on us for premium materials, meticulous workmanship, and a service
            approach centred around your needs. We strive to exceed expectations on every
            project, ensuring reliability, durability, and complete customer satisfaction.
          </p>
          <Link href="/about" className="btn-orange">
            Know About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE ─────────────────────────────────────────────── */
function WhySection() {
  const cards = [
    {
      title: "Experienced Professionals",
      desc: "Our skilled and passionate team brings years of hands-on experience to every project, ensuring precision and perfection from start to finish.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Advanced Tools & Techniques",
      desc: "We use the latest technology and best practices to guarantee high-quality results, visually delivered efficiently and safely.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Fair & Transparent Pricing",
      desc: "No hidden costs, no surprises — just honest, competitive pricing that reflects true value for your investment.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Certified & Trusted",
      desc: "We take pride in being a certified, fully insured, and reliable company — committed to maintaining the highest industry standards.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section style={{ backgroundColor: "#1B2A41" }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top row: text left, image right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <span className="label-orange">Why Choose</span>
            <h2 className="section-heading white mb-5">
              Your Trusted Partner for Quality and Reliability
            </h2>
            <p className="text-gray-400 leading-relaxed">
              At WK Roofbuild Ltd, we don&apos;t just deliver services — we build trust. Our
              team is dedicated to providing quality and expert craftsmanship, premium
              materials, and a genuine commitment to customer satisfaction. From
              consultation to completion, we ensure every detail exceeds your expectations.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/seed/roofwork55/700/420"
              alt="Our workmanship"
              width={700}
              height={420}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="icon-box mb-4">{c.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ───────────────────────────────────────────────── */
const ALL_SERVICES = [
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

function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="label-orange">Our Services</span>
          <h2 className="section-heading">Explore Our Services</h2>
        </div>

        {/* 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((svc) => (
            <div
              key={svc.href}
              className="border border-gray-200 bg-white service-card"
            >
              {/* Photo — full width, no padding */}
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full object-cover"
                style={{ height: "200px" }}
                loading="lazy"
              />

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#1B2A41" }}
                >
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {svc.desc}
                </p>
                {/* Centred READ MORE button */}
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
  );
}

/* ─── HOW IT WORKS ───────────────────────────────────────────── */
function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Get Free Estimate",
      desc: "We calculate a transparent estimate. We evaluate your project in detail and provide accurate quotes, ensuring you know exactly what the job entails and costs.",
      icon: (
        <svg className="w-8 h-8" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Free Consultation",
      desc: "Our experts walk you through a thorough consultation — recommending the right materials, colours, and approach to suit your specific project.",
      icon: (
        <svg className="w-8 h-8" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Best Equipment",
      desc: "We use industry-leading tools and equipment to deliver flawless results — improving efficiency, quality, and the overall finish of every job.",
      icon: (
        <svg className="w-8 h-8" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Reasonable Prices",
      desc: "Our pricing model is straightforward and affordable, ensuring you always get excellent quality and accessible service within your budget.",
      icon: (
        <svg className="w-8 h-8" style={{ color: "#FF5A1A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="label-orange">Work Process</span>
          <h2 className="section-heading">How It Works</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="step-num">{s.num}</div>
              <div className="flex justify-center mb-3">{s.icon}</div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#1B2A41" }}>
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────────── */
function TestimonialsSection() {
  const reviews = [
    {
      name: "Chris Jones",
      role: "Homeowner, North London",
      text: "Roof problems used to be my biggest budget constraint. Since partnering with WK Roofbuild Ltd, transparent quotes, competitive pricing, and quality work have saved us thousands every year. This is a company that every property then their families should use.",
    },
    {
      name: "Rhys Connor",
      role: "Property Manager",
      text: "We hired them for bathroom tiling in five flats and the results were superb every time. Professional, reliable, and great value. They are now our go-to for all building work across our portfolio.",
    },
  ];

  return (
    <section
      className="py-20 px-6 relative"
      style={{
        background:
          "linear-gradient(to right, rgba(10,20,35,0.88) 0%, rgba(10,20,35,0.75) 100%), url('https://picsum.photos/seed/rooftop88/1600/700') center/cover no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="label-orange">Testimonials</span>
          <h2 className="section-heading white">What They Say About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" style={{ color: "#FF5A1A" }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "#1B2A41" }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#1B2A41" }}>{r.name}</p>
                  <p className="text-xs text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPORT ─────────────────────────────────────────────────── */
export default function HomeContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
