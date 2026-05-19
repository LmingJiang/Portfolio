import { motion } from 'framer-motion';

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const SectionTitle = ({ eyebrow, title, desc }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="mb-10"
  >
    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/80">{eyebrow}</p>
    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
    {desc && <p className="mt-4 max-w-3xl text-slate-300">{desc}</p>}
  </motion.div>
);
