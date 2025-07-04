
import React, { useState } from "react";

export default function DynamicForm() {
  const [fields, setFields] = useState<string[]>([""]);

  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  const handleRemoveField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, value: string) => {
    setFields(fields.map((item, i) => (i === index ? value : item)));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Dynamic Form Inputs</h2>
      {fields.map((value, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            className="border border-gray-300 rounded px-2 py-1 flex-grow"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Field ${index + 1}`}
          />
          <button
            className="ml-2 text-red-500 hover:text-red-700"
            onClick={() => handleRemoveField(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAddField}
      >
        Add Field
      </button>
    </div>
  );
}
