import React from "react";
import DebouncedSearch from "./DebouncedSearch";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <DebouncedSearch />
    </div>
  );
}

// ✅ ⚡️ User Experience
// ✅ Type instantly.
// ✅ Wait ~500ms after typing stops.
// ✅ Filtered list updates.
// ✅ Shows both raw input and debounced value for clarity.

// ✅ 💡 Customizations
// Change debounce delay (e.g. 300ms).

// Add loading spinners during debounce.

// Fetch results from an API instead of local list.

// Use custom hook (e.g. useDebounce).
