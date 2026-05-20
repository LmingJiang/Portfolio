import { motion } from 'framer-motion';

export default function CardGrid({ id, label, items }) {
  return (
    <section id={id} className="py-20 md:py-28">
      <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-xs uppercase tracking-[0.2em] text-cyan-100/75">{label} ↓</motion.p>
      <div className="grid gap-10 md:grid-cols-3">
        {items.map((item, idx) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
            <div className="overflow-hidden"><img src={item.image} className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105" alt={item.title} /></div>
            <h4 className="mt-4 font-serif text-2xl">{item.title}</h4>
            <p className="mt-2 text-sm text-white/60">{item.date} · {item.category}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
