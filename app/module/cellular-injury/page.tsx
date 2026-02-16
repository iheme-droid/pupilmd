import Link from 'next/link';
import { cellularInjuryChapter } from '@/app/data/cellularInjury';

export default function CellularInjuryModule() {
  return (
    <div className="min-h-screen module-gradient-cellular">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          href="/" 
          className="inline-block mb-6 text-blue-700 hover:text-blue-800 font-semibold transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 mb-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {cellularInjuryChapter.chapterTitle}
            </h1>
            <p className="text-xl text-gray-600">
              Understanding how cells respond to stress, injury, and changing environments
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📘</span>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 text-lg">What You'll Learn</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>How cells adapt to stress and injury</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Mechanisms of cellular injury and death</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Reversible vs irreversible injury patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Real-world clinical applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-900">under 90 mins</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Sections</p>
                  <p className="font-semibold text-gray-900">11 total (0-10)</p>
                </div>
              </div>
            </div>
          </div>

          <Link 
            href="/module/cellular-injury/crashchapter?section=0"
            className="block w-full text-center px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Begin CRASHCHAPTER →
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-xl">💡</span>
            <span>The Marable™ Approach</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            This CRASHCHAPTER starts with a relatable story about everyday stress and adaptation before diving into cellular pathophysiology. 
            You'll understand the concepts through narrative first, making the medical terminology feel natural and memorable.
          </p>
        </div>
      </div>
    </div>
  );
}