// src/App.tsx
import React from "react";
import Badge from "./Badge";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Dynamic Badge Component</h1>

        <div className="flex flex-wrap gap-3 justify-center">
          <Badge color="primary" size="sm">
            Primary Small
          </Badge>
          <Badge color="primary" size="md">
            Primary Medium
          </Badge>
          <Badge color="primary" size="lg">
            Primary Large
          </Badge>

          <Badge color="success" size="md">
            Success
          </Badge>
          <Badge color="warning" size="md">
            Warning
          </Badge>
          <Badge color="danger" size="md">
            Danger
          </Badge>
        </div>
      </div>
    </div>
  );
}
