import { motion } from 'framer-motion';

const links = [
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-8">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-start gap-4 md:grid-cols-[1fr_auto_1fr]">
        <motion.a
          href="/"
          className="pointer-events-auto text-xs uppercase tracking-[0.28em] text-cyan-100/82 transition hover:text-white"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Complex Systems
        </motion.a>

        <nav className="pointer-events-auto col-span-2 flex flex-wrap justify-end gap-1.5 rounded-full border border-cyan-100/12 bg-[#04101d]/55 p-1.5 shadow-[0_0_36px_rgba(34,211,238,0.08)] backdrop-blur-xl md:col-span-1 md:justify-center">
          {links.map((item) => {
            const active = currentPath === item.href;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden rounded-full px-4 py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-white transition md:px-5"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <span
                  className={`absolute inset-0 rounded-full transition duration-300 ${
                    active ? 'bg-cyan-300/18' : 'bg-transparent group-hover:bg-white/8'
                  }`}
                />
                <span
                  className={`relative transition duration-300 ${
                    active ? 'text-cyan-100' : 'text-white/72 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
              </motion.a>
            );
          })}
        </nav>

        <div className="pointer-events-auto hidden justify-end md:flex">
          <motion.a
            href="/contact"
            className="text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-cyan-100"
            whileHover={{ y: -2 }}
          >
            EN
          </motion.a>
        </div>
      </div>
    </header>
  );
}
