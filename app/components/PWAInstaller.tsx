'use client';
import { useEffect, useState } from 'react';

export default function PWAInstaller() {
  const [prompt, setPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!prompt) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white p-4 rounded-2xl shadow-2xl border border-blue-100 flex flex-col gap-3 max-w-xs animate-in slide-in-from-bottom">
      <p className="text-sm font-medium">Add PupilMD to your home screen?</p>
      <div className="flex gap-2">
        <button onClick={() => prompt.prompt()} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold">Install</button>
        <button onClick={() => setPrompt(null)} className="text-gray-400 text-xs">Dismiss</button>
      </div>
    </div>
  );
}