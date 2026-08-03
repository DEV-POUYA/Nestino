"use client";
import { setSearch } from "@/redux/features/searchSlice";
import { setBookingDates } from "@/redux/features/dateSlice";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { validateBookingDate } from "@/utility/dateHelpers";

function FeaturesBox() {
  const [searchForm, setSearchForm] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: {
      adults: 1,
      kids: 0,
    },
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setSearchForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const guestsHandler = (e) => {
    const { name, value } = e.target;

    setSearchForm((prev) => ({
      ...prev,

      guests: {
        ...prev.guests,
        [name]: Number(value),
      },
    }));
  };

  // date Validation
  validateBookingDate(searchForm.checkIn , searchForm.checkOut)

  const searchHandler = () => {
    dispatch(setSearch(searchForm.location));
    dispatch(setBookingDates(searchForm.checkIn, searchForm.checkOut));
  };

  return (
    <div>
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
                name="location"
                value={searchForm.location}
                onChange={changeHandler}
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
                name="checkIn"
                value={searchForm.checkIn}
                onChange={changeHandler}
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
                name="checkOut"
                value={searchForm.checkOut}
                onChange={changeHandler}
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
                  {!searchForm.guests
                    ? "Specify Status"
                    : `${searchForm.guests.adults} Adults,
                        ${searchForm.guests.kids} Kids`}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 text-gray-400"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-xl bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="p-4 space-y-5">
                    {/* Adults */}
                    <MenuItem as="div" className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          {searchForm.guests.adults} Adults,
                        </span>
                        <span className="text-sm font-semibold text-[#05B278]">
                          {searchForm.guests.adults}
                        </span>
                      </div>
                      <input
                        type="range"
                        name="adults"
                        value={searchForm.guests.adults}
                        onChange={guestsHandler}
                        min="1"
                        max="4"
                        className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#05B278]"
                      />
                    </MenuItem>

                    {/* Kids */}
                    <MenuItem as="div" className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          {searchForm.guests.kids} Kids
                        </span>
                        <span className="text-sm font-semibold text-[#05B278]">
                          {searchForm.guests.kids}
                        </span>
                      </div>
                      <input
                        type="range"
                        name="kids"
                        value={searchForm.guests.kids}
                        onChange={guestsHandler}
                        min="0"
                        max="3"
                        className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#05B278]"
                      />
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={searchHandler}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-2.5 rounded-lg text-sm transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesBox;
