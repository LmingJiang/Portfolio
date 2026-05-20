import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'news', label: 'Journal' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' }
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'bg-[#0a0a0af2] backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-20">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-100">Complex Systems</p>
          <button onClick={() => setOpen((v) => !v)} className="relative h-10 w-10" aria-label="toggle menu">
            <motion.span animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }} className="absolute left-2 right-2 top-1/2 h-px bg-white" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="absolute left-2 right-2 top-1/2 h-px bg-white" />
            <motion.span animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }} className="absolute left-2 right-2 top-1/2 h-px bg-white" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.6 }} className="fixed inset-0 z-40 bg-[#0a0a0af2] backdrop-blur-[20px]">
            <div className="mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 pb-10 pt-24 md:px-20">
              <div className="space-y-4">
                {links.map((item, idx) => (
                  <motion.button key={item.id} onClick={() => go(item.id)} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="flex items-baseline gap-4">
                    <span className="text-sm text-white/40">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-5xl md:text-6xl">{item.label}</span>
                  </motion.button>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <p>LinkedIn · Behance · Email</p>
                <p>© 2026 Portfolio</p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
