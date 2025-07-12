

import React from "react";
import LoadMoreList from "./LoadMoreList";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <LoadMoreList />
    </div>
  );
};

export default App;





// 🚀 Optional Upgrades
// Real API integration (e.g. /posts?page=2)

// Infinite scroll (auto-load on scroll)

// Show total loaded/remaining

// Skeleton loaders
