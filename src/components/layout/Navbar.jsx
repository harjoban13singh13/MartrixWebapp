import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import useScrollSpy from '../../hooks/useScrollSpy';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'services', 'projects', 'blog', 'contact'];

function scrollTo(href) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el && window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80 });
  } else if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md shadow-lg">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="font-display text-xl font-extrabold bg-gradient-brand bg-clip-text text-transparent"
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
                      'text-sm font-semibold transition-colors duration-200',
                      isActive
                        ? 'bg-gradient-brand bg-clip-text text-transparent'
                        : 'text-gray-700 hover:text-brand-purple'
                    )}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA button (desktop) */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition-opacity"
          >
            Let&apos;s Talk
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-gray-700 text-xl"
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
              className="mt-2 rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md shadow-xl px-6 py-4 md:hidden"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <button
                      onClick={() => { scrollTo(href); setMobileOpen(false); }}
                      className="w-full text-left text-base font-semibold text-gray-700 hover:text-brand-purple transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => { scrollTo('#contact'); setMobileOpen(false); }}
                    className="w-full rounded-full bg-gradient-brand py-3 text-sm font-semibold text-white"
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
