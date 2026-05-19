import { motion } from 'framer-motion';

const metrics = [
  { label: 'Enterprise Projects', value: '20+' },
  { label: 'Design Experience', value: '4 yrs' },
  { label: 'Design Education', value: '5 yrs' }
];

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-12 pt-24 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pt-32">
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300/80">Digital Experience Designer</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">Complex Systems, Clear Experiences.</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">数字体验设计师，专注企业级可视化、数字孪生、智慧运营中心与营销展示工具设计。</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#works" className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20">View Selected Works</a>
          <a href="#contact" className="rounded-full border border-slate-500/50 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-100">Let’s Talk</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl border border-line bg-panel p-6 shadow-glow backdrop-blur"
      >
        <motion.div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 6 }} />
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-xl border border-line bg-slate-900/60 p-4">
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-cyan-100">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="relative mt-5 h-64 rounded-2xl border border-line bg-slate-950/70 p-4">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.3)_1px,transparent_1px)] [background-size:28px_28px]" />
          <motion.div className="absolute left-6 top-16 h-[1px] w-44 bg-gradient-to-r from-cyan-400 to-transparent" animate={{ x: [0, 40, 0] }} transition={{ duration: 5, repeat: Infinity }} />
          <motion.div className="absolute right-7 top-24 h-2 w-2 rounded-full bg-cyan-300" animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 3 }} />
          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => <div key={n} className="h-14 rounded-lg border border-cyan-300/20 bg-cyan-400/5" />)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
