import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SelectedWorksShowcase from './components/SelectedWorksShowcase';
import AboutNarrative from './components/AboutNarrative';
import CardGrid from './components/CardGrid';
import CollectionsGrid from './components/CollectionsGrid';
import Triptych from './components/Triptych';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AboutPage from './AboutPage';
import useLenis from './hooks/useLenis';

const works = [
  {
    number: '01',
    category: 'Smart Factory',
    title: '\u5168\u53cb\u667a\u80fd\u5de5\u5382',
    description: 'A smart factory experience that turns production, management and presentation logic into a clear enterprise interface.',
    ctaText: 'See case',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80',
  },
  {
    number: '02',
    category: 'Digital Twin',
    title: '\u5efa\u7b51\u5b6a\u751f\u4e00\u4f53\u5316\u5e73\u53f0',
    description: 'A digital twin platform that connects spatial scenes, data layers and decision workflows.',
    ctaText: 'See case',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    reverse: true,
  },
  {
    number: '03',
    category: 'Operations Center',
    title: '\u4e03\u9986\u4e00\u4e2d\u5fc3\u8fd0\u8425\u4e2d\u5fc3',
    description: 'A smart operations center designed to make multi-topic governance visible and explainable.',
    ctaText: 'See case',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80',
  },
  {
    number: '04',
    category: 'Sales Enablement',
    title: '\u6570\u5b57\u8425\u9500\u5e73\u53f0 / PAD',
    description: 'A sales enablement product that helps teams present complex value quickly and persuasively.',
    ctaText: 'See case',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80',
    reverse: true,
  },
  {
    number: '05',
    category: 'Visualization',
    title: 'Enterprise Visualization System',
    description: 'A visual system for turning data, business logic and storytelling into decision-ready experiences.',
    ctaText: 'See case',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80',
  },
];

const news = [
  { image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop', title: 'Case Release: Smart Factory', date: 'May 2026', category: 'Case Study' },
  { image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop', title: 'Design System for Twin Ops', date: 'Apr 2026', category: 'Journal' },
  { image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop', title: 'Sales Enablement Toolkit', date: 'Mar 2026', category: 'Update' },
];

const collections = ['Smart Factory', 'Digital Twin', 'Ops Center', 'Sales Tools', 'Visualization'].map((name, idx) => ({
  name,
  count: [5, 4, 3, 4, 6][idx],
  images: new Array(6).fill([
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=60&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=60&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=60&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=60&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=60&auto=format&fit=crop',
  ][idx]),
}));

const processSteps = [
  'Understand business scenario',
  'Map users and decision flow',
  'Structure information hierarchy',
  'Build visual language',
  'Prototype key interactions',
  'Support presentation and delivery',
];

function Layout({ children }) {
  return (
    <div className="bg-[#04070d] text-white">
      <CustomCursor />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-10 pt-32 md:px-20 md:pb-16 md:pt-40">
      <p className="mb-5 text-xs uppercase tracking-[0.32em] text-cyan-200/70">{eyebrow}</p>
      <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-8xl">{title}</h1>
      {description && <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">{description}</p>}
    </section>
  );
}

function HomePage() {
  return (
    <Layout>
      <Hero />
      <main className="relative z-20 -mt-[90vh]">
        <SelectedWorksShowcase works={works} />
        <AboutNarrative />
        <CardGrid label="Recent News" items={news} />
        <CardGrid label="Recent Addings" items={news} />
        <CollectionsGrid collections={collections} />
        <Triptych />
        <Newsletter />
      </main>
    </Layout>
  );
}

function WorksPage() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Works"
        title="Selected systems, visualization and sales enablement projects."
        description="A focused index for enterprise-facing digital experience work. This should later expand into individual case-study pages."
      />
      <main className="mx-auto max-w-[1440px] px-6 md:px-20">
        <SelectedWorksShowcase works={works} />
      </main>
    </Layout>
  );
}

function JournalPage() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Journal"
        title="Notes, releases and recent additions."
        description="A place for case updates, process notes and new work."
      />
      <main className="mx-auto max-w-[1440px] px-6 pb-24 md:px-20">
        <CardGrid label="Recent News" items={news} />
        <CardGrid label="Recent Addings" items={news} />
      </main>
    </Layout>
  );
}

function ProcessPage() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Process"
        title="A practical framework from business context to delivery impact."
        description="The work moves from scenario understanding to information structure, visual systems and presentation-ready delivery."
      />
      <main className="mx-auto max-w-[960px] px-6 pb-28 md:px-20">
        <div className="relative ml-4 border-l border-cyan-400/30 pl-8">
          {processSteps.map((step, idx) => (
            <article key={step} className="relative mb-9">
              <span className="absolute -left-[2.25rem] mt-1 h-3 w-3 rounded-full border border-cyan-300 bg-[#04070d]" />
              <p className="text-sm text-cyan-200/60">{String(idx + 1).padStart(2, '0')}</p>
              <h2 className="mt-1 text-2xl text-white">{step}</h2>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}

function ContactPage() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Contact"
        title="Let us turn complex capabilities into persuasive digital experiences."
        description="For portfolio conversations, project collaboration and enterprise visualization design."
      />
      <main className="mx-auto max-w-[960px] px-6 pb-28 md:px-20">
        <div className="border border-cyan-300/25 bg-white/[0.04] p-8 backdrop-blur">
          <p className="text-lg text-white/74">Email: hello@portfolio-designer.com</p>
        </div>
      </main>
    </Layout>
  );
}

export default function App() {
  useLenis();

  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/about') {
    return (
      <Layout>
        <AboutPage />
      </Layout>
    );
  }

  if (path === '/works') return <WorksPage />;
  if (path === '/journal') return <JournalPage />;
  if (path === '/process') return <ProcessPage />;
  if (path === '/contact') return <ContactPage />;

  return <HomePage />;
}
