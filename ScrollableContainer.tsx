// src/components/ScrollableContainer.tsx
import React from "react";

export default function ScrollableContainer() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Custom Scrollbar Example</h2>
      <div className="h-64 overflow-y-scroll custom-scrollbar rounded border">
        {[...Array(30)].map((_, idx) => (
          <p key={idx} className="p-2 border-b">
            Item {idx + 1}
          </p>
        ))}
      </div>
    </div>
  );
}
