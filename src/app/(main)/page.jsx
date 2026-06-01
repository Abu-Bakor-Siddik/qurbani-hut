import FeatureAnimalPage from "@/components/homepage/FeatureAnimal";
import HeroSectionPage from "@/components/homepage/HeroSection";
import QurbaniTips from "@/components/homepage/QurbaniTips";
import TopBreeds from "@/components/homepage/TopBreeds";
import MarqueItemsPage from "@/components/shared/MarqueItems";

export default function Home() {
  return (
    <div className="container mx-auto bg-white">
      <HeroSectionPage ></HeroSectionPage>
      <MarqueItemsPage></MarqueItemsPage>
      <FeatureAnimalPage></FeatureAnimalPage>
      <QurbaniTips></QurbaniTips>
      <TopBreeds></TopBreeds>
    </div>
  );
}
