"use client";

import Image from "next/image";
import hotelCollection from "../../utility/hotel-data";
import Suggestions from "../modules/Suggestions";
import { useParams } from "next/navigation";
import { slugify } from "@/utility/slugify";
import { useState } from "react";

function DetailedRooms() {
  const [activeTab, setActiveTab] = useState("description");
  const [currentIndex, setCurrentIndex] = useState(0);

  const params = useParams();
  const { slug } = params;

  const specificRoom = hotelCollection.find(
    (hotel) => slugify(hotel.name) === slugify(slug),
  );

  if (!specificRoom) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-xl text-gray-500">Room not found</p>
      </div>
    );
  }

  // Carousel & Slider
  const pickImage = specificRoom.image;
  if (!pickImage || pickImage.length === 0) {
    return (
      <div className="max-w-3xl mx-auto h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
        No Images Available
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? pickImage.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === pickImage.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Parent layout: Left + Right */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* ========== LEFT SIDE ========== */}
        {/* Carousel + Tabs */}
        <section className="w-full lg:w-[80%]">
          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="relative h-64 sm:h-80 md:h-100 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src={pickImage[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover transition-all duration-500 ease-in-out"
                priority={currentIndex === 0}
              />

              {/* Soft gradient */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-lenear-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                         w-11 h-11 rounded-full bg-white/90 hover:bg-white
                         shadow-lg flex items-center justify-center
                         transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                         w-11 h-11 rounded-full bg-white/90 hover:bg-white
                         shadow-lg flex items-center justify-center
                         transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {pickImage.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-white w-7 shadow-sm"
                      : "bg-white/60 w-2.5 hover:bg-white/90"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Description / Features Tabs */}
          <div className="mt-8">
            <p className="mb-6 font-bold text-2xl">Complementary Details</p>

            {/* Tab Buttons */}
            <div className="flex flex-wrap border border-gray-200 rounded-t-xl overflow-hidden bg-gray-50">
              <button
                onClick={() => setActiveTab("description")}
                className={`flex-1 min-w-30 px-4 py-3 text-sm sm:text-base font-medium transition-all duration-200
                ${
                  activeTab === "description"
                    ? "bg-white text-gray-900 border-b-2 border-[#05B278]"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`flex-1 min-w-30 px-4 py-3 text-sm sm:text-base font-medium transition-all duration-200
                ${
                  activeTab === "features"
                    ? "bg-white text-gray-900 border-b-2 border-[#05B278]"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                Features
              </button>
            </div>

            {/* Tab Content */}
            <div className="border border-t-0 border-gray-200 rounded-b-xl bg-white p-5 sm:p-6 shadow-sm">
              {activeTab === "description" && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {specificRoom.aboutUs}
                  </p>
                </div>
              )}

              {activeTab === "features" && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specificRoom.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2.5 text-sm sm:text-base text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#05B278] shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========== RIGHT SIDE ========== */}
        {/* Reserve Card + Suggestions */}
        <section className="w-full lg:w-[20%] flex flex-col items-center gap-8">
          {/* Reserve Card */}
          <div className="relative w-80 h-85 ml-16 rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <div className="relative z-2 w-full h-full flex flex-col justify-between p-6 bg-white/95 backdrop-blur-xl rounded-[10px]">
              {/* Top content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {specificRoom.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">for {specificRoom.duration}</p>

                <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#05B278]"></span>
                  {specificRoom.address}
                </p>

                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  {specificRoom.aboutUs.slice(0, 80)}...
                </p>
              </div>

              {/* Bottom content */}
              <div className="mt-6">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  {specificRoom.price}
                  <span className="text-sm font-medium text-gray-500 ml-1">
                    / night
                  </span>
                </p>

                <button
                  type="button"
                  className="w-full py-3 rounded-xl font-semibold text-white bg-[#05B278] hover:bg-[#049966] transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="w-full">
            <Suggestions />
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailedRooms;
