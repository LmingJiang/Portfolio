import { motion } from 'framer-motion';
import { SectionTitle } from './common';

const offerings = [
  '企业数字化平台',
  '智慧展厅 / 运营中心',
  '数字孪生可视化',
  '营销展示系统',
  'PAD 辅助销售工具'
];

export default function Contact() {
  return (
    <>
      <SectionTitle eyebrow="Contact" title="Let’s turn complex capabilities into persuasive digital experiences." desc="我可以帮助企业把复杂业务系统讲清楚、展示清楚，并转化为更高效的决策与销售沟通。" />
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-line bg-panel p-8 backdrop-blur">
        <div className="flex flex-wrap gap-3">
          {offerings.map((item) => (
            <span key={item} className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">{item}</span>
          ))}
        </div>
        <p className="mt-8 text-slate-300">Email: hello@portfolio-designer.com</p>
      </motion.div>
    </>
  );
}
