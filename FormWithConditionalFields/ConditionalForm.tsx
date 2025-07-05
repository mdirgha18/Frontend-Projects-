import React, { useState } from 'react';

export default function ConditionalForm() {
  const [fieldA, setFieldA] = useState('');
  const [fieldB, setFieldB] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Field A: ${fieldA}\nField B: ${fieldB}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-xl font-bold mb-2">Conditional Form</h2>
      
      <div>
        <label className="block text-gray-700 mb-1" htmlFor="fieldA">
          Field A (required to show Field B)
        </label>
        <input
          id="fieldA"
          type="text"
          value={fieldA}
          onChange={(e) => setFieldA(e.target.value)}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Type something..."
          required
        />
      </div>

      {fieldA.trim() && (
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="fieldB">
            Field B (only visible if Field A is filled)
          </label>
          <input
            id="fieldB"
            type="text"
            value={fieldB}
            onChange={(e) => setFieldB(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type something for Field B..."
          />
        </div>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
