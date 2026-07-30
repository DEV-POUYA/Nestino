import Image from "next/image";
// import bgreserve from "@/assets/bgreserve.jpg";
import bgreserve from "@/assets/reservecover.jpg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

        {/* Search and filter boxes - sits on the edge of the image */}
        <section className="relative z-20 -mt-16 sm:-mt-20 px-4 pb-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end gap-4 bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
              {/* Location */}
              <div className="flex flex-col gap-1.5 min-w-45 flex-1">
                <label
                  htmlFor="location"
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wide"
                >
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where do you want to travel"
                  id="location"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Check-in */}
              <div className="flex flex-col gap-1.5 min-w-35">
                <label
                  htmlFor="checkIn"
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wide"
                >
                  Check-in
                </label>
                <input
                  type="date"
                  id="checkIn"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Check-out */}
              <div className="flex flex-col gap-1.5 min-w-35">
                <label
                  htmlFor="checkOut"
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wide"
                >
                  Check-out
                </label>
                <input
                  type="date"
                  id="checkOut"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Options Menu */}
              <div className="flex flex-col gap-1.5 min-w-37.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Guests & Rooms
                </label>
                <Menu as="div" className="relative inline-block w-full">
                  <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-gray-800 border border-gray-200 shadow-sm hover:bg-gray-50">
                    Specify Status
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 text-gray-400"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          Account settings
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-cyan-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          Support
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          License
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-2.5 rounded-lg text-sm transition-colors duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default ReservePage;