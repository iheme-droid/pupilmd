'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  // Start with true to show splash immediately
  const [show, setShow] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         (window.navigator as any).standalone === true;
    
    const hasSeenSplash = sessionStorage.getItem('pupilmd_splash_shown');

    if (isStandalone && !hasSeenSplash) {
      setShouldRender(true);
      sessionStorage.setItem('pupilmd_splash_shown', 'true');
      
      setTimeout(() => {
        setShow(false);
        setTimeout(() => setShouldRender(false), 500);
      }, 5000);
    } else {
      setShow(false);
      setShouldRender(false);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      background: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999999,
      opacity: show ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out',
      pointerEvents: show ? 'auto' : 'none'
    }}>
      <div style={{
        width: '160px',
        height: '160px',
        marginBottom: '2rem',
        transform: show ? 'scale(1)' : 'scale(0.5)',
        opacity: show ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}>
        <img 
          src="/logo.png" 
          alt="PupilMD" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      
      <div style={{
        color: '#ffffff',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '1rem',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease-in 0.5s',
        letterSpacing: '0.05em'
      }}>
        PupilMD
      </div>
      <div style={{
        color: '#ffffff',
        fontSize: '0.95rem',
        marginTop: '0.75rem',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease-in 1s',
        textAlign: 'center',
        maxWidth: '90%'
      }}>
        Learning Medicine By First Understanding
      </div>
    </div>
  );
}