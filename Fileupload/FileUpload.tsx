// src/components/FileUpload.tsx
import React, { useState } from 'react';

export default function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      alert('Please select at least one file.');
      return;
    }

    // Here you would normally upload to a server
    alert(`Uploading ${selectedFiles.length} file(s):\n` +
      Array.from(selectedFiles).map(f => f.name).join('\n'));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold">File Upload</h2>
      
      <label
        htmlFor="fileInput"
        className="block w-full border-2 border-dashed border-gray-300 rounded p-4 text-center cursor-pointer hover:border-blue-400 transition"
      >
        <span className="text-gray-600">Click to select file(s)</span>
        <input
          id="fileInput"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {selectedFiles && (
        <div className="space-y-1">
          <h3 className="font-semibold">Selected Files:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {Array.from(selectedFiles).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleUpload}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Upload
      </button>
    </div>
  );
}
