import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ background: '#F7F8FA', minHeight: '100vh' }}>

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
            <Link href="/library" style={{
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

      {/* ── Introducing Marable™ ──────────────────────────────── */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '72px 24px 0' }}>
        <div style={{
          background: '#fff', borderRadius: '24px',
          border: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{ padding: '32px 36px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(10,132,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>📖</div>
            <div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em', color: '#0D0F14', margin: '0 0 4px' }}>
                Introducing Marable™
              </h2>
              <p style={{ color: '#7A818F', fontSize: '0.875rem', margin: 0 }}>
                Every module begins with a story — not a definition.
              </p>
            </div>
          </div>

          {/* Body — logo + description */}
          <div style={{
            padding: '40px 36px 44px',
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap' as const,
          }}>
            {/* Logo */}
            <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
              <img
                src="/marables-logo.png"
                alt="Marables™"
                style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  boxShadow: '0 8px 40px rgba(10,132,255,0.15)',
                }}
              />
            </div>

            {/* Description */}
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.85,
                color: '#3A3F4B',
                margin: 0,
              }}>
                <strong style={{ fontFamily: "'Sora', sans-serif", color: '#0D0F14' }}>Marable™</strong> is a community platform where the medical world is unveiled through stories — stories that move you and teach you at the same time. It is both a literary space and a learning system, open to medical professionals & students; writers & readers of all backgrounds and any lover of stories at all; built on the belief that the best way to understand any concept is to first feel it.
              </p>

              <a
                href="https://marables.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  marginTop: '24px',
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: '#0A84FF',
                  textDecoration: 'none',
                  padding: '10px 18px',
                  background: 'rgba(10,132,255,0.07)',
                  borderRadius: '10px',
                  border: '1px solid rgba(10,132,255,0.15)',
                  transition: 'all 0.2s ease',
                }}
              >
                Visit Marable™
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
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
            {
              quote: 'Using marables to explain medical concepts turned revision into something that felt more like reading a storybook than studying. A creative and effective approach to learning.',
              name: 'Saniya Sagar',
              detail: 'Final Year · India · Medicine',
              color: '#0A84FF',
              bg: 'rgba(10,132,255,0.06)',
            },
            {
              quote: 'PupilMD made difficult topics much easier to understand. The questions really forced me to think clinically, not just memorize.',
              name: 'Karen alias',
              detail: 'Year 3 · Nigeria · Optometry',
              color: '#5856D6',
              bg: 'rgba(88,86,214,0.06)',
            },
            {
              quote: 'It helps in the learning of courses while using a shorter period of time and it gives better explanations for understanding.',
              name: 'Joyleen',
              detail: 'Year 3 · Zimbabwe · Medicine',
              color: '#5856D6',
              bg: 'rgba(88,86,214,0.06)',
            }              
          ].map((t, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.07)', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', marginBottom: '20px' }}>💬</div>
              <blockquote style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.97rem', letterSpacing: '-0.01em', color: '#0D0F14', lineHeight: 1.65, margin: '0 0 20px' }}>
                "{t.quote}"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '99px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.85rem', color: t.color, flexShrink: 0 }}>
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#0D0F14', margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', color: '#7A818F', margin: 0 }}>{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: '#0D0F14', padding: '72px 24px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' as const, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(10,132,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#0A84FF', marginBottom: '12px' }}>Ready?</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.03em', color: '#fff', margin: '0 0 16px' }}>
            Start Learning Medicine the Right Way
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '32px' }}>
            Browse the full PupilMD Library — 6 years of medical school, reimagined through storytelling.
          </p>
          <Link href="/library" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '15px 32px', background: '#0A84FF', color: '#fff',
            fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.92rem',
            borderRadius: '12px', textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(10,132,255,0.3)',
          }}>
            Browse the Library
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}