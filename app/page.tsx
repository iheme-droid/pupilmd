import Link from 'next/link';
import ModuleCard from './components/ModuleCard';
import { cellularInjuryChapter } from './data/cellularInjury';
import { acidBaseChapter } from './data/acidBase';

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
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
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Start Learning →
            </Link>
          </div>
        </div>
      </section>

      {/* CRASHCHAPTER Explanation */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Introducing: CRASHCHAPTER™
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Each CRASHCHAPTER condenses a full pathophysiology chapter into a digestible, story-driven learning experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 text-gray-900">
                <span>📖</span> Sections 0-9: Core understanding
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold text-purple-700">under 90 mins</span> · Master the essential concepts through Marable™-first learning
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 text-gray-900">
                <span>🔬</span> Section 10: Deep Dive
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold text-orange-700">5-7 mins</span> · Optional advanced content for those who want to go deeper
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-2 text-gray-900">
              <span>🎯</span> Every CRASHCHAPTER Includes:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>A relatable Marable™ that introduces concepts naturally</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Progressive sections that build understanding step-by-step</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">✓</span>
                <span>A Teaching Receipt™ to validate your learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
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
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 card-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Start with Story</h3>
            <p className="text-gray-600 text-center">
              Every concept begins with a Marable™—a relatable story from everyday life that mirrors the medical principle.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 card-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Build Understanding</h3>
            <p className="text-gray-600 text-center">
              Progress through sections that layer complexity naturally, moving from story to science seamlessly.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 card-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              3
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