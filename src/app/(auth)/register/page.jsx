"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";
import cow from "@/assets/Logo.png";
import { CiImageOn } from "react-icons/ci";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
  if (data.password !== data.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  const { data: res, error } = await authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
    image: data.image,
  });

  if (error) {
    toast.error(error.message);
    return;
  }

  if (res) {
    toast.success("Registration Successful!");
    router.push("/login");
  }
};

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-2xl">
      <div className="card-body">
        <div className="flex flex-col items-center text-center mb-6">
          <Image src={cow} alt="logo" height={100} width={100} />
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-sm opacity-60">Register your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <fieldset className="relative">
              <legend className="font-bold">Full Name</legend>

              <input
                type="text"
                placeholder="Enter your name"
                className={`input input-bordered w-full pl-10 ${
                  errors.name ? "input-error" : ""
                }`}
                {...register("name", {
                  required: "*Name is required",
                })}
              />

              <FiUser
                className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                size={18}
              />
            </fieldset>

            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <fieldset className="relative">
              <legend className="font-bold">Email</legend>

              <input
                type="email"
                placeholder="Enter your email"
                className={`input input-bordered w-full pl-10 ${
                  errors.email ? "input-error" : ""
                }`}
                {...register("email", {
                  required: "*Email is required",
                })}
              />

              <FiMail
                className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                size={18}
              />
            </fieldset>

            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <fieldset className="relative">
              <legend className="font-bold">Profile Image URL</legend>

              <input
                type="text"
                placeholder="Enter your Image URL"
                className={`input input-bordered w-full pl-10 ${
                  errors.image ? "input-error" : ""
                }`}
                {...register("image", {
                  required: "*Image URL is required",
                })}
              />
              <CiImageOn
                className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                size={18}
              />
            </fieldset>

            {errors.image && (
              <p className="text-error text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          <div>
            <fieldset className="relative">
              <legend className="font-bold">Password</legend>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className={`input input-bordered w-full pl-10 pr-10 ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", {
                  required: "*Password is required",
                  minLength: {
                    value: 6,
                    message: "*Password must be at least 6 characters",
                  },
                })}
              />

              <FiLock
                className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                size={18}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </fieldset>

            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <fieldset className="relative">
            <legend className="font-bold">Confirm Password</legend>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              className={`input input-bordered w-full pl-10 pr-10 ${
                errors.confirmPassword ? "input-error" : ""
              }`}
              {...register("confirmPassword", {
                required: "*Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "*Passwords do not match",
              })}
            />

            <FiLock
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
              size={18}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </fieldset>

          <button type="submit" className="btn btn-primary w-full">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
