import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  title: "WK Roofbuild | Professional Painting & Tiling Services London",
  description:
    "WK Roofbuild Ltd provides expert painting and tiling installation services across London. Quality craftsmanship, transparent pricing, certified & insured. Call 07863 216381.",
  keywords: [
    "painting service London",
    "tiling installation London",
    "professional painters London",
    "tile installation London",
    "WK Roofbuild",
    "building services London",
  ],
  openGraph: {
    title: "WK Roofbuild | Professional Painting & Tiling Services London",
    description:
      "Expert painting and tiling installation services across London. Certified, insured, and available 24/7.",
    url: "https://wkroofbuild.com",
    siteName: "WK Roofbuild",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Floating Call Button */}
        <a
          href="tel:07863216381"
          aria-label="Call WK Roofbuild"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "#FF5A1A" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
            />
          </svg>
          <span className="hidden sm:inline">Call Us</span>
        </a>
      </body>
    </html>
  );
}
