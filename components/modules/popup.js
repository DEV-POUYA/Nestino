"use client";

import { useRouter } from "next/navigation";

function GetRoomPopup({ room, onClose }) {
  const router = useRouter();

  const handleReservation = async () => {
    try {
      const reservationData = {
        roomId: room.id,
        roomName: room.name,
        price: room.price,
        address: room.address,
        guests: {
          adults: room.guest?.adults ?? 1,
          kids: room.guest?.kids ?? 0,
        },
        duration: room.duration,
      };

      const res = await fetch("/api/reservations", {
        method: "POST",
        body: JSON.stringify(reservationData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data.message);
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div
        className="
          w-full 
          max-w-md
          rounded-3xl
          bg-white
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900">
            Confirm Reservation
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Review your room details before confirming your reservation.
          </p>
        </div>

        {/* Room Details */}
        <div className="px-5 py-6 sm:px-6">
          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 space-y-5">
            {/* Room Name */}
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Room
              </p>

              <p className="font-semibold text-gray-900 text-lg capitalize">
                {room.name}
              </p>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Location
              </p>

              <p className="text-gray-700 wrap-break-words">{room.address}</p>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-200">
              <span className="text-gray-500">Price</span>

              <p className="text-xl font-bold text-emerald-600">
                ${room.price}
                <span className="ml-1 text-sm font-medium text-gray-500">
                  / night
                </span>
              </p>
            </div>

            {/* Capacity */}
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Capacity</span>

              <p className="font-medium text-gray-900">
                {room.guest?.adults || 0} Adults
                {" • "}
                {room.guest?.kids || 0} Kids
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Maximum Stay</span>

              <p className="font-medium text-gray-900">
                {room.duration} Nights
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            flex-col-reverse
            gap-3
            border-t
            border-gray-100
            bg-gray-50
            px-5
            py-4

            sm:flex-row
            sm:justify-end
            sm:px-6
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-5
              py-3
              text-sm
              font-medium
              text-gray-700
              transition
              hover:bg-gray-100

              sm:w-auto
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleReservation}
            className="
              w-full
              rounded-xl
              bg-emerald-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-md
              transition
              hover:bg-emerald-700

              sm:w-auto
            "
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetRoomPopup;
