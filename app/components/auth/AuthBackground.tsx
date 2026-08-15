import Image from 'next/image';

export default function AuthBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
      
      {/* The leading slash '/' in the src is strictly required. 
        This tells Next.js to look in the 'public' folder at the root of your project. 
      */}
      <Image
        src="/pupilmdwallpaper.png"
        alt="PupilMD Background Wallpaper"
        fill
        priority
        quality={100}
        className="object-cover opacity-40 select-none" 
      />
      
      {/* Dark gradient overlay to ensure your sleek white text and inputs 
        remain perfectly readable against the background.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none mix-blend-multiply"></div>
      
    </div>
  );
}