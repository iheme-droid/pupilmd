'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { acidBaseChapter } from '@/app/data/acidBase';
import TeachingReceipt from '@/app/components/TeachingReceipt';

function AcidBaseCrashChapterContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sectionParam = searchParams.get('section');
  const currentSectionId = sectionParam ? parseInt(sectionParam) : 0;
  const currentSection = acidBaseChapter.sections.find(s => s.id === currentSectionId);

  const [checkedQuestions, setCheckedQuestions] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    setSidebarOpen(false);
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
  const isDeepDive = currentSection.isDeepDive;

  return (
    <div className={isDeepDive ? 'module-bg-cream-deep min-h-screen' : 'module-bg-cream min-h-screen'}>
      {/* Section Navigation Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${sidebarOpen ? 'section-nav-open' : 'section-nav-closed'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Jump to Section</h3>
            <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
            {acidBaseChapter.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => goToSection(section.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  section.id === currentSectionId
                    ? section.isDeepDive
                      ? 'bg-black text-white'
                      : 'bg-blue-600 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                } ${section.isDeepDive ? 'border-2 border-purple-300' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Section {section.id}</span>
                    {section.id <= currentSectionId && (
                      <span className="text-green-500">✓</span>
                    )}
                  </div>
                  {section.isDeepDive && (
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Deep Dive</span>
                  )}
                </div>
                <div className="text-sm mt-1 opacity-80">{section.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6 flex items-center gap-4">
          {/* HAMBURGER MENU - MORE VISIBLE WITH LABEL */}
          <button
            onClick={() => setSidebarOpen(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isDeepDive 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>Sections</span>
          </button>
          
          <Link 
            href="/module/acid-base" 
            className={`font-semibold ${
              isDeepDive ? 'text-white hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            ← Back to Module
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className={`text-3xl font-bold ${isDeepDive ? 'text-gray-900' : 'text-gray-900'}`}>
              {acidBaseChapter.chapterTitle}
            </h1>
            <span className={`text-sm ${isDeepDive ? 'text-gray-900' : 'text-gray-600'}`}>
              Section {currentSectionId} of 10
            </span>
          </div>
          <div className={`w-full ${isDeepDive ? 'bg-purple-100' : 'bg-gray-200'} rounded-full h-2`}>
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                isDeepDive ? 'bg-purple-700' : 'bg-blue-600'
              }`}
              style={{ width: `${(currentSectionId / 10) * 100}%` }}
            />
          </div>
        </div>

        {currentSectionId === 0 && !isDeepDive && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">What's a Marable™?</h3>
                <p className="text-blue-800 text-sm">
                  A Marable™ (medical + parable) is an everyday story that mirrors complex medical concepts. 
                  We start here because your brain learns better through stories than abstract facts.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className={`rounded-lg shadow-sm border p-8 mb-8 ${
          isDeepDive 
            ? 'bg-white border-gray-200' 
            : 'bg-white border-gray-200'
        }`}>
          {currentSection.isDeepDive && (
            <div className="bg-purple-900 border border-purple-700 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-xl">🔬</span>
                <div>
                  <span className="text-purple-300 font-semibold text-sm">DEEP DIVE</span>
                  <p className="text-sm text-purple-200 mt-1">
                    Optional advanced content. You've already mastered the core concepts!
                  </p>
                </div>
              </div>
            </div>
          )}

          <h2 className={`text-2xl font-bold mb-6 ${
            isDeepDive ? 'text-gray-900' : 'text-gray-900'
          }`}>
            {currentSection.title}
          </h2>

          <div className="prose prose-custom max-w-none">
            {currentSection.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={idx} className={`text-xl font-semibold mt-6 mb-3 ${
                    isDeepDive ? 'text-gray-900' : 'text-gray-900'
                  }`} style={}>
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              return (
                <p key={idx} className={`mb-4 leading-relaxed ${
                  isDeepDive ? 'text-gray-900' : 'text-gray-700'
                }`}>
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {showTeachingReceipt && (
          <TeachingReceipt
            mastered={acidBaseChapter.teachingReceipt.mastered}
            selfCheckQuestions={acidBaseChapter.teachingReceipt.selfCheckQuestions}
            checkedQuestions={checkedQuestions}
            moduleSlug="acid-base" 
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
                : isDeepDive
                ? 'bg-gray-800 text-white hover:bg-gray-700'
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
                : isDeepDive
                ? 'bg-purple-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-blue-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
          >
            {currentSectionId === 9 ? 'Enter Deep Dive →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AcidBaseCrashChapter() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    }>
      <AcidBaseCrashChapterContent />
    </Suspense>
  );
}