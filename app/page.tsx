import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title:
    "Roofing Contractor London | Roof Repairs, New Roofs & Flat Roofing | WK Roof Build",
  description:
    "Looking for a trusted roofing contractor in London? We provide roof repairs, new roof installations, flat roofing, guttering and chimney services across London. Free quotes available.",
  keywords: ["roofing contractors london"],
  alternates: { canonical: "https://wkroofbuild.com" },
};

export default function HomePage() {
  return <HomeContent />;
}
