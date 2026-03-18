import { motion } from 'framer-motion';
import ScrollIndicator from '../ui/ScrollIndicator';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
  else if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ background: 'transparent' }}
    >
      {/* Extra top-center glow concentrated behind text */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(79,142,255,0.1) 0%, rgba(124,92,252,0.06) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Eyebrow badge */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium text-white/50 uppercase tracking-[0.18em] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4f8eff] animate-pulse-slow" />
            Creative Agency — Digital Experiences
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display font-bold leading-[1.08] tracking-[-0.03em] text-white"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          We Build Things
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #4f8eff 0%, #7c5cfc 50%, #00d4aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            That Matter.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.42)' }}
        >
          Martrix is a creative studio crafting bold web experiences, mobile apps,
          and brand identities that captivate audiences and drive growth.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #4f8eff, #7c5cfc)',
              boxShadow: '0 0 32px rgba(79,142,255,0.3), 0 0 64px rgba(124,92,252,0.15)',
            }}
          >
            See Our Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/60 backdrop-blur-sm hover:border-white/20 hover:text-white transition-all duration-200 active:scale-95"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { value: '50+', label: 'Projects Shipped' },
            { value: '30+', label: 'Happy Clients' },
            { value: '5★',  label: 'Average Rating' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="glass-card px-7 py-4 text-center min-w-[120px]"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              <p
                className="font-display text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}
              </p>
              <p className="mt-1 text-[11px] tracking-wide" style={{ color: 'rgba(255,255,255,0.32)' }}>
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
