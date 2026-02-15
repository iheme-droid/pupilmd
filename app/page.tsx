import Link from 'next/link';
import ModuleCard from './components/ModuleCard';
import { cellularInjuryChapter } from './data/cellularInjury';
import { acidBaseChapter } from './data/acidBase';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 opacity-5"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Learning Medicine By First Understanding
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have a grasp of medical concepts (in under 90 mins) with narrative-based explanations sponsored by Marable™.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link 
              href="#modules"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Start Learning →
            </Link>
            <Link 
              href="#about"
              className="px-8 py-4 bg-white text-blue-700 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What is Marable Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What is a Marable™?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A <span className="font-semibold text-blue-700">Marable™</span> (medical + parable) is our unique approach to medical education. 
                Instead of starting with complex terminology, we begin with relatable everyday stories that mirror the medical concepts you need to understand.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your brain learns better through narrative. We leverage this by teaching you medicine the way humans have shared knowledge for millennia: through stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRASHCHAPTER Explanation */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Introducing: CRASHCHAPTER™</h2>
          <p className="text-blue-50 mb-6 text-lg leading-relaxed">
            Each CRASHCHAPTER condenses a full pathophysiology chapter into a digestible, story-driven learning experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                <span>📖</span> Sections 0-9: Core understanding
              </h3>
              <p className="text-blue-50">
                <span className="font-semibold text-white">under 90 mins</span> · Master the essential concepts through Marable™-first learning
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                <span>🔬</span> Section 10: Deep Dive
              </h3>
              <p className="text-blue-50">
                <span className="font-semibold text-white">5-7 mins</span> · Optional advanced content for those who want to go deeper
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
              <span>🎯</span> Every CRASHCHAPTER Includes:
            </h3>
            <ul className="space-y-2 text-blue-50">
              <li className="flex items-start gap-2">
                <span className="text-orange-300 font-bold">✓</span>
                <span>A relatable Marable™ that introduces concepts naturally</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300 font-bold">✓</span>
                <span>Progressive sections that build understanding step-by-step</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300 font-bold">✓</span>
                <span>A Teaching Receipt™ to validate your learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300 font-bold">✓</span>
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
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start with Story</h3>
            <p className="text-gray-600">
              Every concept begins with a Marable™—a relatable story from everyday life that mirrors the medical principle.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Understanding</h3>
            <p className="text-gray-600">
              Progress through sections that layer complexity naturally, moving from story to science seamlessly.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Validate Learning</h3>
            <p className="text-gray-600">
              Complete each CRASHCHAPTER with a Teaching Receipt™ that reinforces what you've mastered.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn Medicine Differently?</h2>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            Join students who are discovering that medical education doesn't have to be about memorization.
          </p>
          <Link 
            href="#modules"
            className="inline-block px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Start Your First CRASHCHAPTER →
          </Link>
        </div>
      </section>
    </div>
  );
}