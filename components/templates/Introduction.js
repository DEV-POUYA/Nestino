"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="content">
          <span className="eyebrow">NESTINO</span>

          <h1>Nestino the best booking system</h1>

          <p>
            Reserve a room in seconds and manage your account with ease. We will
            try to provide an enjoyable experience throughout your stay.
          </p>

          <Link href="/reserve" className="cta">
            Make a Reservation
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 700px;
  overflow: hidden;
  background: #000000;

  .container {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .container::before {
    content: "";
    position: absolute;
    inset: -145%;
    rotate: -45deg;

    background: #000000;

    background-image:
      radial-gradient(4px 100px at 0px 235px, rgb(255, 140, 17), #0000),
      radial-gradient(4px 100px at 300px 235px, rgb(255, 119, 0), #884e2800),
      radial-gradient(
        1.5px 1.5px at 150px 117.5px,
        rgb(255, 144, 9) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 252px, rgb(156, 14, 137), #0000),
      radial-gradient(4px 100px at 300px 252px, rgb(23, 41, 206), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 126px,
        rgb(247, 102, 18) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 150px, rgb(249, 121, 16), #0000),
      radial-gradient(4px 100px at 300px 150px, rgb(255, 128, 18), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 75px,
        rgb(255, 116, 10) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 253px, rgb(249, 137, 17), #0000),
      radial-gradient(4px 100px at 300px 253px, rgb(248, 107, 14), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 126.5px,
        rgb(252, 129, 14) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 204px, rgb(234, 115, 18), #0000),
      radial-gradient(4px 100px at 300px 204px, rgb(255, 139, 6), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 102px,
        rgb(255, 128, 9) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 134px, rgb(249, 133, 9), #0000),
      radial-gradient(4px 100px at 300px 134px, rgb(251, 125, 15), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 67px,
        rgb(255, 146, 13) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 179px, rgb(249, 137, 17), #0000),
      radial-gradient(4px 100px at 300px 179px, rgb(253, 122, 6), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 89.5px,
        rgb(234, 132, 7) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 299px, rgb(255, 115, 0), #0000),
      radial-gradient(4px 100px at 300px 299px, rgb(255, 136, 0), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 149.5px,
        rgb(255, 123, 0) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 215px, rgb(255, 145, 0), #0000),
      radial-gradient(4px 100px at 300px 215px, rgb(255, 132, 0), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 107.5px,
        rgb(255, 136, 0) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 281px, rgb(255, 170, 0), #0000),
      radial-gradient(4px 100px at 300px 281px, rgb(255, 115, 0), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 140.5px,
        rgb(255, 119, 0) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 158px, rgb(255, 123, 0), #0000),
      radial-gradient(4px 100px at 300px 158px, rgb(255, 132, 0), #0000),
      radial-gradient(
        1.5px 1.5px at 150px 79px,
        rgb(255, 149, 0) 100%,
        #0000 150%
      ),
      radial-gradient(4px 100px at 0px 210px, rgb(255, 123, 0), #0000),
      radial-gradient(4px 100px at 300px 210px, rgb(255, 162, 0), #0000),
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

  .content {
    position: relative;
    z-index: 2;

    display: flex;
    min-height: 700px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    text-align: center;
  }

  .content::before {
    content: "";
    position: absolute;
    z-index: -1;

    width: min(800px, 100vw);
    height: 600px;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.78) 0%,
      rgba(0, 0, 0, 0.52) 40%,
      rgba(0, 0, 0, 0.2) 65%,
      transparent 80%
    );

    pointer-events: none;
  }

  .eyebrow {
    margin-bottom: 1rem;

    color: rgba(255, 255, 255, 0.65);

    font-size: clamp(0.65rem, 1vw, 0.75rem);
    font-weight: 600;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  h1 {
    width: 100%;
    max-width: 750px;
    margin: 0;

    color: #ffffff;

    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  p {
    width: 100%;
    max-width: 600px;
    margin: 1.5rem auto 0;

    color: rgba(255, 255, 255, 0.72);

    font-size: clamp(1rem, 1.5vw, 1.2rem);
    line-height: 1.7;
  }

  .cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: fit-content;

    margin: 2rem auto 0;
    padding: 0.9rem 1.6rem;

    border-radius: 999px;

    background: #ffffff;
    color: #000000;

    font-size: 0.9rem;
    font-weight: 600;

    text-decoration: none;

    transition:
      transform 0.25s ease,
      background 0.25s ease;
  }

  .cta:hover {
    transform: translateY(-2px);
    background: #eeeeee;
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

  /* =========================
   Tablet
========================= */

  @media (max-width: 768px) {
    .content {
      min-height: 600px;
      max-width: 650px;

      padding: 2rem 1.5rem;
    }

    .content::before {
      width: 650px;
      height: 550px;
    }

    h1 {
      max-width: 600px;

      font-size: clamp(2.4rem, 9vw, 4rem);
    }

    p {
      max-width: 520px;

      margin-top: 1.25rem;

      font-size: 1rem;
      line-height: 1.65;
    }

    .cta {
      margin-top: 1.75rem;
    }
  }

  /* =========================
   Mobile
========================= */

  @media (max-width: 480px) {
    .content {
      min-height: 550px;

      padding: 1.5rem 1.25rem;
    }

    .content::before {
      width: 500px;
      height: 500px;
    }

    .eyebrow {
      margin-bottom: 0.75rem;

      font-size: 0.6rem;
      letter-spacing: 0.25em;
    }

    h1 {
      max-width: 100%;

      font-size: clamp(2.2rem, 12vw, 3.2rem);
      line-height: 1.08;
      letter-spacing: -0.035em;
    }

    p {
      max-width: 100%;

      margin-top: 1.25rem;

      font-size: 0.95rem;
      line-height: 1.6;
    }

    .cta {
      width: 100%;
      max-width: 220px;

      margin-top: 1.5rem;
      padding: 0.85rem 1.4rem;

      font-size: 0.85rem;
    }
  }

  /* =========================
   Very Small Screens
========================= */

  @media (max-width: 360px) {
    .content {
      min-height: 520px;

      padding: 1.25rem 1rem;
    }

    h1 {
      font-size: 2.1rem;
    }

    p {
      font-size: 0.9rem;
    }

    .cta {
      max-width: 200px;
    }
  }

  /* =========================
   Accessibility
========================= */

  @media (prefers-reduced-motion: reduce) {
    .container::before {
      animation: none;
    }

    .cta {
      transition: none;
    }
  }
`;

export default Pattern;
