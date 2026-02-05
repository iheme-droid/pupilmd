import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Pupil
              </span>
              <span className="text-3xl font-bold text-gray-900">MD</span>
            </div>
            <div className="h-8 w-0.5 bg-gray-300" />
            <span className="text-sm text-gray-600 font-medium hidden sm:inline">
              Applying medicine simply
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link href="/#modules" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Modules
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}