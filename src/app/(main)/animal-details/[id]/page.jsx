"use client";

import { useParams } from "next/navigation";
import animal from "@/data/animal.json";
import { useForm } from "react-hook-form";
import { FiMapPin, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { CiShop, CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";

const AnimalDetailsPage = () => {
  const { id } = useParams();

  const selectedAnimal = animal.find((a) => String(a.id) === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (!selectedAnimal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Animal Not Found</h2>

          <Link href="/all-animal" className="btn btn-primary mt-4">
            Back to Animals
          </Link>
        </div>
      </div>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/all-animal" className="btn btn-ghost mb-6">
          <FiArrowLeft />
          Back
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-base-100 rounded-xl shadow">
            <Image
              src={selectedAnimal.image}
              alt={selectedAnimal.name}
              width={600}
              height={500}
              className="w-full h-100 object-cover rounded-xl"
            />
          </div>

          <div>
            <span className="badge badge-primary mb-3">
              {selectedAnimal.category}
            </span>

            <h1 className="text-4xl font-bold mb-3">{selectedAnimal.name}</h1>

            <p className="mb-3">Breed: {selectedAnimal.breed}</p>

            <div className="flex items-center gap-2 mb-4">
              <FiMapPin />
              {selectedAnimal.location}
            </div>

            <p className="leading-relaxed">{selectedAnimal.description}</p>

            <div className="mt-6">
              <h3 className="font-bold mb-3">Features</h3>

              <div className="flex flex-wrap gap-2">
                {selectedAnimal.features?.map((feature) => (
                  <span key={feature} className="badge badge-outline">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="mt-4 flex items-center gap-2">
              <CiShop />
              Seller: <span className="font-bold">{selectedAnimal.seller}</span>
            </h2>
          </div>
        </div>

        <div className="mt-10 bg-base-100 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CiShoppingCart /> Book This Animal
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <fieldset>
              <legend>Name</legend>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-full"
                {...register("name", {
                  required: "*Name is required",
                })}
              />
              {errors.name && (
                <p className="text-error text-sm mt-1">{errors.name.message}</p>
              )}
            </fieldset>
            <fieldset>
              <legend>Email</legend>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: "*Email is required",
                })}
              />
              {errors.name && (
                <p className="text-error text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </fieldset>

            <fieldset>
              <legend>Phone Number</legend>
              <input
                type="text"
                placeholder="Enter your Phone Number"
                className="input input-bordered w-full"
                {...register("phone", {
                  required: "*Phone Number is required",
                })}
              />
              {errors.name && (
                <p className="text-error text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </fieldset>

            <fieldset>
              <legend>Address</legend>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered w-full"
                {...register("address", { required: "*Address is required" })}
              />
              {errors.address && (
                <p className="text-error text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </fieldset>

            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
