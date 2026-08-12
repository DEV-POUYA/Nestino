import connectDB from "../../lib/db";
import Reservation from "../../models/Reservation";

async function Panel() {
  await connectDB();

  const reserveItems = await Reservation.find().lean();

  return (
    <main className="min-h-screen bg-gray-50 mt-20 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Dashboard Header */}
        <header className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Welcome to your dashboard
          </h1>

          <p className="mt-2 max-w-xl text-sm text-gray-500 sm:text-base">
            Manage your current hotel reservations.
          </p>
        </header>

        {/* Reservations Section */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Your Current Reservations
            </h2>
          </div>

          {reserveItems.length === 0 ? (
            <div
              className="
              flex
              min-h-60
              items-center
              justify-center
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            "
            >
              <p className="text-center text-sm text-gray-500 sm:text-base">
                You don't have any reservations yet.
              </p>
            </div>
          ) : (
            <div
              className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              xl:grid-cols-3
            "
            >
              {reserveItems.map((reserve) => (
                <article
                  key={reserve._id.toString()}
                  className="
                    group
                    flex
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-100
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  {/* Card Header */}
                  <div
                    className="
                    bg-linear-to-br
                    from-emerald-50
                    to-white
                    px-5
                    py-6
                    sm:px-6
                  "
                  >
                    <p
                      className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-widest
                      text-gray-400
                    "
                    >
                      Reserved Room
                    </p>

                    <h3
                      className="
                      mt-2
                      text-xl
                      font-bold
                      capitalize
                      text-gray-900
                    "
                    >
                      {reserve.roomName}
                    </h3>
                  </div>

                  {/* Information */}
                  <div
                    className="
                    flex-1
                    space-y-5
                    px-5
                    py-6
                    sm:px-6
                  "
                  >
                    <div>
                      <p
                        className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                      >
                        Location
                      </p>

                      <p
                        className="
                        mt-1
                        text-sm
                        font-medium
                        text-gray-700
                      "
                      >
                        {reserve.address}
                      </p>
                    </div>

                    <div
                      className="
                      flex
                      items-center
                      justify-between
                      border-t
                      border-gray-100
                      pt-4
                    "
                    >
                      <span className="text-sm text-gray-500">Price</span>

                      <span
                        className="
                        text-lg
                        font-bold
                        text-emerald-600
                      "
                      >
                        ${reserve.price}
                        <span
                          className="
                          ml-1
                          text-sm
                          font-medium
                          text-gray-500
                        "
                        >
                          / night
                        </span>
                      </span>
                    </div>

                    <div
                      className="
                      flex
                      items-center
                      justify-between
                    "
                    >
                      <span className="text-sm text-gray-500">Status</span>

                      <span
                        className={`
                          rounded-full
                          px-4
                          py-1.5
                          text-xs
                          font-semibold
                          capitalize

                          ${
                            reserve.status === "confirmed"
                              ? "bg-emerald-100 text-emerald-700"
                              : reserve.status === "cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                          }
                        `}
                      >
                        {reserve.status}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="
                    border-t
                    border-gray-100
                    bg-gray-50
                    px-5
                    py-5
                    sm:px-6
                  "
                  >
                    <button
                      type="button"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-red-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-red-600
                        transition
                        duration-200
                        hover:bg-red-50
                        active:scale-[0.98]
                      "
                    >
                      Cancel Reservation
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Panel;
