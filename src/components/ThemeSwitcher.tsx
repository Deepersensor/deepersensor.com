'use client';

import React, { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="px-3 py-1 rounded bg-white text-black hover:bg-gray-200 transition">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
