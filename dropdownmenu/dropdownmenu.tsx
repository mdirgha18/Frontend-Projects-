// src/components/DropdownMenu.tsx
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setOpen(false));

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        Menu
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute mt-2 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
        >
          <div className="py-1">
            <button
              onClick={() => alert("Profile clicked")}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={() => alert("Settings clicked")}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Settings
            </button>
            <button
              onClick={() => alert("Logout clicked")}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
