import React from "react";
import TaskManager from "./TaskManager";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <TaskManager />
    </div>
  );
};

export default App;

// 🌟 Optional Upgrades
// Save tasks to localStorage

// Add due dates or categories

// Drag and drop reordering

// Add animations with framer-motion

// Filter (all / active / completed)
