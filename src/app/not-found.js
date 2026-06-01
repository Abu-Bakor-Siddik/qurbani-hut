import Link from "next/link";
import Image from "next/image";
import cow from "@/assets/Logo.png";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center space-y-6">

        <Image src={cow} alt="logo" height={80} width={80} className="mx-auto opacity-80" />

        <div>
          <h1 className="text-9xl font-extrabold text-primary">404</h1>
          <p className="text-2xl font-bold mt-2">Page Not Found</p>
          <p className="text-base-content/60 mt-2">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <Link href="/" className="btn btn-primary btn-wide">
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;