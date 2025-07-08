// src/components/DebouncedSearch.tsx
import React, { useEffect, useState } from "react";

const sampleItems = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Blueberry",
];

export default function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<string[]>(sampleItems);

  // Debounce effect: wait 500ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  // Filter items when debouncedQuery changes
  useEffect(() => {
    const filtered = sampleItems.filter((item) =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setResults(filtered);
  }, [debouncedQuery]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold">Debounced Search</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      />

      <div className="text-gray-600 text-sm">
        <p>
          Raw Input: <span className="font-mono">{query}</span>
        </p>
        <p>
          Debounced: <span className="font-mono">{debouncedQuery}</span>
        </p>
      </div>

      <ul className="space-y-1">
        {results.length === 0 && (
          <li className="text-gray-500">No results found.</li>
        )}
        {results.map((item, idx) => (
          <li
            key={idx}
            className="border px-3 py-2 rounded hover:bg-blue-50 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
