"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 shadow-md">

      {/* ── Top bar: white + social icons right ── */}
      <div className="bg-white border-b border-gray-200 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-3">
          <a href="#" aria-label="Facebook"
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-orange-500 hover:text-orange-500 transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube"
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-orange-500 hover:text-orange-500 transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram"
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-orange-500 hover:text-orange-500 transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Main nav: black bg, full-height orange CTA right ── */}
      <nav className="bg-black flex items-stretch">
        {/* Left + center area */}
        <div className="flex-1 flex items-center justify-between px-6 py-0">

          {/* Logo */}
          <Link href="/" className="shrink-0 py-3">
            <Image src="/logo.png" alt="WK Roofbuild Ltd" width={160} height={58} className="object-contain" priority />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                    pathname === link.href ? "text-[#FF5A1A]" : "text-white hover:text-[#FF5A1A]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 ml-4"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Orange CTA block — full height, flush right */}
        <a
          href="tel:07863216381"
          className="hidden lg:flex items-center gap-4 px-8 shrink-0"
          style={{ backgroundColor: "#FF5A1A" }}
        >
          {/* Chat / phone icon */}
          <svg className="w-9 h-9 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <div>
            <p className="text-white text-xs font-medium leading-none mb-1">Talk To An Expert</p>
            <p className="text-white font-extrabold text-lg leading-none tracking-wide">07863 216381</p>
          </div>
        </a>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 text-sm font-bold uppercase tracking-wider rounded transition-colors ${
                  pathname === link.href ? "text-[#FF5A1A]" : "text-white hover:text-[#FF5A1A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:07863216381"
              className="mt-3 flex items-center gap-2 px-3 py-3 font-bold text-white text-sm"
              style={{ backgroundColor: "#FF5A1A" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              07863 216381
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
