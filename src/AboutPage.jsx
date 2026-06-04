import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const timeline = [
  { year: '2016-2020', title: 'Design education', text: '\u5728\u8bbe\u8ba1\u4e13\u4e1a\u5b66\u4e60\u4e2d\u5efa\u7acb\u89c6\u89c9\u3001\u4ea4\u4e92\u4e0e\u7cfb\u7edf\u5316\u8868\u8fbe\u7684\u57fa\u7840\u3002' },
  { year: '2020', title: 'A real user problem', text: '\u56e0\u4e3a\u89c2\u5bdf\u5230\u771f\u5b9e\u7528\u6237\u5728\u94f6\u884c\u673a\u5668\u524d\u7684\u56f0\u96be\uff0c\u5f00\u59cb\u5173\u6ce8 UI \u4e0e\u4f53\u9a8c\u8bbe\u8ba1\u3002' },
  { year: '2021', title: 'Enterprise systems', text: '\u5728\u5168\u53cb\u667a\u80fd\u5de5\u5382\u9879\u76ee\u4e2d\uff0c\u4ece 0 \u5230 1 \u53c2\u4e0e\u4f01\u4e1a\u7ea7\u7cfb\u7edf\u8bbe\u8ba1\u843d\u5730\u3002' },
  { year: '2022-2024', title: 'Visualization and digital twin', text: '\u6301\u7eed\u53c2\u4e0e\u6570\u5b57\u5927\u5c4f\u3001\u5efa\u7b51\u5b6a\u751f\u3001\u667a\u6167\u8fd0\u8425\u4e2d\u5fc3\u4e0e\u8425\u9500\u5c55\u793a\u7cfb\u7edf\u3002' },
  { year: 'Now', title: 'Business clarity', text: '\u8f6c\u5411\u4ee5\u5546\u4e1a\u589e\u957f\u4e3a\u76ee\u6807\u7684\u6570\u5b57\u4f53\u9a8c\u8bbe\u8ba1\uff0c\u8ba9\u590d\u6742\u80fd\u529b\u88ab\u7406\u89e3\u3001\u5c55\u793a\u548c\u76f8\u4fe1\u3002' },
];

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 md:px-12">
      <img
        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=85"
        alt="Abstract architectural system"
        className="absolute inset-0 h-full w-full object-cover opacity-26"
      />
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-28" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_26%,rgba(34,211,238,0.26),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.2),transparent_30%),linear-gradient(110deg,rgba(2,6,12,0.96),rgba(2,6,12,0.76)_48%,rgba(2,6,12,0.52))]" />
      <div className="absolute inset-x-6 bottom-8 top-8 border-x border-cyan-100/12 md:inset-x-12" />
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.32em] text-cyan-100/68">About / Digital Experience Designer</p>
          <h1 className="max-w-6xl font-serif text-[clamp(4rem,11vw,10.5rem)] leading-[0.92] text-white">
            Design begins when complexity needs to be understood.
          </h1>
        </Reveal>
        <Reveal className="mt-10 max-w-2xl md:ml-auto" delay={0.1}>
          <p className="text-lg leading-9 text-cyan-50/78 md:text-2xl md:leading-10">
            {'\u6211\u7684\u8bbe\u8ba1\u76ee\u6807\uff0c\u662f\u8ba9\u590d\u6742\u7cfb\u7edf\u53d8\u5f97\u53ef\u7406\u89e3\u3001\u53ef\u5c55\u793a\u3001\u53ef\u51b3\u7b56\uff0c\u5e76\u6700\u7ec8\u670d\u52a1\u4e8e\u5546\u4e1a\u8868\u8fbe\u3002'}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Origin() {
  return (
    <section className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-100/58">01 / The Origin</p>
          <h2 className="font-serif text-5xl leading-none text-white md:text-7xl">The Origin</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-8 border-l border-cyan-200/18 pl-8 text-xl leading-10 text-cyan-50/72 md:text-2xl md:leading-[1.75]">
            <p>{'\u6211\u8fdb\u5165 UI \u4e0e\u4f53\u9a8c\u8bbe\u8ba1\uff0c\u5e76\u4e0d\u662f\u4ece\u67d0\u4e2a\u5b8f\u5927\u7684\u6982\u5ff5\u5f00\u59cb\u3002\u66f4\u65e9\u7684\u65f6\u5019\uff0c\u6211\u770b\u5230\u8001\u4eba\u7ad9\u5728\u94f6\u884c\u673a\u5668\u524d\uff0c\u9762\u5bf9\u5c42\u5c42\u83dc\u5355\u3001\u964c\u751f\u672f\u8bed\u548c\u4e0d\u6e05\u6670\u7684\u53cd\u9988\uff0c\u8fdf\u8fdf\u65e0\u6cd5\u5b8c\u6210\u4e00\u4e2a\u672c\u5e94\u7b80\u5355\u7684\u52a8\u4f5c\u3002'}</p>
            <p>{'\u90a3\u4e2a\u573a\u666f\u8ba9\u6211\u610f\u8bc6\u5230\uff0c\u754c\u9762\u4e0d\u662f\u5c4f\u5e55\u4e0a\u7684\u88c5\u9970\u3002\u5b83\u51b3\u5b9a\u4fe1\u606f\u5982\u4f55\u88ab\u7406\u89e3\uff0c\u52a8\u4f5c\u5982\u4f55\u88ab\u5b8c\u6210\uff0c\u4e5f\u51b3\u5b9a\u4e00\u4e2a\u7cfb\u7edf\u662f\u5426\u771f\u6b63\u5bf9\u4eba\u53cb\u597d\u3002'}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Showreel() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <Reveal className="relative mx-auto aspect-[16/10] max-w-7xl overflow-hidden border border-cyan-100/14 bg-[#07111f] shadow-[0_0_80px_rgba(34,211,238,0.12)] md:aspect-[16/8]">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=85"
          alt="Enterprise visualization environment"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,12,0.2),rgba(2,6,12,0.82)),radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.28),transparent_34%)]" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="max-w-4xl font-serif text-4xl leading-tight text-white md:text-7xl">
            From interfaces to systems, from visuals to business clarity.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Timeline() {
  return (
    <section className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-100/58">02 / Timeline</p>
          <h2 className="max-w-4xl font-serif text-5xl leading-tight text-white md:text-8xl">
            A path shaped by systems, users and business context.
          </h2>
        </Reveal>
        <div className="border-t border-cyan-100/14">
          {timeline.map((item, index) => (
            <motion.article
              key={item.year}
              className="grid gap-5 border-b border-cyan-100/14 py-9 md:grid-cols-[0.34fr_0.36fr_1fr] md:gap-10 md:py-12"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-4xl text-cyan-100 md:text-5xl">{item.year}</p>
              <h3 className="text-xl text-white md:text-2xl">{item.title}</h3>
              <p className="max-w-2xl text-base leading-8 text-cyan-50/64 md:text-lg">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.32em] text-cyan-100/58">03 / Belief</p>
          <blockquote className="max-w-6xl font-serif text-[clamp(3.2rem,8vw,8.6rem)] leading-[0.98] text-white">
            I do not design screens only. I design clarity for systems, decisions and business value.
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#04070d] text-white">
      <Hero />
      <Origin />
      <Showreel />
      <Timeline />
      <Manifesto />
    </main>
  );
}
