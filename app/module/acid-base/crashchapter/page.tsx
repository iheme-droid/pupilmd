'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { acidBaseChapter } from '@/app/data/acidBase';
import TeachingReceipt from '@/app/components/TeachingReceipt';

export default function AcidBaseCrashChapter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sectionParam = searchParams.get('section');
  const currentSectionId = sectionParam ? parseInt(sectionParam) : 0;
  const currentSection = acidBaseChapter.sections.find(s => s.id === currentSectionId);

  const [checkedQuestions, setCheckedQuestions] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`pupilmd_teaching_receipt_${acidBaseChapter.moduleSlug}`);
    if (saved) {
      setCheckedQuestions(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const progress = {
      currentSection: currentSectionId,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(`pupilmd_progress_${acidBaseChapter.moduleSlug}`, JSON.stringify(progress));
  }, [currentSectionId]);

  const handleQuestionToggle = (index: number) => {
    const newChecked = checkedQuestions.includes(index)
      ? checkedQuestions.filter(i => i !== index)
      : [...checkedQuestions, index];
    
    setCheckedQuestions(newChecked);
    localStorage.setItem(`pupilmd_teaching_receipt_${acidBaseChapter.moduleSlug}`, JSON.stringify(newChecked));
  };

  const goToSection = (sectionId: number) => {
    router.push(`/module/acid-base/crashchapter?section=${sectionId}`);
  };

  if (!currentSection) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-red-600">Section not found.</p>
        <Link href="/module/acid-base" className="text-blue-600 hover:underline">
          Back to module
        </Link>
      </div>
    );
  }

  const isLastCoreSection = currentSectionId === 9;
  const showTeachingReceipt = isLastCoreSection;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-6">
        <Link href="/module/acid-base" className="text-green-600 hover:text-green-700 font-semibold">
          ← Back to Module
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {acidBaseChapter.chapterTitle}
          </h1>
          <span className="text-sm text-gray-600">
            Section {currentSectionId} of 10
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentSectionId / 10) * 100}%` }}
          />
        </div>
      </div>

      {currentSectionId === 0 && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">What's a Marable™?</h3>
              <p className="text-green-800 text-sm">
                A Marable™ (medical + parable) is an everyday story that mirrors complex medical concepts. 
                We start here because your brain learns better through stories than abstract facts.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className={`bg-white rounded-lg shadow-sm border ${
        currentSection.isDeepDive ? 'border-purple-200' : 'border-gray-200'
      } p-8 mb-8`}>
        {currentSection.isDeepDive && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-purple-600 font-semibold text-sm">🔬 DEEP DIVE</span>
              <p className="text-sm text-purple-800">
                Optional advanced content. You've already mastered the core concepts!
              </p>
            </div>
          </div>
        )}

        <h2 className={`text-2xl font-bold mb-6 ${
          currentSection.isDeepDive ? 'text-purple-900' : 'text-gray-900'
        }`}>
          {currentSection.title}
        </h2>

        <div className="prose prose-custom max-w-none">
          {currentSection.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <h3 key={idx} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  {paragraph.replace(/\*\*/g, '')}
                </h3>
              );
            }
            return <p key={idx} className="mb-4 leading-relaxed text-gray-700">{paragraph}</p>;
          })}
        </div>
      </div>

      {showTeachingReceipt && (
        <TeachingReceipt
          mastered={acidBaseChapter.teachingReceipt.mastered}
          selfCheckQuestions={acidBaseChapter.teachingReceipt.selfCheckQuestions}
          checkedQuestions={checkedQuestions}
          onQuestionToggle={handleQuestionToggle}
        />
      )}

      {currentSectionId < 9 && (currentSectionId + 1) % 3 === 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-blue-900 font-medium">
            ✓ Checkpoint: You've completed {currentSectionId + 1} sections. Nice work!
          </p>
        </div>
      )}

      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button
          onClick={() => currentSectionId > 0 && goToSection(currentSectionId - 1)}
          disabled={currentSectionId === 0}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            currentSectionId === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          ← Previous
        </button>

        <button
          onClick={() => currentSectionId < acidBaseChapter.sections.length - 1 && goToSection(currentSectionId + 1)}
          disabled={currentSectionId === acidBaseChapter.sections.length - 1}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            currentSectionId === acidBaseChapter.sections.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : currentSection.isDeepDive
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
              : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
          }`}
        >
          {currentSectionId === 9 ? 'Enter Deep Dive →' : 'Next →'}
        </button>
      </div>
    </div>
  );
}