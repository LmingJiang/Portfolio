import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './common';
import { useRef } from 'react';
import useParallax from '../hooks/useParallax';

export default function NumberedSection({ number, category, title, description, ctaText, reverse, image }) {
  const imageRef = useRef(null);
  useParallax(imageRef, -12);

  return (
    <section className="py-24 md:py-[180px]">
      <div className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${reverse ? '' : ''}`}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className={`${reverse ? 'md:order-2' : ''} space-y-5`}>
          <motion.p variants={fadeInUp} className="font-serif text-5xl text-white/25">{number}</motion.p>
          <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.15em] text-cyan-200/80">{category}</motion.p>
          <motion.h3 variants={fadeInUp} className="font-serif text-3xl md:text-4xl">{title}</motion.h3>
          <motion.p variants={fadeInUp} className="max-w-xl text-white/75">{description}</motion.p>
          <motion.a variants={fadeInUp} href="#" className="link-underline inline-block text-base">{ctaText} →</motion.a>
        </motion.div>
        <motion.div initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2 }} className={`${reverse ? 'md:order-1' : ''} overflow-hidden`}>
          <img ref={imageRef} src={image} alt={title} className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-105" data-cursor="view" />
        </motion.div>
      </div>
    </section>
  );
}
