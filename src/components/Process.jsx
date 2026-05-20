import { SectionTitle } from './common';
import { motion } from 'framer-motion';

const steps = [
  'Understand business scenario',
  'Map users & decision flow',
  'Structure information hierarchy',
  'Build visual language',
  'Prototype key interactions',
  'Support presentation & delivery'
];

export default function Process() {
  return (
    <>
      <SectionTitle eyebrow="Design Process" title="A practical framework from business context to delivery impact." />
      <div className="relative ml-4 border-l border-cyan-400/30 pl-8">
        {steps.map((step, idx) => (
          <motion.div key={step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }} className="relative mb-8">
            <span className="absolute -left-[2.25rem] mt-1 h-3 w-3 rounded-full border border-cyan-300 bg-ink" />
            <p className="text-sm text-slate-400">0{idx + 1}</p>
            <h3 className="mt-1 text-lg text-slate-100">{step}</h3>
          </motion.div>
        ))}
      </div>
    </>
  );
}
