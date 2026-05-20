import { motion } from 'framer-motion';

export default function CollectionsGrid({ collections }) {
  return (
    <section className="py-20 md:py-28">
      <h3 className="mb-10 font-serif text-4xl">The Collections</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {collections.map((col, idx) => (
          <motion.article key={col.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="border border-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/5">
            <div className="grid grid-cols-3 gap-1">
              {col.images.map((img, i) => <img key={i} src={img} className="aspect-square object-cover" alt="thumb" />)}
            </div>
            <p className="mt-4 font-serif text-2xl">{col.name} <span className="font-sans text-sm text-white/60">({col.count})</span> →</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
