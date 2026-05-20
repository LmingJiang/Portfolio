import { useRef } from 'react';

export default function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    ref.current.style.transform = 'translate(0, 0)';
  };

  return <button ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`transition-transform duration-300 ${className}`} {...props}>{children}</button>;
}
