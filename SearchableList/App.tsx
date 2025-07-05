import React from 'react';
import SearchableList from './components/SearchableList';

export default function App() {
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Pineapple',
    'Mango',
    'Blueberry',
    'Strawberry'
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <SearchableList items={items} />
    </div>
  );
}
