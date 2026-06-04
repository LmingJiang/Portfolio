import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

function WorkLayer({ work, index, count, progress }) {
  const start = index / count;
  const end = (index + 1) / count;
  const fadeIn = Math.min(start + 0.06, 1);
  const fadeOut = Math.max(end - 0.08, 0);
  const after = Math.min(end + 0.03, 1);

  const opacity = useTransform(
    progress,
    index === count - 1 ? [Math.max(0, start - 0.03), fadeIn, 1] : [Math.max(0, start - 0.03), fadeIn, fadeOut, after],
    index === count - 1 ? [0, 1, 1] : [0, 1, 1, 0],
  );
  const imageY = useTransform(progress, [start, end], ['-14%', '14%']);
  const imageScale = useTransform(progress, [start, fadeIn, end], [1.16, 1.02, 1.1]);
  const contentY = useTransform(progress, [start, fadeIn, end], [72, 0, -64]);

  return (
    <motion.article style={{ opacity }} className="pointer-events-none absolute inset-0">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <img src={work.image} alt={work.title} className="h-[128%] w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,15,0.9),rgba(3,8,15,0.48)_44%,rgba(3,8,15,0.18)),linear-gradient(180deg,rgba(3,8,15,0.22),rgba(3,8,15,0.84))]" />
      <div className="absolute inset-x-0 top-[56%] h-px bg-white/18" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 grid h-full items-center gap-8 px-6 py-16 md:grid-cols-[0.27fr_0.73fr] md:px-10 lg:px-14"
      >
        <div className="space-y-8 pt-10 md:pt-28">
          <p className="font-serif text-4xl text-white md:text-6xl">{work.number}</p>
          <div className="h-px w-full bg-white/22" />
          <p className="max-w-[12rem] text-sm font-semibold text-white/86">{work.category}</p>
        </div>

        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.04em] text-[#06111f]">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Selected Work
          </div>
          <h2 className="font-serif text-[clamp(2.8rem,6vw,6.8rem)] leading-[0.95] text-white">
            {work.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl md:leading-9">
            {work.description}
          </p>
          <div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06111f]">
              {work.ctaText}
            </MagneticButton>
            <span className="text-xs uppercase tracking-[0.24em] text-white/62">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function SelectedWorksShowcase({ works }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative bg-[#03080f]"
      style={{ height: `${works.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full overflow-hidden bg-[#03080f]">
          {works.map((work, index) => (
            <WorkLayer key={work.number} work={work} index={index} count={works.length} progress={scrollYProgress} />
          ))}
          <div className="pointer-events-none absolute inset-0 border border-white/10" />
          <p className="pointer-events-none absolute bottom-5 left-6 z-20 text-xs uppercase tracking-[0.24em] text-white/70 md:left-10">
            Scroll to Explore
          </p>
        </div>
      </div>
    </section>
  );
}
