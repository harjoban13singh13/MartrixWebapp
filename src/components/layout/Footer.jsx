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
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <span className="font-display text-2xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
            Martrix
          </span>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="text-sm hover:text-white transition-colors"
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
                whileHover={{ scale: 1.2, color: '#EC4899' }}
                className="text-gray-500 hover:text-white transition-colors text-lg"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Martrix. Built with passion and pixels.
        </div>
      </div>
    </footer>
  );
}
