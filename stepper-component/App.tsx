//  // src/App.tsx
// import React from 'react';
// import DropdownMenu from './components/DropdownMenu';

// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <DropdownMenu />
//     </div>
//   );
// }
 
// Modal with focus trap

// src/App.tsx
// import React, { useState } from 'react';
// import { Modal } from './components/Modal';

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
//       >
//         Open Modal
//       </button>

//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <h2 className="text-xl font-bold mb-4">Modal Title</h2>
//         <p className="mb-4">This is a modal with focus trap and Escape to close.</p>
//         <input
//           type="text"
//           placeholder="Focus me!"
//           className="border px-2 py-1 mb-4 w-full"
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Confirm
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// }


// Tooltip UI 

// // src/App.tsx
// import React from 'react';
// import Tooltip from './components/Tooltip';

// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <Tooltip content="Hello! I'm a tooltip.">
//         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//           Hover me
//         </button>
//       </Tooltip>
//     </div>
//   );
// }


// Stepper component

// src/App.tsx
import React, { useState } from 'react';
import Stepper, { Step } from './components/Stepper';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    { label: 'Account Info' },
    { label: 'Profile Details', optional: true },
    { label: 'Payment' },
    { label: 'Confirmation' }
  ];

  const next = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const back = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Stepper / Form Wizard</h1>

      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={(index) => setCurrentStep(index)}
      />

      <div className="max-w-3xl mx-auto mt-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-semibold mb-2">Step {currentStep + 1}: {steps[currentStep].label}</h2>
        <p className="text-gray-600 mb-4">
          This is the content for <strong>{steps[currentStep].label}</strong>.
        </p>

        <div className="flex justify-between">
          <button
            onClick={back}
            disabled={currentStep === 0}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
