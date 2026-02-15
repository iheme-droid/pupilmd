export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-orange-500 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">PupilMD</p>
            <p className="text-blue-100 text-sm">Learning Medicine By First Understanding</p>
          </div>
          
          <div className="text-center md:text-right text-sm text-blue-100">
            <p>© {new Date().getFullYear()} PupilMD. All rights reserved.</p>
            <p className="mt-1">Powered by Marable™</p>
          </div>
        </div>
      </div>
    </footer>
  );
}