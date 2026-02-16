'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ModuleCardProps {
  title: string;
  description: string;
  slug: string;
  sections: number;
  duration: string;
  color: 'blue' | 'orange';
  chapterData: {
    moduleSlug: string;
  };
}

export default function ModuleCard({ 
  title, 
  description, 
  slug, 
  sections, 
  duration, 
  color,
  chapterData 
}: ModuleCardProps) {
  const [progress, setProgress] = useState<{ currentSection: number } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`pupilmd_progress_${chapterData.moduleSlug}`);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing progress:', e);
      }
    }
  }, [chapterData.moduleSlug]);

  const completedSections = progress ? progress.currentSection + 1 : 0;
  const percentComplete = (completedSections / sections) * 100;
  const hasStarted = completedSections > 0;

  const colorClasses = {
    blue: {
      gradient: 'from-blue-600 via-cyan-500 to-purple-600',
      border: 'border-blue-200',
      text: 'text-blue-700',
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      hover: 'hover:border-blue-400',
      progressBar: 'from-blue-600 to-cyan-500',
      badge: 'bg-blue-100 text-blue-700',
      shadow: 'hover:shadow-blue-200'
    },
    orange: {
      gradient: 'from-orange-500 via-pink-500 to-purple-600',
      border: 'border-orange-200',
      text: 'text-orange-700',
      bg: 'bg-gradient-to-br from-orange-50 to-pink-50',
      hover: 'hover:border-orange-400',
      progressBar: 'from-orange-500 to-pink-500',
      badge: 'bg-orange-100 text-orange-700',
      shadow: 'hover:shadow-orange-200'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`${colors.bg} rounded-xl shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-2xl ${colors.shadow} transform hover:-translate-y-1 overflow-hidden card-glow`}>
      <div className={`h-2 bg-gradient-to-r ${colors.gradient}`}></div>
      
      <div className="p-6 bg-white/70 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
            {sections} sections
          </span>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-4">
          {/* Duration */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{duration}</span>
          </div>

          {/* Progress Bar */}
          {hasStarted && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className={`font-semibold ${colors.text}`}>
                  {completedSections} / {sections} sections
                </span>
                <span className="text-gray-500">{Math.round(percentComplete)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-2.5 bg-gradient-to-r ${colors.progressBar} rounded-full transition-all duration-500 relative overflow-hidden`}
                  style={{ width: `${percentComplete}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <Link 
            href={hasStarted 
              ? `/module/${slug}/crashchapter?section=${progress?.currentSection}` 
              : `/module/${slug}`
            }
            className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
          >
            {hasStarted ? 'Continue Learning →' : 'Begin Module →'}
          </Link>
        </div>
      </div>
    </div>
  );
}