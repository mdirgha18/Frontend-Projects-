// src/components/ThemeToggle.tsx
import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}
