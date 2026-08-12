"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function GetRoomPopup({ room, onClose }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReservation = async () => {
    if (!room || loading) return;

    setLoading(true);
    setError("");

    try {
      const reservationData = {
        roomId: room.id,
        roomName: room.name,
        address: room.address,
        price: Number(room.price),
        status: "confirmed",
      };

      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const data = await response.json();

      if (!response.ok) {

        console.log("API ERROR:", data);

        throw new Error(
          data.message || "Failed to create reservation."
        );
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Reservation error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!room) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Confirm Reservation
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Review the room information before confirming your reservation.
          </p>
        </div>

        {/* Room Information */}
        <div className="px-5 py-6 sm:px-6">
          <div className="space-y-5 rounded-2xl border border-gray-100 bg-gray-50 p-5">
            {/* Room */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Room
              </p>

              <p className="mt-1 text-lg font-semibold capitalize text-gray-900">
                {room.name}
              </p>
            </div>

            {/* Location */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Location
              </p>

              <p className="mt-1 text-sm text-gray-700">
                {room.address}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <span className="text-sm text-gray-500">
                Price
              </span>

              <span className="text-xl font-bold text-emerald-600">
                ${Number(room.price)}
                <span className="ml-1 text-sm font-medium text-gray-500">
                  / night
                </span>
              </span>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Reservation Status
              </span>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Ready to confirm
              </span>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm font-medium text-red-600">
                {error}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="w-full rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleReservation}
            disabled={loading}
            className="w-full rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {loading ? "Reserving..." : "Confirm Reservation"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetRoomPopup;