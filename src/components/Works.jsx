import { motion } from 'framer-motion';
import { SectionTitle } from './common';

const works = [
  {
    name: '全友智能工厂',
    type: 'Enterprise Platform / Smart Factory',
    role: '0-1 Design Lead',
    challenge: '跨生产、管理、展示多端场景，信息结构复杂。',
    solution: '构建统一设计语言与可视化框架，形成可持续迭代的模块体系。',
    value: '帮助工厂数字能力更清晰呈现，提升内部协同与对外展示效率。',
    status: 'Delivered'
  },
  {
    name: '中建八局 建筑孪生一体化平台',
    type: 'Digital Twin / Construction',
    role: 'Visualization Interface Designer',
    challenge: '多源数据和空间场景并行，决策路径不直观。',
    solution: '重构驾驶舱信息层级，强化关键指标与场景联动关系。',
    value: '让管理视角更聚焦，提升平台汇报与决策沟通效率。',
    status: 'In Use'
  },
  {
    name: '靖乐渠“七馆一中心”智慧运营中心',
    type: 'Smart Operations Center',
    role: 'Experience & Dashboard Designer',
    challenge: '治理工程涉及多主题监测，展示链路长。',
    solution: '设计分层总览 + 专题联动模式，保证全局与细节切换清晰。',
    value: '支持项目成果可视化汇报，增强政企沟通说服力。',
    status: 'Delivered'
  },
  {
    name: '卓视智通 数字营销平台（PAD）',
    type: 'Sales Enablement Product',
    role: 'Product Experience Designer',
    challenge: '销售一线需要“快速讲清价值”，但产品能力复杂。',
    solution: '围绕销售话术与演示节奏重组交互，突出价值路径。',
    value: '提升演示效率与客户理解度，增强转化支持能力。',
    status: 'Iterating'
  }
];

export default function Works() {
  return (
    <>
      <SectionTitle eyebrow="Selected Works" title="Enterprise visualization projects built for clarity, decision and conversion." />
      <div className="grid gap-6 md:grid-cols-2">
        {works.map((work, idx) => (
          <motion.article
            key={work.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl border border-line bg-panel p-6 backdrop-blur transition hover:border-cyan-200/50 hover:shadow-glow"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{work.name}</h3>
              <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">{work.status}</span>
            </div>
            <p className="mb-4 text-sm text-cyan-200/90">{work.type} · {work.role}</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><strong className="text-slate-100">Design Challenge:</strong> {work.challenge}</li>
              <li><strong className="text-slate-100">Solution:</strong> {work.solution}</li>
              <li><strong className="text-slate-100">Business Value:</strong> {work.value}</li>
            </ul>
            <div className="mt-5 h-24 rounded-xl border border-dashed border-cyan-300/30 bg-gradient-to-r from-cyan-400/5 to-blue-500/5" />
          </motion.article>
        ))}
      </div>
    </>
  );
}
