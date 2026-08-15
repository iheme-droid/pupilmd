'use client';

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
}

export default function ProgressBar({ currentSection, totalSections }: ProgressBarProps) {
  const progress = Math.min((currentSection / totalSections) * 100, 100);
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
        <span>Section {currentSection} of {totalSections}</span>
        <span className="font-bold text-blue-600">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner border border-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
        </div>
      </div>
    </div>
  );
}