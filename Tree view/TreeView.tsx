import React, { useState } from "react";

export type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[];
};

type TreeNodeProps = {
  node: TreeNode;
  level?: number;
};

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={`ml-${level * 4}`}>
      <div
        className="flex items-center space-x-2 cursor-pointer select-none py-1"
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <span className="text-gray-500">{isOpen ? "▼" : "▶"}</span>
        )}
        <span>{node.label}</span>
      </div>
      {isOpen && hasChildren && (
        <div className="ml-4 border-l border-gray-200 pl-2">
          {node.children!.map((child) => (
            <TreeNodeComponent key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

type TreeViewProps = {
  data: TreeNode[];
};

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className="text-sm font-medium text-gray-800">
      {data.map((node) => (
        <TreeNodeComponent key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
