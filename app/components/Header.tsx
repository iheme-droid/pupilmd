import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12">
              <img 
                src="/logo.png" 
                alt="PupilMD" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Pupil<span className="text-blue-600">MD</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#modules" className="text-gray-600 hover:text-gray-900 font-medium">
              Modules
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}