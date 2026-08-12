'use client';

import Image from "next/image";
import Link from "next/link";
import background from "@/assets/traveling.png";

function IntroductionPage() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 lg:mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
          
          {/* Image - smaller on mobile */}
          <div className="relative w-full max-w-xs shrink-0 sm:max-w-sm md:max-w-none md:w-1/2">
            <div className="relative aspect-square overflow-hidden ">
              <Image
                src={background}
                alt="Travel and booking illustration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 50vw"
                priority
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-4xl">
              Nestino the best booking system
            </h1>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:mt-4 sm:max-w-lg sm:text-base lg:text-lg">
              Reserve a room in seconds and manage your account with ease. we will try to provide a enjoyable experience
            </p>

            <Link
              href="/reserve"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95 sm:mt-8 sm:px-8 sm:py-3.5 sm:text-base lg:text-lg"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionPage;