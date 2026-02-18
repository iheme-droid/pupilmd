import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <img 
                src="/logo.png" 
                alt="PupilMD" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Pupil<span className="text-blue-600">MD</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#modules" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
              Modules
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}