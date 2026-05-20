import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NumberedSection from './components/NumberedSection';
import AboutNarrative from './components/AboutNarrative';
import CardGrid from './components/CardGrid';
import CollectionsGrid from './components/CollectionsGrid';
import Triptych from './components/Triptych';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import useLenis from './hooks/useLenis';

const works = [1,2,3,4,5].map((n) => ({
  number: `0${n}`,
  category: ['Smart Factory', 'Digital Twin', 'Operations Center', 'Sales Enablement', 'Visualization'][n-1],
  title: ['全友智能工厂', '建筑孪生一体化平台', '七馆一中心运营中心', '数字营销平台 / PAD', 'Enterprise Visualization System'][n-1],
  description: 'Turn complex systems, data and business logic into clear, decision-ready and sales-ready experiences.',
  ctaText: 'See details',
  image: `https://images.unsplash.com/photo-15${50+n}00000000-6f0f?auto=format&fit=crop&w=1800&q=80`,
  reverse: n % 2 === 0
}));

const news = [
  { image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop', title: 'Case Release: Smart Factory', date: 'May 2026', category: 'Case Study' },
  { image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop', title: 'Design System for Twin Ops', date: 'Apr 2026', category: 'Journal' },
  { image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop', title: 'Sales Enablement Toolkit', date: 'Mar 2026', category: 'Update' }
];

const collections = ['Urban','Nature','RePlastic','Golf','Details'].map((name, idx) => ({
  name, count: [50,38,22,62,18][idx], images: new Array(6).fill('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=60&auto=format&fit=crop')
}));

export default function App() {
  useLenis();
  return (
    <div className="bg-[#04070d] text-white">
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <Hero />
      <main id="works" className="mx-auto max-w-[1440px] px-6 md:px-20">
        {works.map((w) => <NumberedSection key={w.number} {...w} />)}
        <AboutNarrative />
        <CardGrid id="news" label="Recent News" items={news} />
        <CardGrid label="Recent Addings" items={news} />
        <CollectionsGrid collections={collections} />
        <Triptych />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
