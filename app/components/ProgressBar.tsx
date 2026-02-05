'use client';

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
}

export default function ProgressBar({ currentSection, totalSections }: ProgressBarProps) {
  const progress = ((currentSection + 1) / totalSections) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      <p className="text-sm text-gray-600 mt-2">
        Section {currentSection} of {totalSections - 1} 
        {currentSection === 10 && " (Deep Dive)"}
      </p>
    </div>
  );
}