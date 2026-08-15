import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b border-white/5 bg-[#0D0F14]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50">
      
      {/* 1. PupilMD "Home" Button */}
      <Link 
        href="/" 
        className="flex items-center gap-2 group transition-opacity hover:opacity-80"
      >
        {/* You can replace this div with your actual logo img if available */}
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
          <span className="text-white text-xs font-bold">P</span>
        </div>
        
        <h1 className="text-xl font-bold tracking-tighter text-white italic">
          Pupil<span className="text-blue-500">MD</span>
        </h1>
      </Link>

      {/* 2. Optional: Navigation Links (Current Page: Library) */}
      <div className="flex items-center gap-4">
        <Link 
          href="/library" 
          className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20"
        >
          Library
        </Link>
      </div>

    </nav>
  );
}