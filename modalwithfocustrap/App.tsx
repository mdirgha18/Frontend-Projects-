import React, { useState } from 'react';
import { Modal } from './components/Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">This is a modal with focus trap and Escape to close.</p>
        <input
          type="text"
          placeholder="Focus me!"
          className="border px-2 py-1 mb-4 w-full"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
}
