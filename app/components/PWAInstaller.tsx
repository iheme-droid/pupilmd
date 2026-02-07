'use client';

import { useEffect, useState } from 'react';

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`User response: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  if (!showInstallButton) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className="bg-white border-2 border-blue-500 rounded-lg shadow-xl p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <span className="text-3xl">📱</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              Install PupilMD
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Add to your home screen for quick access and offline learning.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all"
              >
                Install
              </button>
              <button
                onClick={() => setShowInstallButton(false)}
                className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}