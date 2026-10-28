"use client";

import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const fraunces = { className: "nestino-font-fraunces" };
const inter = { className: "nestino-font-inter" };

const STARS = [
  { x: "11%", y: "14%", size: 3, dur: "2.6s", delay: "0s" },
  { x: "24%", y: "26%", size: 2.5, dur: "3.4s", delay: "-1.1s" },
  { x: "37%", y: "11%", size: 3.5, dur: "4.1s", delay: "-2.3s" },
  { x: "52%", y: "19%", size: 2.5, dur: "2.9s", delay: "-0.7s" },
  { x: "66%", y: "12%", size: 3, dur: "3.8s", delay: "-1.9s" },
  { x: "74%", y: "28%", size: 2.5, dur: "4.2s", delay: "-2.8s" },
  { x: "18%", y: "44%", size: 3, dur: "3.1s", delay: "-1.4s" },
  { x: "88%", y: "38%", size: 3.5, dur: "3.6s", delay: "-0.4s" },
];

const CLOUDS = [
  { top: "14%", w: 420, h: 110, opacity: 0.12, dur: "110s", delay: "-25s" },
  { top: "28%", w: 540, h: 140, opacity: 0.09, dur: "165s", delay: "-95s" },
  { top: "42%", w: 360, h: 95, opacity: 0.14, dur: "80s", delay: "-52s" },
  { top: "20%", w: 480, h: 125, opacity: 0.08, dur: "138s", delay: "-118s" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const heroRef = useRef(null);
  const layerRefs = useRef([null, null, null, null]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const depths = [6, 11, 17, 24];
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    const onPointerMove = (e) => {
      const rect = hero.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.045;
      currentY += (targetY - currentY) * 0.045;

      for (let i = 0; i < depths.length; i++) {
        const el = layerRefs.current[i];
        if (el) {
          const dx = (currentX * depths[i]).toFixed(2);
          const dy = (currentY * depths[i]).toFixed(2);
          el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        }
      }
      rafId = window.requestAnimationFrame(tick);
    };

    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", onPointerLeave, { passive: true });
    rafId = window.requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: prefersReducedMotion ? 0 : i * 0.11,
        ease: EASE,
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      aria-label="Nestino Hero"
      className={`${inter.className} relative min-h-screen w-full top-0 sm: overflow-hidden bg-linear-to-b from-[#040B16] via-[#08162B] to-[#0B1F3A] text-white select-none flex items-center justify-center`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600;1,9..144,700&family=Inter:wght@400;500;600;700&display=swap');

        .nestino-font-fraunces {
          font-family: 'Fraunces', Georgia, serif;
        }
        .nestino-font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes sceneBreath {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.28; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.22); }
        }
        @keyframes moonBreath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes moonHalo {
          0% { transform: scale(0.95); opacity: 0.55; }
          80%, 100% { transform: scale(1.65); opacity: 0; }
        }
        @keyframes routeDash {
          to { stroke-dashoffset: -150; }
        }
        @keyframes planeArcMain {
          0% { transform: translate3d(-12vw, 8vh, 0) rotate(-9deg); opacity: 0; }
          8% { opacity: 1; }
          50% { transform: translate3d(48vw, -5vh, 0) rotate(-2deg); opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translate3d(110vw, -12vh, 0) rotate(5deg); opacity: 0; }
        }
        @keyframes planeArcSecond {
          0% { transform: translate3d(-10vw, 14vh, 0) rotate(-7deg); opacity: 0; }
          10% { opacity: 0.5; }
          50% { transform: translate3d(50vw, 2vh, 0) rotate(-1deg); opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translate3d(110vw, -6vh, 0) rotate(4deg); opacity: 0; }
        }
        @keyframes planeBob {
          0%, 100% { transform: translateY(-5px) rotate(-2.5deg); }
          50% { transform: translateY(5px) rotate(2.5deg); }
        }
        @keyframes meteorShoot {
          0% { transform: translate3d(0, 0, 0) rotate(-28deg); opacity: 0; }
          2% { opacity: 1; }
          12% { transform: translate3d(-420px, 220px, 0) rotate(-28deg); opacity: 0; }
          14%, 100% { transform: translate3d(-420px, 220px, 0) rotate(-28deg); opacity: 0; }
        }
        @keyframes cloudDrift {
          0% { transform: translate3d(-32vw, 0, 0); }
          100% { transform: translate3d(112vw, 0, 0); }
        }
        @keyframes pinBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pinRipple {
          0% { transform: scale(0.4); opacity: 0.55; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        @keyframes windowTwinkle {
          0%, 100% { opacity: 0.95; }
          50% { opacity: 0.3; }
        }
        @keyframes windowSwitch {
          0%, 42%, 100% { opacity: 0.92; }
          45%, 86% { opacity: 0.08; }
        }
        @keyframes chipSway {
          0% { transform: translate3d(0, 0px, 0) rotate(-2deg); }
          35% { transform: translate3d(0, -9px, 0) rotate(2deg); }
          70% { transform: translate3d(0, -13px, 0) rotate(3deg); }
          100% { transform: translate3d(0, 0px, 0) rotate(-2deg); }
        }
        @keyframes ctaRingPulse {
          0%, 100% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.09); opacity: 0.12; }
        }
        @keyframes ctaShine {
          0%, 65% { transform: translateX(-140%) skewX(-20deg); opacity: 0; }
          72% { opacity: 0.65; }
          90%, 100% { transform: translateX(220%) skewX(-20deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nestino-anim,
          .nestino-anim * {
            animation: none !important;
            transition: none !important;
          }
          .nestino-hide-rm {
            display: none !important;
          }
        }
      `}</style>

      {/* Breathing Scene Wrapper */}
      <div
        aria-hidden="true"
        className="nestino-anim pointer-events-none absolute inset-0"
        style={{ animation: "sceneBreath 48s ease-in-out infinite alternate" }}
      >
        {/* LAYER 1 (depth 6): Twinkling stars + Glowing moon */}
        <div
          ref={(el) => {
            layerRefs.current[0] = el;
          }}
          className="absolute inset-0 will-change-transform"
        >
          {STARS.map((s, idx) => (
            <span
              key={idx}
              className="absolute rounded-full bg-[#FFF9E0]"
              style={{
                left: s.x,
                top: s.y,
                width: `${s.size}px`,
                height: `${s.size}px`,
                boxShadow: "0 0 8px rgba(255, 249, 224, 0.8)",
                animation: `starTwinkle ${s.dur} ease-in-out ${s.delay} infinite`,
              }}
            />
          ))}

          {/* Glowing Moon */}
          <div className="absolute right-[11%] top-[10%] h-24 w-24 max-[1100px]:h-20 max-[1100px]:w-20 max-[640px]:h-[60px] max-[640px]:w-[60px]">
            {/* Expanding & Fading Halo Ring (6s) */}
            <div
              className="absolute inset-0 rounded-full border border-[#FDE68A]/50"
              style={{ animation: "moonHalo 6s ease-out infinite" }}
            />
            {/* Breathing Moon Body (7s) */}
            <div
              className="h-full w-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #FFF9E0 0%, #FDE68A 45%, rgba(253,230,138,0) 75%)",
                boxShadow: "0 0 50px 12px rgba(253, 230, 138, 0.22)",
                animation: "moonBreath 7s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* LAYER 2 (depth 11): Dashed flight route, Main Plane, Second Plane, Meteor */}
        <div
          ref={(el) => {
            layerRefs.current[1] = el;
          }}
          className="absolute inset-0 will-change-transform"
        >
          {/* Dashed Flight Route Curve */}
          <svg
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M -60 390 Q 680 120 1500 220"
              stroke="rgba(148,197,255,.35)"
              strokeWidth="2"
              strokeDasharray="1 14"
              strokeLinecap="round"
              style={{ animation: "routeDash 14s linear infinite" }}
            />
          </svg>

          {/* Main Plane (48px, 32px <640px, 22s linear infinite) */}
          <div
            className="nestino-hide-rm absolute left-0 top-[44%] will-change-transform"
            style={{ animation: "planeArcMain 22s linear infinite" }}
          >
            <div
              className="relative flex items-center"
              style={{ animation: "planeBob 3.4s ease-in-out infinite" }}
            >
              {/* Blurred Gradient Contrail */}
              <div
                className="mr-[-6px] h-[3px] w-28 rounded-full blur-[1.5px] max-[640px]:w-16"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.65) 100%)",
                }}
              />
              <svg
                viewBox="0 0 24 24"
                fill="#38BDF8"
                className="h-12 w-12 max-[640px]:h-8 max-[640px]:w-8"
                style={{
                  filter: "drop-shadow(0 0 12px rgba(56, 189, 248, 0.7))",
                }}
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
          </div>

          {/* Second Plane (22px, max opacity .5, 40s duration, mid-flight offset, hidden <640px) */}
          <div
            className="nestino-hide-rm absolute left-0 top-[29%] will-change-transform max-[640px]:hidden"
            style={{ animation: "planeArcSecond 40s linear -20s infinite" }}
          >
            <div
              className="relative flex items-center"
              style={{ animation: "planeBob 3.4s ease-in-out -1.7s infinite" }}
            >
              <div
                className="mr-[-4px] h-[2px] w-16 rounded-full blur-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 100%)",
                }}
              />
              <svg
                viewBox="0 0 24 24"
                fill="#38BDF8"
                className="h-[22px] w-[22px]"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.5))",
                }}
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
          </div>

          {/* Shooting Star / Meteor (~10s cycle, visible ~14%) */}
          <div
            className="nestino-hide-rm absolute right-[22%] top-[12%] flex items-center will-change-transform"
            style={{ animation: "meteorShoot 10s ease-out 2s infinite" }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.95)]" />
            <div
              className="h-[1.5px] w-28"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)",
              }}
            />
          </div>
        </div>

        {/* LAYER 3 (depth 17): 4 One-Direction Clouds + 2 Map Pins with Ripple Rings */}
        <div
          ref={(el) => {
            layerRefs.current[2] = el;
          }}
          className="absolute inset-0 will-change-transform"
        >
          {/* 4 Blurred White Radial Ellipses (One-Direction -32vw -> 112vw) */}
          {CLOUDS.map((c, idx) => (
            <div
              key={idx}
              className="absolute left-0 rounded-full blur-2xl will-change-transform"
              style={{
                top: c.top,
                width: `${c.w}px`,
                height: `${c.h}px`,
                opacity: c.opacity,
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0) 75%)",
                animation: `cloudDrift ${c.dur} linear ${c.delay} infinite`,
              }}
            />
          ))}

          {/* Map Pin 1 (#38BDF8) */}
          <div className="absolute bottom-[25%] left-[19%] flex flex-col items-center">
            <div style={{ animation: "pinBob 4.2s ease-in-out infinite" }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.8"
                style={{ filter: "drop-shadow(0 0 8px rgba(56,189,248,0.45))" }}
              >
                <path d="M12 21c-4.5-4.4-7-7.8-7-11a7 7 0 1 1 14 0c0 3.2-2.5 6.6-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <div
              className="mt-[-3px] h-3 w-6 rounded-full border border-[#38BDF8]"
              style={{ animation: "pinRipple 4.2s ease-out infinite" }}
            />
          </div>

          {/* Map Pin 2 (#F59E0B) — hidden below 640px */}
          <div className="absolute bottom-[27%] right-[20%] flex flex-col items-center max-[640px]:hidden">
            <div
              style={{ animation: "pinBob 4.8s ease-in-out -1.6s infinite" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.8"
                style={{ filter: "drop-shadow(0 0 8px rgba(245,158,11,0.45))" }}
              >
                <path d="M12 21c-4.5-4.4-7-7.8-7-11a7 7 0 1 1 14 0c0 3.2-2.5 6.6-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <div
              className="mt-[-3px] h-3 w-6 rounded-full border border-[#F59E0B]"
              style={{ animation: "pinRipple 4.8s ease-out -1.6s infinite" }}
            />
          </div>
        </div>

        {/* GROUNDED (no parallax): Full-bottom hotel skyline — Left, Center (domed), Right */}
        <div className="absolute inset-x-0 bottom-0 h-48 max-[1100px]:h-36 max-[640px]:h-28">
          <svg
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            {/* Base ground line */}
            <rect x="0" y="214" width="1440" height="6" fill="#0B1A30" />

            {/* LEFT BUILDING GROUP */}
            <g>
              <rect
                x="20"
                y="95"
                width="95"
                height="120"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              <rect
                x="125"
                y="65"
                width="115"
                height="150"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              <rect
                x="250"
                y="115"
                width="85"
                height="100"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              {/* Unlit windows */}
              <rect
                x="38"
                y="112"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="62"
                y="142"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="84"
                y="112"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="145"
                y="88"
                width="16"
                height="20"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="175"
                y="120"
                width="16"
                height="20"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="205"
                y="152"
                width="16"
                height="20"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="268"
                y="135"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="298"
                y="165"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              {/* Lit twinkling windows (#FBBF24) */}
              <rect
                x="62"
                y="112"
                width="14"
                height="18"
                fill="#FBBF24"
                style={{ animation: "windowTwinkle 4.6s ease-in-out infinite" }}
              />
              <rect
                x="175"
                y="88"
                width="16"
                height="20"
                fill="#FBBF24"
                style={{
                  animation: "windowTwinkle 5.2s ease-in-out -1.8s infinite",
                }}
              />
              <rect
                x="298"
                y="135"
                width="14"
                height="18"
                fill="#FBBF24"
                style={{
                  animation: "windowTwinkle 4.9s ease-in-out -3.1s infinite",
                }}
              />
              {/* 1-2 Slowly switching off/on (11s cycle) */}
              <rect
                x="205"
                y="120"
                width="16"
                height="20"
                fill="#FBBF24"
                style={{
                  animation: "windowSwitch 11s ease-in-out -2s infinite",
                }}
              />
              <rect
                x="38"
                y="170"
                width="14"
                height="18"
                fill="#FBBF24"
                style={{
                  animation: "windowSwitch 11s ease-in-out -6.5s infinite",
                }}
              />
            </g>

            {/* CENTER BUILDING GROUP (with Grand Domed Hotel) — hidden below 640px */}
            <g className="max-[640px]:hidden">
              <rect
                x="525"
                y="108"
                width="95"
                height="107"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              {/* Domed Center Building */}
              <path
                d="M 650 85 A 70 48 0 0 1 790 85 Z"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              <line
                x1="720"
                y1="22"
                x2="720"
                y2="38"
                stroke="rgba(125,180,255,.22)"
                strokeWidth="2"
              />
              <rect
                x="630"
                y="85"
                width="180"
                height="130"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              <rect
                x="820"
                y="112"
                width="95"
                height="103"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              {/* Unlit windows */}
              <rect
                x="548"
                y="128"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="580"
                y="158"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="655"
                y="106"
                width="18"
                height="22"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="711"
                y="140"
                width="18"
                height="22"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="766"
                y="106"
                width="18"
                height="22"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="655"
                y="172"
                width="18"
                height="22"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="842"
                y="132"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="874"
                y="162"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              {/* Lit twinkling windows (#FBBF24) */}
              <rect
                x="711"
                y="106"
                width="18"
                height="22"
                fill="#FBBF24"
                style={{
                  animation: "windowTwinkle 4.5s ease-in-out -0.9s infinite",
                }}
              />
              <rect
                x="655"
                y="140"
                width="18"
                height="22"
                fill="#FBBF24"
                style={{
                  animation: "windowTwinkle 5.5s ease-in-out -2.4s infinite",
                }}
              />
              <rect
                x="874"
                y="132"
                width="14"
                height="18"
                fill="#FBBF24"
                style={{
                  animation: "windowTwinkle 5.0s ease-in-out -1.2s infinite",
                }}
              />
              {/* 1-2 Slowly switching off/on (11s cycle) */}
              <rect
                x="766"
                y="140"
                width="18"
                height="22"
                fill="#FBBF24"
                style={{
                  animation: "windowSwitch 11s ease-in-out -4.1s infinite",
                }}
              />
              <rect
                x="580"
                y="128"
                width="14"
                height="18"
                fill="#FBBF24"
                style={{
                  animation: "windowSwitch 11s ease-in-out -8.3s infinite",
                }}
              />
            </g>

            {/* RIGHT BUILDING GROUP — hidden below 640px */}
            <g className="max-[640px]:hidden">
              <rect
                x="1100"
                y="110"
                width="90"
                height="105"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              <rect
                x="1200"
                y="70"
                width="115"
                height="145"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              <rect
                x="1325"
                y="98"
                width="95"
                height="117"
                fill="#0B1A30"
                stroke="rgba(125,180,255,.14)"
                strokeWidth="1.2"
              />
              {/* Unlit windows */}
              <rect
                x="1120"
                y="130"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="1152"
                y="160"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="1222"
                y="94"
                width="16"
                height="20"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="1254"
                y="128"
                width="16"
                height="20"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="1282"
                y="162"
                width="16"
                height="20"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="1345"
                y="122"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              <rect
                x="1378"
                y="154"
                width="14"
                height="18"
                fill="rgba(125,190,255,.16)"
              />
              {/* Lit twinkling windows (#FBBF24) */}
              <rect
                x="1254"
                y="94"
                width="16"
                height="20"
                fill="#FBBF24"
                style={{
                  animation: "windowTwinkle 4.7s ease-in-out -1.5s infinite",
                }}
              />
              <rect
                x="1378"
                y="122"
                width="14"
                height="18"
                fill="#FBBF24"
                style={{
                  animation: "windowTwinkle 5.3s ease-in-out -3.5s infinite",
                }}
              />
              {/* 1-2 Slowly switching off/on (11s cycle) */}
              <rect
                x="1222"
                y="128"
                width="16"
                height="20"
                fill="#FBBF24"
                style={{
                  animation: "windowSwitch 11s ease-in-out -1.1s infinite",
                }}
              />
              <rect
                x="1152"
                y="130"
                width="14"
                height="18"
                fill="#FBBF24"
                style={{
                  animation: "windowSwitch 11s ease-in-out -7.4s infinite",
                }}
              />
            </g>
          </svg>
        </div>

        {/* LAYER 4 (depth 24): 6 Floating Icon Chips (60px, white/6 bg, white/16 border, backdrop-blur) */}
        <div
          ref={(el) => {
            layerRefs.current[3] = el;
          }}
          className="absolute inset-0 will-change-transform max-[640px]:hidden"
        >
          {/* 1. Concierge Bell (kept below 1100px) */}
          <div
            className="absolute left-[8%] top-[24%] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.06] backdrop-blur-md"
            style={{ animation: "chipSway 6.5s ease-in-out -0.8s infinite" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 6V4m-2 0h4" />
              <path d="M4 17a8 8 0 0 1 16 0" />
              <path d="M2 17h20v2H2z" />
            </svg>
          </div>

          {/* 2. Room Key (hidden below 1100px) */}
          <div
            className="absolute left-[14%] top-[56%] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.06] backdrop-blur-md max-[1100px]:hidden"
            style={{ animation: "chipSway 8s ease-in-out -2.4s infinite" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7DD3FC"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="7.5" cy="15.5" r="4.5" />
              <path d="m10.7 12.3 9.3-9.3 2 2-2.5 2.5 1.8 1.8-2.2 2.2-1.8-1.8" />
            </svg>
          </div>

          {/* 3. Suitcase (hidden below 1100px) */}
          <div
            className="absolute left-[23%] top-[16%] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.06] backdrop-blur-md max-[1100px]:hidden"
            style={{ animation: "chipSway 9.5s ease-in-out -4.1s infinite" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="7" width="16" height="13" rx="2" />
              <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
              <line x1="9" y1="7" x2="9" y2="20" />
              <line x1="15" y1="7" x2="15" y2="20" />
            </svg>
          </div>

          {/* 4. Map Pin (kept below 1100px) */}
          <div
            className="absolute right-[9%] top-[30%] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.06] backdrop-blur-md"
            style={{ animation: "chipSway 8s ease-in-out -1.5s infinite" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21c-4.5-4.4-7-7.8-7-11a7 7 0 1 1 14 0c0 3.2-2.5 6.6-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>

          {/* 5. Sun (#FCD34D, hidden below 1100px) */}
          <div
            className="absolute right-[21%] top-[17%] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.06] backdrop-blur-md max-[1100px]:hidden"
            style={{ animation: "chipSway 6.5s ease-in-out -3.3s infinite" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FCD34D"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
            </svg>
          </div>

          {/* 6. Hotel Building (hidden below 1100px) */}
          <div
            className="absolute right-[13%] top-[58%] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.06] backdrop-blur-md max-[1100px]:hidden"
            style={{ animation: "chipSway 9.5s ease-in-out -5.2s infinite" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="3" width="16" height="18" rx="1.5" />
              <path d="M9 21v-4h6v4M8 7h2m4 0h2M8 11h2m4 0h2" />
            </svg>
          </div>
        </div>
      </div>

      {/* CENTER CONTENT (z-10, frameless — no panel, no card, no search bar) */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* 1. Eyebrow */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mb-6 flex items-center gap-3.5 text-xs font-semibold tracking-[0.26em] text-[#7DD3FC] uppercase sm:text-sm"
        >
          <span
            aria-hidden="true"
            className="h-px w-8 bg-gradient-to-r from-transparent to-[#38BDF8] sm:w-12"
          />
          <span>✦ NESTINO — STAY BEYOND ORDINARY</span>
          <span
            aria-hidden="true"
            className="h-px w-8 bg-gradient-to-l from-transparent to-[#38BDF8] sm:w-12"
          />
        </motion.div>

        {/* 2. Headline (h1 once) */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className={`${fraunces.className} font-semibold text-white`}
          style={{
            fontSize: "clamp(2.9rem, 7vw, 5.3rem)",
            lineHeight: 1.04,
            textShadow: "0 8px 32px rgba(2, 8, 20, 0.72)",
          }}
        >
          Find a stay that feels{" "}
          <em className="italic text-[#38BDF8]">like home</em>, anywhere on
          Earth.
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#A8BEDD] sm:text-lg md:text-xl"
        >
          Search over 2 million hotels, riads, cabins and city apartments —
          transparent prices, free cancellation on most stays.
        </motion.p>

        {/* 4. CTA Pill Button */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mt-10"
        >
          <Link
            href="/booking"
            className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-bold text-[#06283D] transition-transform duration-300 ease-out hover:-translate-y-[3px] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08162B] sm:text-lg"
            style={{
              background:
                "linear-gradient(135deg, #7DD3FC 0%, #38BDF8 45%, #0EA5E9 100%)",
              boxShadow: "0 10px 30px -6px rgba(56, 189, 248, 0.55)",
            }}
          >
            {/* Pulsing Glow Ring (~3.2s) */}
            <span
              aria-hidden="true"
              className="nestino-anim pointer-events-none absolute -inset-1.5 rounded-full border-2 border-[#38BDF8]/60"
              style={{ animation: "ctaRingPulse 3.2s ease-in-out infinite" }}
            />
            {/* Shine Sweep (~4s) */}
            <span
              aria-hidden="true"
              className="nestino-anim pointer-events-none absolute inset-0 overflow-hidden rounded-full"
            >
              <span
                className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                style={{ animation: "ctaShine 4s ease-in-out infinite" }}
              />
            </span>

            <span className="relative z-10">
              <Link href="/reserve">Book Your Stay</Link>
            </span>
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#06283D"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-[4px]"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>

        {/* 5. Stats (plain text, dot separators) */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mt-8 text-sm font-medium tracking-wide text-[#A8BEDD]/90 sm:text-base"
        >
          2M+ stays <span className="mx-2 text-[#38BDF8]">·</span> 190+
          countries <span className="mx-2 text-[#38BDF8]">·</span> 4.9 ★ average
          rating
        </motion.p>
      </div>
    </section>
  );
}
