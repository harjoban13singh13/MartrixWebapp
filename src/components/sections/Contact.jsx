import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import GradientText from '../ui/GradientText';

const socials = [
  { icon: FaGithub,    href: 'https://github.com',    label: 'GitHub' },
  { icon: FaLinkedin,  href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: FaTwitter,   href: 'https://twitter.com',   label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaDribbble,  href: 'https://dribbble.com',  label: 'Dribbble' },
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="relative py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
    >
      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand-purple opacity-20 blur-3xl" />
        <div className="animate-blob-delay absolute bottom-0 left-10 h-72 w-72 rounded-full bg-brand-pink opacity-15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan mb-4">
          Get In Touch
        </p>

        {/* CTA headline */}
        <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl leading-tight">
          Ready to Build Something <GradientText>Great?</GradientText>
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          Whether you have a project in mind or just want to say hello — we'd love to hear from you.
        </p>

        {/* Email */}
        <a
          href="mailto:hello@martrix.io"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <FiMail className="text-brand-pink text-lg" />
          hello@martrix.io
        </a>

        {/* Social icons */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-gray-400 hover:text-white hover:border-white/40 transition-colors text-lg"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
