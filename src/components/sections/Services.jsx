import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { services } from '../../data/services';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 section-divider"
      style={{ background: 'rgba(5,8,12,0.6)', backdropFilter: 'blur(0px)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
            style={{ color: 'rgba(79,142,255,0.9)' }}
          >
            What We Do
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}
          >
            Services Built to Scale
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base" style={{ color: 'rgba(255,255,255,0.38)' }}>
            From strategy to launch, we handle every layer of the digital stack — beautifully.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map(({ id, icon: Icon, title, description }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group glass-card p-7 flex flex-col transition-all duration-300"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
            >
              {/* Icon */}
              <div
                className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl text-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(79,142,255,0.15), rgba(124,92,252,0.1))',
                  color: '#4f8eff',
                  border: '1px solid rgba(79,142,255,0.2)',
                }}
              >
                <Icon />
              </div>

              <h3 className="font-display text-base font-semibold text-white mb-2 tracking-[-0.01em]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
