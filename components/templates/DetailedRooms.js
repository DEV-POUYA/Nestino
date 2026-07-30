"use client";

import Image from "next/image";
import hotelCollection from "../../utility/hotel-data";
import { useParams } from "next/navigation";
import { slugify } from "@/utility/slugify";
import { useState } from "react";

function DetailedRooms() {
  const [activeTab, setActiveTab] = useState("description");

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

  return (
    <>
      {/* carousel and Description and features and reserve */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full max-w-125 mx-auto aspect-square overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={specificRoom.image[1]}
            alt={specificRoom.name}
            height={400}
            width={600}
          />
        </div>
      </section>
      {/* Description Section */}
      <div className="w-full max-w-2xl mx-auto px-4 py-8">
        <p className="mb-8 font-bold text-2xl">Complementory Details</p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap border border-gray-200 rounded-t-xl overflow-hidden bg-gray-50">
          <button
            onClick={() => setActiveTab("description")}
            className={`flex-1 min-w-25 px-4 py-3 text-sm sm:text-base font-medium transition-all duration-200
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
            className={`flex-1 min-w-25 px-4 py-3 text-sm sm:text-base font-medium transition-all duration-200
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
    </>
  );
}

export default DetailedRooms;
