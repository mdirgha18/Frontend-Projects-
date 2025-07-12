import React, { useEffect, useState } from "react";

// Simulated backend data
const allItems = Array.from({ length: 50 }, (_, i) => `Item #${i + 1}`);
const PAGE_SIZE = 10;

const fetchPage = (page: number): Promise<string[]> => {
  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const items = allItems.slice(start, end);
  return new Promise((resolve) => {
    setTimeout(() => resolve(items), 500); // Simulate network delay
  });
};

const LoadMoreList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setLoading(true);
    const newItems = await fetchPage(page);
    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    setHasMore((page + 1) * PAGE_SIZE < allItems.length);
    setLoading(false);
  };

  useEffect(() => {
    loadMore(); // Load first page on mount
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Load More Example
      </h2>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-2 border border-gray-300 dark:border-gray-700 rounded text-gray-700 dark:text-gray-100"
          >
            {item}
          </li>
        ))}
      </ul>

      {hasMore ? (
        <button
          onClick={loadMore}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          No more items.
        </p>
      )}
    </div>
  );
};

export default LoadMoreList;
