import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const metrics = [
  { label: 'Systems', value: '04+' },
  { label: 'Design Practice', value: '9y' },
  { label: 'Business Scenes', value: 'B2B' },
];


export default function Hero() {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      gsap.set('.hero-title-line', { yPercent: 110, rotateX: -18 });
      gsap.set('.hero-copy, .hero-actions, .hero-metric, .hero-scroll', { autoAlpha: 0, y: 24 });
      gsap.set('.hero-visual', { clipPath: 'inset(18% 18% 18% 18%)', scale: 0.96 });
      gsap.set('.hero-panel', { autoAlpha: 0, y: 36, scale: 0.96 });

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .to('.hero-title-line', { yPercent: 0, rotateX: 0, duration: 1.05, stagger: 0.08 })
        .to('.hero-copy, .hero-actions, .hero-scroll', { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.08 }, '-=0.45')
        .to('.hero-metric', { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, '-=0.35')
        .to('.hero-visual', { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.05 }, '-=0.95')
        .to('.hero-panel', { autoAlpha: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.07 }, '-=0.72');

      if (reduceMotion) return;

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: '+=140%',
          scrub: 0.8,
          pin: stageRef.current,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to('.hero-bg', { scale: 1.18, filter: 'saturate(1.2) contrast(1.08)', ease: 'none' }, 0)
        .to('.hero-visual', { scale: 1.12, yPercent: -5, ease: 'none' }, 0)
        .to('.hero-title-left', { xPercent: -8, ease: 'none' }, 0)
        .to('.hero-title-right', { xPercent: 8, ease: 'none' }, 0)
        .to('.hero-panel.is-left', { xPercent: -22, yPercent: -18, rotate: -4, ease: 'none' }, 0)
        .to('.hero-panel.is-right', { xPercent: 22, yPercent: 16, rotate: 4, ease: 'none' }, 0)
        .to('.hero-panel.is-center', { yPercent: -16, scale: 1.08, ease: 'none' }, 0)
        .to('.hero-copy, .hero-actions, .hero-scroll', { autoAlpha: 0.25, y: -18, ease: 'none' }, 0.16);

      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative h-[220vh] overflow-hidden bg-[#02060c]" id="top">
      <div ref={stageRef} className="relative h-screen overflow-hidden">
        <div className="hero-bg absolute inset-0 origin-center bg-[radial-gradient(circle_at_18%_24%,rgba(34,211,238,0.34),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.24),transparent_36%),radial-gradient(circle_at_50%_88%,rgba(14,165,233,0.18),transparent_34%),linear-gradient(180deg,#08111e_0%,#02060c_100%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:46px_46px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,12,0.78),rgba(2,6,12,0.18)_48%,rgba(2,6,12,0.82)),linear-gradient(180deg,rgba(2,6,12,0.24),rgba(2,6,12,0.9))]" />

        <div className="hero-visual absolute left-1/2 top-1/2 hidden aspect-[16/10] w-[62vw] max-w-[920px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-cyan-200/20 bg-white/[0.04] shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur md:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(125,211,252,0.24),transparent_28%),linear-gradient(135deg,rgba(8,47,73,0.82),rgba(15,23,42,0.46))]" />
          <div className="absolute inset-x-8 top-8 flex items-center justify-between border-b border-cyan-100/15 pb-5 text-xs uppercase tracking-[0.24em] text-cyan-100/58">
            <span>Enterprise Visualization</span>
            <span>Live System Map</span>
          </div>
          <div className="absolute bottom-10 left-8 right-8 grid grid-cols-[1.1fr_0.8fr] gap-5">
            <div className="hero-panel is-left min-h-64 border border-cyan-100/15 bg-[#07111f]/70 p-5 backdrop-blur">
              <div className="mb-5 h-2 w-24 bg-cyan-200/40" />
              <div className="space-y-3">
                {[72, 46, 88, 58].map((width) => (
                  <span key={width} className="block h-3 rounded-full bg-cyan-100/12" style={{ width: `${width}%` }} />
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <span key={item} className="aspect-square border border-cyan-100/12 bg-cyan-300/10" />
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="hero-panel is-center border border-cyan-100/15 bg-[#07111f]/74 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/52">Decision Flow</p>
                <div className="mt-5 h-32 rounded-full border border-cyan-200/20 bg-[radial-gradient(circle,rgba(103,232,249,0.22),transparent_58%)]" />
              </div>
              <div className="hero-panel is-right border border-cyan-100/15 bg-[#07111f]/74 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/52">Business Value</p>
                <div className="mt-4 flex items-end gap-2">
                  {[42, 68, 54, 86, 74].map((height) => (
                    <span key={height} className="w-full bg-cyan-300/24" style={{ height: `${height}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-[12vh] pt-28 md:px-20">
          <div className="grid gap-10 md:grid-cols-[1.08fr_0.72fr] md:items-end">
            <div>
              <p className="hero-copy mb-5 text-xs uppercase tracking-[0.32em] text-cyan-100/70">Digital Experience Designer</p>
              <h1 className="max-w-5xl overflow-hidden font-serif text-[clamp(3.8rem,9vw,9.6rem)] leading-[0.9] text-white">
                <span className="hero-title-line hero-title-left block origin-left">Complex</span>
                <span className="hero-title-line hero-title-right block origin-right text-cyan-100">Systems,</span>
                <span className="hero-title-line hero-title-left block origin-left">Clear Experiences.</span>
              </h1>
            </div>
            <div className="md:pb-4">
              <p className="hero-copy max-w-xl text-lg leading-8 text-cyan-50/76 md:text-2xl md:leading-10">
                I turn enterprise systems, data and business logic into immersive digital experiences for decision-making and sales enablement.
              </p>
              <div className="hero-actions mt-8 flex flex-wrap gap-4">
                <MagneticButton className="rounded-full border border-cyan-300/55 bg-cyan-300/10 px-6 py-3 text-sm text-cyan-50 backdrop-blur">View Selected Works</MagneticButton>
                <MagneticButton className="rounded-full border border-white/25 px-6 py-3 text-sm text-white/82">Let&apos;s Talk</MagneticButton>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="hero-metric border border-cyan-100/14 bg-white/[0.035] px-5 py-4 backdrop-blur">
                <p className="font-serif text-3xl text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cyan-100/52">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>


        <p className="hero-scroll absolute bottom-7 left-6 z-10 text-xs uppercase tracking-[0.24em] text-white/58 md:left-20">Scroll to enter</p>
      </div>
    </section>
  );
}
