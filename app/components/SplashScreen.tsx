'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show splash screen when launched from home screen (standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const hasSeenSplash = sessionStorage.getItem('pupilmd_splash_shown');

    if (isStandalone && !hasSeenSplash) {
      setShow(true);
      sessionStorage.setItem('pupilmd_splash_shown', 'true');
      
      // Hide splash after 2.5 seconds
      setTimeout(() => {
        setShow(false);
      }, 2500);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <Image 
          src="/icon-512.png" 
          alt="PupilMD" 
          width={120} 
          height={120}
          priority
        />
      </div>
      <div className="splash-text">PupilMD</div>
      <div className="splash-tagline">Learning Medicine By First Understanding</div>
    </div>
  );
}