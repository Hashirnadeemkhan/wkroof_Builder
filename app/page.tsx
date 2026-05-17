import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "WK Roofbuild | Professional Painting & Tiling Services London",
  description:
    "WK Roofbuild Ltd — expert painting and tiling installation services across London. Quality craftsmanship, transparent pricing, certified & insured. Call 07863 216381.",
  alternates: { canonical: "https://wkroofbuild.com" },
};

export default function HomePage() {
  return <HomeContent />;
}
