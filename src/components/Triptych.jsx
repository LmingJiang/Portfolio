import { motion } from 'framer-motion';
import { Boxes, DraftingCompass, Rocket } from 'lucide-react';

const items = [
  { icon: DraftingCompass, title: 'We Design', text: 'Structure complex information into clear, persuasive interfaces.' },
  { icon: Boxes, title: 'We Build', text: 'Create scalable visual systems for enterprise-level products.' },
  { icon: Rocket, title: 'We Implement', text: 'Support demo, sales communication and business delivery.' }
];

export default function Triptych() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-3 md:gap-14">
        {items.map((item, idx) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} viewport={{ once: true }} className="border border-white/10 p-6">
            <item.icon className="mb-5 h-12 w-12 text-cyan-200" />
            <h4 className="font-serif text-3xl">{item.title}</h4>
            <p className="mt-4 text-white/70">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
