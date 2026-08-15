'use client';

interface Pillar {
  title: string;
  badge: string;
  description: string;
  color: string;
}

export default function PillarsSection() {
  const pillars: Pillar[] = [
    {
      title: "PupilMD Library",
      badge: "Core",
      description: "The home of storytelling. Features Marables, studio-quality audio, 2D videographics, and downloadable PDFs for offline study.",
      color: "from-blue-500/20 to-cyan-500/5"
    },
    {
      title: "PupilMD CBT",
      badge: "The Crucible",
      description: "A high-stakes testing environment with strict anti-distraction protocols (auto-submission on tab-switching) and 300-question mock exams to build 'exam stamina.'",
      color: "from-red-500/20 to-orange-500/5"
    },
    {
      title: "PupilMD Arcade",
      badge: "The Clinical Arcade",
      description: "Addictive, gamified 'reflex training' designed to turn high-yield facts (ECGs, Histology, Pharm) into instant clinical instincts.",
      color: "from-purple-500/20 to-pink-500/5"
    },
    {
      title: "PupilPreppies",
      badge: "The Board Breaker",
      description: "A specialized database of thousands of pseudo-questions tailored for major global exams like the USMLE and UKMLA.",
      color: "from-emerald-500/20 to-teal-500/5"
    },
    {
      title: "Let MARO Explain",
      badge: "AI Narrative Tutor",
      description: "An on-demand tutor that instantly breaks down any complex concept into its simplest, most understandable narrative skeleton.",
      color: "from-amber-500/20 to-yellow-500/5"
    },
    {
      title: "Marable",
      badge: "The Literary Commons",
      description: "A community platform where the medical world is unveiled through stories — stories that move you and teach you at the same time. A space built on the belief that the best way to understand any concept is to first feel it.",
      color: "from-indigo-500/20 to-purple-500/5"
    }
  ];

  return (
    <section className="w-full bg-black py-20 px-4 md:px-8 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#4cb5f9]">
            The Architecture of Learning
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
            The Pillars of PupilMD
          </p>
          <div className="w-12 h-1 bg-[#4cb5f9] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 box-border">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              style={{ borderRadius: '16px' }}
              className={`relative bg-gradient-to-br ${pillar.color} bg-black border border-white/10 p-6 flex flex-col justify-between box-border overflow-hidden group transition-all duration-300 ease-out transform hover:scale-[1.03] hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl shadow-black/80`}
            >
              {/* Card Inner Content */}
              <div className="space-y-4 box-border">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    {pillar.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/90 px-2.5 py-1 rounded-full border border-white/10 whitespace-nowrap group-hover:bg-white/20 group-hover:text-white transition-colors">
                    {pillar.badge}
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Decorative Subtle Bottom Corner Accent Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}