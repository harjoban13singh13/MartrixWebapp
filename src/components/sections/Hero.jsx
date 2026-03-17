import { motion } from 'framer-motion';
import GradientText from '../ui/GradientText';
import ScrollIndicator from '../ui/ScrollIndicator';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
  else if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 px-4"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-purple opacity-30 blur-3xl" />
        <div className="animate-blob-delay absolute top-20 right-10 h-80 w-80 rounded-full bg-brand-pink opacity-25 blur-3xl" />
        <div className="animate-blob-delay2 absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-brand-cyan opacity-20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-brand-lime animate-pulse" />
          Creative Agency — We Build Digital Experiences
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          We Build Things{' '}
          <br className="hidden sm:block" />
          <GradientText>That Matter.</GradientText>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
        >
          Martrix is a creative studio crafting bold web experiences, mobile apps,
          and brand identities that captivate audiences and drive growth.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-white shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            See Our Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 active:scale-95 transition-all duration-200"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          {[
            { value: '50+', label: 'Projects Shipped' },
            { value: '30+', label: 'Happy Clients' },
            { value: '5★', label: 'Average Rating' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                {value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
