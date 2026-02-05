'use client';

import { useState } from 'react';

interface TeachingReceiptProps {
  mastered: string[];
  selfCheckQuestions: string[];
  moduleSlug: string;
}

export default function TeachingReceipt({ mastered, selfCheckQuestions, moduleSlug }: TeachingReceiptProps) {
  const [checkAnswers, setCheckAnswers] = useState<boolean[]>(
    new Array(selfCheckQuestions.length).fill(false)
  );

  const allChecked = checkAnswers.every(answer => answer === true);

  const toggleCheck = (index: number) => {
    const newAnswers = [...checkAnswers];
    newAnswers[index] = !newAnswers[index];
    setCheckAnswers(newAnswers);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 p-8 mb-8">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Teaching Receipt
          </h2>
          <p className="text-gray-600">
            Here's what you now understand about this topic
          </p>
        </div>

        {/* What You Mastered */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            ✅ What You Now Understand
          </h3>
          <ul className="space-y-3">
            {mastered.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 text-xl mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Self-Check Questions */}
        <div className="bg-white rounded-lg p-6 border border-green-200 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            🤔 Self-Check: Can You Explain This?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Answer these questions honestly. If you can explain all of them clearly, you've truly mastered this topic.
          </p>
          <div className="space-y-4">
            {selfCheckQuestions.map((question, index) => (
              <div key={index} className="flex items-start">
                <button
                  onClick={() => toggleCheck(index)}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 mr-3 mt-0.5 flex items-center justify-center transition-colors ${
                    checkAnswers[index]
                      ? 'bg-green-600 border-green-600'
                      : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  {checkAnswers[index] && (
                    <span className="text-white text-sm">✓</span>
                  )}
                </button>
                <label 
                  onClick={() => toggleCheck(index)}
                  className="text-gray-700 leading-relaxed cursor-pointer flex-1"
                >
                  {question}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Completion Message */}
        {allChecked ? (
          <div className="bg-green-600 text-white rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h4 className="text-2xl font-bold mb-2">
              You've Mastered This Topic!
            </h4>
            <p className="text-green-100">
              You can explain these concepts clearly, apply them clinically, and teach them to others. 
              That's true understanding, not just memorization.
            </p>
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">
              Not quite there yet?
            </h4>
            <p className="text-blue-800 text-sm mb-4">
              Review the sections where you're unsure. Understanding takes time, and that's okay.
              The goal isn't speed—it's genuine comprehension.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Review Sections
            </button>
          </div>
        )}
      </div>

      {/* Our Promise Reminder */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Our Promise
        </h4>
        <p className="text-gray-700 text-sm">
          If you can't explain these concepts after completing this CRASHCHAPTER, 
          we haven't done our job. Use the feedback button to tell us where we can improve.
        </p>
      </div>
    </div>
  );
}
