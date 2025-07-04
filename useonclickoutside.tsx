import React, { useRef, useState, useEffect } from "react";

export function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function ModalDemo() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => setOpen(false));

  return (
    <div className="p-4">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Open Modal
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white p-4 rounded shadow max-w-sm w-full"
          >
            <h2 className="text-lg mb-2">Modal</h2>
            <p>Click outside to close this modal.</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
