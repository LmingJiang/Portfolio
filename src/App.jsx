import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import CasePreview from './components/CasePreview';
import Contact from './components/Contact';

const SectionFrame = ({ id, children }) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">{children}</section>
);

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-slate-100">
      <div className="fixed inset-0 -z-10 bg-grid bg-[size:44px_44px] opacity-70" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.15),transparent_40%)]" />

      <Hero />
      <SectionFrame id="about"><About /></SectionFrame>
      <SectionFrame id="works"><Works /></SectionFrame>
      <SectionFrame id="capabilities"><Capabilities /></SectionFrame>
      <SectionFrame id="process"><Process /></SectionFrame>
      <SectionFrame id="case"><CasePreview /></SectionFrame>
      <SectionFrame id="contact"><Contact /></SectionFrame>
    </div>
  );
}
