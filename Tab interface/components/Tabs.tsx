// src/components/Tabs/Tabs.tsx
import React, { useState } from "react";

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  initialTabId?: string;
};

export function Tabs({ tabs, initialTabId }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    initialTabId ?? tabs[0]?.id ?? ""
  );

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 -mb-px border-b-2 transition ${
              activeTab === tab.id
                ? "border-blue-500 text-blue-500 font-semibold"
                : "border-transparent hover:border-gray-300 text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 border rounded-b bg-white shadow-sm">
        {active?.content ?? (
          <p className="text-gray-500">No content available.</p>
        )}
      </div>
    </div>
  );
}
