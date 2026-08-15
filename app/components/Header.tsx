'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <nav style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      background: 'rgba(13, 15, 20, 0.85)', 
      backdropFilter: 'blur(12px)', 
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '14px 24px'
    }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* --- 1. PupilMDlogo linking to the Home Page --- */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Logo container replaces placeholder 'P' */}
          <div style={{ 
            width: '32px', height: '32px', 
            background: '#000', 
            borderRadius: '8px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden', // Ensures logo stays in bounds
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <img 
              src="/logo.png" // Replace with your actual filename (e.g., logo.svg)
              alt="PupilMD Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>

          {/* --- 2. Title text styled straight (fontStyle removed) --- */}
          <h1 style={{ 
            fontFamily: "'Sora', sans-serif", // Ensure this font is imported in layout
            fontWeight: 800, 
            fontSize: '1.2rem', 
            letterSpacing: '-0.03em', 
            color: '#fff', 
            margin: 0,
            fontStyle: 'normal' // Force straight text (replaces italic)
          }}>
            Pupil<span style={{ color: '#0A84FF' }}>MD</span>
          </h1>
        </Link>
        
        {/* Navigation links or profile section */}
        <div style={{ display: 'flex', gap: '20px' }}>
           <Link href="/library" style={{ 
             fontFamily: "'Sora', sans-serif", 
             fontWeight: 700, 
             fontSize: '0.75rem', 
             color: '#0A84FF', 
             textDecoration: 'none',
             textTransform: 'uppercase',
             letterSpacing: '0.05em'
           }}>Library</Link>
        </div>
      </div>
    </nav>
  );
}