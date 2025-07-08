// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="text-lg font-bold">MyBrand</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition">Home</a>
            <a href="#" className="hover:text-blue-200 transition">About</a>
            <a href="#" className="hover:text-blue-200 transition">Services</a>
            <a href="#" className="hover:text-blue-200 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-500 transition">Home</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-500 transition">About</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-500 transition">Services</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-500 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
