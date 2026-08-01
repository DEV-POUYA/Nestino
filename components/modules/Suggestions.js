// components/SimpleFormCard.js
import { useState } from 'react';

export default function SimpleFormCard() {
  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div className="w-80 rounded-2xl border border-emerald-800 bg-emerald-500">
      <div className="flex flex-col gap-2 p-8">
        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100"
        />

        {/* Accept terms toggle */}
        <label className="flex cursor-pointer items-center justify-between p-1">
          Accept terms of use
          <div className="relative inline-block">
            <input
              type="checkbox"
              checked={terms}
              onChange={() => setTerms(!terms)}
              className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            />
            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900" />
          </div>
        </label>

        {/* Submit to newsletter toggle */}
        <label className="flex cursor-pointer items-center justify-between p-1">
          Submit to newsletter
          <div className="relative inline-block">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
              className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            />
            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900" />
          </div>
        </label>

        {/* Save button */}
        <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
          Save
        </button>
      </div>
    </div>
  );
}