'use client';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const seen = sessionStorage.getItem('pupilmd_splash');
    
    if (isStandalone && !seen) {
      sessionStorage.setItem('pupilmd_splash', 'true');
      const timer = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      <img src="/logo.png" alt="Logo" className="w-32 h-32 animate-pulse" />
      <h1 className="text-white text-2xl font-bold mt-4">PupilMD</h1>
    </div>
  );
}