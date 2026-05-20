export const ease = [0.25, 0.1, 0.25, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease }
  }
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
