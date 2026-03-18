import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';

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
      className="relative py-24 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden section-divider"
      style={{ background: 'rgba(5,8,12,0.5)' }}
    >
      {/* Concentrated glow behind the CTA text */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: '700px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at 50% 20%, rgba(79,142,255,0.1) 0%, rgba(124,92,252,0.07) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
          style={{ color: 'rgba(79,142,255,0.9)' }}
        >
          Get In Touch
        </motion.p>

        {/* CTA headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-white leading-[1.1]"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.03em' }}
        >
          Ready to Build
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #4f8eff 0%, #7c5cfc 50%, #00d4aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Something Great?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base"
          style={{ color: 'rgba(255,255,255,0.38)' }}
        >
          Whether you have a project in mind or just want to say hello — we&apos;d love to hear from you.
        </motion.p>

        {/* Email CTA */}
        <motion.a
          href="mailto:hello@martrix.io"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full font-medium transition-all duration-200 group"
          style={{
            padding: '14px 32px',
            background: 'linear-gradient(135deg, rgba(79,142,255,0.12), rgba(124,92,252,0.08))',
            border: '1px solid rgba(79,142,255,0.25)',
            color: 'rgba(255,255,255,0.75)',
            boxShadow: '0 0 40px rgba(79,142,255,0.08)',
          }}
        >
          <FiMail style={{ color: '#4f8eff' }} />
          <span>hello@martrix.io</span>
        </motion.a>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-5"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, color: '#ffffff' }}
              whileTap={{ scale: 0.92 }}
              className="text-xl transition-colors"
              style={{ color: 'rgba(255,255,255,0.22)' }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
