import Link from 'next/link';
import { cellularInjuryChapter } from '@/app/data/cellularInjury';

export default function CellularInjuryModule() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Module Header */}
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block font-semibold">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {cellularInjuryChapter.chapterTitle}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          How cells respond to stress, adapt to challenges, and ultimately fail - explained in simple, connected concepts.
        </p>
        
        {/* Learning Objectives */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h3 className="font-semibold text-blue-900 mb-3">What You'll Learn:</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>How cells adapt to stress before they die</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>The difference between reversible and irreversible injury</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Two types of cell death and their clinical significance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Why timing matters in treating heart attacks and strokes</span>
            </li>
          </ul>
        </div>

        {/* Time Estimate */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>20-25 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>11 sections</span>
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="space-y-3 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sections</h2>
        
        {/* Core Sections (0-9) */}
        {cellularInjuryChapter.sections.slice(0, 10).map((section) => (
          <div
            key={section.id}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                    {section.id}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {section.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Deep Dive Section (10) - Visually Separated */}
        <div className="pt-6 mt-6 border-t-2 border-gray-200">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
                    10
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {cellularInjuryChapter.sections[10].title}
                  </h3>
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                    Optional
                  </span>
                </div>
                <p className="text-purple-800 text-sm ml-11">
                  Deep dive into molecular mechanisms. Complete sections 0-9 first for full understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="text-center">
        <Link
          href={`/module/cellular-injury/crashchapter?section=0`}
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Start Learning →
        </Link>
      </div>

      {/* Learning Promise */}
      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Our Promise
        </h4>
        <p className="text-gray-700 text-sm">
          Complete sections 0-9 and you'll understand this topic conceptually, apply it clinically, 
          and explain it to someone else in simple terms.
        </p>
      </div>
    </div>
  );
}