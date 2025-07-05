import React from 'react';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p className="text-gray-700">
          This is the main content area. Select items from the sidebar.
        </p>
      </main>
    </div>
  );
}
