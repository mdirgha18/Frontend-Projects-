// src/components/DragAndDropList.tsx
import React, { useState } from 'react';

type Item = {
  id: number;
  text: string;
};

type DragAndDropListProps = {
  initialItems: Item[];
};

export default function DragAndDropList({ initialItems }: DragAndDropListProps) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [draggedItemId, setDraggedItemId] = useState<number | null>(null);

  const handleDragStart = (id: number) => {
    setDraggedItemId(id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (id: number) => {
    if (draggedItemId === null || draggedItemId === id) return;

    const newItems = [...items];
    const draggedIndex = newItems.findIndex(item => item.id === draggedItemId);
    const dropIndex = newItems.findIndex(item => item.id === id);

    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, removed);

    setItems(newItems);
    setDraggedItemId(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">Drag & Drop List</h2>
      <div className="space-y-2">
        {items.map(item => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(item.id)}
            className="cursor-move bg-white shadow rounded px-4 py-2 border hover:bg-blue-50 transition"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
