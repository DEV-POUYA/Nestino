import Image from "next/image";
import bgreserve from "@/assets/reservecover.jpg";
import FeaturesBox from "@/components/templates/FeaturesBox";

function ReservePage() {
  return (
    <>
      <section className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full aspect-3/1 max-h-112">
          <Image
            src={bgreserve}
            alt="reserve-section"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Title Text */}
          <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 sm:px-10 md:px-16">
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight max-w-2xl">
              Find your perfect stay
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed">
              Search and book the best hotel all around the world
            </p>
          </div>
        </div>

        {/* Search and filter boxes */}
        <FeaturesBox />
      </section>
    </>
  );
}

export default ReservePage;
