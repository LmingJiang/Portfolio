import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [v, setV] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setV(p * 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="fixed left-0 top-0 z-[60] h-[2px] bg-cyan-300" style={{ width: `${v}%` }} />;
}
