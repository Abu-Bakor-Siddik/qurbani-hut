'use client';

import { useState } from 'react';
import AnimalCard from '@/components/shared/AnimalCard';
import animal from '@/data/animal.json';

const AllAnimalPage = () => {
const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const categories = [
    'All',
    ...new Set(animal.map((a) => a.category)),
  ];

  let filteredAnimals =
    selectedCategory === 'All'
      ? [...animal]
      : animal.filter(
          (a) => a.category === selectedCategory
        );

  if (sortBy === 'low-high') {
    filteredAnimals.sort((a, b) => a.price - b.price);
  }

  if (sortBy === 'high-low') {
    filteredAnimals.sort((a, b) => b.price - a.price);
  }

   

  return (
    <div className="min-h-screen  py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            All <span className="text-primary">Animals</span>
          </h1>

          <p className="text-lg opacity-70">
            Browse our complete collection of Qurbani livestock
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">

          <select
            className="select select-bordered"
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>

          <select
            className="select select-bordered"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >
            <option value="default">
              Sort By Price
            </option>
            <option value="low-high">
              Low to High
            </option>
            <option value="high-low">
              High to Low
            </option>
          </select>
        </div>

        <p className="text-sm opacity-60 mb-6 text-center">
          Showing {filteredAnimals.length} animals
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
            />
          ))}
        </div>
      </div>
    </div>
    );
};

export default AllAnimalPage;