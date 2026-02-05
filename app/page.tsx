'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Progress utility function
function getModuleProgress(moduleSlug: string) {
  if (typeof window === 'undefined') return { completed: 0, total: 11, percentage: 0 };
  
  const progressKey = `pupilmd_progress_${moduleSlug}`;
  const savedProgress = localStorage.getItem(progressKey);
  
  if (!savedProgress) {
    return { completed: 0, total: 11, percentage: 0 };
  }
  
  const progress = JSON.parse(savedProgress);
  const completed = progress.currentSection || 0;
  const total = 11;
  const percentage = Math.round((completed / total) * 100);
  
  return { completed, total, percentage };
}

export default function Home() {
  const [cellularProgress, setCellularProgress] = useState({ completed: 0, total: 11, percentage: 0 });
  const [acidBaseProgress, setAcidBaseProgress] = useState({ completed: 0, total: 11, percentage: 0 });

  useEffect(() => {
    // Load progress on client side
    setCellularProgress(getModuleProgress('cellular-injury'));
    setAcidBaseProgress(getModuleProgress('acid-base'));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn Medicine Through Understanding, Not Memorization
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Master pathophysiology concepts in 20-25 minutes with narrative-based explanations that stick.
          </p>
          <Link
            href="#modules"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Learning Now
          </Link>
        </div>
      </div>

      {/* Why PupilMD Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why PupilMD?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Simple First</h3>
            <p className="text-gray-600">
              We explain concepts in plain language before introducing medical terminology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">80/20 Focused</h3>
            <p className="text-gray-600">
              Sections 0-9 give you 80% of what you need. Section 10 is optional for depth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-2">Story-Driven</h3>
            <p className="text-gray-600">
              Learn through narrative flow, not isolated facts. See how concepts build on each other naturally.
            </p>
          </div>
        </div>
      </div>

      {/* CRASHCHAPTER Preview */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Introducing: CRASHCHAPTER
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Our signature teaching format. A narrative-based explanation that builds complete understanding through connected concepts, structured across 11 sections.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span>Sections 0-9: Core understanding (20-25 min)</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span>Section 10: Optional deep dive</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span>Progress checkpoints to pause & resume</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span>Concept first, terminology second</span>
          </div>
        </div>
      </div>

      {/* Available Modules */}
      <div id="modules" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Available Now (MVP)
        </h2>

        <div className="space-y-4">
          {/* Cellular Injury Module */}
          <div className="bg-white p-8 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cellular Injury & Adaptation
                </h3>
                <p className="text-gray-600 mb-4">
                  How cells respond to stress, adapt to challenges, and ultimately fail - explained in simple, connected concepts.
                </p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                20-25 min
              </span>
            </div>

            {/* Progress Bar */}
            {cellularProgress.completed > 0 && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    {cellularProgress.completed}/{cellularProgress.total} sections completed
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    {cellularProgress.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${cellularProgress.percentage}%` }}
                  />
                </div>
              </div>
            )}

            <Link
              href="/module/cellular-injury"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {cellularProgress.completed > 0 ? 'Continue Learning →' : 'Begin Module →'}
            </Link>
          </div>

          {/* Acid-Base Module */}
          <div className="bg-white p-8 rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Acid-Base & Fluid/Electrolyte Disorders
                </h3>
                <p className="text-gray-600 mb-4">
                  Master the most challenging topic in pathophysiology—from swimming pool chemistry to clinical ABG interpretation.
                </p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                25-30 min
              </span>
            </div>

            {/* Progress Bar */}
            {acidBaseProgress.completed > 0 && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    {acidBaseProgress.completed}/{acidBaseProgress.total} sections completed
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    {acidBaseProgress.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${acidBaseProgress.percentage}%` }}
                  />
                </div>
              </div>
            )}

            <Link
              href="/module/acid-base"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              {acidBaseProgress.completed > 0 ? 'Continue Learning →' : 'Begin Module →'}
            </Link>
          </div>
        </div>
      </div>

      {/* Learning Promise */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Our Promise
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Complete a CRASHCHAPTER and you'll be able to understand the topic conceptually, apply the logic clinically, and explain it to someone else in simple terms.
        </p>
      </div>
    </div>
  );
}