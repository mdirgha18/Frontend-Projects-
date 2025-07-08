// src/components/CardGrid.tsx
import React from 'react';
import Card from './Card';

const cardData = [
  { title: 'Card 1', description: 'This is the first card.' },
  { title: 'Card 2', description: 'This is the second card.' },
  { title: 'Card 3', description: 'This is the third card.' },
  { title: 'Card 4', description: 'This is the fourth card.' },
  { title: 'Card 5', description: 'This is the fifth card.' },
  { title: 'Card 6', description: 'This is the sixth card.' },
];

export default function CardGrid() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Responsive Card Grid</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, idx) => (
          <Card key={idx} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}
