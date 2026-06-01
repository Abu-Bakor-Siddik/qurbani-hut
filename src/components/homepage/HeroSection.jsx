import Image from "next/image";
import React from "react";
import HeroCow from "@/assets/HeroCow.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const HeroSectionPage = () => {
  return (
    <div className="hero  min-h-[60vh]">
      <div className="hero-content flex-col lg:flex-row-reverse p-20 md:p-10">
        <Image src={HeroCow} alt="Cow Image" height={300} width={300}></Image>
        <div>
          <h1 className="text-6xl font-bold">
            Book Your <span className="text-primary">Qurbani</span> <br />{" "}
            Animal <span className="text-red-500">Online</span>
          </h1>
          <p className="py-6">
            Find healthy, well-maintained livestock for Qurbani. Browse our
            premium collection of cows, goats, sheep, and more. Book online and
            get delivered to your doorstep.
          </p>
          <div className="flex items-center gap-10 md:gap-5 justify-center md:justify-start">
            <Link href={"/all-animal"}>
              <button className="btn btn-primary ">
                Browse Animals <IoIosArrowRoundForward />
              </button>
            </Link>
            <button className="btn btn-outline px-8">Qurbani Tips</button>
          </div>
          <div className="flex  gap-10 mt-4">
            <div className="flex flex-col text-center">
              <h2 className="text-3xl font-bold text-primary">500+</h2>
              <p>Animals</p>
            </div>
            <div className="flex flex-col text-center">
              <h2 className="text-3xl font-bold text-pink-600 ">1000+</h2>
              <p>Happy Customer</p>
            </div>
            <div className="flex flex-col text-center">
              <h2 className="text-3xl font-bold text-blue-400 ">50+</h2>
              <p>Seller</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionPage;
