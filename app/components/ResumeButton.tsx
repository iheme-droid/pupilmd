'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ResumeButton({ moduleSlug }: { moduleSlug: string }) {
  const [section, setSection] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`pupilmd_progress_${moduleSlug}`);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setSection(data.currentSection || 0);
      } catch {
        setSection(Number(saved));
      }
    }
  }, [moduleSlug]);

  if (section === null || section === 0) return null;

  return (
    <Link href={`/module/${moduleSlug}/crashchapter?section=${section}`} className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg">
      Resume Lesson {section} →
    </Link>
  );
}