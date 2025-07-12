

import React, { useEffect, useRef, useState } from "react";

const WORK_TIME = 10 * 60; // 25 minutes

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

const PomodoroTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current!);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(timerRef.current!);
    setTimeLeft(WORK_TIME);
    setIsRunning(false);
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-8 rounded shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Pomodoro Timer</h2>
      <div className="text-5xl font-mono mb-6 text-red-600">
        {formatTime(timeLeft)}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleStartPause}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
