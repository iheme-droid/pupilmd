'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         (window.navigator as any).standalone === true;
    
    const hasSeenSplash = sessionStorage.getItem('pupilmd_splash_shown');

    if (isStandalone && !hasSeenSplash) {
      // Prevent body scroll immediately
      document.body.style.overflow = 'hidden';
      
      setShow(true);
      sessionStorage.setItem('pupilmd_splash_shown', 'true');
      
      setTimeout(() => {
        setShow(false);
        document.body.style.overflow = '';
      }, 5000);
    }
  }, []);

  if (!show) return null;

  return (
    <>
      <style>{`
        body { overflow: hidden !important; }
      `}</style>
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
        zIndex: 999999,
        animation: 'fadeOut 0.5s ease-in-out 4.5s forwards'
      }}>
        <div style={{
          width: '160px',
          height: '160px',
          marginBottom: '2rem',
          animation: 'scaleIn 0.8s ease-out'
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
          animation: 'fadeIn 0.5s ease-in 0.5s both',
          letterSpacing: '0.05em'
        }}>
          PupilMD
        </div>
        <div style={{
          color: '#ffffff',
          fontSize: '0.95rem',
          marginTop: '0.75rem',
          animation: 'fadeIn 0.5s ease-in 1s both',
          textAlign: 'center',
          maxWidth: '90%'
        }}>
          Learning Medicine By First Understanding
        </div>
      </div>
    </>
  );
}