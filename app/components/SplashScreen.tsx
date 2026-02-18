'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         (window.navigator as any).standalone === true;
    
    const hasSeenSplash = sessionStorage.getItem('pupilmd_splash_shown');

    if (isStandalone && !hasSeenSplash) {
      sessionStorage.setItem('pupilmd_splash_shown', 'true');
      
      setTimeout(() => {
        setShouldShow(false);
      }, 5000);
    } else {
      setShouldShow(false);
    }
  }, []);

  // On first render, always show splash to prevent flash
  if (!mounted || shouldShow) {
    return (
      <>
        <style dangerouslySetInnerHTML={{__html: `
          #__next { 
            display: none !important; 
          }
          body > main,
          body > header,
          body > footer {
            display: none !important;
          }
          @keyframes splashScaleIn {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          @keyframes splashFadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}} />
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
          zIndex: 999999
        }}>
          <div style={{
            width: '160px',
            height: '160px',
            marginBottom: '2rem',
            animation: 'splashScaleIn 0.8s ease-out'
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
            letterSpacing: '0.05em',
            animation: 'splashFadeIn 0.5s ease-in 0.5s both'
          }}>
            PupilMD
          </div>
          <div style={{
            color: '#ffffff',
            fontSize: '0.95rem',
            marginTop: '0.75rem',
            textAlign: 'center',
            maxWidth: '90%',
            animation: 'splashFadeIn 0.5s ease-in 1s both'
          }}>
            Learning Medicine By First Understanding
          </div>
        </div>
      </>
    );
  }

  return null;
}