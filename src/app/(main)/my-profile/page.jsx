import Image from "next/image";
import Link from "next/link";


const MyProfilePage = () => {
 const user = {
    name: "Shuvo",
    email: "shuvo@gmail.com",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-md mx-auto">

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">

            <Image
              src={user.image}
              alt={user.name}
              height={100}
              width={100}
              className="w-28 h-28 rounded-full object-cover"
            />

            <h2 className="text-2xl font-bold mt-4">
              {user.name}
            </h2>

            <p className="text-gray-500">
              {user.email}
            </p>

            <Link
              href="/update-profile"
              className="btn btn-primary mt-5"
            >
              Update Information
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MyProfilePage;
