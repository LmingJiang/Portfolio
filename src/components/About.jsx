import { SectionTitle, fadeInUp } from './common';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <SectionTitle eyebrow="About" title="From empathy-driven interaction to enterprise-level digital storytelling." />
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid gap-6 rounded-3xl border border-line bg-panel p-8 text-slate-300 backdrop-blur">
        <p>我进入 UI 的起点并不来自“视觉风格”，而是来自一个具体场景：看到老人使用银行机器时频繁受阻。我希望通过设计，减少不必要的认知负担，让系统真正服务人。</p>
        <p>在之后的 4 年设计工作与 5 年设计专业训练中，我将这份关注延伸到企业级系统：数字可视化、数字孪生、智慧运营中心与营销展示工具。我擅长把复杂系统、数据和业务逻辑转化为可理解、可演示、可转化的数字体验，帮助团队在决策沟通与商业表达上更高效。</p>
      </motion.div>
    </>
  );
}
