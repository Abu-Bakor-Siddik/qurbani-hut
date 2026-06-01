"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FiMail, FiLock } from "react-icons/fi";
import { toast } from "react-toastify";
import cow from "@/assets/Logo.png";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (res) {
      toast.success("Login Successful!");
      reset();
      router.push("/");
    }
  };

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-2xl">
      <div className="card-body">
        <div className="flex flex-col items-center text-center mb-6">
          <Image src={cow} alt="logo" height={100} width={100}></Image>
          <h2 className="text-2xl font-bold">Welcome Back!</h2>
          <p className="text-sm opacity-60">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <fieldset className="relative ">
              <legend className="font-bold mb-1">Your Email</legend>
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
              <legend className="font-bold mb-1">Your Password</legend>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`input input-bordered w-full pl-10 pr-10 ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", {
                  required: "*Password is required",
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

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-red-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
