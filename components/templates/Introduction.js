'use client';

import Image from "next/image";
import Link from "next/link";
import background from "@/assets/hotel/bg.jpg";

function IntroductionPage() {
  return (
    <section className="relative w-full h-screen min-h-550px overflow-hidden ">
      {/* Background Image */}
      <Image
        src={background}
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-8 pb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
          Welcome to Nestino
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-9 leading-relaxed">
          We will provide a perfect reservation for you and we offer the best
          accommodations
        </p>

        <Link
          href="/reserve"
          className="bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 
                     text-white font-semibold px-9 py-3.5 rounded-full text-base sm:text-lg
                     shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
        >
          Make a Reservation
        </Link>
      </div>
    </section>
  );
}

export default IntroductionPage;