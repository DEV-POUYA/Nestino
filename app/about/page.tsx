export default function AboutUs() {
  return (
    <>
      <div className="hero min-h-screen flex items-center justify-center bg-[#f5f5f7] px-6 text-[#1d1d1f] sm:px-10 lg:px-16">
        <div className="hero-content flex w-full max-w-6xl flex-col gap-12 lg:flex-row-reverse lg:gap-20">
          {/* About */}
          <div className="text-center lg:flex-1 lg:text-left">
            <div className="mb-5">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[rgb(0,212,146)]">
                About Nestino
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              A simpler way to
              <span className="block text-[#6b6b6b]">
                experience your stay.
              </span>
            </h1>

            <p className="max-w-2xl py-6 text-base leading-7 text-[#6b6b6b] sm:text-lg sm:leading-8">
              Nestino is designed to make hotel booking simple, comfortable, and
              effortless. We focus on creating a clean experience that helps you
              discover your stay and reserve a room without unnecessary
              complexity.
            </p>

            <div className="mt-4 border-t border-[#dedede] pt-6">
              <p className="text-sm text-[#8a8a8a]">Designed & developed by</p>

              <p className="mt-2 text-lg font-semibold tracking-tight">
                Pouya Yamouti
              </p>
            </div>
          </div>

          {/* UI Form */}
          <div className="card w-full max-w-sm shrink-0 border border-[#e2e2e2] bg-white shadow-none lg:flex-1">
            <div className="card-body p-7 sm:p-8">
              <fieldset className="fieldset">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999]">
                    Stay connected
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Welcome to Nestino
                  </h2>
                </div>

                <label className="label text-sm font-medium text-[#444444]">
                  Email
                </label>

                <input
                  type="email"
                  className="input w-full border-[#dedede] bg-white transition-colors focus:border-[rgb(0,212,146)] focus:outline-none"
                  placeholder="Email"
                />

                <label className="label mt-3 text-sm font-medium text-[#444444]">
                  Password
                </label>

                <input
                  type="password"
                  className="input w-full border-[#dedede] bg-white transition-colors focus:border-[rgb(0,212,146)] focus:outline-none"
                  placeholder="Password"
                />

                <div className="mt-2">
                  <a className="link link-hover text-sm text-[#6b6b6b] hover:text-[rgb(0,212,146)]">
                    Forgot password?
                  </a>
                </div>

                <button className="btn mt-5 w-full rounded-full border-none bg-[rgb(0,212,146)] text-white shadow-none transition-transform duration-200 hover:bg-[rgb(0,190,132)] hover:-translate-y-0.5">
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
