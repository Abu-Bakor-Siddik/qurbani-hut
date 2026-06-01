import React from "react";
import animal from "@/data/animal.json";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const TopBreeds = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Top <span className="text-primary">Breeds</span>
        </h2>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Explore our most popular livestock breeds trusted by thousands of
          customers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-30 mb-20">
        {animal
          .filter((a) => a.rating >= 4.5)
          .map((a) => {
            return (
              <>
                <div className="card bg-base-100 shadow-sm">
                  <figure>
                    <Image
                      className="w-full h-70"
                      src={a.image}
                      alt={a.name}
                      height={200}
                      width={200}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{a.name}</h2>
                    <p>{a.breed}</p>
                    <div className="card-actions justify-end">
                      <Link href={'/all-animal'} className="btn btn-ghost">
                        View <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default TopBreeds;
