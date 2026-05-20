import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useParallax(ref, amount = -15) {
  useEffect(() => {
    if (!ref.current || !ref.current.parentElement) return;

    const tween = gsap.to(ref.current, {
      yPercent: amount,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, amount]);
}
