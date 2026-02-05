'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ProgressBar from '../../../components/ProgressBar';
import TeachingReceipt from '@/app/components/TeachingReceipt';
import { acidBaseChapter } from '@/app/data/acidBase';

export default function CrashChapterReader() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sectionParam = searchParams.get('section');
  const currentSectionId = sectionParam ? parseInt(sectionParam) : 0;
  
  const [isDeepDiveExpanded, setIsDeepDiveExpanded] = useState(false);
  const moduleSlug = 'acid-base';

  const currentSection = acidBaseChapter.sections.find(
    s => s.id === currentSectionId
  );

  const nextSection = acidBaseChapter.sections.find(
    s => s.id === currentSectionId + 1
  );

  const prevSection = acidBaseChapter.sections.find(
    s => s.id === currentSectionId - 1
  );

  // Save progress to localStorage
  useEffect(() => {
    if (currentSectionId >= 0) {
      const progress = {
        currentSection: currentSectionId,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(`pupilmd_progress_${moduleSlug}`, JSON.stringify(progress));
    }
  }, [currentSectionId, moduleSlug]);

  const handleNext = () => {
    if (nextSection) {
      router.push(`/module/${moduleSlug}/crashchapter?section=${nextSection.id}`);
    }
  };

  const handlePrev = () => {
    if (prevSection) {
      router.push(`/module/${moduleSlug}/crashchapter?section=${prevSection.id}`);
    }
  };

  if (!currentSection) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Section not found</h1>
        <Link href={`/module/${moduleSlug}`} className="text-blue-600 hover:text-blue-700">
          ← Back to Module Overview
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header with Progress */}
      <div className="mb-8">
        <Link 
          href={`/module/${moduleSlug}`} 
          className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
        >
          ← Back to Overview
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {acidBaseChapter.chapterTitle}
        </h1>
        
        <ProgressBar 
          currentSection={currentSectionId} 
          totalSections={acidBaseChapter.sections.length} 
        />
      </div>

      {/* Section Content */}
      <article className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              currentSection.isDeepDive 
                ? 'bg-purple-100 text-purple-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              Section {currentSection.id}
            </span>
            {currentSection.isDeepDive && (
              <span className="text-xs text-purple-600 font-semibold">
                OPTIONAL DEEP DIVE
              </span>
            )}
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {currentSection.title}
          </h2>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {currentSection.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Deep Dive Toggle (only on Section 10) */}
        {currentSection.isDeepDive && !isDeepDiveExpanded && (
          <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-purple-900 mb-3">
              This is the optional deep dive section with detailed mechanisms and advanced content.
            </p>
            <button
              onClick={() => setIsDeepDiveExpanded(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Expand Deep Dive Content
            </button>
          </div>
        )}
      </article>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={!prevSection}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            prevSection
              ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          ← Previous
        </button>

        {nextSection ? (
          <button
            onClick={handleNext}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Next Section →
          </button>
        ) : (
          <div>
            <TeachingReceipt
              mastered={acidBaseChapter.teachingReceipt.mastered}
              selfCheckQuestions={acidBaseChapter.teachingReceipt.selfCheckQuestions}
              moduleSlug={moduleSlug}
            />
            <div className="text-center mt-6">
              <Link
                href={`/module/${moduleSlug}`}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Back to Module Overview
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Progress Checkpoint */}
      {currentSectionId < 10 && (
        <div className="mt-8 p-4 bg-green-50 border border-green-100 rounded-lg text-center">
          <p className="text-green-900 text-sm">
            ✓ Your progress is automatically saved. You can pause here and come back anytime.
          </p>
        </div>
      )}
    </div>
  );
}