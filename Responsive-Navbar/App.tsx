// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-gray-700">This is a sample page with a responsive navbar.</p>
      </main>
    </div>
  );
}
