// src/components/Stepper.tsx
import React from 'react';

export type Step = {
  label: string;
  optional?: boolean;
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
};

export default function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex-1 flex items-center">
            {/* Circle */}
            <button
              disabled={!onStepClick || index > currentStep}
              onClick={() => onStepClick && onStepClick(index)}
              className={`
                w-8 h-8 rounded-full flex items-center justify-center
                text-sm
                ${isActive ? 'bg-blue-600 text-white' : isCompleted ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}
                ${onStepClick && index <= currentStep ? 'hover:bg-blue-500 transition' : ''}
                focus:outline-none
              `}
            >
              {index + 1}
            </button>

            {/* Label */}
            <div className="ml-2">
              <span className="text-sm">{step.label}</span>
              {step.optional && (
                <span className="text-xs text-gray-400 ml-1">(Optional)</span>
              )}
            </div>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
