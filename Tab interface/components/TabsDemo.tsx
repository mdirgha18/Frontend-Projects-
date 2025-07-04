// src/components/Tabs/TabsDemo.tsx
import React from "react";
import { Tabs, Tab } from "./Tabs";

export default function TabsDemo() {
  const tabs: Tab[] = [
    {
      id: "home",
      label: "Home",
      content: <p className="text-gray-700">Welcome to the Home tab!</p>,
    },
    {
      id: "about",
      label: "About",
      content: <p className="text-gray-700">This is the About tab content.</p>,
    },
    {
      id: "contact",
      label: "Contact",
      content: (
        <div className="space-y-2">
          <p className="text-gray-700">Contact us:</p>
          <ul className="list-disc list-inside">
            <li>Email: support@example.com</li>
            <li>Phone: +1234567890</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">My Tabs Demo</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
