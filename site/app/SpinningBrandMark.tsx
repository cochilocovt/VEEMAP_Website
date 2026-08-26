'use client';

import { CSSProperties, useEffect, useRef, useState } from 'react';

const extrusionLayers = Array.from({ length: 15 }, (_, index) => index - 7);

export default function SpinningBrandMark({ className = '' }: { className?: string }) {
  const root = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    let inView = true;
    const sync = () => setActive(inView && document.visibilityState === 'visible');
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });

    observer.observe(element);
    document.addEventListener('visibilitychange', sync);
    sync();

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  return (
    <span ref={root} className={`brand-mark-3d ${className}`.trim()} data-active={active} aria-hidden="true">
      <span className="brand-mark-3d__rotor">
        {extrusionLayers.map((depth) => (
          <span
            key={depth}
            className="brand-mark-3d__extrusion"
            style={{ '--brand-mark-z': `${depth}px` } as CSSProperties}
          />
        ))}
        <span className="brand-mark-3d__face brand-mark-3d__face--front" />
        <span className="brand-mark-3d__face brand-mark-3d__face--back" />
      </span>
    </span>
  );
}
