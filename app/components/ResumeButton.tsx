'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ResumeButtonProps {
  moduleSlug: string;
}

export default function ResumeButton({ moduleSlug }: ResumeButtonProps) {
  const [lastSection, setLastSection] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`pupilmd_progress_${moduleSlug}`);
    if (saved) {
      setLastSection(parseInt(saved));
    }
  }, [moduleSlug]);

  if (lastSection === null || lastSection === 0) {
    return null;
  }

  return (
    <Link
      href={`/module/${moduleSlug}/crashchapter?section=${lastSection}`}
      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
    >
      Resume from Section {lastSection} →
    </Link>
  );
}