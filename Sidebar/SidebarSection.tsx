// src/components/SidebarSection.tsx
import React, { useState } from 'react';

type SidebarSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function SidebarSection({ title, children }: SidebarSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 text-left bg-gray-200 hover:bg-gray-300 transition"
      >
        <span className="font-medium">{title}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="bg-white px-4 py-2 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}
