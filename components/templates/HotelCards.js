"use client";

import Image from "next/image";
import hotelCollection from "../../utility/hotel-data";
import { canReserveRoom } from "@/utility/bookingHelpers";
import Link from "next/link";
import { slugify } from "@/utility/slugify";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { parseDate } from "@/utility/dateHelpers";
import { differenceInCalendarDays } from "date-fns";

function HotelCards() {
  const search = useSelector((state) => state.search.searchTerm);
  const dateBooking = useSelector((state) => state.date);
  const guest = useSelector((state) => state.guests);
  const inDate = parseDate(dateBooking?.checkIn);
  const outDate = parseDate(dateBooking?.checkOut);

  const nights =
    inDate && outDate ? differenceInCalendarDays(outDate, inDate) : null;

  const booking = useMemo(
    () => ({
      nights,
      adults: guest.adults,
      kids: guest.kids,
    }),
    [nights, guest.adults, guest.kids],
  );

  const filteredHotels = useMemo(() => {
    return hotelCollection.filter((hotel) => {
      // Search filtering
      const searchedTerm = search.trim().toLowerCase();
      if (
        search &&
        !hotel.name.toLowerCase().includes(searchedTerm) &&
        !hotel.city.toLowerCase().includes(searchedTerm)
      ) {
        return false;
      }

      // filters based on the Duration and Guests
      return canReserveRoom(booking, hotel).ok;
    });
  }, [search, booking]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col gap-6">
        <div className="font-bold text-lg">
          <h2>Select a room</h2>
          {nights > 0 && (
            <span className="ml-2 font-medium text-gray-700">
              · {nights} night{nights > 1 ? "s" : ""}
            </span>
          )}
        </div>

        {filteredHotels.map((hotel) => (
          <section
            key={hotel.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col sm:flex-row"
          >
            {/* Image + Rate */}
            <div className="relative w-full sm:w-64 h-52 sm:h-auto shrink-0">
              <Image
                src={hotel.image[0]}
                alt={hotel.name}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                {hotel.rate}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 capitalize mb-1">
                  {hotel.name}
                </h4>
                <p className="text-sm text-gray-500 mb-3">{hotel.address}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {hotel.aboutUs.slice(0, 80)}...
                </p>
              </div>

              <div className="flex items-center justify-between gap-4">
                <p className="text-emerald-600 font-bold text-lg">
                  ${hotel.price} night
                </p>

                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors duration-200">
                  <Link href={`/reserve/${slugify(hotel.name)}`}>
                    Book and more details
                  </Link>
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default HotelCards;
