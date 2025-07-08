// Light and Dark Theme

// src/App.tsx
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      } transition-colors`}
    >
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Context Theme Toggle</h1>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
