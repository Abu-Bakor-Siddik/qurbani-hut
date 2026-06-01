"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "animate.css";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({ name: user.name, image: user.image || "" });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile Updated!");
    window.location.href = "/my-profile"; 
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-lg mx-auto">
        <div className="card bg-base-100 shadow-xl animate__animated animate__fadeInDown">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-6">
              Update Profile
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <fieldset>
                <legend className="font-bold mb-1">Your Name</legend>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className={`input input-bordered w-full ${
                    errors.name ? "input-error" : ""
                  }`}
                  {...register("name", {
                    required: "*Name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-error text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </fieldset>

              <fieldset>
                <legend className="font-bold mb-1">Profile Image URL</legend>
                <input
                  type="text"
                  placeholder="Paste your Image URL"
                  className={`input input-bordered w-full ${
                    errors.image ? "input-error" : ""
                  }`}
                  {...register("image", {
                    required: "*Image URL is required",
                  })}
                />
                {errors.image && (
                  <p className="text-error text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </fieldset>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  "Update Information"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
