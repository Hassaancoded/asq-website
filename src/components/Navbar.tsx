"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ✅ Top Navigation Bar */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-50 px-4">
        {/* Hamburger Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white focus:outline-none"
          >
            <div className="space-y-1">
              <div className="w-7 h-1 bg-white"></div>
              <div className="w-7 h-1 bg-white"></div>
              <div className="w-7 h-1 bg-white"></div>
            </div>
          </button>

          {/* Logo in Header */}
          <img src="/logo.png" alt="Logo" className="w-60 h-12 object-contain" />
        </div>
      </div>

      {/* ✅ Overlay (Click to Close) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* ✅ Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 z-50 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "300px", // ✅ Sidebar Width
          height: "450px", // ✅ Sidebar Height
          backgroundImage: "url('/Silder Bar.png')", // ✅ Your Image
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ Dark Overlay for Straight Look */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        ></div>

        {/* ✅ Top Row: X Button + Logo */}
        <div
          className="flex items-center gap-4 px-4 py-4 relative"
          style={{ zIndex: 2 }}
        >
          <button
            onClick={closeMenu}
            className="text-white text-2xl font-bold"
          >
            ✕
          </button>
         <img
  src="/logo.png"
  alt="ASQ Creatives Logo"
  className="w-[170px] h-auto object-contain"
/>

        </div>

        {/* ✅ Menu Links with Full-Width Dividers */}
        <div
          className="mt-6 relative"
          style={{ zIndex: 2 }}
        >
          <ul className="text-white font-poppins font-normal text-[20px]">
  <li>
    <Link href="/" onClick={closeMenu} className="hover:text-pink-500 block px-6 py-3">
      Main
    </Link>
    <div className="h-[1px] bg-[#232323] opacity-50 w-full"></div>
  </li>
  <li>
    <Link href="/about" onClick={closeMenu} className="hover:text-pink-500 block px-6 py-3">
      About Us
    </Link>
    <div className="h-[1px] bg-[#232323] opacity-50 w-full"></div>
  </li>
  <li>
    <Link href="/services" onClick={closeMenu} className="hover:text-pink-500 block px-6 py-3">
      Services
    </Link>
    <div className="h-[1px] bg-[#232323] opacity-50 w-full"></div>
  </li>
  <li>
    <Link href="/cases" onClick={closeMenu} className="hover:text-pink-500 block px-6 py-3">
      Cases
    </Link>
    <div className="h-[1px] bg-[#232323] opacity-50 w-full"></div>
  </li>
  <li>
    <Link href="/policy" onClick={closeMenu} className="hover:text-pink-500 block px-6 py-3">
      Terms & Policy
    </Link>
  </li>
</ul>

        </div>
      </div>
    </>
  );
}
