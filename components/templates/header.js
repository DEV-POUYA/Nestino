"use client";

import Link from "next/link";
import { BookmarkIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <>
      {/* Desktop Navbar - Glassmorphism */}
      <header
        className="hidden md:block absolute top-0 left-0 right-0 z-50 
                   bg-slate-900/70 backdrop-blur-md 
                   border-b border-white/20 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center">
            <h5 className="text-white text-2xl font-semibold tracking-wide">
              Nestino
            </h5>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-10 text-[15px] font-medium">
            <Link
              href="/"
              className="text-white hover:text-emerald-300 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/reserve"
              className="text-white hover:text-emerald-300 transition-colors duration-200"
            >
              Reserve
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-emerald-300 transition-colors duration-200"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button
              className="px-5 py-2 rounded-full bg-emerald-500 text-white font-medium 
                               hover:bg-emerald-400 transition-all duration-200 
                               active:scale-95 shadow-md hover:shadow-emerald-500/30"
            >
              <Link href={"/login"}>Login</Link>
            </button>
            <button
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm 
                               hover:bg-white/20 transition-all duration-200 
                               active:scale-90"
            >
              <BookmarkIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar – now with Login & Bookmark */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 
                      bg-white/95 backdrop-blur-md border-t border-emerald-100 shadow-lg"
      >
        <div className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700">
          {/* Left side – navigation links */}
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <Link
              href="/"
              className="hover:text-emerald-600 active:scale-95 transition-all"
            >
              Home
            </Link>
            <span className="text-emerald-300">|</span>
            <Link
              href="/reserve"
              className="hover:text-emerald-600 active:scale-95 transition-all"
            >
              Reserve
            </Link>
            <span className="text-emerald-300">|</span>
            <Link
              href="/about"
              className="hover:text-emerald-600 active:scale-95 transition-all"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-medium 
                               hover:bg-emerald-400 transition-all active:scale-95 shadow-sm"
            >
              <Link href={"/login"}>Login</Link>
            </button>
            <button
              className="p-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 
                               transition-all active:scale-90"
            >
              <BookmarkIcon className="w-5 h-5 text-emerald-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for bottom navbar */}
      <div className="md:hidden h-16" />
    </>
  );
}

export default Header;
