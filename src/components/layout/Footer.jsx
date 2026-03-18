import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socials = [
  { icon: FaGithub,    href: 'https://github.com',    label: 'GitHub' },
  { icon: FaLinkedin,  href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: FaTwitter,   href: 'https://twitter.com',   label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaDribbble,  href: 'https://dribbble.com',  label: 'Dribbble' },
];

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog',     href: '#blog' },
  { label: 'Contact',  href: '#contact' },
];

function scrollTo(href) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
  else if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <span className="font-display text-xl font-bold text-white tracking-[-0.02em]">
            Martrix
          </span>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="text-sm transition-colors hover:text-white duration-200"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, color: '#ffffff' }}
                whileTap={{ scale: 0.92 }}
                className="text-lg transition-colors"
                style={{ color: 'rgba(255,255,255,0.22)' }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-8 text-center text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.2)',
          }}
        >
          © {new Date().getFullYear()} Martrix. Built with passion and pixels.
        </div>
      </div>
    </footer>
  );
}
