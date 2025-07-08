// src/components/Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all p-6 cursor-pointer border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
