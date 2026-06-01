"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import "animate.css";

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-md mx-auto">
        <div className="card bg-base-100 shadow-xl animate__animated animate__fadeInUp">
          <div className="card-body items-center text-center">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                height={100}
                width={100}
                className="w-28 h-28 rounded-full object-cover animate__animated animate__zoomIn"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-primary text-primary-content flex items-center justify-center text-4xl font-bold animate__animated animate__zoomIn">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}

            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>

            <Link href="/update-profile" className="btn btn-primary mt-5">
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
