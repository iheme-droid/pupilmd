'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show splash screen when launched from home screen (standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const hasSeenSplash = sessionStorage.getItem('pupilmd_splash_shown');

    if (isStandalone && !hasSeenSplash) {
      setShow(true);
      sessionStorage.setItem('pupilmd_splash_shown', 'true');
      
      // Hide splash after 5 seconds
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: 'fadeOut 0.5s ease-in-out 4.5s forwards'
    }}>
      <div style={{
        width: '120px',
        height: '120px',
        marginBottom: '1rem',
        animation: 'scaleIn 0.8s ease-out'
      }}>
        {/* Using direct img tag with absolute path */}
        <img 
          src="/icon-512.png" 
          alt="PupilMD Logo" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <div style={{
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginTop: '1rem',
        animation: 'fadeIn 0.5s ease-in 0.5s both'
      }}>
        PupilMD
      </div>
      <div style={{
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '0.875rem',
        marginTop: '0.5rem',
        animation: 'fadeIn 0.5s ease-in 1s both'
      }}>
        Learning Medicine By First Understanding
      </div>
    </div>
  );
}