'use client';

import React from 'react';
import Link from 'next/link';

export default function AcidBaseModule() {
  return (
    <div style={{ padding: '40px', color: '#fff', backgroundColor: '#0D0F14', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
      <Link href="/" style={{ color: '#FF2D55', textDecoration: 'none', fontWeight: 600 }}>
        ← Back to Home
      </Link>
      <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: '2.5rem', marginTop: '20px' }}>Acid-Base Disorders</h1>
      <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px' }}>
        Explore metabolic and respiratory acidosis, alkalosis, and compensation mechanisms.
      </p>
    </div>
  );
}