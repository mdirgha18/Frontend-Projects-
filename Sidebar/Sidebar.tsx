// src/components/Sidebar.tsx
import React from 'react';
import SidebarSection from './SidebarSection';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4 overflow-y-auto shadow">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <SidebarSection title="Section 1">
        <ul className="space-y-1">
          <li className="hover:text-blue-600 cursor-pointer">Item 1A</li>
          <li className="hover:text-blue-600 cursor-pointer">Item 1B</li>
          <li className="hover:text-blue-600 cursor-pointer">Item 1C</li>
        </ul>
      </SidebarSection>

      <SidebarSection title="Section 2">
        <ul className="space-y-1">
          <li className="hover:text-blue-600 cursor-pointer">Item 2A</li>
          <li className="hover:text-blue-600 cursor-pointer">Item 2B</li>
        </ul>
      </SidebarSection>

      <SidebarSection title="Section 3">
        <ul className="space-y-1">
          <li className="hover:text-blue-600 cursor-pointer">Item 3A</li>
        </ul>
      </SidebarSection>
    </aside>
  );
}
