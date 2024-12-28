import React from "react";

// ...existing code...

export default function Footer() {
  return (
    <footer className="p-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center">
      <p>&copy; {new Date().getFullYear()} DeeperSensor. All rights reserved.</p>
    </footer>
  );
}

// ...existing code...
