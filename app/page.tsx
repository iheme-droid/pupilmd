import Link from 'next/link';
import ModuleCard from './components/ModuleCard';
import { cellularInjuryChapter } from './data/cellularInjury';
import { acidBaseChapter } from './data/acidBase';
import { BookIcon, MicroscopeIcon, TargetIcon, CheckIcon, ClockIcon, DocumentIcon } from './components/Icons';

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg-home">
      {/* Header Title */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            PupilMD: Learning Medicine By First Understanding
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Have a grasp of medical concepts (in under 90 mins) with narrative-based explanations sponsored by Marable™.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link 
              href="#modules"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:bg-blue-700"
            >
              Start Learning →
            </Link>
          </div>
        </div>
      </section>

      {/* CRASHCHAPTER Explanation */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
          <div className="flex items-center gap-3 mb-4">
            <BookIcon className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Introducing: CRASHCHAPTER™
            </h2>
          </div>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Each CRASHCHAPTER condenses a full pathophysiology chapter into a digestible, story-driven learning experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <BookIcon className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-xl text-gray-900">
                  Sections 0-9: Core understanding
                </h3>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold text-blue-700">under 90 mins</span> · Master the essential concepts through Marable™-first learning
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <MicroscopeIcon className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-xl text-gray-900">
                  Section 10: Deep Dive
                </h3>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold text-purple-700">5-7 mins</span> · Optional advanced content for those who want to go deeper
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <TargetIcon className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-xl text-gray-900">
                Every CRASHCHAPTER Includes:
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>A relatable Marable™ that introduces concepts naturally</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Progressive sections that build understanding step-by-step</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>A Teaching Receipt™ to validate your learning</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Progress tracking so you can pick up where you left off</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Available Modules */}
      <section id="modules" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Available CRASHCHAPTERs
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ModuleCard
            title="Cellular Injury & Adaptation"
            description="Understanding how cells respond to stress, injury, and changing environments"
            slug="cellular-injury"
            sections={11}
            duration="under 90 mins"
            color="blue"
            chapterData={cellularInjuryChapter}
          />
          
          <ModuleCard
            title="Acid-Base & Fluid/Electrolyte Disorders"
            description="Master the fundamentals of pH regulation and electrolyte balance"
            slug="acid-base"
            sections={11}
            duration="under 90 mins"
            color="orange"
            chapterData={acidBaseChapter}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How PupilMD Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Start with Story</h3>
            <p className="text-gray-600 text-center">
              Every concept begins with a Marable™—a relatable story from everyday life that mirrors the medical principle.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TargetIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Build Understanding</h3>
            <p className="text-gray-600 text-center">
              Progress through sections that layer complexity naturally, moving from story to science seamlessly.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <DocumentIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Validate Learning</h3>
            <p className="text-gray-600 text-center">
              Complete each CRASHCHAPTER with a Teaching Receipt™ that reinforces what you've mastered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}