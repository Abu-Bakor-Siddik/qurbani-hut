import Link from "next/link";
import React from "react";
import animal from '@/data/animal.json'
import { FiArrowRight } from "react-icons/fi";
import AnimalCard from "../shared/AnimalCard";

const FeatureAnimalPage = () => {
      const featured = animal.slice(0,4)
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Animals</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Hand-picked premium livestock for your Qurbani. All animals are healthy, vaccinated, and well-maintained.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/all-animal" className="btn btn-primary btn-lg gap-2">
            View All Animals <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureAnimalPage;
