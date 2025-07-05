// src/components/SearchableList.tsx
import React, { useState } from 'react';

type SearchableListProps = {
  items: string[];
};

export default function SearchableList({ items }: SearchableListProps) {
  const [query, setQuery] = useState('');

  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold">Searchable List</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Type to search..."
      />

      <ul className="space-y-2">
        {filteredItems.length === 0 && (
          <li className="text-gray-500">No matching items.</li>
        )}
        {filteredItems.map((item, index) => (
          <li
            key={index}
            className="border px-3 py-2 rounded hover:bg-blue-50 transition"
          >
            {getHighlightedText(item, query)}
          </li>
        ))}
      </ul>
    </div>
  );
}
