'use client';
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm bg-gradient-to-r from-indigo-500/90 to-purple-600/90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-extrabold">DeeperSensor</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2">
            <button className="px-3 py-1 rounded hover:bg-white/20 transition">Sign in with Google</button>
            <button className="px-3 py-1 rounded hover:bg-white/20 transition">Apple</button>
            <button className="px-3 py-1 rounded hover:bg-white/20 transition">GitHub</button>
            <button className="px-3 py-1 rounded hover:bg-white/20 transition">Crypto Wallet</button>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4 space-y-2`}>
          <button className="block w-full px-3 py-2 rounded hover:bg-white/20 transition">Sign in with Google</button>
          <button className="block w-full px-3 py-2 rounded hover:bg-white/20 transition">Apple</button>
          <button className="block w-full px-3 py-2 rounded hover:bg-white/20 transition">GitHub</button>
          <button className="block w-full px-3 py-2 rounded hover:bg-white/20 transition">Crypto Wallet</button>
          <div className="px-3"><ThemeSwitcher /></div>
        </div>
      </div>
    </nav>
  );
}
