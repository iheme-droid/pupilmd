import Link from 'next/link';

export default function SectionCard({ sectionId, title, isDeepDive, isCompleted, moduleSlug }: any) {
  return (
    <Link href={`/module/${moduleSlug}/crashchapter?section=${sectionId}`}
      className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${
        isDeepDive ? 'border-purple-100 bg-purple-50' : 'border-gray-100 bg-white'
      } hover:border-blue-400 hover:shadow-md`}>
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
          isCompleted ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'
        }`}>
          {isCompleted ? '✓' : sectionId}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{title}</h4>
          {isDeepDive && <span className="text-[10px] uppercase tracking-widest text-purple-500 font-bold">Deep Dive</span>}
        </div>
      </div>
      <span className="text-gray-300">→</span>
    </Link>
  );
}