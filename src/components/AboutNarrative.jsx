import { motion } from 'framer-motion';

export default function AboutNarrative() {
  return (
    <section id="about" className="py-24 md:py-40">
      <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-16 max-w-4xl text-center font-serif text-3xl italic md:text-5xl">“Going beyond the expected is our calling.”</motion.p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
        <motion.img initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="aspect-[3/4] w-full object-cover md:col-span-4" src="https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?q=80&w=1200&auto=format&fit=crop" alt="narrative" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-lg leading-relaxed text-white/80 md:col-span-8">
          <p>我进入 UI 的起点来自现实中的无障碍痛点：看到老人操作银行机器时屡屡受阻。我希望通过交互设计减少认知负担。</p>
          <p>随后聚焦企业级可视化、数字孪生与营销展示系统，将复杂业务逻辑转化为清晰、可决策、可销售的数字体验。</p>
        </motion.div>
      </div>
    </section>
  );
}
