// Pomodoro Timer 

import React from "react";
import PomodoroTimer from "./PomodoroTimer"; // Adjust the path

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <PomodoroTimer />
    </div>
  );
};

export default App;
