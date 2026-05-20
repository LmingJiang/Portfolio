import { SectionTitle } from './common';

const cases = [
  {
    title: '全友智能工厂',
    challenge: '从 0 到 1 建立智能工厂设计体系，需要同时支持业务认知、运营管理与汇报展示。',
    approach: '以场景为单位构建信息模块，统一视觉与交互语言，保障多角色协作一致性。',
    outcome: '建立高复用可视化表达框架，提升方案讲解效率与数字化能力的可感知度。'
  },
  {
    title: '建筑孪生一体化平台',
    challenge: '建设流程复杂、指标维度多，传统界面难以支撑管理层快速判断。',
    approach: '结合空间孪生与关键 KPI 仪表，重构“总览-专题-场景”三层叙事。',
    outcome: '增强决策沟通与项目汇报效果，让数据价值在展示中被快速理解。'
  }
];

export default function CasePreview() {
  return (
    <>
      <SectionTitle eyebrow="Case Study Preview" title="Challenge / Approach / Outcome" />
      <div className="grid gap-6 lg:grid-cols-2">
        {cases.map((c) => (
          <article key={c.title} className="rounded-3xl border border-line bg-panel p-7 backdrop-blur">
            <h3 className="mb-4 text-xl font-semibold text-white">{c.title}</h3>
            <p className="mb-3 text-slate-300"><strong className="text-cyan-200">Challenge:</strong> {c.challenge}</p>
            <p className="mb-3 text-slate-300"><strong className="text-cyan-200">Approach:</strong> {c.approach}</p>
            <p className="text-slate-300"><strong className="text-cyan-200">Outcome:</strong> {c.outcome}</p>
          </article>
        ))}
      </div>
    </>
  );
}
