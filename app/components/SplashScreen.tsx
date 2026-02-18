'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         (window.navigator as any).standalone === true;
    
    const hasSeenSplash = sessionStorage.getItem('pupilmd_splash_shown');

    if (isStandalone && !hasSeenSplash) {
      setShouldShow(true);
      sessionStorage.setItem('pupilmd_splash_shown', 'true');
      
      setTimeout(() => {
        setShouldShow(false);
      }, 5000);
    }
  }, []);

  if (!shouldShow) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        #__next, body > div:not(.splash-overlay) {
          display: none !important;
        }
      `}} />
      <div className="splash-overlay" style={{
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
        zIndex: 999999
      }}>
        <div style={{
          width: '160px',
          height: '160px',
          marginBottom: '2rem'
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
          letterSpacing: '0.05em'
        }}>
          PupilMD
        </div>
        <div style={{
          color: '#ffffff',
          fontSize: '0.95rem',
          marginTop: '0.75rem',
          textAlign: 'center',
          maxWidth: '90%'
        }}>
          Learning Medicine By First Understanding
        </div>
      </div>
    </>
  );
}