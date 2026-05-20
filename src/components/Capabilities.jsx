import { SectionTitle } from './common';
import { motion } from 'framer-motion';

const capabilities = [
  'Complex Business Understanding',
  'Data Visualization Design',
  'Digital Twin Interface',
  'Sales Enablement Experience'
];

export default function Capabilities() {
  return (
    <>
      <SectionTitle eyebrow="Capabilities" title="Cross-functional strengths for enterprise digital experience." />
      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map((item) => (
          <motion.div key={item} whileHover={{ scale: 1.01 }} className="rounded-2xl border border-line bg-panel p-6 text-lg text-slate-100 backdrop-blur">
            {item}
          </motion.div>
        ))}
      </div>
    </>
  );
}
