import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
      <div className="text-2xl font-extrabold">DeeperSensor</div>
      <div className="flex gap-2 items-center">
        <button className="px-3 py-1 rounded hover:bg-white/20 transition">Sign in with Google</button>
        <button className="px-3 py-1 rounded hover:bg-white/20 transition">Apple</button>
        <button className="px-3 py-1 rounded hover:bg-white/20 transition">GitHub</button>
        <button className="px-3 py-1 rounded hover:bg-white/20 transition">Crypto Wallet</button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
