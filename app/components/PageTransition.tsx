'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [opacity, setOpacity] = useState(1);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // Fade out
      setOpacity(0);
      const timer = setTimeout(() => {
        // Swap content and fade in
        setDisplayChildren(children);
        setOpacity(1);
        prevPathname.current = pathname;
        window.scrollTo(0, 0);
      }, 220);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      style={{
        opacity,
        transition: 'opacity 0.22s ease',
        minHeight: '100vh',
      }}
    >
      {displayChildren}
    </div>
  );
}