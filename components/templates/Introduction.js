"use client";

import React from "react";
import Link from "next/link";

const Introduction = () => {
  return (
    <section className="relative min-h-full w-full overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pattern-background absolute inset-[-145%] -rotate-45" />
      </div>

      <div className="relative z-10 flex min-h-[700px] w-full items-center justify-center px-8 py-8 text-center max-md:min-h-[600px] max-md:px-6 max-sm:min-h-[550px] max-sm:px-5 max-[360px]:min-h-[520px] max-[360px]:px-4">
        <div className="relative flex w-full max-w-[900px] flex-col items-center justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[min(800px,100vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.52)_40%,rgba(0,0,0,0.2)_65%,transparent_80%)] max-md:h-[550px] max-md:w-[650px] max-sm:h-[500px] max-sm:w-[500px]" />

          <span className="mb-4 text-[clamp(0.65rem,1vw,0.75rem)] font-semibold uppercase tracking-[0.3em] text-white/65 max-sm:mb-3 max-sm:text-[0.6rem] max-sm:tracking-[0.25em]">
            NESTINO
          </span>

          <h1 className="m-0 w-full max-w-[750px] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white max-md:max-w-[600px] max-md:text-[clamp(2.4rem,9vw,4rem)] max-sm:max-w-full max-sm:text-[clamp(2.2rem,12vw,3.2rem)] max-sm:leading-[1.08] max-sm:tracking-[-0.035em] max-[360px]:text-[2.1rem]">
            Nestino the best booking system
          </h1>

          <p className="mx-auto mt-6 w-full max-w-[600px] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-white/72 max-md:mt-5 max-md:max-w-[520px] max-md:text-base max-md:leading-[1.65] max-sm:mt-5 max-sm:max-w-full max-sm:text-[0.95rem] max-sm:leading-[1.6] max-[360px]:text-[0.9rem]">
            Reserve a room in seconds and manage your account with ease. We will
            try to provide an enjoyable experience throughout your stay.
          </p>

          <Link
            href="/reserve"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-white px-[1.6rem] py-[0.9rem] text-[0.9rem] font-semibold text-black no-underline transition-[transform,background] duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-[#eeeeee] max-md:mt-7 max-sm:mt-6 max-sm:w-full max-sm:max-w-[220px] max-sm:px-[1.4rem] max-sm:py-[0.85rem] max-sm:text-[0.85rem] max-[360px]:max-w-[200px]"
          >
            Make a Reservation
          </Link>
        </div>
      </div>

      <style jsx>{`
        .pattern-background {
          background: #000000;

          background-image:
            radial-gradient(
              4px 100px at 0px 235px,
              rgb(255, 140, 17),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 235px,
              rgb(255, 119, 0),
              #884e2800
            ),
            radial-gradient(
              1.5px 1.5px at 150px 117.5px,
              rgb(255, 144, 9) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 252px,
              rgb(156, 14, 137),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 252px,
              rgb(23, 41, 206),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 126px,
              rgb(247, 102, 18) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 150px,
              rgb(249, 121, 16),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 150px,
              rgb(255, 128, 18),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 75px,
              rgb(255, 116, 10) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 253px,
              rgb(249, 137, 17),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 253px,
              rgb(248, 107, 14),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 126.5px,
              rgb(252, 129, 14) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 204px,
              rgb(234, 115, 18),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 204px,
              rgb(255, 139, 6),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 102px,
              rgb(255, 128, 9) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 134px,
              rgb(249, 133, 9),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 134px,
              rgb(251, 125, 15),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 67px,
              rgb(255, 146, 13) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 179px,
              rgb(249, 137, 17),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 179px,
              rgb(253, 122, 6),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 89.5px,
              rgb(234, 132, 7) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 299px,
              rgb(255, 115, 0),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 299px,
              rgb(255, 136, 0),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 149.5px,
              rgb(255, 123, 0) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 215px,
              rgb(255, 145, 0),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 215px,
              rgb(255, 132, 0),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 107.5px,
              rgb(255, 136, 0) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 281px,
              rgb(255, 170, 0),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 281px,
              rgb(255, 115, 0),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 140.5px,
              rgb(255, 119, 0) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 158px,
              rgb(255, 123, 0),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 158px,
              rgb(255, 132, 0),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 79px,
              rgb(255, 149, 0) 100%,
              #0000 150%
            ),
            radial-gradient(
              4px 100px at 0px 210px,
              rgb(255, 123, 0),
              #0000
            ),
            radial-gradient(
              4px 100px at 300px 210px,
              rgb(255, 162, 0),
              #0000
            ),
            radial-gradient(
              1.5px 1.5px at 150px 105px,
              rgb(255, 136, 0) 100%,
              #0000 150%
            );

          background-size:
            300px 235px,
            300px 235px,
            300px 235px,
            300px 252px,
            300px 252px,
            300px 252px,
            300px 150px,
            300px 150px,
            300px 150px,
            300px 253px,
            300px 253px,
            300px 253px,
            300px 204px,
            300px 204px,
            300px 204px,
            300px 134px,
            300px 134px,
            300px 134px,
            300px 179px,
            300px 179px,
            300px 179px,
            300px 299px,
            300px 299px,
            300px 299px,
            300px 215px,
            300px 215px,
            300px 215px,
            300px 281px,
            300px 281px,
            300px 281px,
            300px 158px,
            300px 158px,
            300px 158px,
            300px 210px,
            300px 210px,
            300px 210px;

          animation: hi 150s linear infinite;
        }

        @keyframes hi {
          0% {
            background-position:
              0px 220px,
              3px 220px,
              151.5px 337.5px,
              25px 24px,
              28px 24px,
              176.5px 150px,
              50px 16px,
              53px 16px,
              201.5px 91px,
              75px 224px,
              78px 224px,
              226.5px 350.5px,
              100px 19px,
              103px 19px,
              251.5px 121px,
              125px 120px,
              128px 120px,
              276.5px 187px,
              150px 31px,
              153px 31px,
              301.5px 120.5px,
              175px 235px,
              178px 235px,
              326.5px 384.5px,
              200px 121px,
              203px 121px,
              351.5px 228.5px,
              225px 224px,
              228px 224px,
              376.5px 364.5px,
              250px 26px,
              253px 26px,
              401.5px 105px,
              275px 75px,
              278px 75px,
              426.5px 180px;
          }

          to {
            background-position:
              0px 6800px,
              3px 6800px,
              151.5px 6917.5px,
              25px 13632px,
              28px 13632px,
              176.5px 13758px,
              50px 5416px,
              53px 5416px,
              201.5px 5491px,
              75px 17175px,
              78px 17175px,
              226.5px 17301.5px,
              100px 5119px,
              103px 5119px,
              251.5px 5221px,
              125px 8428px,
              128px 8428px,
              276.5px 8495px,
              150px 9876px,
              153px 9876px,
              301.5px 9965.5px,
              175px 13391px,
              178px 13391px,
              326.5px 13540.5px,
              200px 14741px,
              203px 14741px,
              351.5px 14848.5px,
              225px 18770px,
              228px 18770px,
              376.5px 18910.5px,
              250px 5082px,
              253px 5082px,
              401.5px 5161px,
              275px 6375px,
              278px 6375px,
              426.5px 6480px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pattern-background {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Introduction;