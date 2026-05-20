import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    setEnabled(true);

    let rafId;
    let tx = 0;
    let ty = 0;
    let ox = 0;
    let oy = 0;
    let ix = 0;
    let iy = 0;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener('mousemove', move);

    const animate = () => {
      const outer = document.querySelector('.cursor-outer');
      const inner = document.querySelector('.cursor-inner');

      ox += (tx - ox) * 0.15;
      oy += (ty - oy) * 0.15;
      ix += (tx - ix) * 0.25;
      iy += (ty - iy) * 0.25;

      if (outer) outer.style.transform = `translate(${ox}px, ${oy}px)`;
      if (inner) inner.style.transform = `translate(${ix}px, ${iy}px)`;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-outer" />
      <div className="cursor-inner" />
    </>
  );
}
