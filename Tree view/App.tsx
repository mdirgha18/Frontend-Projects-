import React from "react";
import TreeView, { TreeNode } from "./TreeView"; // adjust the path

const treeData: TreeNode[] = [
  {
    id: "1",
    label: "Documents",
    children: [
      {
        id: "2",
        label: "Work",
        children: [
          { id: "3", label: "Resume.docx" },
          { id: "4", label: "Project.pdf" },
        ],
      },
      {
        id: "5",
        label: "Personal",
        children: [{ id: "6", label: "Recipes.txt" }],
      },
    ],
  },
  {
    id: "7",
    label: "Photos",
    children: [
      {
        id: "8",
        label: "Vacation",
        children: [
          { id: "9", label: "Beach.png" },
          { id: "10", label: "Mountains.jpg" },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">File Tree</h1>
      <TreeView data={treeData} />
    </div>
  );
};

export default App;
