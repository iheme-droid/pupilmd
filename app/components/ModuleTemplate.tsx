'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ── Embedded Sub-Component to Resolve 9a.png ── */
interface TeachingReceiptProps {
  masteredItems: string[];
  selfCheckQuestions: string[];
}

function TeachingReceipt({ masteredItems, selfCheckQuestions }: TeachingReceiptProps) {
  // If there are mastered items listed, consider it completed/mastered
  const isMastered = masteredItems && masteredItems.length > 0;

  return (
    <div className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm text-black">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-5 border-b border-black/5 pb-3.5">
        <div>
          <h3 className="font-sans font-extrabold text-lg text-[#0D0F14] m-0 mb-1">
            🧾 Teaching Receipt
          </h3>
          <p className="text-[#7A818F] text-xs m-0">
            Verify your procedural understanding and recall.
          </p>
        </div>
        
        {/* Status Badge */}
        <div className={`font-sans font-bold text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-full ${
          isMastered ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
        }`}>
          {isMastered ? '✓ Mastered' : 'In Progress'}
        </div>
      </div>

      {/* Mastered Concepts */}
      {isMastered && (
        <div className="flex flex-col gap-2.5 mb-4">
          <p className="font-sans font-semibold text-sm text-green-600 m-0">
            Concepts Mastered:
          </p>
          <ul className="m-0 pl-5 flex flex-col gap-1.5 list-disc text-sm text-[#333742]">
            {masteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Self Check Questions */}
      {selfCheckQuestions && selfCheckQuestions.length > 0 ? (
        <div className="flex flex-col gap-2.5 border-t border-black/5 pt-3">
          <p className="font-sans font-semibold text-sm text-[#4A4E5A] m-0 mb-1">
            Self-Check Review Questions:
          </p>
          <ul className="m-0 pl-5 flex flex-col gap-2 list-disc">
            {selfCheckQuestions.map((question, index) => (
              <li key={index} className="text-sm text-[#333742] leading-relaxed">
                {question}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-[#7A818F] text-sm italic m-0">
          No self-check questions assigned to this module.
        </p>
      )}
    </div>
  );
}

/* ── Main Module Template Component ── */
export default function ModuleTemplate({ moduleData }: { moduleData: any }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stars, setStars] = useState(moduleData.initialStars || 0);
  const [streak, setStreak] = useState(12);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [activeDeepDives, setActiveDeepDives] = useState<string[]>([]);

  const toggleDeepDive = (id: string) => {
    setActiveDeepDives(prev => 
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  const currentSection = moduleData.sections[currentStep];
  const isComplete = currentStep === moduleData.sections.length;

  return (
    <div className="min-h-screen bg-[#0A0C10] text-white font-sans selection:bg-[#0A84FF]/30">
      
      {/* ── Top Gamification HUD ── */}
      <nav className="sticky top-0 z-50 bg-[#0A0C10]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/library" className="text-white/50 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2">
            <span className="text-lg">←</span> Library
          </Link>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A84FF]">
            {moduleData.courseTitle}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl drop-shadow-[0_0_10px_rgba(255,149,0,0.5)]">🔥</span>
            <span className="font-bold text-[#FF9500]">{streak} Day Streak</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <span className="text-lg drop-shadow-[0_0_10px_rgba(255,214,10,0.5)]">⭐</span>
            <span className="font-bold text-[#FFD60A]">{stars} XP</span>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 pb-32">
        
        {/* ── Media Header (Story & Audio) ── */}
        {!isComplete && currentStep === 0 && (
          <div className="mb-16 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* 2D Videographic */}
            <div className="w-full aspect-video bg-gradient-to-br from-[#1A1D24] to-[#0A0C10] rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(10,132,255,0.1)]">
              <div className="absolute inset-0 bg-[#0A84FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎬</span>
              <p className="font-bold text-white/80 tracking-wide">Play Marable Videographic</p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {moduleData.title}
            </h1>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setAudioPlaying(!audioPlaying)}
                className="flex items-center gap-3 bg-[#0A84FF]/10 hover:bg-[#0A84FF]/20 text-[#0A84FF] px-5 py-3 rounded-xl font-bold transition-all border border-[#0A84FF]/20"
              >
                <span className="text-xl">{audioPlaying ? '⏸️' : '🎧'}</span>
                {audioPlaying ? 'Pause Studio Narration' : 'Play Studio Narration'}
              </button>
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white/70 px-5 py-3 rounded-xl font-semibold transition-all border border-white/10">
                <span className="text-xl">📄</span> Download PDF
              </button>
            </div>
          </div>
        )}

        {/* ── Dynamic Content Body ── */}
        {!isComplete && (
          <div className="space-y-12">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
               <span className="text-sm">{currentSection.icon}</span>
               <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                 {currentSection.pacerType} Phase
               </span>
            </div>

            <h2 className="text-2xl font-bold text-white">{currentSection.title}</h2>

            {/* Content Blocks Engine */}
            <div className="space-y-12 text-lg text-white/70 leading-relaxed font-light">
               {currentSection.blocks.map((block: any, idx: number) => {
                 
                 // Standard Text
                 if (block.type === 'text') {
                   return <p key={idx}>{block.content}</p>;
                 }

                 // Visual Anchors
                 if (block.type === 'image') {
                   return (
                     <div key={idx} className="w-full bg-white/5 rounded-2xl aspect-video flex items-center justify-center border border-white/10">
                       <span className="text-white/30 text-sm font-semibold uppercase tracking-widest">Visual Anchor Placeholder</span>
                     </div>
                   );
                 }

                 // Grasp Tonic
                 if (block.type === 'grasp-tonic') {
                   return (
                     <div key={idx} className="bg-gradient-to-br from-[#1E112A] to-[#0A0C10] rounded-2xl p-6 border border-[#BF5AF2]/30 shadow-[0_0_20px_rgba(191,90,242,0.1)]">
                       <div className="flex items-center gap-3 mb-3">
                         <span className="text-xl">🧃</span>
                         <h3 className="font-extrabold text-[#BF5AF2] uppercase tracking-widest text-xs">
                           Grasp Tonic
                         </h3>
                       </div>
                       <div className="space-y-3">
                         <p className="text-white/90 font-medium">{block.medicalConcept}</p>
                         <div className="flex items-start gap-3 bg-[#BF5AF2]/10 p-4 rounded-xl border border-[#BF5AF2]/20">
                           <span className="text-[#BF5AF2] shrink-0 mt-1">↳</span>
                           <p className="text-[#E5C8FB] text-base">{block.realLifeReality}</p>
                         </div>
                       </div>
                     </div>
                   );
                 }

                 // Deep Dive
                 if (block.type === 'deep-dive') {
                   const isActive = activeDeepDives.includes(block.id);
                   return (
                     <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                       <button 
                         onClick={() => toggleDeepDive(block.id)}
                         className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                       >
                         <div className="flex items-center gap-3">
                           <span className="text-lg">🔬</span>
                           <span className="font-bold text-white/90">Deep Dive: {block.title}</span>
                         </div>
                         <span className="text-white/40">{isActive ? '−' : '+'}</span>
                       </button>
                       {isActive && (
                         <div className="px-6 pb-6 pt-2 text-base text-white/60 border-t border-white/5 bg-[#0A0C10]/50">
                           {block.content}
                         </div>
                       )}
                     </div>
                   );
                 }

                 return null;
               })}
            </div>
          </div>
        )}

        {/* ── Completion & Route to Arcade ── */}
        {isComplete && (
          <div className="animate-in fade-in zoom-in-95 duration-500 text-center">
             <span className="text-6xl mb-6 block drop-shadow-[0_0_30px_rgba(10,132,255,0.4)]">🏆</span>
             <h2 className="text-3xl font-extrabold text-white mb-4">Module Digested</h2>
             <p className="text-white/50 mb-12">Concepts locked in. It's time to build your clinical reflex.</p>
             
             <Link 
               href={`/arcade/${moduleData.slug}`}
               className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF9500] to-[#FF3B30] text-white px-8 py-4 rounded-2xl font-extrabold text-lg shadow-[0_0_30px_rgba(255,149,0,0.3)] hover:scale-105 transition-transform"
             >
               <span>🎮</span> Enter The Arcade
             </Link>

             <div className="mt-16 text-left">
               <TeachingReceipt 
                 masteredItems={moduleData.teachingReceipt?.mastered ?? []} 
                 selfCheckQuestions={moduleData.teachingReceipt?.questions ?? []} 
               />
             </div>
          </div>
        )}

      </main>

      {/* ── Floating Navigation ── */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0A0C10]/90 backdrop-blur-2xl border-t border-white/5 p-6 flex justify-center z-50">
        <div className="max-w-3xl w-full flex items-center justify-between">
          
          <div className="flex gap-2">
            {moduleData.sections.map((_: any, idx: number) => (
              <div 
                key={idx} 
                className={`h-2 w-12 rounded-full transition-all duration-500 ${
                  idx < currentStep ? 'bg-[#34C759]' : 
                  idx === currentStep ? 'bg-[#0A84FF] shadow-[0_0_15px_rgba(10,132,255,0.5)]' : 'bg-white/10'
                }`}
              />
            ))}
          </div>

          {!isComplete ? (
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentStep(prev => prev + 1);
              }}
              className="bg-[#0A84FF] hover:bg-[#0070E0] text-white px-8 py-3.5 rounded-xl font-extrabold shadow-[0_0_20px_rgba(10,132,255,0.3)] transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Next Phase <span className="text-lg">→</span>
            </button>
          ) : (
            <Link 
              href="/library"
              className="text-white/50 hover:text-white font-bold transition-colors"
            >
              Return to Library
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}