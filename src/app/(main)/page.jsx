import HeroSectionPage from "@/components/homepage/HeroSection";
import MarqueItemsPage from "@/components/shared/MarqueItems";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto bg-white">
      <HeroSectionPage ></HeroSectionPage>
      <MarqueItemsPage></MarqueItemsPage>
    </div>
  );
}
