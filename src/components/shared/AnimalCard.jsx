import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiStar, FiEye } from 'react-icons/fi';

const AnimalCard = ({animal}) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <figure className="relative overflow-hidden h-56">
        <Image
          src={animal.image}
          alt={animal.name}
          height={400}
          width={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="badge badge-primary">{animal.category}</span>
        </div>
      </figure>

      <div className="card-body p-4 text-center md:text-left">
        <h3 className="card-title text-lg justify-center md:justify-start">{animal.name}</h3>

        <div className="flex items-center justify-center md:justify-start gap-2 text-sm opacity-70">
          <FiMapPin size={14} />
          <span>{animal.location}</span>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-1 text-sm">
          <FiStar className="text-yellow-500 fill-yellow-500" size={14} />
          <span className="font-semibold">{animal.rating}</span>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
          <span className="text-xl font-bold text-primary">
            ${animal.price}
          </span>
        </div>

        <div className="card-actions justify-center md:justify-start mt-3">
          <Link
            href={`/animal-details/${animal.id}`}
            className="btn btn-primary btn-sm gap-2">
            <FiEye size={16} />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
