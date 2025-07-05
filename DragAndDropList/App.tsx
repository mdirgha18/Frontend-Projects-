// src/App.tsx
import React from 'react';
import DragAndDropList from './components/DragAndDropList';

export default function App() {
  const items = [
    { id: 1, text: 'First Item' },
    { id: 2, text: 'Second Item' },
    { id: 3, text: 'Third Item' },
    { id: 4, text: 'Fourth Item' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DragAndDropList initialItems={items} />
    </div>
  );
}
