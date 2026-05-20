/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070b14',
        panel: 'rgba(15, 23, 42, 0.6)',
        line: 'rgba(56, 189, 248, 0.25)',
        glow: '#22d3ee'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.3), 0 20px 50px -30px rgba(34, 211, 238, 0.5)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
