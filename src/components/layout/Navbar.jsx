import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import useScrollSpy from '../../hooks/useScrollSpy';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog',     href: '#blog' },
  { label: 'Contact',  href: '#contact' },
];

const SECTION_IDS = ['hero', 'services', 'projects', 'blog', 'contact'];

function scrollTo(href) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
  else if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="mt-4 flex items-center justify-between rounded-2xl px-6 py-3"
          style={{
            background: 'rgba(5,8,12,0.75)',
            border: '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="font-display text-lg font-bold text-white tracking-[-0.02em]"
          >
            Martrix
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const isActive = activeId === href.replace('#', '');
              return (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className={clsx(
                      'text-sm font-medium transition-colors duration-200 relative pb-0.5',
                      isActive ? 'text-white' : 'hover:text-white'
                    )}
                    style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.45)' }}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{ background: 'linear-gradient(90deg, #4f8eff, #7c5cfc)' }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA button (desktop) */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, rgba(79,142,255,0.18), rgba(124,92,252,0.14))',
              border: '1px solid rgba(79,142,255,0.3)',
            }}
          >
            Let&apos;s Talk
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-xl transition-colors"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl px-6 py-4 md:hidden"
              style={{
                background: 'rgba(5,8,12,0.95)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <button
                      onClick={() => { scrollTo(href); setMobileOpen(false); }}
                      className="w-full text-left text-base font-medium transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => { scrollTo('#contact'); setMobileOpen(false); }}
                    className="w-full rounded-full py-3 text-sm font-medium text-white"
                    style={{
                      background: 'linear-gradient(135deg, rgba(79,142,255,0.2), rgba(124,92,252,0.15))',
                      border: '1px solid rgba(79,142,255,0.3)',
                    }}
                  >
                    Let&apos;s Talk
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
