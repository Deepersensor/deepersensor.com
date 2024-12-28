import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="text-xl font-bold">DeeperSensor</div>
      <div className="flex gap-2">
        <button className="px-3 py-1 rounded hover:bg-white/20">Sign in with Google</button>
        <button className="px-3 py-1 rounded hover:bg-white/20">Apple</button>
        <button className="px-3 py-1 rounded hover:bg-white/20">GitHub</button>
        <button className="px-3 py-1 rounded hover:bg-white/20">Crypto Wallet</button>
      </div>
    </nav>
  );
}
