"use client";
import { setSearch } from "@/redux/features/searchSlice";
import { setBookingDates } from "@/redux/features/dateSlice";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { validateBookingDate } from "@/utility/dateHelpers";
import { setGuests } from "@/redux/features/guestSlice";

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

  const searchHandler = () => {
    // date validation
    validateBookingDate(searchForm.checkIn, searchForm.checkOut);

    dispatch(setSearch(searchForm.location));
    dispatch(
      setBookingDates({
        checkIn: searchForm.checkIn,
        checkOut: searchForm.checkOut,
      }),
    );
    dispatch(
      setGuests({
        adults: searchForm.guests.adults,
        kids: searchForm.guests.kids,
      }),
    );
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
            <div className="flex flex-col gap-1.5 min-w-37">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Guests & Rooms
              </label>

              <Menu as="div" className="relative w-full">
                <MenuButton className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50">
                  <span>
                    {searchForm.guests.adults}{" "}
                    {searchForm.guests.adults === 1 ? "Adult" : "Adults"}
                    {" • "}
                    {searchForm.guests.kids}{" "}
                    {searchForm.guests.kids === 1 ? "Kid" : "Kids"}
                  </span>

                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-gray-100 bg-white p-4 shadow-lg outline-none transition data-closed:scale-95 data-closed:opacity-0"
                >
                  {/* Adults */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="adults"
                        className="text-sm font-medium text-gray-700"
                      >
                        Adults
                      </label>

                      <span className="text-sm font-semibold text-emerald-600">
                        {searchForm.guests.adults}
                      </span>
                    </div>

                    <input
                      id="adults"
                      type="range"
                      name="adults"
                      min="1"
                      max="4"
                      value={searchForm.guests.adults}
                      onChange={guestsHandler}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-emerald-500"
                    />
                  </div>

                  <div className="my-5 border-t border-gray-100" />

                  {/* Kids */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="kids"
                        className="text-sm font-medium text-gray-700"
                      >
                        Kids
                      </label>

                      <span className="text-sm font-semibold text-emerald-600">
                        {searchForm.guests.kids}
                      </span>
                    </div>

                    <input
                      id="kids"
                      type="range"
                      name="kids"
                      min="0"
                      max="3"
                      value={searchForm.guests.kids}
                      onChange={guestsHandler}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-emerald-500"
                    />
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
