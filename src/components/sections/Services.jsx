import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GradientText from '../ui/GradientText';
import { services } from '../../data/services';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Services Built to <GradientText>Scale</GradientText>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-lg text-gray-500">
            From strategy to launch, we handle every layer of the digital stack — beautifully.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map(({ id, icon: Icon, title, description, gradient }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-7 transition-shadow duration-300"
            >
              {/* Icon blob */}
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white text-xl shadow-md`}>
                <Icon />
              </div>

              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

              {/* Hover gradient border */}
              <div className={`absolute inset-0 rounded-2xl ring-2 ring-transparent bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
