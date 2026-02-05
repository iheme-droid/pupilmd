import Link from 'next/link';

interface SectionCardProps {
  sectionId: number;
  title: string;
  isDeepDive?: boolean;
  isCompleted?: boolean;
  moduleSlug: string;
}

export default function SectionCard({ 
  sectionId, 
  title, 
  isDeepDive, 
  isCompleted,
  moduleSlug 
}: SectionCardProps) {
  return (
    <Link 
      href={`/module/${moduleSlug}/crashchapter?section=${sectionId}`}
      className={`block p-4 rounded-lg border-2 transition-all ${
        isDeepDive 
          ? 'border-purple-200 bg-purple-50 hover:border-purple-400' 
          : 'border-gray-200 bg-white hover:border-blue-400'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
            isCompleted 
              ? 'bg-green-500 text-white' 
              : isDeepDive 
              ? 'bg-purple-200 text-purple-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {isCompleted ? '✓' : sectionId}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            {isDeepDive && (
              <span className="text-xs text-purple-600">Optional Deep Dive</span>
            )}
          </div>
        </div>
        <span className="text-gray-400">→</span>
      </div>
    </Link>
  );
}