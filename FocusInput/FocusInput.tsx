// src/components/FocusInput.tsx
import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold">Focus Input with Ref</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me!"
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      />

      <button
        onClick={handleFocus}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Focus the Input
      </button>
    </div>
  );
}
