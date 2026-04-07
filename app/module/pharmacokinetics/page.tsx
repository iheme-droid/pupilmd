import Link from 'next/link';
import { pharmacokineticsChapter } from '@/app/data/pharmacokinetics';

export default function PharmacokineticsModule() {
  const totalSections = pharmacokineticsChapter.sections.length;

  return (
    <div style={{ background: '#F7F8FA', minHeight: '100vh' }}>
      <section style={{ background: '#0D0F14', padding: '56px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '420px', height: '420px', background: 'radial-gradient(circle, rgba(88,86,214,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '10%', width: '340px', height: '340px', background: 'radial-gradient(circle, rgba(10,132,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
            <Link href="/library" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Library</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Year 2</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Pharmacology</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: 'rgba(88,86,214,0.2)', border: '1px solid rgba(88,86,214,0.4)', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.75rem' }}>💊</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#A78BFA' }}>Pharmacology · Year 2</span>
          </div>

          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.12, marginBottom: '14px' }}>
            {pharmacokineticsChapter.chapterTitle}
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '560px' }}>
            What the body does to a drug — from the first dose to the last trace eliminated. Covering Katzung, Lippincott & Rang and Dale.
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' as const, marginBottom: '36px' }}>
            {[
              { icon: '⏱️', text: 'Under 90 mins' },
              { icon: '📖', text: `${totalSections} sections` },
              { icon: '🧃', text: 'Grasp Tonics included' },
              { icon: '✨', text: 'Marable™ storytelling' },
              { icon: '🎓', text: 'Teaching Receipt™' },
            ].map((pill, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 14px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '99px' }}>
                <span style={{ fontSize: '0.8rem' }}>{pill.icon}</span>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 500, fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>{pill.text}</span>
              </div>
            ))}
          </div>

          <Link href="/module/pharmacokinetics/crashchapter?section=0" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '15px 32px', background: '#5856D6', color: '#fff', fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.95rem', borderRadius: '13px', textDecoration: 'none', boxShadow: '0 8px 32px rgba(88,86,214,0.35)' }}>
            Begin Module
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>

      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 80px', display: 'flex', flexDirection: 'column' as const, gap: '20px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(88,86,214,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>📘</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#0D0F14', margin: 0 }}>What You'll Learn</h2>
          </div>
          <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {[
              'Routes of administration and how they determine bioavailability',
              'First-pass metabolism and why it matters for oral drugs',
              'Volume of distribution, plasma protein binding, and the blood-brain barrier',
              'Phase I (CYP450) and Phase II metabolism with key enzyme interactions',
              'Renal excretion — filtration, secretion, reabsorption, and ion trapping',
              'Half-life, clearance, steady state, and how to design a dosing regimen',
              'Drug interactions at every step of ADME',
              'Special populations — renal/hepatic failure, elderly, pregnancy',
              'Therapeutic drug monitoring and non-linear pharmacokinetics',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px', background: '#F7F8FA', borderRadius: '10px' }}>
                <span style={{ color: '#5856D6', fontWeight: 800, fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#3A3F4B', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(88,86,214,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>📚</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#0D0F14', margin: 0 }}>Source Textbooks</h2>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
            {["Katzung's Basic & Clinical Pharmacology", 'Lippincott Illustrated Reviews: Pharmacology', 'Rang & Dale Pharmacology'].map((book, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', background: 'rgba(88,86,214,0.04)', borderRadius: '10px', border: '1px solid rgba(88,86,214,0.1)' }}>
                <span style={{ fontSize: '1rem' }}>📖</span>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.85rem', color: '#3A3F4B' }}>{book}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(88,86,214,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🗂️</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#0D0F14', margin: 0 }}>Module Sections</h2>
          </div>
          <div style={{ padding: '12px' }}>
            {pharmacokineticsChapter.sections.map((section, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '10px', background: section.isDeepDive ? 'rgba(255,149,0,0.04)' : 'transparent', borderBottom: i < pharmacokineticsChapter.sections.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0, background: section.isDeepDive ? 'rgba(255,149,0,0.1)' : 'rgba(88,86,214,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.7rem', color: section.isDeepDive ? '#FF9500' : '#5856D6' }}>
                  {section.id}
                </div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#3A3F4B', flex: 1 }}>{section.title}</span>
                {section.isDeepDive && <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#FF9500', background: 'rgba(255,149,0,0.1)', padding: '2px 8px', borderRadius: '99px' }}>Deep Dive</span>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#0D0F14', borderRadius: '20px', padding: '28px', display: 'flex', gap: '16px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(88,86,214,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>✨</div>
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#fff', margin: '0 0 8px' }}>The Marable™ Approach + Grasp Tonics</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
              This module begins with a story about a letter's postal journey — mirroring drug ADME. Throughout the sections, Grasp Tonics offer quick real-world analogies to lock in each concept before moving on.
            </p>
          </div>
        </div>

        <Link href="/module/pharmacokinetics/crashchapter?section=0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px', padding: '17px 32px', background: '#5856D6', color: '#fff', fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.95rem', borderRadius: '13px', textDecoration: 'none', boxShadow: '0 8px 32px rgba(88,86,214,0.25)' }}>
          Begin Module
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </Link>
      </section>
    </div>
  );
}