
import React from "react";
import ControlledVsUncontrolled from "./ ControlledVsUncontrolled.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ControlledVsUncontrolled />
    </div>
  );
}

// What it does:

// Controlled: Input’s value lives in React state.

// Uncontrolled: Input’s value is accessed via a ref.

// Both have submit buttons that show their current value in an alert.
