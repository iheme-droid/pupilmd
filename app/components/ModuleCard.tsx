'use client';

import Link from 'next/link';

interface ModuleCardProps {
  title: string;
  slug: string;
  duration: string;
  color: string;
}

export default function ModuleCard({ title, slug, duration, color }: ModuleCardProps) {
  return (
    <Link href={`/module/${slug}`} className="group">
      <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-2 h-full" 
          style={{ backgroundColor: color }} 
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
          <span>⏱️ {duration}</span>
        </div>
      </div>
    </Link>
  );
}