import React from "react";
import Accordion from "./Accordion"; // adjust path if needed

const App: React.FC = () => {
  const accordionData = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is TypeScript?",
      content: "TypeScript is a superset of JavaScript that adds type safety.",
    },
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">FAQ</h1>
      <Accordion items={accordionData} />
    </div>
  );
};

export default App;
