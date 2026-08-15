'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import TeachingReceipt from '@/app/components/TeachingReceipt';

// Safe runtime resolution directly bypassing configuration layer
const pharmacodynamicsChapter = require('../../../../data/pharmacodynamics.json');

function PharmacodynamicsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSectionId = parseInt(searchParams.get('section') || '0');
  const currentSection = pharmacodynamicsChapter.sections.find((s: any) => s.id === currentSectionId);
  const totalSections = pharmacodynamicsChapter.sections.length;

  const [checkedQuestions, setCheckedQuestions] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`pupilmd_teaching_receipt_${pharmacodynamicsChapter.moduleSlug}`);
    if (saved) setCheckedQuestions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(`pupilmd_progress_${pharmacodynamicsChapter.moduleSlug}`, JSON.stringify({
      currentSection: currentSectionId,
      lastUpdated: new Date().toISOString(),
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSectionId]);

  const handleQuestionToggle = (index: number) => {
    const newChecked = checkedQuestions.includes(index)
      ? checkedQuestions.filter(i => i !== index)
      : [...checkedQuestions, index];
    setCheckedQuestions(newChecked);
    localStorage.setItem(`pupilmd_teaching_receipt_${pharmacodynamicsChapter.moduleSlug}`, JSON.stringify(newChecked));
  };

  const goToSection = (id: number) => {
    router.push(`/module/pharmacodynamics/crashchapter?section=${id}`);
    setSidebarOpen(false);
  };

  if (!currentSection) return (
    <div style={{ padding: '48px 24px' }}>
      <p style={{ color: '#FF2D55' }}>Section not found.</p>
      <Link href="/module/pharmacodynamics" style={{ color: '#FF6B35' }}>Back to module</Link>
    </div>
  );

  const isDeepDive = currentSection.isDeepDive;
  const showTeachingReceipt = currentSectionId === 13;
  const progressPct = Math.round((currentSectionId / (totalSections - 1)) * 100);
  const accent = '#FF6B35';

const parseContent = (content: string) => {
  const merged = content.replace(/\*\*Grasp Tonic 🧃\*\*\n\n/g, '**Grasp Tonic 🧃** ');

  return merged.split('\n\n').map((block, idx) => {
    if (block.startsWith('**Grasp Tonic 🧃**')) {
      const text = block.replace('**Grasp Tonic 🧃**', '').trim();
      return (
        <div key={idx} style={{
          margin: '32px 0',
          background: 'linear-gradient(135deg, #0A1F2E 0%, #0D2B1F 100%)',
          borderRadius: '16px',
          padding: '22px 26px',
          border: '1px solid rgba(52,199,89,0.25)',
          boxShadow: '0 4px 24px rgba(52,199,89,0.1)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1.2rem' }}>🧃</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#34C759' }}>
              Grasp Tonic
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(52,199,89,0.2)' }} />
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.78)', margin: 0, fontStyle: 'italic' }}>
            {text}
          </p>
        </div>
      );
    }

    if (block.startsWith('**') && block.endsWith('**')) {
      return (
        <h3 key={idx} style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#0D0F14', margin: '28px 0 10px', letterSpacing: '-0.01em' }}>
          {block.replace(/\*\*/g, '')}
        </h3>
      );
    }

    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={idx} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', lineHeight: 1.85, color: '#3A3F4B', marginBottom: '18px' }}>
        {parts.map((part, i) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={i} style={{ fontWeight: 700, color: '#0D0F14' }}>{part.replace(/\*\*/g, '')}</strong>
            : part
        )}
      </p>
    );
  });
};

  return (
    <div style={{ background: isDeepDive ? '#FFF8EE' : '#F7F8FA', minHeight: '100vh' }}>

      {/* Sidebar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, height: '100%', width: '300px',
        background: '#fff', boxShadow: '4px 0 32px rgba(0,0,0,0.12)',
        zIndex: 50, transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column' as const,
      }}>
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#0D0F14', margin: 0 }}>Sections</h3>
          <button onClick={() => setSidebarOpen(false)} style={{ background: '#F7F8FA', border: 'none', borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" fill="none" stroke="#7A818F" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
          {pharmacodynamicsChapter.sections.map((section: any) => {
            const isActive = section.id === currentSectionId;
            const isDone = section.id < currentSectionId;
            return (
              <button key={section.id} onClick={() => goToSection(section.id)}
                style={{ width: '100%', textAlign: 'left' as const, padding: '10px 12px', borderRadius: '10px', border: 'none', cursor: 'pointer', marginBottom: '4px', background: isActive ? accent : 'transparent', transition: 'all 0.18s ease' }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = '#F7F8FA'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '6px', flexShrink: 0,
                    background: isActive ? 'rgba(255,255,255,0.2)' : isDone ? 'rgba(52,199,89,0.12)' : section.isDeepDive ? 'rgba(255,149,0,0.1)' : 'rgba(0,0,0,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6rem', fontWeight: 800,
                    color: isActive ? '#fff' : isDone ? '#34C759' : section.isDeepDive ? '#FF9500' : '#7A818F',
                    fontFamily: "'Sora', sans-serif",
                  }}>
                    {isDone ? '✓' : section.id}
                  </div>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: isActive ? 700 : 500, fontSize: '0.78rem', color: isActive ? '#fff' : '#0D0F14', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, flex: 1 }}>
                    {section.title}
                  </p>
                  {section.isDeepDive && !isActive && (
                    <span style={{ fontSize: '0.55rem', fontWeight: 700, textTransform: 'uppercase' as const, color: '#FF9500', background: 'rgba(255,149,0,0.1)', padding: '1px 5px', borderRadius: '99px', flexShrink: 0 }}>Dive</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 40, backdropFilter: 'blur(4px)' }} />
      )}

      {/* Sticky top bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ height: '3px', background: '#ECEEF2' }}>
          <div style={{ height: '100%', width: `${progressPct}%`, background: isDeepDive ? 'linear-gradient(90deg, #FF9500, #FF6B35)' : `linear-gradient(90deg, ${accent}, #FF2D55)`, transition: 'width 0.5s ease' }} />
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => setSidebarOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#F7F8FA', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', cursor: 'pointer', flexShrink: 0 }}>
            <svg width="15" height="15" fill="none" stroke="#3A3F4B" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.75rem', color: '#3A3F4B' }}>Sections</span>
          </button>
          <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.78rem', color: '#0D0F14', margin: 0, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>
            Pharmacodynamics
          </p>
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.72rem', color: '#7A818F', flexShrink: 0 }}>
            {currentSectionId + 1} / {totalSections}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ marginBottom: '32px' }}>
          {isDeepDive && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '10px', marginBottom: '14px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', background: 'rgba(255,149,0,0.1)', border: '1px solid rgba(255,149,0,0.25)', borderRadius: '99px' }}>
                <span style={{ fontSize: '0.8rem' }}>🔬</span>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#FF9500' }}>Deep Dive · Optional</span>
              </div>
              <Link href="/library" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#0D0F14', borderRadius: '99px', fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.08)' }}>
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Library
              </Link>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0, background: isDeepDive ? 'rgba(255,149,0,0.1)' : 'rgba(255,107,53,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.85rem', color: isDeepDive ? '#FF9500' : accent }}>
              {currentSectionId}
            </div>
            <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', letterSpacing: '-0.03em', color: '#0D0F14', margin: 0, lineHeight: 1.2 }}>
              {currentSection.title}
            </h1>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '20px', border: `1px solid ${isDeepDive ? 'rgba(255,149,0,0.15)' : 'rgba(0,0,0,0.07)'}`, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 'clamp(24px, 4vw, 40px)', marginBottom: '28px' }}>
          {parseContent(currentSection.content)}
        </div>

        {showTeachingReceipt && (
          <TeachingReceipt
            mastered={pharmacodynamicsChapter.teachingReceipt.mastered}
            selfCheckQuestions={pharmacodynamicsChapter.teachingReceipt.selfCheckQuestions}
            checkedQuestions={checkedQuestions}
            moduleSlug="pharmacodynamics"
            onQuestionToggle={handleQuestionToggle}
          />
        )}

        {!isDeepDive && currentSectionId > 0 && currentSectionId % 3 === 0 && currentSectionId !== 13 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', background: 'rgba(52,199,89,0.06)', border: '1px solid rgba(52,199,89,0.2)', borderRadius: '12px', marginBottom: '28px' }}>
            <span style={{ fontSize: '1.2rem' }}>🎯</span>
            <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.85rem', color: '#2D9B57', margin: 0 }}>
              Checkpoint — {currentSectionId} sections complete. Keep going!
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' as const }}>
          <Link href="/library" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', background: '#fff',
            border: '1px solid rgba(0,0,0,0.1)', borderRadius: '99px',
            fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.78rem',
            color: '#3A3F4B', textDecoration: 'none', transition: 'all 0.2s ease',
          }}>
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Library
          </Link>

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', background: '#fff',
            border: '1px solid rgba(0,0,0,0.1)', borderRadius: '99px',
            fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.78rem',
            color: '#3A3F4B', cursor: 'pointer', transition: 'all 0.2s ease',
          }}>
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
            Back to Top
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <button
            onClick={() => currentSectionId > 0 && goToSection(currentSectionId - 1)}
            disabled={currentSectionId === 0}
            style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '12px 20px', background: currentSectionId === 0 ? '#F7F8FA' : '#fff', border: `1px solid ${currentSectionId === 0 ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.12)'}`, borderRadius: '11px', cursor: currentSectionId === 0 ? 'not-allowed' : 'pointer', fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.85rem', color: currentSectionId === 0 ? '#C4C9D4' : '#3A3F4B', transition: 'all 0.2s ease' }}
          >
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
            Previous
          </button>

          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' as const, justifyContent: 'center', flex: 1 }}>
            {pharmacodynamicsChapter.sections.map((s: any) => (
              <button key={s.id} onClick={() => goToSection(s.id)} style={{ width: s.id === currentSectionId ? '20px' : '7px', height: '7px', borderRadius: '99px', border: 'none', cursor: 'pointer', background: s.id === currentSectionId ? (isDeepDive ? '#FF9500' : accent) : s.id < currentSectionId ? '#34C759' : '#ECEEF2', transition: 'all 0.25s ease', padding: 0 }} />
            ))}
          </div>

          <button
            onClick={() => currentSectionId < totalSections - 1 && goToSection(currentSectionId + 1)}
            disabled={currentSectionId === totalSections - 1}
            style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '12px 20px', background: currentSectionId === totalSections - 1 ? '#F7F8FA' : accent, border: 'none', borderRadius: '11px', cursor: currentSectionId === totalSections - 1 ? 'not-allowed' : 'pointer', fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: currentSectionId === totalSections - 1 ? '#C4C9D4' : '#fff', boxShadow: currentSectionId === totalSections - 1 ? 'none' : `0 4px 16px rgba(255,107,53,0.3)`, transition: 'all 0.2s ease' }}
          >
            {currentSectionId === 13 ? 'Enter Deep Dive' : 'Next'}
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PharmacodynamicsCrashChapter() {
  return (
    <Suspense fallback={
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ height: '32px', background: '#ECEEF2', borderRadius: '8px', width: '60%', marginBottom: '16px' }} />
        <div style={{ height: '16px', background: '#ECEEF2', borderRadius: '8px', width: '40%' }} />
      </div>
    }>
      <PharmacodynamicsContent />
    </Suspense>
  );
}