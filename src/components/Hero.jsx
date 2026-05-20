import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" id="top">
      <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }} className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3),transparent_45%),linear-gradient(180deg,#06101c_0%,#02060c_100%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-30" />

      <div className="absolute bottom-[12%] left-0 right-0 px-6 md:px-20">
        <motion.h1 initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0)' }} transition={{ duration: 0.8, delay: 0.5 }} className="max-w-4xl font-serif text-4xl leading-[1.08] text-white md:text-7xl">Complex Systems, Clear Experiences.</motion.h1>
        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="mt-5 max-w-2xl text-xl text-cyan-100/90 md:text-3xl">Digital Experience Designer for Enterprise Visualization, Digital Twin & Sales Enablement.</motion.h4>
        <div className="mt-8 flex flex-wrap gap-4">
          <MagneticButton className="rounded-full border border-cyan-300/50 px-6 py-3 text-sm">View Selected Works</MagneticButton>
          <MagneticButton className="rounded-full border border-white/30 px-6 py-3 text-sm">Let’s Talk</MagneticButton>
        </div>
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-[5%] left-6 text-xs uppercase tracking-[0.2em] text-white/70 md:left-20">Scroll to Explore <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-block">↓</motion.span></motion.p>
    </section>
  );
}
