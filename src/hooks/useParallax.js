import { useEffect } from 'react';
import { gsap } from 'gsap';

let pluginPromise;

function loadScrollTrigger() {
  if (!pluginPromise) {
    pluginPromise = Promise.any([
      import('gsap/ScrollTrigger').then((m) => m.ScrollTrigger),
      import('gsap/dist/ScrollTrigger').then((m) => m.ScrollTrigger)
    ]).catch(() => null);
  }
  return pluginPromise;
}

export default function useParallax(ref, amount = -15) {
  useEffect(() => {
    if (!ref.current || !ref.current.parentElement) return;

    let tween;

    loadScrollTrigger().then((ScrollTrigger) => {
      if (!ScrollTrigger || !ref.current?.parentElement) return;

      gsap.registerPlugin(ScrollTrigger);
      tween = gsap.to(ref.current, {
        yPercent: amount,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [ref, amount]);
}
