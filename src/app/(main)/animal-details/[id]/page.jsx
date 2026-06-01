'use client';

import { useParams } from 'next/navigation';
import animal from '@/data/animal.json'
import { useForm } from 'react-hook-form';
import { FiMapPin, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { CiShoppingCart } from 'react-icons/ci';

const AnimalDetailsPage = () => {
  const { id } = useParams();

  const selectedAnimal = animal.find(
    (a) => String(a.id) === id
  );

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  if (!selectedAnimal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Animal Not Found
          </h2>

          <Link
            href="/all-animal"
            className="btn btn-primary mt-4"
          >
            Back to Animals
          </Link>
        </div>
      </div>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
    reset();
  };

    return (
       <div className="min-h-screen bg-base-200 py-10">
      <div className="max-w-6xl mx-auto px-4">

        <Link
          href="/all-animal"
          className="btn btn-ghost mb-6"
        >
          <FiArrowLeft />
          Back
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Image */}
          <div className="bg-base-100 rounded-xl shadow">
            <Image
              src={selectedAnimal.image}
              alt={selectedAnimal.name}
              width={600}
              height={500}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          {/* Details */}
          <div>
            <span className="badge badge-primary mb-3">
              {selectedAnimal.category}
            </span>

            <h1 className="text-4xl font-bold mb-3">
              {selectedAnimal.name}
            </h1>

            <p className="mb-3">
              Breed: {selectedAnimal.breed}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <FiMapPin />
              {selectedAnimal.location}
            </div>

            <p className="leading-relaxed">
              {selectedAnimal.description}
            </p>

            <div className="mt-6">
              <h3 className="font-bold mb-3">
                Features
              </h3>

              <div className="flex flex-wrap gap-2">
                {selectedAnimal.features?.map(
                  (feature) => (
                    <span
                      key={feature}
                      className="badge badge-outline"
                    >
                      {feature}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10 bg-base-100 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <CiShoppingCart />  Book This Animal
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              {...register('name')}
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              {...register('email')}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              {...register('phone')}
            />

            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full"
              rows={5}
              {...register('message')}
            />

            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
    );
};

export default AnimalDetailsPage;