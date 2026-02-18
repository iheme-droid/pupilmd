'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (PWA)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         (window.navigator as any).standalone === true;
    
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
      zIndex: 99999,
      animation: 'fadeOut 0.5s ease-in-out 4.5s forwards'
    }}>
      {/* Logo - Blue gradient box with PM */}
      <div style={{
        width: '140px',
        height: '140px',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'scaleIn 0.8s ease-out'
      }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)'
        }}>
          PM
        </div>
      </div>
      
      <div style={{
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '1rem',
        animation: 'fadeIn 0.5s ease-in 0.5s both',
        letterSpacing: '0.05em'
      }}>
        PupilMD
      </div>
      <div style={{
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '0.95rem',
        marginTop: '0.75rem',
        animation: 'fadeIn 0.5s ease-in 1s both',
        textAlign: 'center',
        maxWidth: '90%'
      }}>
        Learning Medicine By First Understanding
      </div>
    </div>
  );
}