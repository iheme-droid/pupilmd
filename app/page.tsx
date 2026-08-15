'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleLogout = () => {
    window.location.replace('/api/logout');
  };

  // Pillars customized with emotional color palettes, targeted glows, matching icons, and explicit routing endpoints
  const pillars = [
    {
      title: "PupilMD Library (Core)",
      desc: "The home of storytelling. Features Marables, studio-quality audio, 2D videographics, and downloadable PDFs for offline study.",
      icon: "📖",
      color: "#0A84FF", // Trusting/Deep Focal Blue
      glow: "0 20px 40px rgba(10, 132, 255, 0.25)",
      iconBg: "rgba(10, 132, 255, 0.06)",
      iconBgHover: "rgba(10, 132, 255, 0.18)",
      href: "/coming-soon?pillar=library", // REDIRECTED TO COMING SOON
      isLocked: true
    },
    {
      title: "PupilMD CBT (The Crucible)",
      desc: "A high-stakes testing environment with strict anti-distraction protocols (auto-submission on tab-switching) and 300-question mock exams to build \"exam stamina.\"",
      icon: "🔥", // Intensity/Refining Fire
      color: "#FF3B30", // High-Stakes Focus Crimson
      glow: "0 20px 40px rgba(255, 59, 48, 0.25)",
      iconBg: "rgba(255, 59, 48, 0.06)",
      iconBgHover: "rgba(255, 59, 48, 0.18)",
      href: "/coming-soon?pillar=cbt", // REDIRECTED TO COMING SOON
      isLocked: true
    },
    {
      title: "PupilMD Arcade (The Clinical Arcade)",
      desc: "Addictive, gamified \"reflex training\" designed to turn high-yield facts (ECGs, Histology, Pharm) into instant clinical instincts.",
      icon: "🕹️", // Gamification/Reflex
      color: "#AF52DE", // Dopamine/Engaging Neon Purple
      glow: "0 20px 40px rgba(175, 82, 222, 0.25)",
      iconBg: "rgba(175, 82, 222, 0.06)",
      iconBgHover: "rgba(175, 82, 222, 0.18)",
      href: "/coming-soon?pillar=arcade", // REDIRECTED TO COMING SOON
      isLocked: true
    },
    {
      title: "PupilPreppies (The Board Breaker)",
      desc: "A specialized database of thousands of pseudo-questions tailored for major global exams like the USMLE and UKMLA.",
      icon: "🥋", // Disciplinary Force/Striking Through
      color: "#34C759", // Growth/Success Emerald Green
      glow: "0 20px 40px rgba(52, 199, 89, 0.25)",
      iconBg: "rgba(52, 199, 89, 0.06)",
      iconBgHover: "rgba(52, 199, 89, 0.18)",
      href: "/coming-soon?pillar=preppies", // REDIRECTED TO COMING SOON
      isLocked: true
    },
    {
      title: "\"Let MARO Explain\"",
      desc: "An on-demand tutor that instantly breaks down any complex concept into its simplest, most understandable narrative skeleton.",
      icon: "🤖", // Intelligent/Guiding Agent
      color: "#FF9500", // Clarity/Intellect Amber Gold
      glow: "0 20px 40px rgba(255, 149, 0, 0.25)",
      iconBg: "rgba(255, 149, 0, 0.06)",
      iconBgHover: "rgba(255, 149, 0, 0.18)",
      href: "/coming-soon?pillar=explain", // REDIRECTED TO COMING SOON
      isLocked: true
    },
    {
      title: "Marable",
      desc: "is a community platform where the medical world is unveiled through stories — stories that move you and teach you at the same time. It is both a literary space and a learning system, open to medical professionals & students; writers & readers of all backgrounds and any lover of stories at all; built on the belief that the best way to understand any concept is to first feel it.",
      icon: "💖", // Human Empathy/Connection
      color: "#FF2D55", // Deep Emotional Velvet Rose
      glow: "0 20px 40px rgba(255, 45, 85, 0.25)",
      iconBg: "rgba(255, 45, 85, 0.06)",
      iconBgHover: "rgba(255, 45, 85, 0.18)",
      href: "/marable", // ACTIVE CORE PILLAR
      isLocked: false
    }
  ];

  return (
    <div style={{ background: '#F7F8FA', minHeight: '100vh', scrollBehavior: 'smooth' }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ background: '#0D0F14', padding: '80px 24px 96px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(10,132,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(88,86,214,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 13px', background: 'rgba(10,132,255,0.15)', border: '1px solid rgba(10,132,255,0.3)', borderRadius: '99px', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.8rem' }}>✨</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#60A5FA' }}>Powered by Marable™</span>
          </div>

          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.4rem)', letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.12, marginBottom: '20px' }}>
            Learn Medicine by{' '}
            <span style={{ background: 'linear-gradient(135deg, #0A84FF 0%, #5856D6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              First Understanding
            </span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto 40px' }}>
            Grasp complex medical concepts in under 90 minutes through narrative-based learning — not memorisation.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="#pillars" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '15px 32px', background: '#0A84FF', color: '#fff',
              fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.92rem',
              borderRadius: '12px', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(10,132,255,0.35)',
            }}>
              Start Learning
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────────── */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {[
            { value: '+17.6%', label: 'Test score improvement' },
            { value: '8.2/10', label: 'Average student rating' },
            { value: '50–75%', label: 'Faster than textbooks' },
            { value: '5/6', label: 'Would recommend' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '24px 36px', textAlign: 'center' as const, borderRight: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
              <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', color: '#0A84FF', margin: '0 0 4px' }}>{stat.value}</p>
              <p style={{ color: '#7A818F', fontSize: '0.78rem', margin: 0, fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Pillars of PupilMD ─────────────────────────────── */}
      <section id="pillars" style={{ maxWidth: '1120px', margin: '0 auto', padding: '72px 24px 0' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#0A84FF', marginBottom: '10px' }}>
            Features
          </p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.03em', color: '#0D0F14', margin: 0 }}>
            The Pillars of PupilMD
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {pillars.map((pillar, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (pillar.isLocked) {
                  alert(`${pillar.title} is coming soon! Redirecting you to Marable.`);
                  router.push('/marable');
                } else {
                  router.push(pillar.href);
                }
              }}
              style={{
                background: '#fff',
                borderRadius: '24px',
                border: hoveredIndex === i ? `1px solid ${pillar.color}` : '1px solid rgba(0,0,0,0.07)',
                padding: '36px',
                boxShadow: hoveredIndex === i ? pillar.glow : '0 4px 20px rgba(0,0,0,0.04)',
                transform: hoveredIndex === i ? 'scale(1.04) translateY(-5px)' : 'scale(1) translateY(0)',
                transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxSizing: 'border-box'
              }}
            >
              {/* Distinct Relatable Icon Header Container */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: hoveredIndex === i ? pillar.iconBgHover : pillar.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  flexShrink: 0,
                  transition: 'background 0.3s ease'
                }}>
                  {pillar.icon}
                </div>
                <h3 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontWeight: 800, 
                  fontSize: '1.2rem', 
                  letterSpacing: '-0.02em', 
                  color: hoveredIndex === i ? pillar.color : '#0D0F14', 
                  margin: 0,
                  transition: 'color 0.3s ease'
                }}>
                  {pillar.title}
                </h3>
              </div>

              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', lineHeight: 1.7, color: '#3A3F4B', margin: 0 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section style={{ background: '#0D0F14', padding: '72px 24px', marginTop: '72px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#0A84FF', marginBottom: '10px' }}>The Method</p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>How PupilMD Works</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { step: '01', icon: '📚', title: 'Start with Story', desc: 'Every concept begins with a Marable™ — a relatable story from everyday life that mirrors the medical principle.', color: '#0A84FF' },
              { step: '02', icon: '🎯', title: 'Build Understanding', desc: 'Progress through sections that layer complexity naturally, moving from story to science seamlessly.', color: '#5856D6' },
              { step: '03', icon: '✅', title: 'Validate Learning', desc: 'Complete each module with a Teaching Receipt™ that reinforces exactly what you have mastered.', color: '#34C759' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.1em', color: item.color }}>{item.step}</span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                  <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#0A84FF', marginBottom: '8px' }}>Student Voices</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.03em', color: '#0D0F14', margin: 0 }}>What Students Are Saying</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[
            { quote: 'Using marables to explain medical concepts turned revision into something that felt more like reading a storybook than studying.', name: 'Saniya Sagar', detail: 'Final Year · India · Medicine', color: '#0A84FF', bg: 'rgba(10,132,255,0.06)' },
            { quote: 'PupilMD made difficult topics much easier to understand. The questions really forced me to think clinically.', name: 'Karen alias', detail: 'Year 3 · Nigeria · Optometry', color: '#5856D6', bg: 'rgba(88,86,214,0.06)' },
            { quote: 'It helps in the learning of courses while using a shorter period of time and it gives better explanations.', name: 'Joyleen', detail: 'Year 3 · Zimbabwe · Medicine', color: '#5856D6', bg: 'rgba(88,86,214,0.06)' }
          ].map((t, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.07)', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', marginBottom: '20px' }}>💬</div>
              <blockquote style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.97rem', color: '#0D0F14', lineHeight: 1.65, margin: '0 0 20px' }}>"{t.quote}"</blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '99px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.85rem', color: t.color, flexShrink: 0 }}>{t.name[0]}</div>
                <div>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#0D0F14', margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', color: '#7A818F', margin: 0 }}>{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA & Logout ─────────────────────────────────────── */}
      <section style={{ background: '#0D0F14', padding: '72px 24px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' as const, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(10,132,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#0A84FF', marginBottom: '12px' }}>Ready?</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#fff', margin: '0 0 16px' }}>Start Learning Medicine the Right Way</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '32px' }}>Browse the full PupilMD Library — 6 years of medical school, reimagined through storytelling.</p>

          <Link href="#pillars" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '15px 32px', background: '#0A84FF', color: '#fff',
            fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.92rem',
            borderRadius: '12px', textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(10,132,255,0.3)',
            marginBottom: '48px'
          }}>
            Browse PupilMD
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* --- LOG OUT BUTTON --- */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
            <button 
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.3)',
                fontFamily: "'Sora', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}
            >
              Log Out of PupilMD
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}