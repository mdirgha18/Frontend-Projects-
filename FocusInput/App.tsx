// src/App.tsx
import React from "react";
import FocusInput from "./FocusInput";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <FocusInput />
    </div>
  );
}

// ✅ 💡 Variations
// Autofocus on mount:

// useEffect(() => {
//   inputRef.current?.focus();
// }, []);
// Focus different inputs conditionally.

// Use multiple refs for forms.
