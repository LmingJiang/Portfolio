import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    setEnabled(true);
    const body = document.body;
    body.classList.add('cursor-none');
    const outer = document.querySelector('.cursor-outer');
    const inner = document.querySelector('.cursor-inner');
    let tx = 0, ty = 0, ox = 0, oy = 0, ix = 0, iy = 0;

    const mm = (e) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener('mousemove', mm);
    const raf = () => {
      ox += (tx - ox) * 0.15; oy += (ty - oy) * 0.15; ix += (tx - ix) * 0.25; iy += (ty - iy) * 0.25;
      if (outer) outer.style.transform = `translate(${ox}px, ${oy}px)`;
      if (inner) inner.style.transform = `translate(${ix}px, ${iy}px)`;
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => { window.removeEventListener('mousemove', mm); body.classList.remove('cursor-none'); };
  }, []);

  if (!enabled) return null;
  return <><div className="cursor-outer" /><div className="cursor-inner" /></>;
}
