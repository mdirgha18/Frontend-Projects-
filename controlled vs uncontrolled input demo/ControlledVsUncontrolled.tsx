// src/components/ControlledVsUncontrolled.tsx
import React, { useState, useRef } from "react";

export default function ControlledVsUncontrolled() {
  // Controlled input state
  const [controlledValue, setControlledValue] = useState("");

  // Uncontrolled input ref
  const uncontrolledRef = useRef<HTMLInputElement>(null);

  const handleControlledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Controlled value: ${controlledValue}`);
  };

  const handleUncontrolledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = uncontrolledRef.current?.value;
    alert(`Uncontrolled value: ${val}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded space-y-8">
      <h2 className="text-2xl font-bold text-center">
        Controlled vs Uncontrolled Inputs
      </h2>

      {/* Controlled input */}
      <form onSubmit={handleControlledSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold">Controlled Input</h3>
        <input
          type="text"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
          placeholder="Type here..."
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Show Controlled Value
        </button>
      </form>

      <hr />

      {/* Uncontrolled input */}
      <form onSubmit={handleUncontrolledSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold">Uncontrolled Input</h3>
        <input
          type="text"
          ref={uncontrolledRef}
          placeholder="Type here..."
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-green-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Show Uncontrolled Value
        </button>
      </form>
    </div>
  );
}
