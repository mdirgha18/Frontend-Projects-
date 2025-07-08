// src/App.tsx
import React, { useState } from "react";
import Button from "./Button";

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center">Reusable Button Demo</h1>

        <div className="flex space-x-4">
          <Button onClick={handleClick} loading={loading}>
            {loading ? "Processing" : "Submit"}
          </Button>

          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  );
}
