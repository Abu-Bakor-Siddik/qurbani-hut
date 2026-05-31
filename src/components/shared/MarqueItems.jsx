import Marquee from "react-fast-marquee";
import { PiCowFill } from "react-icons/pi";

const items = [
  {
    id: 1,
    title: "Premium Cows Available",
  },
  {
    id: 2,
    title: "Healthy Goats in Stock",
  },
  {
    id: 3,
    title: "Quality Sheep for Qurbani",
  },
  {
    id: 4,
    title: "Camels Available",
  },
  {
    id: 5,
    title: "Home Delivery Service",
  },
  {
    id: 6,
    title: "Vaccinated Animals",
  },
  {
    id: 7,
    title: "Best Prices Guaranteed",
  },
  {
    id: 8,
    title: "Trusted by 1000+ Customers",
  },
];

const MarqueItemsPage = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-primary text-white py-4 ">
      <Marquee pauseOnHover={true} speed={50}>
        {items.map((i) => {
          return (
            <span key={i.id} className="mr-8 flex items-center gap-2">
              <PiCowFill />
              {i.title}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueItemsPage;
