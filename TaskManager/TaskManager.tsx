import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task: Task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };
    setTasks([task, ...tasks]);
    setNewTask("");
  };

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Task Manager
      </h2>

      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Enter a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 border border-gray-200 dark:border-gray-700 rounded"
          >
            <span
              className={`flex-1 cursor-pointer ${
                task.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800 dark:text-gray-100"
              }`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              🗑️
            </button>
          </li>
        ))}
        {tasks.length === 0 && (
          <li className="text-gray-400 text-center mt-4">No tasks yet.</li>
        )}
      </ul>
    </div>
  );
};

export default TaskManager;
