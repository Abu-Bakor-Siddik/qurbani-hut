"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    toast.success("Profile Updated");
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-lg mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-6">
              Update Profile
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <fieldset>
                <legend>Your Name</legend>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: "*Name is required",
                  })}
                />

                {errors.name && (
                  <p className="text-error text-sm">{errors.name.message}</p>
                )}
              </fieldset>

              <fieldset>
                <legend>Your Profile Image</legend>
                <input
                  type="text"
                  placeholder="Paste your Image URL"
                  className="input input-bordered w-full"
                  {...register("image", {
                    required: "*Image URL is required",
                  })}
                />

                {errors.image && (
                  <p className="text-error text-sm">{errors.image.message}</p>
                )}
              </fieldset>

              <button type="submit" className="btn btn-primary w-full">
                Update Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
