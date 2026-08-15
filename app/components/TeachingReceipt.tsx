'use client';

import { useState } from 'react';

export interface SelfCheckQuestion {
  question: string;
  hint: string;
  explanation: string;
}

interface TeachingReceiptProps {
  mastered: string[];
  // Fixed typing: It can be a simple string or the full object with hints/explanations
  selfCheckQuestions: (string | SelfCheckQuestion)[]; 
  checkedQuestions: number[];
  moduleSlug: string;
  onQuestionToggle: (index: number) => void;
}

const ENCOURAGEMENTS = [
  "You're making excellent progress! 🌟",
  "Keep going — you're building real clinical understanding! 💪",
  "Every question you answer is a concept that will never leave you! 🎯",
  "Outstanding work — this is how doctors think! 🩺",
  "You've got this! The more you explain, the more it sticks! ✨",
  "More than halfway there — incredible work! 🚀",
  "You're in the zone! 🔥",
  "Almost there — this is mastery in action! 🏆",
];

export default function TeachingReceipt({
  mastered,
  selfCheckQuestions,
  checkedQuestions,
  onQuestionToggle,
}: TeachingReceiptProps) {
  const [learningMode, setLearningMode] = useState(true);
  const [shownHints, setShownHints] = useState<number[]>([]);
  const [shownExplanations, setShownExplanations] = useState<number[]>([]);

  const allChecked = selfCheckQuestions.length > 0 && checkedQuestions.length === selfCheckQuestions.length;
  const pct = Math.round((checkedQuestions.length / selfCheckQuestions.length) * 100) || 0;

  const toggleHint = (i: number) =>
    setShownHints(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  const toggleExplanation = (i: number) =>
    setShownExplanations(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  const encouragement = checkedQuestions.length > 0
    ? ENCOURAGEMENTS[Math.min(checkedQuestions.length - 1, ENCOURAGEMENTS.length - 1)]
    : null;

  return (
    <div style={{ marginBottom: '28px' }}>

      {/* ── Header ─────────────────────────────────────────── */}
      <div style={{
        background: '#0D0F14',
        borderRadius: '20px 20px 0 0',
        padding: '24px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '14px',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(52,199,89,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>🎓</div>
          <div>
            <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#fff', margin: '0 0 3px', letterSpacing: '-0.02em' }}>Teaching Receipt™</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
              You've completed the core sections. Here's what you now understand:
            </p>
          </div>
        </div>

        {/* Learning Mode toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 600, fontSize: '0.75rem', color: learningMode ? '#34C759' : 'rgba(255,255,255,0.4)' }}>
            {learningMode ? '🌱 Learning Mode ON' : '✅ Check Mode'}
          </span>
          <button
            onClick={() => setLearningMode(!learningMode)}
            style={{
              width: '46px', height: '26px', borderRadius: '99px', border: 'none', cursor: 'pointer',
              background: learningMode ? '#34C759' : 'rgba(255,255,255,0.15)',
              position: 'relative', transition: 'background 0.25s ease', flexShrink: 0,
            }}
          >
            <div style={{
              width: '20px', height: '20px', borderRadius: '99px', background: '#fff',
              position: 'absolute', top: '3px',
              left: learningMode ? '23px' : '3px',
              transition: 'left 0.25s ease',
              boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
            }} />
          </button>
        </div>
      </div>

      {/* ── Learning Mode banner ───────────────────────────── */}
      {learningMode && (
        <div style={{
          background: 'rgba(52,199,89,0.07)',
          border: '1px solid rgba(52,199,89,0.2)',
          borderTop: 'none',
          padding: '14px 28px',
          display: 'flex', alignItems: 'flex-start', gap: '10px',
        }}>
          <span style={{ fontSize: '1rem', flexShrink: 0 }}>🌱</span>
          <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: '0.85rem', color: '#2D9B57', lineHeight: 1.6, margin: 0 }}>
            <strong style={{ fontFamily: "var(--font-sora), sans-serif" }}>Learning Mode is ON.</strong>{' '}
            This is not a test. Use hints and full answers freely — the goal is understanding, not performance.
            Check off each question once you genuinely understand it well enough to explain it to someone else.
          </p>
        </div>
      )}

      {/* ── What you mastered ─────────────────────────────── */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderTop: 'none', padding: '24px 28px' }}>
        <p style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A818F', marginBottom: '14px' }}>
          What You Now Understand
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          {mastered.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px 14px', background: 'rgba(52,199,89,0.05)', borderRadius: '10px', border: '1px solid rgba(52,199,89,0.12)' }}>
              <span style={{ color: '#34C759', fontWeight: 800, fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>✓</span>
              <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: '0.875rem', color: '#3A3F4B', lineHeight: 1.55 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Self-check ────────────────────────────────────── */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderTop: 'none', padding: '24px 28px', borderRadius: '0 0 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <p style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A818F', margin: 0 }}>
            Self-Check Questions
          </p>
          <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 700, fontSize: '0.82rem', color: pct === 100 ? '#34C759' : '#0A84FF' }}>
            {checkedQuestions.length} / {selfCheckQuestions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div style={{ height: '6px', background: '#ECEEF2', borderRadius: '99px', overflow: 'hidden', marginBottom: '20px' }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            background: pct === 100 ? '#34C759' : 'linear-gradient(90deg, #0A84FF, #5856D6)',
            borderRadius: '99px',
            transition: 'width 0.5s ease',
          }} />
        </div>

        {/* Encouragement */}
        {encouragement && !allChecked && (
          <div style={{ padding: '12px 16px', background: 'rgba(10,132,255,0.05)', borderRadius: '12px', border: '1px solid rgba(10,132,255,0.12)', marginBottom: '18px' }}>
            <p style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 600, fontSize: '0.83rem', color: '#0A84FF', margin: 0 }}>
              {encouragement}
            </p>
          </div>
        )}

        {/* Questions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {selfCheckQuestions.map((item, i) => {
            const isChecked = checkedQuestions.includes(i);
            const hintShown = shownHints.includes(i);
            const explanationShown = shownExplanations.includes(i);
            const q = typeof item === 'string' ? { question: item, hint: '', explanation: '' } : item;

            return (
              <div key={i} style={{
                borderRadius: '14px',
                border: `1px solid ${isChecked ? 'rgba(52,199,89,0.25)' : 'rgba(0,0,0,0.07)'}`,
                background: isChecked ? 'rgba(52,199,89,0.04)' : '#F7F8FA',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
              }}>

                {/* Question row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px' }}>
                  <div
                    onClick={() => onQuestionToggle(i)}
                    style={{
                      width: '22px', height: '22px', borderRadius: '6px', flexShrink: 0, marginTop: '1px',
                      background: isChecked ? '#34C759' : '#fff',
                      border: `2px solid ${isChecked ? '#34C759' : '#D1D5DB'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', transition: 'all 0.18s ease',
                    }}
                  >
                    {isChecked && (
                      <svg width="11" height="11" fill="none" stroke="#fff" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span
                    onClick={() => onQuestionToggle(i)}
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: '0.9rem',
                      color: isChecked ? '#2D9B57' : '#3A3F4B',
                      lineHeight: 1.6,
                      fontWeight: isChecked ? 500 : 400,
                      cursor: 'pointer',
                      flex: 1,
                    }}
                  >
                    {q.question}
                  </span>
                </div>

                {/* Learning Mode buttons */}
                {learningMode && !isChecked && q.hint && (
                  <div style={{ padding: '0 16px 14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {q.hint && (
                      <button
                        onClick={() => toggleHint(i)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          padding: '6px 14px', borderRadius: '99px',
                          border: '1px solid rgba(10,132,255,0.3)',
                          background: hintShown ? 'rgba(10,132,255,0.1)' : 'transparent',
                          fontFamily: "var(--font-sora), sans-serif", fontWeight: 600, fontSize: '0.73rem',
                          color: '#0A84FF', cursor: 'pointer', transition: 'all 0.18s ease',
                        }}
                      >
                        💡 {hintShown ? 'Hide hint' : 'Show hint'}
                      </button>
                    )}
                    {q.explanation && (
                      <button
                        onClick={() => toggleExplanation(i)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          padding: '6px 14px', borderRadius: '99px',
                          border: '1px solid rgba(88,86,214,0.3)',
                          background: explanationShown ? 'rgba(88,86,214,0.1)' : 'transparent',
                          fontFamily: "var(--font-sora), sans-serif", fontWeight: 600, fontSize: '0.73rem',
                          color: '#5856D6', cursor: 'pointer', transition: 'all 0.18s ease',
                        }}
                      >
                        📖 {explanationShown ? 'Hide answer' : 'See full answer'}
                      </button>
                    )}
                  </div>
                )}

                {/* Hint */}
                {hintShown && !isChecked && (
                  <div style={{ margin: '0 16px 14px', padding: '12px 14px', background: 'rgba(10,132,255,0.06)', borderRadius: '10px', border: '1px solid rgba(10,132,255,0.15)' }}>
                    <p style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0A84FF', margin: '0 0 6px' }}>💡 Hint</p>
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: '0.875rem', color: '#3A3F4B', lineHeight: 1.7, margin: 0 }}>{q.hint}</p>
                  </div>
                )}

                {/* Full explanation */}
                {explanationShown && !isChecked && (
                  <div style={{ margin: '0 16px 14px', padding: '14px 16px', background: 'rgba(88,86,214,0.05)', borderRadius: '10px', border: '1px solid rgba(88,86,214,0.15)' }}>
                    <p style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5856D6', margin: '0 0 8px' }}>📖 Full Answer</p>
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: '0.875rem', color: '#3A3F4B', lineHeight: 1.78, margin: 0 }}>{q.explanation}</p>
                    <button
                      onClick={() => {
                        onQuestionToggle(i);
                        setShownExplanations(prev => prev.filter(x => x !== i));
                        setShownHints(prev => prev.filter(x => x !== i));
                      }}
                      style={{
                        marginTop: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '8px 16px', background: '#34C759', border: 'none', borderRadius: '9px',
                        fontFamily: "var(--font-sora), sans-serif", fontWeight: 700, fontSize: '0.78rem',
                        color: '#fff', cursor: 'pointer',
                      }}
                    >
                      ✓ Got it — mark as understood
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer status */}
        <div style={{
          marginTop: '18px', padding: '14px 18px',
          background: allChecked ? 'rgba(52,199,89,0.07)' : 'rgba(10,132,255,0.04)',
          borderRadius: '12px',
          border: `1px solid ${allChecked ? 'rgba(52,199,89,0.2)' : 'rgba(10,132,255,0.1)'}`,
        }}>
          <p style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 600, fontSize: '0.85rem', color: allChecked ? '#2D9B57' : '#0A84FF', margin: 0 }}>
            {allChecked
              ? "🎉 Exceptional work! You've mastered this module. The Deep Dive awaits — it's optional but worth it."
              : learningMode
                ? "🌱 Use hints and full answers freely — there's no shame in it. Understanding is the only goal."
                : "✅ Check off each question once you can explain it confidently to someone else."}
          </p>
        </div>
      </div>
    </div>
  );
}